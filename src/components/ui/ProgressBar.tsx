import { cn } from '../../lib/cn'

export function ProgressBar({
  value,
  max = 100,
  className,
  color = 'ice',
}: {
  value: number
  max?: number
  className?: string
  color?: 'ice' | 'frost' | 'gold'
}) {
  const percentage = Math.min((value / max) * 100, 100)

  const colorClass = {
    ice: 'bg-ice-500',
    frost: 'bg-frost-500',
    gold: 'bg-gold',
  }[color]

  return (
    <div className={cn('h-2 overflow-hidden rounded-full bg-gray-100', className)}>
      <div
        className={cn('h-full rounded-full transition-all', colorClass)}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}
