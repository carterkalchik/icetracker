import { useState, useMemo } from 'react'
import { useAsync } from '../../hooks/useAsync'
import { getAllElements } from '../../services/elements.service'
import { getElementCategory } from '../../services/elements.service'
import { Badge } from '../ui/Badge'
import { formatScore } from '../../lib/format'

interface ElementPickerProps {
  open: boolean
  onClose: () => void
  onSelect: (element: { elementId: string; name: string; abbreviation: string; baseValue: number }) => void
}

const categoryLabels: Record<string, string> = {
  jumps: 'Jump',
  spins: 'Spin',
  steps: 'Step',
  pairs: 'Pair',
  dance: 'Dance',
}

export function ElementPicker({ open, onClose, onSelect }: ElementPickerProps) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('all')
  const { data: elements, loading } = useAsync(() => getAllElements())

  const allPickerElements = useMemo(() => {
    if (!elements) return []
    return elements.map((el) => ({
      ...el,
      category: categoryLabels[getElementCategory(el).key] ?? 'Other',
    }))
  }, [elements])

  const filtered = useMemo(() => {
    return allPickerElements.filter((el) => {
      if (category !== 'all' && el.category !== category) return false
      if (query) {
        const q = query.toLowerCase()
        return (
          el.name.toLowerCase().includes(q) ||
          el.abbreviation.toLowerCase().includes(q)
        )
      }
      return true
    })
  }, [query, category, allPickerElements])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="max-h-[80vh] w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="border-b border-gray-100 px-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-semibold text-gray-900">Add Element</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search elements..."
            className="mt-3 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-ice-300 focus:outline-none focus:ring-2 focus:ring-ice-100"
            autoFocus
          />

          {/* Category filter */}
          <div className="mt-3 flex gap-2">
            {['all', 'Jump', 'Spin', 'Step', 'Pair', 'Dance'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  category === cat
                    ? 'bg-ice-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Elements List */}
        <div className="max-h-[50vh] overflow-y-auto px-2 py-2">
          {loading && (
            <p className="py-8 text-center text-sm text-gray-500">Loading elements...</p>
          )}
          {!loading && filtered.map((el) => (
            <button
              key={el.id}
              onClick={() => {
                onSelect({
                  elementId: el.id,
                  name: el.name,
                  abbreviation: el.abbreviation,
                  baseValue: el.baseValue,
                })
                onClose()
              }}
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-colors hover:bg-ice-50"
            >
              <div>
                <p className="font-serif font-semibold text-gray-900">{el.name}</p>
                <p className="text-xs text-gray-500">{el.abbreviation}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{el.category}</Badge>
                <span className="font-serif font-bold tabular-nums text-ice-600">
                  {formatScore(el.baseValue)}
                </span>
              </div>
            </button>
          ))}
          {!loading && filtered.length === 0 && (
            <p className="py-8 text-center text-sm text-gray-500">No elements found.</p>
          )}
        </div>
      </div>
    </div>
  )
}
