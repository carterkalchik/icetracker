import { Link } from 'react-router-dom'
import { Card, CardContent } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { formatScore } from '../../lib/format'
import type { SearchResult } from '../../services/search.service'

const typeLabels: Record<string, string> = {
  jump: 'Jump',
  spin: 'Spin',
  step: 'Step Sequence',
  pair: 'Pair Element',
  dance: 'Dance Element',
}

const typeLinks: Record<string, string> = {
  jump: '/elements/jumps',
  spin: '/elements/spins',
  step: '/elements/steps',
  pair: '/elements/pairs',
  dance: '/elements/dance',
}

const typeVariants: Record<string, 'ice' | 'frost' | 'gold'> = {
  jump: 'ice',
  spin: 'frost',
  step: 'gold',
  pair: 'ice',
  dance: 'frost',
}

interface SearchResultCardProps {
  result: SearchResult
  query: string
}

function highlightText(text: string, query: string): React.ReactNode {
  if (!query) return text
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  const parts = text.split(regex)
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="rounded bg-yellow-100 px-0.5 text-yellow-900">
        {part}
      </mark>
    ) : (
      part
    )
  )
}

export function SearchResultCard({ result, query }: SearchResultCardProps) {
  const { element, elementType } = result

  return (
    <Link to={`/elements/${element.id}`}>
      <Card className="h-full transition-shadow hover:shadow-md">
        <CardContent>
          <div className="flex items-start justify-between">
            <Badge variant={typeVariants[elementType]}>{typeLabels[elementType]}</Badge>
            <span className="font-serif text-lg font-bold tabular-nums text-ice-600">
              {formatScore(element.baseValue)}
            </span>
          </div>
          <h3 className="mt-2 font-serif text-lg font-semibold text-gray-900">
            {highlightText(element.name, query)}
          </h3>
          <p className="text-sm text-gray-500">{element.abbreviation}</p>
          <p className="mt-2 line-clamp-2 text-sm text-gray-600">
            {highlightText(element.description, query)}
          </p>
          <div className="mt-3 flex flex-wrap gap-1">
            {element.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {highlightText(tag, query)}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
