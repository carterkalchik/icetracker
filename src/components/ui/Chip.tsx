import { cn } from '../../lib/cn'

export function Chip({
  label,
  active,
  onClick,
  className,
}: {
  label: string
  active?: boolean
  onClick?: () => void
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
        active
          ? 'border-ice-500 bg-ice-50 text-ice-700'
          : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50',
        className
      )}
    >
      {label}
    </button>
  )
}
