import { formatScore } from '../../lib/format'
import { cn } from '../../lib/cn'

interface ScoreSummaryProps {
  tes: number
  pcs: number
  deductions: number
  total: number
  className?: string
}

export function ScoreSummary({ tes, pcs, deductions, total, className }: ScoreSummaryProps) {
  return (
    <div className={cn('rounded-xl bg-gradient-to-r from-ice-50 to-frost-50 p-6', className)}>
      <h3 className="font-serif text-lg font-semibold text-gray-900">Score Summary</h3>

      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Technical Element Score (TES)</span>
          <span className="font-serif text-lg font-bold tabular-nums text-gray-900">
            {formatScore(tes)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Program Component Score (PCS)</span>
          <span className="font-serif text-lg font-bold tabular-nums text-gray-900">
            {formatScore(pcs)}
          </span>
        </div>

        {deductions > 0 && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-red-600">Deductions</span>
            <span className="font-serif text-lg font-bold tabular-nums text-red-600">
              -{formatScore(deductions)}
            </span>
          </div>
        )}

        <div className="border-t border-gray-200 pt-3">
          <div className="flex items-center justify-between">
            <span className="font-serif text-lg font-semibold text-gray-900">Total Score</span>
            <span className="font-serif text-3xl font-bold tabular-nums text-ice-600">
              {formatScore(total)}
            </span>
          </div>
        </div>
      </div>

      {/* Context */}
      <div className="mt-4 text-xs text-gray-500">
        {total > 300 && (
          <p>Elite world-class score. Among the highest ever recorded in international competition.</p>
        )}
        {total > 250 && total <= 300 && (
          <p>Strong competitive score. Would contend for medals at most ISU Championships.</p>
        )}
        {total > 200 && total <= 250 && (
          <p>Solid international-level score. Competitive at the Grand Prix level.</p>
        )}
        {total > 0 && total <= 200 && (
          <p>Building a program. Focus on clean elements and strong component marks.</p>
        )}
      </div>
    </div>
  )
}
