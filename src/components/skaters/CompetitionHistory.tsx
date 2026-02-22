import type { CompetitionResult } from '../../types/skaters'
import { Badge } from '../ui/Badge'
import { ObjectLink } from '../ui/ObjectLink'
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
                <ObjectLink
                  entity={{
                    type: 'competition',
                    id: result.competitionId,
                    label: result.competitionName,
                  }}
                />
                {result.sourceUrl && (
                  <a
                    href={result.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1.5 inline-block text-gray-400 hover:text-ice-600"
                    title="View source"
                  >
                    <svg className="inline h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                )}
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
