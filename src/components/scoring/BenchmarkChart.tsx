import type { ScoreBenchmark } from '../../types/scoring'
import { cn } from '../../lib/cn'
import { formatScore } from '../../lib/format'
import { RichDescription } from '../ui/RichDescription'

interface BenchmarkChartProps {
  benchmarks: ScoreBenchmark[]
  className?: string
}

export function BenchmarkChart({ benchmarks, className }: BenchmarkChartProps) {
  const maxScore = Math.max(...benchmarks.map((b) => b.score))

  return (
    <div className={cn('space-y-3', className)}>
      {benchmarks.map((b, i) => {
        const widthPct = (b.score / maxScore) * 100
        return (
          <div key={i}>
            <div className="mb-1 flex items-baseline justify-between">
              <span className="text-sm font-medium text-gray-700">{b.label}</span>
              <span className="text-sm tabular-nums text-gray-500">{formatScore(b.score)}</span>
            </div>
            <div className="h-4 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-ice-400 to-ice-600 transition-all"
                style={{ width: `${widthPct}%` }}
              />
            </div>
            <RichDescription text={b.description} className="mt-0.5 text-xs text-gray-400" />
          </div>
        )
      })}
    </div>
  )
}
