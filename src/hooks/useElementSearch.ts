import { useState, useMemo, useCallback } from 'react'
import {
  searchElements,
  type SearchFilters,
  type SearchResult,
  type ElementType,
  type EdgeFilter,
} from '../services/search.service'

export function useElementSearch() {
  const [query, setQuery] = useState('')
  const [types, setTypes] = useState<ElementType[]>([])
  const [edge, setEdge] = useState<EdgeFilter>('all')
  const [tags, setTags] = useState<string[]>([])

  const filters: SearchFilters = useMemo(
    () => ({ query, types, edge, tags }),
    [query, types, edge, tags]
  )

  const isActive = query.length > 0 || types.length > 0 || edge !== 'all' || tags.length > 0

  const results: SearchResult[] = useMemo(() => {
    if (!isActive) return []
    return searchElements(filters)
  }, [filters, isActive])

  const toggleType = useCallback((type: ElementType) => {
    setTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }, [])

  const toggleTag = useCallback((tag: string) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }, [])

  const clearAll = useCallback(() => {
    setQuery('')
    setTypes([])
    setEdge('all')
    setTags([])
  }, [])

  return {
    query,
    setQuery,
    types,
    toggleType,
    edge,
    setEdge,
    tags,
    toggleTag,
    clearAll,
    results,
    isActive,
  }
}
