import { Card, CardContent, CardHeader } from '../ui/Card'
import { formatScore } from '../../lib/format'

interface ScoreBreakdownCardProps {
  tes: number
  pcs: number
  deductions: number
  label?: string
}

export function ScoreBreakdownCard({ tes, pcs, deductions, label }: ScoreBreakdownCardProps) {
  const total = tes + pcs + deductions

  return (
    <Card>
      <CardHeader>
        <h3 className="font-serif text-lg font-semibold text-gray-900">
          {label ?? 'Score Breakdown'}
        </h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Technical Element Score (TES)</span>
            <span className="font-serif text-lg font-bold tabular-nums text-ice-600">
              {formatScore(tes)}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-ice-500"
              style={{ width: `${(tes / total) * 100}%` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Program Component Score (PCS)</span>
            <span className="font-serif text-lg font-bold tabular-nums text-frost-600">
              {formatScore(pcs)}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-frost-500"
              style={{ width: `${(pcs / total) * 100}%` }}
            />
          </div>

          {deductions !== 0 && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Deductions</span>
              <span className="font-serif text-lg font-bold tabular-nums text-red-500">
                {formatScore(deductions)}
              </span>
            </div>
          )}

          <div className="border-t border-gray-100 pt-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">Total Score</span>
              <span className="font-serif text-2xl font-bold tabular-nums text-gray-900">
                {formatScore(total)}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
