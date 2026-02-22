import { Link } from 'react-router-dom'
import type { Spin } from '../../types/elements'
import { Card, CardContent, CardHeader } from '../ui/Card'
import { Badge } from '../ui/Badge'

export function SpinCard({ spin }: { spin: Spin }) {
  return (
    <Link to={`/elements/${spin.id}`}>
    <Card className="h-full transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-serif text-lg font-semibold text-gray-900">{spin.name}</h3>
            <p className="text-sm text-gray-500">{spin.abbreviation}</p>
          </div>
          <span className="font-serif text-2xl font-bold tabular-nums text-ice-600">
            {spin.baseValue}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-gray-600">{spin.description}</p>

        <div className="mt-4 flex items-center gap-4">
          <div>
            <p className="text-xs font-medium text-gray-500">Position</p>
            <p className="text-sm capitalize text-gray-700">{spin.position}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500">Level</p>
            <p className="text-sm text-gray-700">{spin.level}</p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {spin.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
    </Link>
  )
}
