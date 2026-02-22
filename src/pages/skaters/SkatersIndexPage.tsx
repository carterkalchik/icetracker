import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { Chip } from '../../components/ui/Chip'
import { SkaterCard } from '../../components/skaters/SkaterCard'
import { SkeletonSkaterCard } from '../../components/ui/Skeleton'
import { useAsync } from '../../hooks/useAsync'
import { useWatchlist } from '../../hooks/useWatchlist'
import { getAllSkaters } from '../../services/skaters.service'
import type { Discipline } from '../../types/common'

const filters: (Discipline | 'All')[] = ['All', 'Men', 'Women', 'Pairs', 'Ice Dance']

export function SkatersIndexPage() {
  const [activeDiscipline, setActiveDiscipline] = useState<Discipline | 'All'>('All')
  const { data: skaters, loading } = useAsync(getAllSkaters)
  const { isWatching, toggle } = useWatchlist()

  const filtered =
    activeDiscipline === 'All'
      ? skaters
      : skaters?.filter((s) => s.discipline === activeDiscipline)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Skaters' }]} />

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Skater Profiles
          </h1>
          <p className="mt-2 max-w-2xl text-gray-600">
            Follow 26 top skaters and teams. Star your favorites to build a personal watchlist.
          </p>
        </div>
        <Link
          to="/skaters/watchlist"
          className="rounded-lg border border-ice-200 bg-ice-50 px-4 py-2 text-sm font-medium text-ice-700 transition-colors hover:bg-ice-100"
        >
          View Watchlist
        </Link>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {filters.map((f) => (
          <Chip
            key={f}
            label={f}
            active={activeDiscipline === f}
            onClick={() => setActiveDiscipline(f)}
          />
        ))}
      </div>

      {loading || !filtered ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonSkaterCard key={i} />
          ))}
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((skater) => (
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
