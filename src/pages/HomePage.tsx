import { Link } from 'react-router-dom'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { SkaterPhoto } from '../components/skaters/SkaterPhoto'
import { Skeleton, SkeletonSkaterCard } from '../components/ui/Skeleton'
import { useAsync } from '../hooks/useAsync'
import { getAllSkaters } from '../services/skaters.service'
import { getUpcomingCompetitions, getAllCompetitions } from '../services/competitions.service'
import { countryFlag, formatDateRange, formatScore } from '../lib/format'
import { competitionTypes } from '../data/competitions/competition-types'
import type { Skater } from '../types/skaters'
import type { Competition } from '../types/competitions'

const sections = [
  {
    title: 'Elements Encyclopedia',
    description: 'Learn every jump, spin, and step',
    path: '/elements',
    icon: '\u26f8',
    color: 'border-l-ice-500',
  },
  {
    title: 'Scoring Explained',
    description: 'Understand TES, PCS, and GOE',
    path: '/scoring',
    icon: '\uD83D\uDCCA',
    color: 'border-l-frost-500',
  },
  {
    title: 'Skater Profiles',
    description: 'Follow top skaters and teams',
    path: '/skaters',
    icon: '\uD83C\uDFC5',
    color: 'border-l-gold',
  },
  {
    title: 'Competitions',
    description: 'Season calendar and results',
    path: '/competitions',
    icon: '\uD83C\uDFC6',
    color: 'border-l-bronze',
  },
]

const learningPath = [
  { step: 1, label: 'Learn the 6 jump types', path: '/elements/jumps', time: '5 min' },
  { step: 2, label: 'Understand how scoring works', path: '/scoring/tes', time: '5 min' },
  { step: 3, label: 'Explore the PCS components', path: '/scoring/pcs', time: '3 min' },
  { step: 4, label: 'Try the Score Calculator', path: '/scoring/calculator', time: '5 min' },
  { step: 5, label: 'Pick skaters to follow', path: '/skaters', time: '3 min' },
]

function getFeaturedSkaters(skaters: Skater[]): Skater[] {
  // Pick Olympic gold medalists or highest-scoring skaters
  const withOlympicMedals = skaters.filter(
    (s) => s.competitionResults.some((r) => r.competitionId.includes('olympics') && r.medal === 'gold')
  )
  if (withOlympicMedals.length >= 4) return withOlympicMedals.slice(0, 4)

  // Fallback: highest PB total scores
  return [...skaters]
    .sort((a, b) => {
      const aPB = a.personalBests.find((p) => p.segment === 'Total')?.score ?? 0
      const bPB = b.personalBests.find((p) => p.segment === 'Total')?.score ?? 0
      return bPB - aPB
    })
    .slice(0, 4)
}

function getRecentResults(competitions: Competition[]): Competition[] {
  return competitions
    .filter((c) => !c.isUpcoming)
    .sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime())
    .slice(0, 3)
}

