import { api } from './api'
import type { Element } from '../types/elements'

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

export async function getAllTags(): Promise<string[]> {
  return api('/search/tags')
}

export async function searchElements(filters: SearchFilters): Promise<SearchResult[]> {
  const params = new URLSearchParams()
  if (filters.query) params.set('q', filters.query)
  if (filters.types.length > 0) params.set('types', filters.types.join(','))
  if (filters.edge !== 'all') params.set('edge', filters.edge)
  if (filters.tags.length > 0) params.set('tags', filters.tags.join(','))
  if (filters.minBaseValue !== undefined) params.set('minBV', String(filters.minBaseValue))
  if (filters.maxBaseValue !== undefined) params.set('maxBV', String(filters.maxBaseValue))
  return api(`/search/elements?${params}`)
}
