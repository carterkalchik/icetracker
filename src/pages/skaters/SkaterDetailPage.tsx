import { useParams } from 'react-router-dom'
import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { Badge } from '../../components/ui/Badge'
import { Card, CardContent, CardHeader } from '../../components/ui/Card'
import { WatchlistButton } from '../../components/skaters/WatchlistButton'
import { SkaterPhoto } from '../../components/skaters/SkaterPhoto'
import { CompetitionHistory } from '../../components/skaters/CompetitionHistory'
import { ScoreDisplay } from '../../components/ui/ScoreDisplay'
import { SkeletonDetailPage } from '../../components/ui/Skeleton'
import { useAsync } from '../../hooks/useAsync'
import { useWatchlist } from '../../hooks/useWatchlist'
import { getSkaterById } from '../../services/skaters.service'
import { countryFlag, formatCountry } from '../../lib/format'

export function SkaterDetailPage() {
  const { skaterId } = useParams<{ skaterId: string }>()
  const { data: skater, loading } = useAsync(() => getSkaterById(skaterId!))
  const { isWatching, toggle } = useWatchlist()

  if (loading) {
    return <SkeletonDetailPage />
  }

  if (!skater) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-gray-500">Skater not found.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[{ label: 'Skaters', path: '/skaters' }, { label: skater.name }]}
      />

      {/* Header */}
      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <SkaterPhoto
            photo={skater.photo}
            placeholder={skater.photoPlaceholder}
            name={skater.name}
            size="lg"
            showAttribution
          />
          <div>
            <h1 className="font-serif text-3xl font-bold text-gray-900">{skater.name}</h1>
            {skater.isTeam && skater.partnerName && (
              <p className="text-sm text-gray-500">{skater.partnerName}</p>
            )}
            <div className="mt-1 flex items-center gap-2">
              <span className="text-lg">{countryFlag(skater.country)}</span>
              <span className="text-gray-600">{formatCountry(skater.country)}</span>
              <span className="text-gray-300">|</span>
              <Badge variant="ice">{skater.discipline}</Badge>
            </div>
          </div>
        </div>
        <WatchlistButton
          isWatching={isWatching(skater.id)}
          onToggle={() => toggle(skater.id)}
          className="self-start"
        />
      </div>

      {/* Bio */}
      <p className="mt-6 max-w-3xl text-gray-600 leading-relaxed">{skater.bio}</p>

      {/* Personal Bests */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-gray-900">Personal Bests</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {skater.personalBests.map((pb) => (
            <Card key={pb.segment}>
              <CardContent className="text-center">
                <ScoreDisplay score={pb.score} label={pb.segment} size="lg" />
                <p className="mt-2 text-xs text-gray-400">
                  {pb.event}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Signature Elements */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-gray-900">Signature Elements</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skater.signatureElements.map((el) => (
            <Badge key={el} variant="ice" className="px-3 py-1 text-sm">
              {el}
            </Badge>
          ))}
        </div>
      </section>

      {/* Competition History */}
      {skater.competitionResults.length > 0 && (
        <section className="mt-10">
          <h2 className="font-serif text-2xl font-semibold text-gray-900">Competition History</h2>
          <Card className="mt-4">
            <CardHeader>
              <h3 className="text-sm font-medium text-gray-500">Recent Results</h3>
            </CardHeader>
            <CardContent>
              <CompetitionHistory results={skater.competitionResults} />
            </CardContent>
          </Card>
        </section>
      )}
    </div>
  )
}