export function HomePage() {
  const { data: skaters } = useAsync(getAllSkaters)
  const { data: upcoming } = useAsync(getUpcomingCompetitions)
  const { data: allCompetitions } = useAsync(getAllCompetitions)

  const featured = skaters ? getFeaturedSkaters(skaters) : []
  const recentComps = allCompetitions ? getRecentResults(allCompetitions) : []

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-ice-50 via-ice-50/50 to-white py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Badge variant="ice" className="mb-4 px-3 py-1 text-sm">2025-26 Season</Badge>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Your Guide to <span className="text-ice-600">Figure Skating</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            From the 2026 Milan Olympics and beyond. Learn the elements, understand the scoring,
            follow the skaters, and never miss a competition.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/elements"
              className="rounded-lg bg-ice-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ice-700"
            >
              Start Learning
            </Link>
            <Link
              to="/skaters"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Browse Skaters
            </Link>
          </div>
        </div>
      </section>

      {/* Section navigation */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <Link key={section.path} to={section.path}>
              <Card className={`h-full border-l-4 ${section.color} transition-shadow hover:shadow-md`}>
                <CardContent className="py-4">
                  <span className="text-2xl">{section.icon}</span>
                  <h2 className="mt-2 font-serif text-lg font-semibold text-gray-900">
                    {section.title}
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">{section.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Skaters */}
      <section className="border-t border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900">Featured Skaters</h2>
              <p className="mt-1 text-sm text-gray-600">Olympic champions and top competitors</p>
            </div>
            <Link
              to="/skaters"
              className="text-sm font-medium text-ice-600 hover:text-ice-800"
            >
              View all &rarr;
            </Link>
          </div>

          {!skaters ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonSkaterCard key={i} />
              ))}
            </div>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((skater) => {
                const totalPB = skater.personalBests.find((p) => p.segment === 'Total')
                const olympicResult = skater.competitionResults.find(
                  (r) => r.competitionId.includes('olympics') && r.medal
                )

                return (
                  <Link key={skater.id} to={`/skaters/${skater.id}`}>
                    <Card className="h-full transition-shadow hover:shadow-md">
                      <CardContent className="text-center py-5">
                        <SkaterPhoto
                          photo={skater.photo}
                          placeholder={skater.photoPlaceholder}
                          name={skater.name}
                          size="md"
                          className="mx-auto"
                        />
                        <h3 className="mt-3 font-serif text-base font-semibold text-gray-900">
                          {skater.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {countryFlag(skater.country)} {skater.discipline}
                        </p>
                        {olympicResult && (
                          <Badge
                            variant={olympicResult.medal === 'gold' ? 'gold' : olympicResult.medal === 'silver' ? 'silver' : 'bronze'}
                            className="mt-2"
                          >
                            Olympic {olympicResult.medal}
                          </Badge>
                        )}
                        {totalPB && (
                          <p className="mt-2 font-serif text-lg font-bold tabular-nums text-ice-600">
                            {formatScore(totalPB.score)}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Competitions + Recent Results side by side */}
      <section className="border-t border-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Upcoming */}
            <div>
              <div className="flex items-end justify-between">
                <h2 className="font-serif text-2xl font-bold text-gray-900">Upcoming Events</h2>
                <Link to="/competitions" className="text-sm font-medium text-ice-600 hover:text-ice-800">
                  Full calendar &rarr;
                </Link>
              </div>
              {!upcoming ? (
                <div className="mt-4 space-y-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="animate-pulse rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="mt-2 h-3 w-48" />
                    </div>
                  ))}
                </div>
              ) : upcoming.length === 0 ? (
                <p className="mt-4 text-sm text-gray-500">No upcoming competitions scheduled.</p>
              ) : (
                <div className="mt-4 space-y-3">
                  {upcoming.slice(0, 4).map((comp) => {
                    const typeInfo = competitionTypes[comp.type]
                    return (
                      <Link key={comp.id} to={`/competitions/${comp.id}`}>
                        <Card className="transition-shadow hover:shadow-md">
                          <CardContent className="flex items-center gap-4 py-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ice-50 text-lg">
                              {comp.type === 'olympics' ? '\uD83C\uDFDB' : comp.type === 'worlds' ? '\uD83C\uDF0D' : '\u2B50'}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-900">{comp.shortName}</h3>
                              <p className="text-xs text-gray-500">
                                {comp.location} &middot; {formatDateRange(comp.startDate, comp.endDate)}
                              </p>
                            </div>
                            <Badge variant={typeInfo.color === 'gold' ? 'gold' : 'ice'}>{typeInfo.label}</Badge>
                          </CardContent>
                        </Card>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Recent results */}
            <div>
              <div className="flex items-end justify-between">
                <h2 className="font-serif text-2xl font-bold text-gray-900">Recent Results</h2>
                <Link to="/competitions" className="text-sm font-medium text-ice-600 hover:text-ice-800">
                  All results &rarr;
                </Link>
              </div>
              {!allCompetitions ? (
                <div className="mt-4 space-y-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="animate-pulse rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="mt-2 h-3 w-48" />
                    </div>
                  ))}
                </div>
              ) : recentComps.length === 0 ? (
                <p className="mt-4 text-sm text-gray-500">No completed competitions yet.</p>
              ) : (
                <div className="mt-4 space-y-3">
                  {recentComps.map((comp) => {
                    const typeInfo = competitionTypes[comp.type]
                    return (
                      <Link key={comp.id} to={`/competitions/${comp.id}`}>
                        <Card className="transition-shadow hover:shadow-md">
                          <CardContent className="flex items-center gap-4 py-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-frost-50 text-lg">
                              {comp.type === 'olympics' ? '\uD83C\uDFC5' : '\uD83C\uDFC6'}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-900">{comp.shortName}</h3>
                              <p className="text-xs text-gray-500">
                                {comp.location} &middot; {formatDateRange(comp.startDate, comp.endDate)}
                              </p>
                            </div>
                            <Badge variant={typeInfo.color === 'gold' ? 'gold' : 'frost'}>
                              Completed
                            </Badge>
                          </CardContent>
                        </Card>
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="border-t border-gray-100 bg-gradient-to-b from-ice-50/50 to-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold text-gray-900">
              New to Figure Skating?
            </h2>
            <p className="mt-2 text-gray-600">
              Follow this 20-minute learning path to go from beginner to informed fan.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {learningPath.map((item) => (
              <Link key={item.step} to={item.path}>
                <div className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-ice-300 hover:shadow-md">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ice-100 text-xs font-bold text-ice-700 group-hover:bg-ice-200">
                      {item.step}
                    </span>
                    <span className="text-xs text-gray-400">{item.time}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-900">{item.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Score Calculator CTA */}
      <section className="border-t border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/scoring/calculator"
            className="flex items-center justify-between rounded-xl border-2 border-ice-200 bg-gradient-to-r from-ice-50 to-frost-50 p-8 transition-shadow hover:shadow-md"
          >
            <div>
              <h3 className="font-serif text-xl font-semibold text-ice-900">Score Calculator</h3>
              <p className="mt-1 text-sm text-ice-700">
                Build a program element-by-element and see how the scores add up. The best way to
                learn the ISU judging system.
              </p>
            </div>
            <span className="hidden text-4xl sm:block">🧮</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
