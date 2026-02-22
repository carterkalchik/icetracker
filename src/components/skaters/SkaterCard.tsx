import { Link } from 'react-router-dom'
import type { Skater } from '../../types/skaters'
import { Card, CardContent } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { WatchlistButton } from './WatchlistButton'
import { SkaterPhoto } from './SkaterPhoto'
import { countryFlag } from '../../lib/format'
import { formatScore } from '../../lib/format'

interface SkaterCardProps {
  skater: Skater
  isWatching: boolean
  onToggleWatch: () => void
}

export function SkaterCard({ skater, isWatching, onToggleWatch }: SkaterCardProps) {
  const totalPB = skater.personalBests.find((pb) => pb.segment === 'Total')
  const bestMedal = skater.competitionResults.find((r) => r.medal)

  return (
    <Link to={`/skaters/${skater.id}`}>
      <Card className="h-full transition-shadow hover:shadow-md">
        <CardContent>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <SkaterPhoto
                photo={skater.photo}
                placeholder={skater.photoPlaceholder}
                name={skater.name}
                size="sm"
              />
              <div>
                <h3 className="font-serif text-lg font-semibold text-gray-900">{skater.name}</h3>
                <p className="text-sm text-gray-500">
                  {countryFlag(skater.country)} {skater.country} &middot; {skater.discipline}
                </p>
              </div>
            </div>
            <WatchlistButton isWatching={isWatching} onToggle={onToggleWatch} />
          </div>

          <p className="mt-3 line-clamp-2 text-sm text-gray-600">{skater.bio}</p>

          <div className="mt-4 flex items-center gap-3">
            {totalPB && (
              <div>
                <p className="text-xs text-gray-500">Personal Best</p>
                <p className="font-serif text-lg font-bold tabular-nums text-ice-600">
                  {formatScore(totalPB.score)}
                </p>
              </div>
            )}
            {bestMedal && (
              <Badge
                variant={bestMedal.medal === 'gold' ? 'gold' : bestMedal.medal === 'silver' ? 'silver' : 'bronze'}
              >
                {bestMedal.medal} — {bestMedal.competitionName}
              </Badge>
            )}
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {skater.signatureElements.slice(0, 3).map((el) => (
              <Badge key={el} variant="outline">
                {el}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
