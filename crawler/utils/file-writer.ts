import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import * as log from './logger.js'

const ROOT = resolve(import.meta.dirname, '../..')

/**
 * Resolves a project-relative path to an absolute path.
 */
export function resolvePath(relativePath: string): string {
  return resolve(ROOT, relativePath)
}

/**
 * Reads a TypeScript seed file and returns its raw text content.
 */
export function readSeedFile(relativePath: string): string {
  const absPath = resolvePath(relativePath)
  return readFileSync(absPath, 'utf-8')
}

/**
 * Appends entries to a TypeScript array seed file.
 * Finds the closing `]` of the exported array and inserts new entries before it.
 *
 * @param relativePath - Project-relative path to the seed file
 * @param entries - Array of stringified object literals to append (each should be a full object like `{ id: '...', ... }`)
 */
export function appendToSeedArray(relativePath: string, entries: string[]): void {
  if (entries.length === 0) return

  const absPath = resolvePath(relativePath)
  const content = readFileSync(absPath, 'utf-8')

  // Find the last `]` which closes the exported array
  const lastBracketIndex = content.lastIndexOf(']')
  if (lastBracketIndex === -1) {
    throw new Error(`Could not find closing ']' in ${relativePath}`)
  }

  // Check if there's content before the bracket (need a comma)
  const before = content.slice(0, lastBracketIndex).trimEnd()
  const needsComma = before.endsWith('}') || before.endsWith(',')
  const separator = needsComma && !before.endsWith(',') ? ',\n' : '\n'

  const newContent =
    before +
    separator +
    entries.map((e) => '  ' + e).join(',\n') +
    ',\n' +
    content.slice(lastBracketIndex)

  writeFileSync(absPath, newContent, 'utf-8')
  log.info(`Appended ${entries.length} entries to ${relativePath}`)
}

/**
 * Writes a complete seed file from scratch.
 * Used when creating new season result files.
 */
export function writeSeedFile(relativePath: string, content: string): void {
  const absPath = resolvePath(relativePath)
  writeFileSync(absPath, content, 'utf-8')
  log.info(`Wrote ${relativePath}`)
}

/**
 * Validates that a TypeScript seed file can still be dynamically imported after modification.
 */
export async function validateSeedFile(relativePath: string): Promise<boolean> {
  const absPath = resolvePath(relativePath)
  try {
    // Use a cache-busting query param so Node doesn't serve a stale cached version
    await import(`${absPath}?t=${Date.now()}`)
    log.info(`Validated ${relativePath} — parses OK`)
    return true
  } catch (err) {
    log.error(`Validation FAILED for ${relativePath}: ${err}`)
    return false
  }
}

/**
 * Extracts all `id` values from a seed file's exported array.
 * Quick regex-based approach — doesn't require importing the module.
 */
export function extractIds(relativePath: string): string[] {
  const content = readSeedFile(relativePath)
  const ids: string[] = []
  const re = /\bid:\s*['"]([^'"]+)['"]/g
  let match
  while ((match = re.exec(content)) !== null) {
    ids.push(match[1])
  }
  return ids
}

/**
 * Extracts all `url` values from a seed file's exported array.
 */
export function extractUrls(relativePath: string): string[] {
  const content = readSeedFile(relativePath)
  const urls: string[] = []
  const re = /\burl:\s*['"]([^'"]+)['"]/g
  let match
  while ((match = re.exec(content)) !== null) {
    urls.push(match[1])
  }
  return urls
}
