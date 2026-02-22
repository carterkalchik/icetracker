import { Link } from 'react-router-dom'
import type { CompetitionResult } from '../../types/skaters'
import { Badge } from '../ui/Badge'
import { formatScore, formatDate } from '../../lib/format'

export function CompetitionHistory({ results }: { results: CompetitionResult[] }) {
  const sorted = [...results].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 text-left">
            <th className="pb-3 pr-4 font-medium text-gray-500">Competition</th>
            <th className="pb-3 pr-4 font-medium text-gray-500">Season</th>
            <th className="pb-3 pr-4 text-right font-medium text-gray-500">Place</th>
            <th className="pb-3 pr-4 text-right font-medium text-gray-500">Total</th>
            <th className="pb-3 pr-4 text-right font-medium text-gray-500">SP/RD</th>
            <th className="pb-3 text-right font-medium text-gray-500">FS/FD</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((result, i) => (
            <tr key={i} className="border-b border-gray-50">
              <td className="py-3 pr-4">
                <Link
                  to={`/competitions/${result.competitionId}`}
                  className="font-medium text-gray-900 hover:text-ice-600"
                >
                  {result.competitionName}
                </Link>
                <span className="ml-2 text-xs text-gray-400">{formatDate(result.date)}</span>
              </td>
              <td className="py-3 pr-4 text-gray-500">{result.season}</td>
              <td className="py-3 pr-4 text-right">
                <span className="font-medium">{result.placement}</span>
                {result.medal && (
                  <Badge
                    variant={result.medal === 'gold' ? 'gold' : result.medal === 'silver' ? 'silver' : 'bronze'}
                    className="ml-2"
                  >
                    {result.medal}
                  </Badge>
                )}
              </td>
              <td className="py-3 pr-4 text-right font-serif font-bold tabular-nums">
                {formatScore(result.totalScore)}
              </td>
              <td className="py-3 pr-4 text-right tabular-nums text-gray-600">
                {result.shortScore ? formatScore(result.shortScore) : '—'}
              </td>
              <td className="py-3 text-right tabular-nums text-gray-600">
                {result.freeScore ? formatScore(result.freeScore) : '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
