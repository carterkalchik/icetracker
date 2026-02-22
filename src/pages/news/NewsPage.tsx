import { useState, useMemo } from 'react'
import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { FilterDropdown, type FilterOption } from '../../components/ui/FilterDropdown'
import { NewsCard } from '../../components/news/NewsCard'
import { SkeletonCard } from '../../components/ui/Skeleton'
import { useAsync } from '../../hooks/useAsync'
import { getLatestNews } from '../../services/news.service'
import type { NewsArticle } from '../../types/news'

function buildEntityOptions(articles: NewsArticle[], type: string): FilterOption[] {
  const map = new Map<string, string>()
  for (const a of articles) {
    for (const e of a.entities) {
      if (e.type === type && !map.has(e.id)) {
        map.set(e.id, e.label)
      }
    }
  }
  return [...map.entries()]
    .map(([value, label]) => ({ value, label }))
    .sort((a, b) => a.label.localeCompare(b.label))
}

function buildSourceOptions(articles: NewsArticle[]): FilterOption[] {
  const set = new Set<string>()
  for (const a of articles) set.add(a.source)
  return [...set].sort().map((s) => ({ value: s, label: s }))
}

export function NewsPage() {
  const { data: articles, loading } = useAsync(() => getLatestNews())

  const [search, setSearch] = useState('')
  const [skaters, setSkaters] = useState<Set<string>>(new Set())
  const [competitions, setCompetitions] = useState<Set<string>>(new Set())
  const [elements, setElements] = useState<Set<string>>(new Set())
  const [sources, setSources] = useState<Set<string>>(new Set())
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')

  const skaterOptions = useMemo(() => (articles ? buildEntityOptions(articles, 'skater') : []), [articles])
  const competitionOptions = useMemo(() => (articles ? buildEntityOptions(articles, 'competition') : []), [articles])
  const elementOptions = useMemo(() => (articles ? buildEntityOptions(articles, 'element') : []), [articles])
  const sourceOptions = useMemo(() => (articles ? buildSourceOptions(articles) : []), [articles])

  const dateRange = useMemo(() => {
    if (!articles || articles.length === 0) return { min: '', max: '' }
    const dates = articles.map((a) => a.publishedAt).sort()
    return { min: dates[0], max: dates[dates.length - 1] }
  }, [articles])

  const filtered = useMemo(() => {
    if (!articles) return []
    return articles.filter((a) => {
      // Text search
      if (search) {
        const q = search.toLowerCase()
        if (!a.title.toLowerCase().includes(q) && !a.summary.toLowerCase().includes(q)) {
          return false
        }
      }
      // Entity filters — article must have ALL selected entity IDs
      const entityIds = new Set(a.entities.map((e) => e.id))
      if (skaters.size > 0 && ![...skaters].some((id) => entityIds.has(id))) return false
      if (competitions.size > 0 && ![...competitions].some((id) => entityIds.has(id))) return false
      if (elements.size > 0 && ![...elements].some((id) => entityIds.has(id))) return false
      // Source
      if (sources.size > 0 && !sources.has(a.source)) return false
      // Date range
      if (dateFrom && a.publishedAt < dateFrom) return false
      if (dateTo && a.publishedAt > dateTo) return false
      return true
    })
  }, [articles, search, skaters, competitions, elements, sources, dateFrom, dateTo])

  const activeFilterCount = (skaters.size > 0 ? 1 : 0) + (competitions.size > 0 ? 1 : 0) +
    (elements.size > 0 ? 1 : 0) + (sources.size > 0 ? 1 : 0) +
    (dateFrom ? 1 : 0) + (dateTo ? 1 : 0) + (search ? 1 : 0)

  function clearFilters() {
    setSearch('')
    setSkaters(new Set())
    setCompetitions(new Set())
    setElements(new Set())
    setSources(new Set())
    setDateFrom('')
    setDateTo('')
  }

  // Collect selected filter labels for the active filters bar
  const activeSelections: { label: string; onRemove: () => void }[] = []
  for (const id of skaters) {
    const opt = skaterOptions.find((o) => o.value === id)
    if (opt) activeSelections.push({ label: opt.label, onRemove: () => setSkaters((prev) => { const n = new Set(prev); n.delete(id); return n }) })
  }
  for (const id of competitions) {
    const opt = competitionOptions.find((o) => o.value === id)
    if (opt) activeSelections.push({ label: opt.label, onRemove: () => setCompetitions((prev) => { const n = new Set(prev); n.delete(id); return n }) })
  }
  for (const id of elements) {
    const opt = elementOptions.find((o) => o.value === id)
    if (opt) activeSelections.push({ label: opt.label, onRemove: () => setElements((prev) => { const n = new Set(prev); n.delete(id); return n }) })
  }
  for (const s of sources) {
    activeSelections.push({ label: s, onRemove: () => setSources((prev) => { const n = new Set(prev); n.delete(s); return n }) })
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'News' }]} />

      <h1 className="mt-6 font-serif text-4xl font-bold text-gray-900">Latest News</h1>
      <p className="mt-2 text-gray-600">Figure skating news and updates</p>
      <p className="mt-2 text-xs text-gray-400">
        Summaries are AI-generated and may contain inaccuracies. Click article titles to read the original source.
      </p>

      {/* Search & Filters */}
      <div className="mt-6 space-y-3">
        {/* Search input */}
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-ice-400 focus:ring-2 focus:ring-ice-100"
          />
        </div>

        {/* Filter dropdowns */}
        <div className="flex flex-wrap items-center gap-2">
          <FilterDropdown label="Skaters" options={skaterOptions} selected={skaters} onChange={setSkaters} />
          <FilterDropdown label="Competitions" options={competitionOptions} selected={competitions} onChange={setCompetitions} />
          <FilterDropdown label="Elements" options={elementOptions} selected={elements} onChange={setElements} />
          <FilterDropdown label="Sources" options={sourceOptions} selected={sources} onChange={setSources} />

          {/* Date range */}
          <div className="flex items-center gap-2">
            <input
              type="date"
              value={dateFrom}
              min={dateRange.min}
              max={dateTo || dateRange.max}
              onChange={(e) => setDateFrom(e.target.value)}
              aria-label="From date"
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition-colors focus:border-ice-400 focus:ring-2 focus:ring-ice-100"
            />
            <span className="text-xs text-gray-400">to</span>
            <input
              type="date"
              value={dateTo}
              min={dateFrom || dateRange.min}
              max={dateRange.max}
              onChange={(e) => setDateTo(e.target.value)}
              aria-label="To date"
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition-colors focus:border-ice-400 focus:ring-2 focus:ring-ice-100"
            />
          </div>
        </div>

        {/* Active filter tags */}
        {activeSelections.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            {activeSelections.map((sel) => (
              <span
                key={sel.label}
                className="inline-flex items-center gap-1 rounded-full bg-ice-100 px-2.5 py-1 text-xs font-medium text-ice-700"
              >
                {sel.label}
                <button
                  type="button"
                  onClick={sel.onRemove}
                  className="ml-0.5 rounded-full p-0.5 hover:bg-ice-200"
                  aria-label={`Remove ${sel.label} filter`}
                >
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            ))}
            {activeFilterCount > 1 && (
              <button
                onClick={clearFilters}
                className="text-xs font-medium text-ice-600 hover:text-ice-800"
              >
                Clear all
              </button>
            )}
          </div>
        )}
      </div>

      {/* Results */}
      {loading ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="mt-12 text-center">
          <p className="text-gray-500">No articles match your filters.</p>
          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className="mt-2 text-sm font-medium text-ice-600 hover:text-ice-800"
            >
              Clear filters
            </button>
          )}
        </div>
      ) : (
        <>
          <p className="mt-6 text-sm text-gray-500">
            {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
            {activeFilterCount > 0 ? ' matching filters' : ''}
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
