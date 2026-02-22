import { Card, CardContent } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { ObjectLink } from '../ui/ObjectLink'
import { RichDescription } from '../ui/RichDescription'
import { formatDate } from '../../lib/format'
import type { NewsArticle } from '../../types/news'

const sourceColors: Record<string, 'ice' | 'frost' | 'gold' | 'default'> = {
  'ISU': 'ice',
  'Olympics.com': 'gold',
  'NBC Sports': 'frost',
  'NBC Olympics': 'frost',
  'U.S. Figure Skating': 'ice',
  'British Ice Skating': 'ice',
  'Phil Hersh': 'default',
}

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Card className="h-full">
      <CardContent>
        <div className="flex items-center justify-between">
          <Badge variant={sourceColors[article.source] ?? 'default'}>
            {article.source}
          </Badge>
          <span className="text-xs text-gray-400">
            {formatDate(article.publishedAt)}
          </span>
        </div>

        <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-gray-900">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ice-700 transition-colors"
          >
            {article.title}
          </a>
        </h3>

        <RichDescription
          text={article.summary}
          className="mt-2 text-sm leading-relaxed text-gray-600"
        />

        {article.entities.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {article.entities.map((entity) => (
              <ObjectLink
                key={`${entity.type}-${entity.id}`}
                entity={entity}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
