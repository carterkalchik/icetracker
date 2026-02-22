import { cn } from '../../lib/cn'

const GOE_SCALE = [
  { grade: -5, label: '-5', color: 'bg-red-600' },
  { grade: -4, label: '-4', color: 'bg-red-500' },
  { grade: -3, label: '-3', color: 'bg-red-400' },
  { grade: -2, label: '-2', color: 'bg-orange-400' },
  { grade: -1, label: '-1', color: 'bg-orange-300' },
  { grade: 0, label: '0', color: 'bg-gray-300' },
  { grade: 1, label: '+1', color: 'bg-emerald-300' },
  { grade: 2, label: '+2', color: 'bg-emerald-400' },
  { grade: 3, label: '+3', color: 'bg-emerald-500' },
  { grade: 4, label: '+4', color: 'bg-emerald-600' },
  { grade: 5, label: '+5', color: 'bg-emerald-700' },
]

export function GOEScaleVisual({
  highlightGrade,
  className,
}: {
  highlightGrade?: number
  className?: string
}) {
  return (
    <div className={cn('flex items-end gap-1', className)}>
      {GOE_SCALE.map(({ grade, label, color }) => {
        const height = 12 + Math.abs(grade) * 6
        const isHighlighted = highlightGrade === grade

        return (
          <div key={grade} className="flex flex-col items-center gap-1">
            <div
              className={cn(
                'w-6 rounded-sm transition-all',
                color,
                isHighlighted ? 'opacity-100 ring-2 ring-ice-500' : 'opacity-60'
              )}
              style={{ height: `${height}px` }}
            />
            <span className="text-[10px] text-gray-500">{label}</span>
          </div>
        )
      })}
    </div>
  )
}
