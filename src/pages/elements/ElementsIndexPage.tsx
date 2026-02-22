import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { Tabs } from '../../components/ui/Tabs'
import { Card, CardContent } from '../../components/ui/Card'
import { ElementSearchBar } from '../../components/elements/ElementSearchBar'
import { ElementFilterPanel } from '../../components/elements/ElementFilterPanel'
import { SearchResultCard } from '../../components/elements/SearchResultCard'
import { useElementSearch } from '../../hooks/useElementSearch'
import { useAsync } from '../../hooks/useAsync'
import { getAllTags } from '../../services/search.service'

const sections = [
  {
    id: 'singles',
    label: 'Singles',
    items: [
      { title: 'Jumps', description: 'Toe loops to quad Axels — the explosive leaps that define skating', path: '/elements/jumps', icon: '\u{1F998}' },
      { title: 'Spins', description: 'Upright, sit, camel, and combination spins with levels and positions', path: '/elements/spins', icon: '\u{1F300}' },
      { title: 'Steps', description: 'Footwork sequences and choreographic elements that connect the program', path: '/elements/steps', icon: '\u{1F463}' },
    ],
  },
  {
    id: 'pairs',
    label: 'Pairs',
    items: [
      { title: 'Pair Elements', description: 'Throws, twists, lifts, death spirals, and side-by-side jumps', path: '/elements/pairs', icon: '\u{1F91D}' },
    ],
  },
  {
    id: 'dance',
    label: 'Ice Dance',
    items: [
      { title: 'Dance Elements', description: 'Pattern dances, twizzles, lifts, and choreographic movements', path: '/elements/dance', icon: '\u{1F483}' },
    ],
  },
]

const tabs = sections.map((s) => ({ id: s.id, label: s.label }))

export function ElementsIndexPage() {
  const [activeTab, setActiveTab] = useState('singles')
  const [showFilters, setShowFilters] = useState(false)
  const activeSection = sections.find((s) => s.id === activeTab)!
  const { data: allTags } = useAsync(() => getAllTags())

  const search = useElementSearch()

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Elements' }]} />

      <div className="mt-6">
        <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Elements Encyclopedia
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Every figure skating element explained — from basic jumps to the most complex pair and dance
          elements. Learn what judges look for and how each element is scored.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mt-8">
        <div className="flex gap-2">
          <ElementSearchBar
            value={search.query}
            onChange={search.setQuery}
            className="flex-1"
          />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-1 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
              showFilters || search.isActive
                ? 'border-ice-300 bg-ice-50 text-ice-700'
                : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
            Filters
          </button>
        </div>

        {showFilters && (
          <ElementFilterPanel
            types={search.types}
            onToggleType={search.toggleType}
            edge={search.edge}
            onSetEdge={search.setEdge}
            tags={allTags ?? []}
            selectedTags={search.tags}
            onToggleTag={search.toggleTag}
            onClearAll={search.clearAll}
            isActive={search.isActive}
          />
        )}
      </div>

      {/* Search Results or Normal Browse */}
      {search.isActive ? (
        <div className="mt-8">
          <p className="mb-4 text-sm text-gray-500">
            {search.results.length} element{search.results.length !== 1 ? 's' : ''} found
          </p>
          {search.results.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {search.results.map((result) => (
                <SearchResultCard
                  key={result.element.id}
                  result={result}
                  query={search.query}
                />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[20vh] items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500">No elements match your search.</p>
                <button
                  onClick={search.clearAll}
                  className="mt-2 text-sm font-medium text-ice-600 hover:text-ice-800"
                >
                  Clear filters
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} className="mt-8" />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activeSection.items.map((item) => (
              <Link key={item.path} to={item.path}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardContent>
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="mt-3 font-serif text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-ice-50 p-6">
            <h3 className="font-serif text-lg font-semibold text-ice-900">How Scoring Works</h3>
            <p className="mt-2 text-sm leading-relaxed text-ice-800">
              Each element has a <strong>base value</strong> (BV) that represents its technical
              difficulty. Judges then assign a <strong>Grade of Execution</strong> (GOE) from -5 to +5
              that adjusts the score based on quality. The GOE modifies the base value by a percentage
              — a +5 can add up to 50% while a -5 can reduce it dramatically.
            </p>
          </div>
        </>
      )}
    </div>
  )
}
