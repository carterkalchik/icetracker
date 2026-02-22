import { existsSync } from 'node:fs'
import { SEED_FILES } from './config.js'
import type { SkaterStub } from './types.js'
import { extractIds, readSeedFile, appendToSeedArray, resolvePath } from './utils/file-writer.js'
import { createPR } from './utils/git.js'
import * as log from './utils/logger.js'

const DRY_RUN = process.env.DRY_RUN === 'true'

type Discipline = 'Men' | 'Women' | 'Pairs' | 'Ice Dance'

/**
 * Collects all known skater IDs from all discipline files.
 */
function loadKnownSkaterIds(): Set<string> {
  const ids = new Set<string>()
  for (const file of Object.values(SEED_FILES.skaters)) {
    for (const id of extractIds(file)) {
      ids.add(id)
    }
  }
  return ids
}

/**
 * Scans all results files to find referenced skater IDs and their metadata.
 */
function findReferencedSkaters(): Map<string, SkaterStub> {
  const skaters = new Map<string, SkaterStub>()
  const seasons = ['2021-22', '2022-23', '2023-24', '2024-25', '2025-26']

  for (const season of seasons) {
    const file = SEED_FILES.results(season)
    if (!existsSync(resolvePath(file))) continue

    const content = readSeedFile(file)

    // Parse skater references from results entries
    // Match patterns like: skaterId: 'some-id', skaterName: 'Some Name', country: 'USA'
    const entryRegex =
      /skaterId:\s*'([^']+)',\s*skaterName:\s*'([^']+)',\s*country:\s*'([^']+)'/g
    let match

    // Also capture the discipline context
    const disciplineRegex = /discipline:\s*'([^']+)'/g
    const disciplinePositions: Array<{ discipline: string; index: number }> = []
    let dMatch
    while ((dMatch = disciplineRegex.exec(content)) !== null) {
      disciplinePositions.push({ discipline: dMatch[1], index: dMatch.index })
    }

    while ((match = entryRegex.exec(content)) !== null) {
      const [, id, name, country] = match
      if (skaters.has(id)) continue

      // Find the closest discipline declaration before this entry
      let discipline = 'Men' // default
      for (const dp of disciplinePositions) {
        if (dp.index < match.index) {
          discipline = dp.discipline
        } else {
          break
        }
      }

      skaters.set(id, { id, name, country, discipline })
    }
  }

  return skaters
}

/**
 * Formats a skater name from an ID. e.g. "john-doe" → "JD"
 */
function nameToInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0]?.toUpperCase() || '')
    .join('')
    .slice(0, 2)
}

/**
 * Formats a SkaterStub as a TypeScript object literal for the seed file.
 */
function formatSkaterStub(stub: SkaterStub): string {
  const initials = nameToInitials(stub.name)
  const escapedName = stub.name.replace(/'/g, "\\'")
  const isTeam = stub.discipline === 'Pairs' || stub.discipline === 'Ice Dance'

  return `  {
    id: '${stub.id}',
    name: '${escapedName}',
    country: '${stub.country}',
    discipline: '${stub.discipline}',
    birthDate: '',
    bio: '',
    photoPlaceholder: '${initials}',
    personalBests: [],
    competitionResults: [],
    signatureElements: [],
    isTeam: ${isTeam},
  }`
}

async function main(): Promise<void> {
  log.info(`BladeTracker Skater Detection — ${DRY_RUN ? 'DRY RUN' : 'LIVE'}`)

  // 1. Load known skaters
  const knownIds = loadKnownSkaterIds()
  log.info(`${knownIds.size} known skaters`)

  // 2. Find all referenced skaters from results
  const referenced = findReferencedSkaters()
  log.info(`${referenced.size} total skaters referenced in results`)

  // 3. Find unknown skaters
  const unknown: SkaterStub[] = []
  for (const [id, stub] of referenced) {
    if (!knownIds.has(id)) {
      unknown.push(stub)
    }
  }

  log.info(`${unknown.length} unknown skaters found`)

  if (unknown.length === 0) {
    log.info('No new skaters to add.')
    return
  }

  if (DRY_RUN) {
    log.info('DRY RUN: Would add stubs for:')
    for (const s of unknown) {
      log.info(`  - ${s.id} (${s.name}, ${s.country}, ${s.discipline})`)
    }
    return
  }

  // 4. Group by discipline and append to appropriate files
  log.group('Writing skater stubs')
  const byDiscipline = new Map<Discipline, SkaterStub[]>()
  for (const stub of unknown) {
    const disc = stub.discipline as Discipline
    const list = byDiscipline.get(disc) || []
    list.push(stub)
    byDiscipline.set(disc, list)
  }

  const modifiedFiles: string[] = []

  for (const [discipline, stubs] of byDiscipline) {
    const file = SEED_FILES.skaters[discipline]
    if (!file) {
      log.warn(`No seed file mapping for discipline: ${discipline}`)
      continue
    }

    const entries = stubs.map(formatSkaterStub)
    appendToSeedArray(file, entries)
    modifiedFiles.push(file)

    log.info(`Added ${stubs.length} stubs to ${file}`)
  }
  log.groupEnd()

  // 5. Create PR
  const today = new Date().toISOString().slice(0, 10)
  createPR({
    branch: `crawl/new-skaters-${today}`,
    files: modifiedFiles,
    title: `Add ${unknown.length} new skater stubs`,
    body: `Detected ${unknown.length} skaters referenced in competition results who don't have profiles yet.\n\nNew stubs:\n${unknown.map((s) => `- ${s.name} (${s.country}, ${s.discipline})`).join('\n')}\n\nThese are minimal stubs — bio, birth date, and personal bests should be filled in manually.\n\nCrawled: ${today}`,
  })

  log.info(`Done. Created stubs for ${unknown.length} skaters.`)
}

main().catch((err) => {
  log.error(`Fatal: ${err}`)
  process.exit(1)
})
