import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { Tabs } from '../../components/ui/Tabs'
import { CalendarTimeline } from '../../components/competitions/CalendarTimeline'
import { useAsync } from '../../hooks/useAsync'
import { getCompetitionsBySeason, getSeasons } from '../../services/competitions.service'

export function CompetitionsIndexPage() {
  const [activeSeason, setActiveSeason] = useState('2025-26')
  const { data: seasons } = useAsync(getSeasons)
  const { data: competitions, loading } = useAsync(() => getCompetitionsBySeason(activeSeason), [activeSeason])

  const seasonTabs = seasons?.map((s) => ({ id: s.id, label: s.name })) ?? [
    { id: '2025-26', label: '2025–26 Season' },
    { id: '2024-25', label: '2024–25 Season' },
  ]

  // Re-fetch when season changes — use key trick
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Competitions' }]} />

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Competitions
          </h1>
          <p className="mt-2 max-w-2xl text-gray-600">
            The figure skating season calendar — from fall Grand Prix events through the Olympics and
            Worlds. Track when and where every major competition takes place.
          </p>
        </div>
        <Link
          to="/competitions/season-guide"
          className="rounded-lg border border-frost-200 bg-frost-50 px-4 py-2 text-sm font-medium text-frost-700 transition-colors hover:bg-frost-100"
        >
          Season Guide
        </Link>
      </div>

      <Tabs
        tabs={seasonTabs}
        activeTab={activeSeason}
        onTabChange={setActiveSeason}
        className="mt-8"
      />

      {loading || !competitions ? (
        <div className="mt-8 space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="animate-pulse rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-200" />
                <div className="flex-1">
                  <div className="h-4 w-48 rounded bg-gray-200" />
                  <div className="mt-2 h-3 w-32 rounded bg-gray-200" />
                </div>
                <div className="h-6 w-20 rounded-full bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8">
          <CalendarTimeline
            competitions={competitions.sort(
              (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
            )}
          />
        </div>
      )}
    </div>
  )
}
