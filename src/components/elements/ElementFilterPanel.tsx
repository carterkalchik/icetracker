import { Chip } from '../ui/Chip'
import type { ElementType, EdgeFilter } from '../../services/search.service'

interface ElementFilterPanelProps {
  types: ElementType[]
  onToggleType: (type: ElementType) => void
  edge: EdgeFilter
  onSetEdge: (edge: EdgeFilter) => void
  tags: string[]
  selectedTags: string[]
  onToggleTag: (tag: string) => void
  onClearAll: () => void
  isActive: boolean
}

const typeOptions: { id: ElementType; label: string }[] = [
  { id: 'jump', label: 'Jumps' },
  { id: 'spin', label: 'Spins' },
  { id: 'step', label: 'Steps' },
  { id: 'pair', label: 'Pair Elements' },
  { id: 'dance', label: 'Dance Elements' },
]

const edgeOptions: { id: EdgeFilter; label: string }[] = [
  { id: 'all', label: 'All Edges' },
  { id: 'toe', label: 'Toe Pick' },
  { id: 'edge', label: 'Edge' },
]

export function ElementFilterPanel({
  types,
  onToggleType,
  edge,
  onSetEdge,
  tags,
  selectedTags,
  onToggleTag,
  onClearAll,
  isActive,
}: ElementFilterPanelProps) {
  // Only show top ~10 tags to avoid overwhelming
  const popularTags = tags.slice(0, 12)

  return (
    <div className="space-y-4 rounded-xl border border-gray-100 bg-gray-50/50 p-4">
      {/* Type Filters */}
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
          Element Type
        </p>
        <div className="flex flex-wrap gap-2">
          {typeOptions.map((option) => (
            <Chip
              key={option.id}
              label={option.label}
              active={types.includes(option.id)}
              onClick={() => onToggleType(option.id)}
            />
          ))}
        </div>
      </div>

      {/* Edge Filter (only when jumps selected or no type filter) */}
      {(types.length === 0 || types.includes('jump')) && (
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
            Takeoff Edge
          </p>
          <div className="flex flex-wrap gap-2">
            {edgeOptions.map((option) => (
              <Chip
                key={option.id}
                label={option.label}
                active={edge === option.id}
                onClick={() => onSetEdge(option.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {popularTags.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">Tags</p>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                active={selectedTags.includes(tag)}
                onClick={() => onToggleTag(tag)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Clear All */}
      {isActive && (
        <button
          onClick={onClearAll}
          className="text-sm font-medium text-ice-600 hover:text-ice-800"
        >
          Clear all filters
        </button>
      )}
    </div>
  )
}
