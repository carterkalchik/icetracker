import { api } from './api'
import type { EntityRef } from '../types/object-link'

interface ElementEntry {
  id: string
  name: string
  abbreviation: string
}

interface SkaterEntry {
  id: string
  name: string
}

// Cached data — loaded on first call
let elementsLoaded = false
let skatersLoaded = false
let elementsPromise: Promise<void> | null = null
let skatersPromise: Promise<void> | null = null

const byAbbreviation = new Map<string, ElementEntry>()
const byNameLower = new Map<string, ElementEntry>()
const skaterByName = new Map<string, SkaterEntry>()
let skaterNamesList: string[] = []

async function ensureElements() {
  if (elementsLoaded) return
  if (!elementsPromise) {
    elementsPromise = api<ElementEntry[]>('/elements').then((elements) => {
      for (const el of elements) {
        const abbrKey = el.abbreviation.toUpperCase()
        if (!byAbbreviation.has(abbrKey)) {
          byAbbreviation.set(abbrKey, el)
        }
        byNameLower.set(el.name.toLowerCase(), el)
      }
      elementsLoaded = true
    }).catch((err) => {
      elementsPromise = null
      throw err
    })
  }
  return elementsPromise
}

async function ensureSkaters() {
  if (skatersLoaded) return
  if (!skatersPromise) {
    skatersPromise = api<SkaterEntry[]>('/skaters').then((skaters) => {
      for (const s of skaters) {
        skaterByName.set(s.name.toLowerCase(), { id: s.id, name: s.name })
      }
      skaterNamesList = skaters.map((s) => s.name).sort((a, b) => b.length - a.length)
      skatersLoaded = true
    }).catch((err) => {
      skatersPromise = null
      throw err
    })
  }
  return skatersPromise
}

export async function resolveSignatureElement(displayName: string): Promise<EntityRef | null> {
  await ensureElements()

  // Strategy 1: Extract abbreviation from parentheses
  const parenMatch = displayName.match(/\(([^)]+)\)/)
  if (parenMatch) {
    const inside = parenMatch[1]
    const abbr = inside.includes('+') ? inside.split('+')[0] : inside
    const el = byAbbreviation.get(abbr.toUpperCase())
    if (el) {
      return { type: 'element', id: el.id, label: displayName }
    }
  }

  // Strategy 2: Direct name match
  const el = byNameLower.get(displayName.toLowerCase())
  if (el) {
    return { type: 'element', id: el.id, label: displayName }
  }

  // Strategy 3: Combination — resolve first part
  if (displayName.includes('-')) {
    const parts = displayName.split('-')
    const firstPart = parts[0].trim()
    const firstMatch = byNameLower.get(firstPart.toLowerCase())
    if (firstMatch) {
      return { type: 'element', id: firstMatch.id, label: displayName }
    }
  }

  return null
}

export async function resolveSkaterByName(name: string): Promise<EntityRef | null> {
  await ensureSkaters()
  const match = skaterByName.get(name.toLowerCase())
  if (match) {
    return { type: 'skater', id: match.id, label: match.name }
  }
  return null
}

export async function getAllSkaterNames(): Promise<string[]> {
  await ensureSkaters()
  return skaterNamesList
}
