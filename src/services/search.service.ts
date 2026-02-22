import { jumps } from '../data/elements/jumps'
import { spins } from '../data/elements/spins'
import { steps } from '../data/elements/steps'
import { pairElements } from '../data/elements/pair-elements'
import { danceElements } from '../data/elements/dance-elements'
import type { Element, Jump } from '../types/elements'

export type ElementType = 'jump' | 'spin' | 'step' | 'pair' | 'dance'
export type EdgeFilter = 'toe' | 'edge' | 'all'

export interface SearchFilters {
  query: string
  types: ElementType[]
  edge: EdgeFilter
  tags: string[]
  minBaseValue?: number
  maxBaseValue?: number
}

export interface SearchResult {
  element: Element
  elementType: ElementType
  matchedFields: string[]
}

function getElementType(element: Element): ElementType {
  if ('takeoffEdge' in element) return 'jump'
  if ('position' in element) return 'spin'
  if ('category' in element) {
    const cat = (element as any).category as string
    if (['throw', 'twist', 'lift', 'sbs', 'death-spiral'].includes(cat)) return 'pair'
    return 'dance'
  }
  return 'step'
}

function matchesQuery(element: Element, query: string): string[] {
  if (!query) return ['all']
  const q = query.toLowerCase()
  const matched: string[] = []

  if (element.name.toLowerCase().includes(q)) matched.push('name')
  if (element.abbreviation.toLowerCase().includes(q)) matched.push('abbreviation')
  if (element.description.toLowerCase().includes(q)) matched.push('description')
  if (element.tags.some((t) => t.toLowerCase().includes(q))) matched.push('tags')

  return matched
}

export function getAllTags(): string[] {
  const all = [...jumps, ...spins, ...steps, ...pairElements, ...danceElements]
  const tagSet = new Set<string>()
  for (const el of all) {
    for (const tag of el.tags) {
      tagSet.add(tag)
    }
  }
  return Array.from(tagSet).sort()
}

export function searchElements(filters: SearchFilters): SearchResult[] {
  const all: Element[] = [...jumps, ...spins, ...steps, ...pairElements, ...danceElements]

  return all
    .map((element) => {
      const elementType = getElementType(element)
      const matchedFields = matchesQuery(element, filters.query)

      return { element, elementType, matchedFields }
    })
    .filter(({ element, elementType, matchedFields }) => {
      // Must match query
      if (matchedFields.length === 0) return false

      // Type filter
      if (filters.types.length > 0 && !filters.types.includes(elementType)) return false

      // Edge filter (only applies to jumps)
      if (filters.edge !== 'all' && elementType === 'jump') {
        if ((element as Jump).takeoffEdge !== filters.edge) return false
      }

      // Tag filter
      if (filters.tags.length > 0) {
        if (!filters.tags.some((tag) => element.tags.includes(tag))) return false
      }

      // Base value range
      if (filters.minBaseValue !== undefined && element.baseValue < filters.minBaseValue)
        return false
      if (filters.maxBaseValue !== undefined && element.baseValue > filters.maxBaseValue)
        return false

      return true
    })
    .sort((a, b) => {
      // Sort by relevance: name matches first, then by base value descending
      const aName = a.matchedFields.includes('name') ? 1 : 0
      const bName = b.matchedFields.includes('name') ? 1 : 0
      if (aName !== bName) return bName - aName
      return b.element.baseValue - a.element.baseValue
    })
}
