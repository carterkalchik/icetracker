import { cn } from '../../lib/cn'

interface JumpDiagramProps {
  jumps: { name: string; abbreviation: string; baseValue: number; difficulty: number }[]
  className?: string
}

export function JumpDiagram({ jumps, className }: JumpDiagramProps) {
  const maxValue = Math.max(...jumps.map((j) => j.baseValue))

  return (
    <div className={cn('space-y-2', className)}>
      <h4 className="text-sm font-medium text-gray-700">Base Value Comparison</h4>
      <div className="space-y-1.5">
        {jumps.map((jump) => {
          const widthPct = (jump.baseValue / maxValue) * 100
          return (
            <div key={jump.abbreviation} className="flex items-center gap-3">
              <span className="w-8 text-right text-xs font-medium text-gray-500">
                {jump.abbreviation}
              </span>
              <div className="flex-1">
                <div
                  className="h-5 rounded-r bg-gradient-to-r from-ice-400 to-ice-600 transition-all"
                  style={{ width: `${widthPct}%` }}
                />
              </div>
              <span className="w-10 text-right text-xs tabular-nums text-gray-600">
                {jump.baseValue}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
