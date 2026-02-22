import { cn } from '../../lib/cn'
import { formatScore } from '../../lib/format'

export function ScoreDisplay({
  score,
  label,
  size = 'md',
  className,
}: {
  score: number
  label?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  }

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <span className={cn('font-serif font-bold tabular-nums', sizeClasses[size])}>
        {formatScore(score)}
      </span>
      {label && <span className="mt-1 text-xs text-gray-500">{label}</span>}
    </div>
  )
}
