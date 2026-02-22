import { parseHTML } from 'linkedom'
import { ISU_RESULTS_BASE, SEED_FILES } from './config.js'
import type { ParsedCompetitionResults, ParsedDisciplineResults, ParsedResultEntry } from './types.js'
import { extractIds, readSeedFile, writeSeedFile, resolvePath } from './utils/file-writer.js'
import { createPR } from './utils/git.js'
import * as log from './utils/logger.js'
import { existsSync } from 'node:fs'

const DRY_RUN = process.env.DRY_RUN === 'true'
const TARGET_COMPETITION = process.env.COMPETITION_ID || ''

/**
 * Maps competition type to ISU results URL segment patterns.
 */
const ISU_EVENT_CODES: Record<string, string> = {
  worlds: 'wc',
  'gp-final': 'gpf',
  'grand-prix': 'gps',
  'four-continents': 'fc',
  europeans: 'ec',
  olympics: 'owg',
}

/**
 * Converts a season string like "2025-26" to the ISU format "2526".
 */
function seasonToISU(season: string): string {
  const parts = season.split('-')
  return parts[0].slice(2) + parts[1]
}

/**
 * Attempts to fetch and parse ISU results for a competition.
 */
async function fetchISUResults(
  competitionId: string,
  season: string,
  type: string,
): Promise<ParsedCompetitionResults | null> {
  const eventCode = ISU_EVENT_CODES[type]
  if (!eventCode) {
    log.warn(`No ISU event code mapping for type: ${type}`)
    return null
  }

  const seasonCode = seasonToISU(season)
  // ISU URL pattern: results.isu.org/results/season{XXYY}/{eventCode}{YYYY}/
  const year = '20' + season.split('-')[1]
  const baseUrl = `${ISU_RESULTS_BASE}/season${seasonCode}/${eventCode}${year}/`

  log.info(`Trying ISU URL: ${baseUrl}`)

  try {
    const res = await fetch(baseUrl, {
      headers: { 'User-Agent': 'BladeTracker-Crawler/1.0' },
      signal: AbortSignal.timeout(15_000),
    })

    if (!res.ok) {
      log.warn(`ISU results page returned ${res.status}: ${baseUrl}`)
      return null
    }

    const html = await res.text()
    const { document } = parseHTML(html)

    const results: ParsedDisciplineResults[] = []

    // ISU results pages have tables for each discipline
    // Look for discipline headers and their corresponding tables
    const disciplines = ['Men', 'Women', 'Pairs', 'Ice Dance']

    for (const disc of disciplines) {
      const entries = parseResultsTable(document, disc)
      if (entries.length > 0) {
        results.push({ discipline: disc, entries })
      }
    }

    if (results.length === 0) {
      log.warn(`No results found at ${baseUrl}`)
      return null
    }

    return {
      competitionId,
      sourceUrl: baseUrl,
      disciplines: results,
    }
  } catch (err) {
    log.warn(`Failed to fetch ISU results: ${err}`)
    return null
  }
}

/**
 * Parses an ISU results HTML table for a given discipline.
 * ISU results tables typically have: Rank, Name, Nation, Total, SP/RD, FS/FD columns.
 */
function parseResultsTable(document: ReturnType<typeof parseHTML>['document'], discipline: string): ParsedResultEntry[] {
  const entries: ParsedResultEntry[] = []

  // Find all tables and look for ones that match the discipline
  const tables = document.querySelectorAll('table')

  for (const table of tables) {
    // Check if a preceding heading mentions this discipline
    const prev = table.previousElementSibling
    const heading = prev?.textContent || ''

    // Also check the table caption or surrounding div
    const parent = table.parentElement
    const parentText = parent?.querySelector('h2, h3, h4')?.textContent || ''

    const searchText = (heading + ' ' + parentText).toLowerCase()
    const discLower = discipline.toLowerCase()

    if (!searchText.includes(discLower) && discipline !== 'Men' && !searchText.includes('single')) {
      continue
    }

    const rows = table.querySelectorAll('tr')
    for (const row of rows) {
      const cells = row.querySelectorAll('td')
      if (cells.length < 4) continue

      const rankText = cells[0]?.textContent?.trim() || ''
      const rank = parseInt(rankText, 10)
      if (isNaN(rank) || rank < 1) continue

      const name = cells[1]?.textContent?.trim() || ''
      const country = cells[2]?.textContent?.trim() || ''
      const totalScore = parseFloat(cells[3]?.textContent?.trim() || '0')
      const shortScore = parseFloat(cells[4]?.textContent?.trim() || '0')
      const freeScore = parseFloat(cells[5]?.textContent?.trim() || '0')

      if (name && totalScore > 0) {
        entries.push({
          rank,
          skaterName: name,
          country: country.toUpperCase(),
          totalScore,
          shortScore: shortScore || 0,
          freeScore: freeScore || 0,
        })
      }
    }

    if (entries.length > 0) break // Found the right table
  }

  return entries
}

/**
 * Generates a skater ID from their name. e.g. "Ilia Malinin" → "ilia-malinin"
 */
function nameToId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Formats a ParsedCompetitionResults into a TypeScript code string
 * for insertion into a results season file.
 */
