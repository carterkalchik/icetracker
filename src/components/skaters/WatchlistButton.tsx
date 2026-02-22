import { cn } from '../../lib/cn'

export function WatchlistButton({
  isWatching,
  onToggle,
  className,
}: {
  isWatching: boolean
  onToggle: () => void
  className?: string
}) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onToggle()
      }}
      className={cn(
        'rounded-full p-1.5 transition-colors',
        isWatching
          ? 'bg-ice-100 text-ice-600 hover:bg-ice-200'
          : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600',
        className
      )}
      title={isWatching ? 'Remove from watchlist' : 'Add to watchlist'}
    >
      <svg className="h-5 w-5" fill={isWatching ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    </button>
  )
}
