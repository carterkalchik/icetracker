import type { CalcElement } from '../../hooks/useScoreCalculator'
import { Badge } from '../ui/Badge'
import { formatScore } from '../../lib/format'

interface CalculatorElementRowProps {
  element: CalcElement
  score: number
  onGoeChange: (goe: number) => void
  onToggleSecondHalf: () => void
  onRemove: () => void
}

export function CalculatorElementRow({
  element,
  score,
  onGoeChange,
  onToggleSecondHalf,
  onRemove,
}: CalculatorElementRowProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-gray-100 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <button
          onClick={onRemove}
          className="flex h-6 w-6 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div>
          <p className="font-serif font-semibold text-gray-900">{element.name}</p>
          <p className="text-xs text-gray-500">
            {element.abbreviation} &middot; BV: {formatScore(element.baseValue)}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Second Half Toggle */}
        <button
          onClick={onToggleSecondHalf}
          className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
            element.isSecondHalf
              ? 'bg-ice-100 text-ice-700'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
        >
          2nd Half {element.isSecondHalf ? '(+10%)' : ''}
        </button>

        {/* GOE Slider */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">GOE</span>
          <input
            type="range"
            min={-5}
            max={5}
            step={1}
            value={element.goe}
            onChange={(e) => onGoeChange(parseInt(e.target.value))}
            className="w-24 accent-ice-600"
          />
          <Badge
            variant={element.goe > 0 ? 'ice' : element.goe < 0 ? 'default' : 'outline'}
          >
            {element.goe > 0 ? '+' : ''}{element.goe}
          </Badge>
        </div>

        {/* Score */}
        <span className="min-w-[60px] text-right font-serif text-lg font-bold tabular-nums text-ice-600">
          {formatScore(score)}
        </span>
      </div>
    </div>
  )
}