function formatResultsEntry(parsed: ParsedCompetitionResults): string {
  const disciplines = parsed.disciplines
    .map((d) => {
      const entries = d.entries
        .map((e) => {
          const skaterId = nameToId(e.skaterName)
          const medal =
            e.rank === 1 ? ", medal: 'gold'" : e.rank === 2 ? ", medal: 'silver'" : e.rank === 3 ? ", medal: 'bronze'" : ''

          return `          { rank: ${e.rank}, skaterId: '${skaterId}', skaterName: '${e.skaterName.replace(/'/g, "\\'")}', country: '${e.country}', totalScore: ${e.totalScore}, shortScore: ${e.shortScore}, freeScore: ${e.freeScore}${medal} }`
        })
        .join(',\n')

      return `      {
        discipline: '${d.discipline}',
        entries: [
${entries},
        ],
      }`
    })
    .join(',\n')

  return `  {
    competitionId: '${parsed.competitionId}',
    sourceUrl: '${parsed.sourceUrl}',
    results: [
${disciplines},
    ],
  }`
}

/**
 * Loads competitions from seed data and finds ones that need results crawled.
 */
async function findCompetitionsToCrawl(): Promise<
  Array<{ id: string; season: string; type: string; endDate: string }>
> {
  // Dynamic import of the competitions data
  const absPath = resolvePath(SEED_FILES.competitions)
  const mod = (await import(absPath)) as { competitions: Array<{ id: string; season: string; type: string; endDate: string; isUpcoming: boolean }> }

  const today = new Date().toISOString().slice(0, 10)

  return mod.competitions.filter((c) => {
    // If targeting a specific competition
    if (TARGET_COMPETITION) return c.id === TARGET_COMPETITION

    // Only completed competitions
    if (c.endDate > today) return false

    // Only within last 7 days (for corrections/updates)
    const endDate = new Date(c.endDate)
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    return endDate >= weekAgo
  })
}

async function main(): Promise<void> {
  log.info(`BladeTracker Results Crawler — ${DRY_RUN ? 'DRY RUN' : 'LIVE'}`)

  // Find competitions to crawl
  log.group('Finding competitions')
  const competitions = await findCompetitionsToCrawl()
  log.info(`${competitions.length} competitions to crawl`)
  for (const c of competitions) {
    log.info(`  - ${c.id} (${c.season}, type: ${c.type})`)
  }
  log.groupEnd()

  if (competitions.length === 0) {
    log.info('No competitions to crawl.')
    return
  }

  // Load existing result IDs for dedup
  const existingResultIds = new Set<string>()
  for (const season of ['2021-22', '2022-23', '2023-24', '2024-25', '2025-26']) {
    const file = SEED_FILES.results(season)
    if (existsSync(resolvePath(file))) {
      for (const id of extractIds(file)) {
        existingResultIds.add(id)
      }
    }
  }

  // Crawl each competition
  const allParsed: ParsedCompetitionResults[] = []

  log.group('Crawling results')
  for (const comp of competitions) {
    if (existingResultIds.has(comp.id)) {
      log.info(`Skip (already have results): ${comp.id}`)
      continue
    }

    const results = await fetchISUResults(comp.id, comp.season, comp.type)
    if (results) {
      allParsed.push(results)
      log.info(`Got results for ${comp.id}: ${results.disciplines.length} disciplines`)
    }
  }
  log.groupEnd()

  if (allParsed.length === 0) {
    log.info('No new results found.')
    return
  }

  if (DRY_RUN) {
    log.info(`DRY RUN: Would add results for ${allParsed.length} competitions:`)
    for (const r of allParsed) {
      log.info(`  - ${r.competitionId}: ${r.disciplines.map((d) => `${d.discipline}(${d.entries.length})`).join(', ')}`)
    }
    return
  }

  // Write results grouped by season
  log.group('Writing results')
  const modifiedFiles: string[] = []

  for (const parsed of allParsed) {
    // Determine the season from the competition
    const comp = competitions.find((c) => c.id === parsed.competitionId)
    if (!comp) continue

    const seasonFile = SEED_FILES.results(comp.season)
    const absPath = resolvePath(seasonFile)

    if (existsSync(absPath)) {
      // Append to existing season file
      const entry = formatResultsEntry(parsed)
      const content = readSeedFile(seasonFile)
      const lastBracket = content.lastIndexOf(']')
      const before = content.slice(0, lastBracket).trimEnd()
      const needsComma = before.endsWith('}') || before.endsWith(',')
      const separator = needsComma && !before.endsWith(',') ? ',\n' : '\n'
      const newContent = before + separator + entry + ',\n' + content.slice(lastBracket)
      writeSeedFile(seasonFile, newContent)
    } else {
      // Create new season file
      const varName = 'results' + comp.season.replace('-', '')
      const entry = formatResultsEntry(parsed)
      const content = `import type { CompetitionFullResults } from '../../types/competitions'\n\nexport const ${varName}: CompetitionFullResults[] = [\n${entry},\n]\n`
      writeSeedFile(seasonFile, content)
    }

    modifiedFiles.push(seasonFile)
  }
  log.groupEnd()

  // Create PR
  const today = new Date().toISOString().slice(0, 10)
  const competitionNames = allParsed.map((r) => r.competitionId).join(', ')
  createPR({
    branch: `crawl/results-${today}`,
    files: modifiedFiles,
    title: `Add competition results: ${competitionNames}`,
    body: `Automated results crawl for: ${competitionNames}\n\nSource: ISU Results\nCrawled: ${today}`,
  })

  log.info(`Done. Added results for ${allParsed.length} competitions.`)
}

main().catch((err) => {
  log.error(`Fatal: ${err}`)
  process.exit(1)
})
