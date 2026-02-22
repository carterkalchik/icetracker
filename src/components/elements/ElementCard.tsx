import { Link } from 'react-router-dom'
import type { StepSequence, PairElement, DanceElement } from '../../types/elements'
import { Card, CardContent, CardHeader } from '../ui/Card'
import { Badge } from '../ui/Badge'

type GenericElement = StepSequence | PairElement | DanceElement

export function ElementCard({ element }: { element: GenericElement }) {
  const subtitle =
    'category' in element ? element.category.replace(/-/g, ' ') : `Level ${element.level}`

  return (
    <Link to={`/elements/${element.id}`}>
    <Card className="h-full transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-serif text-lg font-semibold text-gray-900">{element.name}</h3>
            <p className="text-sm capitalize text-gray-500">
              {element.abbreviation} &middot; {subtitle}
            </p>
          </div>
          <span className="font-serif text-2xl font-bold tabular-nums text-ice-600">
            {element.baseValue}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-gray-600">{element.description}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {element.tags.map((tag) => (
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
