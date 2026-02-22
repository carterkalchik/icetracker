import { useParams } from 'react-router-dom'
import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { Badge } from '../../components/ui/Badge'
import { Card, CardContent } from '../../components/ui/Card'
import { CompetitionResultsView } from '../../components/competitions/CompetitionResultsView'
import { SkeletonDetailPage } from '../../components/ui/Skeleton'
import { useAsync } from '../../hooks/useAsync'
import { getCompetitionById, getResultsByCompetitionId } from '../../services/competitions.service'
import { formatDateRange } from '../../lib/format'
import { competitionTypes } from '../../data/competitions/competition-types'

export function CompetitionDetailPage() {
  const { competitionId } = useParams<{ competitionId: string }>()
  const { data: competition, loading, error } = useAsync(() => getCompetitionById(competitionId!))
  const { data: results } = useAsync(() => getResultsByCompetitionId(competitionId!), [competitionId])

  if (loading) {
    return <SkeletonDetailPage />
  }

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
          <p className="text-sm font-medium text-red-800">Failed to load competition. Please try again later.</p>
        </div>
      </div>
    )
  }

  if (!competition) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-gray-500">Competition not found.</p>
      </div>
    )
  }

  const typeInfo = competitionTypes[competition.type]

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: 'Competitions', path: '/competitions' },
          { label: competition.shortName },
        ]}
      />

      <div className="mt-6">
        <Badge
          variant={typeInfo.color === 'gold' ? 'gold' : typeInfo.color === 'ice' ? 'ice' : 'frost'}
        >
          {typeInfo.label}
        </Badge>
        <h1 className="mt-3 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          {competition.name}
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          {competition.location}, {competition.country}
        </p>
        <p className="mt-1 text-gray-500">
          {formatDateRange(competition.startDate, competition.endDate)}
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Card>
          <CardContent>
            <h3 className="font-serif text-lg font-semibold text-gray-900">Disciplines</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {competition.disciplines.map((d) => (
                <Badge key={d} variant="ice" className="px-3 py-1 text-sm">
                  {d}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="font-serif text-lg font-semibold text-gray-900">Event Info</h3>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500">Season</dt>
                <dd className="font-medium">{competition.season}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Type</dt>
                <dd className="font-medium">{typeInfo.label}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Status</dt>
                <dd>
                  <Badge variant={competition.isUpcoming ? 'ice' : 'default'}>
                    {competition.isUpcoming ? 'Upcoming' : 'Completed'}
                  </Badge>
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      {competition.type === 'olympics' && (
        <div className="mt-8 rounded-xl bg-gradient-to-r from-ice-50 to-frost-50 p-6">
          <h3 className="font-serif text-lg font-semibold text-ice-900">
            About the {competition.shortName}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ice-800">
            The Olympic Winter Games are the pinnacle of figure skating. The competition features all
            four disciplines and a team event. Medals at the Olympics represent the highest
            achievement in the sport. The 2026 Games in Milan-Cortina mark the return of the
            Olympics to Italy.
          </p>
        </div>
      )}

      {/* Competition Results */}
      {results && (
        <div className="mt-10">
          <CompetitionResultsView results={results} />
        </div>
      )}
    </div>
  )
}
