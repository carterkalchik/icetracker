import { jumps } from '../data/elements/jumps'
import { spins } from '../data/elements/spins'
import { steps } from '../data/elements/steps'
import { pairElements } from '../data/elements/pair-elements'
import { danceElements } from '../data/elements/dance-elements'
import { menSkaters } from '../data/skaters/men'
import { womenSkaters } from '../data/skaters/women'
import { pairsSkaters } from '../data/skaters/pairs'
import { iceDanceSkaters } from '../data/skaters/ice-dance'
import type { EntityRef } from '../types/object-link'

interface ElementEntry {
  id: string
  name: string
  abbreviation: string
}

// Build lookup maps at module init
const allElements: ElementEntry[] = [
  ...jumps,
  ...spins,
  ...steps,
  ...pairElements,
  ...danceElements,
]

const byAbbreviation = new Map<string, ElementEntry>()
const byNameLower = new Map<string, ElementEntry>()

for (const el of allElements) {
  // Some elements share abbreviations (e.g. CCoSp4) — first wins
  if (!byAbbreviation.has(el.abbreviation)) {
    byAbbreviation.set(el.abbreviation, el)
  }
  byNameLower.set(el.name.toLowerCase(), el)
}

/**
 * Resolve a signature element display name to an EntityRef.
 *
 * Handles formats like:
 *  - "Quad Axel (4A)"           → abbreviation lookup
 *  - "4T+3T" style parens       → first abbreviation in combo
 *  - "Triple Lutz-Triple Toe"   → resolve first part by name
 *  - "Step Sequence Level 4"    → direct name lookup
 *  - "Combination Spin Level 4" → direct name lookup
 */
export function resolveSignatureElement(displayName: string): EntityRef | null {
  // Strategy 1: Extract abbreviation from parentheses
  const parenMatch = displayName.match(/\(([^)]+)\)/)
  if (parenMatch) {
    const inside = parenMatch[1]

    // Handle combo abbreviations like "4T+3T" — use first element
    const abbr = inside.includes('+') ? inside.split('+')[0] : inside
    const el = byAbbreviation.get(abbr)
    if (el) {
      return { type: 'element', id: el.id, label: displayName }
    }
  }

  // Strategy 2: Direct name match (e.g. "Step Sequence Level 4")
  const el = byNameLower.get(displayName.toLowerCase())
  if (el) {
    return { type: 'element', id: el.id, label: displayName }
  }

  // Strategy 3: Combination without abbreviation (e.g. "Triple Lutz-Triple Toe")
  // Split on dash surrounded by word boundaries, resolve first part
  if (displayName.includes('-')) {
    const parts = displayName.split('-')
    // Try the first part as a name match — e.g. "Triple Lutz"
    const firstPart = parts[0].trim()
    const firstMatch = byNameLower.get(firstPart.toLowerCase())
    if (firstMatch) {
      return { type: 'element', id: firstMatch.id, label: displayName }
    }
  }

  return null
}

// --- Skater name resolution ---

const allSkaters = [...menSkaters, ...womenSkaters, ...pairsSkaters, ...iceDanceSkaters]
const skaterByName = new Map<string, { id: string; name: string }>()

for (const s of allSkaters) {
  skaterByName.set(s.name.toLowerCase(), { id: s.id, name: s.name })
}

/**
 * Resolve a skater name to an EntityRef.
 */
export function resolveSkaterByName(name: string): EntityRef | null {
  const match = skaterByName.get(name.toLowerCase())
  if (match) {
    return { type: 'skater', id: match.id, label: match.name }
  }
  return null
}

/**
 * Returns all known skater names sorted longest-first (for greedy regex matching).
 */
export function getAllSkaterNames(): string[] {
  return allSkaters.map((s) => s.name).sort((a, b) => b.length - a.length)
}
