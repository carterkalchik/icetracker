import { Link } from 'react-router-dom'
import type { Competition } from '../../types/competitions'
import { Card, CardContent } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { formatDateRange } from '../../lib/format'
import { competitionTypes } from '../../data/competitions/competition-types'

export function CompetitionCard({ competition }: { competition: Competition }) {
  const typeInfo = competitionTypes[competition.type]
  const variant = typeInfo.color === 'gold' ? 'gold' : typeInfo.color === 'ice' ? 'ice' : 'frost'

  return (
    <Link to={`/competitions/${competition.id}`}>
      <Card
        className="h-full transition-shadow hover:shadow-md"
        featured={competition.type === 'olympics' || competition.type === 'worlds'}
      >
        <CardContent>
          <div className="flex items-start justify-between">
            <Badge variant={variant}>{typeInfo.label}</Badge>
            {competition.isUpcoming && (
              <Badge variant="ice">Upcoming</Badge>
            )}
          </div>
          <h3 className="mt-3 font-serif text-lg font-semibold text-gray-900">
            {competition.shortName}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {competition.location}, {competition.country}
          </p>
          <p className="mt-1 text-sm text-gray-400">
            {formatDateRange(competition.startDate, competition.endDate)}
          </p>
          <div className="mt-3 flex flex-wrap gap-1">
            {competition.disciplines.map((d) => (
              <Badge key={d} variant="outline">{d}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
