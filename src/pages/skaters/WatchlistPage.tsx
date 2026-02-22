import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { SkaterCard } from '../../components/skaters/SkaterCard'
import { SkeletonSkaterCard } from '../../components/ui/Skeleton'
import { useAsync } from '../../hooks/useAsync'
import { useWatchlist } from '../../hooks/useWatchlist'
import { getSkatersByIds } from '../../services/skaters.service'

export function WatchlistPage() {
  const { watchlist, isWatching, toggle } = useWatchlist()
  const { data: skaters, loading } = useAsync(() => getSkatersByIds(watchlist))

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[{ label: 'Skaters', path: '/skaters' }, { label: 'Watchlist' }]}
      />

      <div className="mt-6">
        <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Your Watchlist
        </h1>
        <p className="mt-2 text-gray-600">
          Skaters you're following. Star any skater to add them here.
        </p>
      </div>

      {loading ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <SkeletonSkaterCard key={i} />
          ))}
        </div>
      ) : !skaters || skaters.length === 0 ? (
        <div className="mt-12 rounded-xl bg-gray-50 p-12 text-center">
          <p className="text-lg text-gray-400">No skaters in your watchlist yet.</p>
          <p className="mt-2 text-sm text-gray-400">
            Browse skaters and tap the star to add them.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skaters.map((skater) => (
            <SkaterCard
              key={skater.id}
              skater={skater}
              isWatching={isWatching(skater.id)}
              onToggleWatch={() => toggle(skater.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
