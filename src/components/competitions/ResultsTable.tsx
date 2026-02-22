import type { CompetitionResultEntry } from '../../types/competitions'
import { Badge } from '../ui/Badge'
import { ObjectLink } from '../ui/ObjectLink'
import { countryFlag, formatScore } from '../../lib/format'

interface ResultsTableProps {
  entries: CompetitionResultEntry[]
}

function medalVariant(medal?: string) {
  if (medal === 'gold') return 'gold'
  if (medal === 'silver') return 'silver'
  if (medal === 'bronze') return 'bronze'
  return undefined
}

export function ResultsTable({ entries }: ResultsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
            <th className="py-3 pr-2">Rank</th>
            <th className="py-3 px-2">Skater</th>
            <th className="py-3 px-2">Country</th>
            <th className="py-3 px-2 text-right">SP/RD</th>
            <th className="py-3 px-2 text-right">FS/FD</th>
            <th className="py-3 pl-2 text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => {
            const variant = medalVariant(entry.medal)
            return (
              <tr
                key={entry.skaterId}
                className={`border-b border-gray-100 transition-colors hover:bg-gray-50 ${
                  entry.medal ? 'bg-gray-50/50' : ''
                }`}
              >
                <td className="py-3 pr-2">
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif font-semibold tabular-nums text-gray-900">
                      {entry.rank}
                    </span>
                    {variant && <Badge variant={variant}>{entry.medal}</Badge>}
                  </div>
                </td>
                <td className="py-3 px-2">
                  <ObjectLink
                    entity={{
                      type: 'skater',
                      id: entry.skaterId,
                      label: entry.skaterName,
                    }}
                  />
                </td>
                <td className="py-3 px-2">
                  <span className="text-gray-600">
                    {countryFlag(entry.country)} {entry.country}
                  </span>
                </td>
                <td className="py-3 px-2 text-right tabular-nums text-gray-600">
                  {formatScore(entry.shortScore)}
                </td>
                <td className="py-3 px-2 text-right tabular-nums text-gray-600">
                  {formatScore(entry.freeScore)}
                </td>
                <td className="py-3 pl-2 text-right">
                  <span className="font-serif font-bold tabular-nums text-ice-600">
                    {formatScore(entry.totalScore)}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
