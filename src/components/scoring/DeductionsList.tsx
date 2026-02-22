import type { Deduction } from '../../types/scoring'
import { Card, CardContent } from '../ui/Card'

export function DeductionsList({ deductions }: { deductions: Deduction[] }) {
  return (
    <div className="space-y-4">
      {deductions.map((d) => (
        <Card key={d.id}>
          <CardContent>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{d.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{d.description}</p>
              </div>
              <span className="ml-4 shrink-0 rounded-full bg-red-50 px-3 py-1 font-serif text-lg font-bold tabular-nums text-red-600">
                {d.penalty}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
