import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { Badge } from '../../components/ui/Badge'
import { Card, CardContent, CardHeader } from '../../components/ui/Card'
import { WatchlistButton } from '../../components/skaters/WatchlistButton'
import { SkaterPhoto } from '../../components/skaters/SkaterPhoto'
import { CompetitionHistory } from '../../components/skaters/CompetitionHistory'
import { ScoreDisplay } from '../../components/ui/ScoreDisplay'
import { SkeletonDetailPage } from '../../components/ui/Skeleton'
import { ObjectLink } from '../../components/ui/ObjectLink'
import { useAsync } from '../../hooks/useAsync'
import { useWatchlist } from '../../hooks/useWatchlist'
import { getSkaterById } from '../../services/skaters.service'
import { getNewsBySkater } from '../../services/news.service'
import { resolveSignatureElement } from '../../services/entity-resolution.service'
import { NewsCard } from '../../components/news/NewsCard'
import { ErrorMessage } from '../../components/ui/ErrorMessage'
import { countryFlag, formatCountry } from '../../lib/format'
import type { EntityRef } from '../../types/object-link'

function SignatureElement({ displayName }: { displayName: string }) {
  const [resolved, setResolved] = useState<EntityRef | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false
    resolveSignatureElement(displayName).then((ref) => {
      if (!cancelled) {
        setResolved(ref)
        setLoaded(true)
      }
    })
    return () => { cancelled = true }
  }, [displayName])

  if (!loaded) {
    return (
      <Badge variant="ice" className="px-3 py-1 text-sm">
        {displayName}
      </Badge>
    )
  }

  if (resolved) {
    return <ObjectLink entity={resolved} className="px-3 py-1 text-sm" />
  }

  return (
    <Badge variant="ice" className="px-3 py-1 text-sm">
      {displayName}
    </Badge>
  )
}

export function SkaterDetailPage() {
  const { skaterId } = useParams<{ skaterId: string }>()
  const { data: skater, loading, error } = useAsync(() => getSkaterById(skaterId!))
  const { data: skaterNews } = useAsync(() => getNewsBySkater(skaterId!), [skaterId])
  const { isWatching, toggle } = useWatchlist()

  if (loading) {
    return <SkeletonDetailPage />
  }

  if (error) {
    return <ErrorMessage message="Failed to load skater. Please try again later." />
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
      <div className="mt-6 max-w-3xl">
        <p className="text-gray-600 leading-relaxed">{skater.bio}</p>
        {skater.bioSourceUrl && (
          <a
            href={skater.bioSourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1 text-xs text-gray-400 hover:text-ice-600"
          >
            Source
            <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        )}
      </div>

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
                  {pb.sourceUrl && (
                    <a
                      href={pb.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 inline-block text-gray-400 hover:text-ice-600"
                      title="View source"
                    >
                      <svg className="inline h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  )}
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
            <SignatureElement key={el} displayName={el} />
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

      {/* Recent News */}
      {skaterNews && skaterNews.length > 0 && (
        <section className="mt-10">
          <h2 className="font-serif text-2xl font-semibold text-gray-900">Recent News</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skaterNews.slice(0, 3).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
