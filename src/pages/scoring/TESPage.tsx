import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { Card, CardContent } from '../../components/ui/Card'
import { GOEScaleVisual } from '../../components/elements/GOEScaleVisual'
import { useAsync } from '../../hooks/useAsync'
import { getGOETable } from '../../services/scoring.service'

export function TESPage() {
  const { data: goeTable, loading } = useAsync(getGOETable)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Scoring', path: '/scoring' }, { label: 'TES' }]} />

      <div className="mt-6">
        <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Technical Element Score (TES)
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          The TES is the sum of all individual element scores. Each element starts with a base value,
          then judges adjust it with a Grade of Execution (GOE) from -5 to +5.
        </p>
      </div>

      {/* How TES works */}
      <div className="mt-8 rounded-xl bg-ice-50 p-6">
        <h3 className="font-serif text-lg font-semibold text-ice-900">How It Works</h3>
        <div className="mt-3 space-y-3 text-sm text-ice-800">
          <p>
            <strong>1. Base Value (BV):</strong> Every element has a fixed base value based on its
            difficulty. A quad Lutz is worth 11.5, while a triple is 5.9.
          </p>
          <p>
            <strong>2. Grade of Execution (GOE):</strong> Nine judges each assign a grade from -5 to
            +5. The highest and lowest are trimmed, and the rest are averaged.
          </p>
          <p>
            <strong>3. GOE Value:</strong> The average GOE grade is converted to a point value — it's
            a percentage of the base value. A +3 GOE on a 10.0 BV element adds 3.0 points.
          </p>
          <p>
            <strong>4. Element Score = BV + GOE Value</strong>
          </p>
        </div>
      </div>

      {/* GOE Scale */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-gray-900">The GOE Scale</h2>
        <GOEScaleVisual className="mt-4" />

        {loading || !goeTable ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="h-5 w-12 rounded bg-gray-200" />
                <div className="mt-2 h-3 w-full rounded bg-gray-200" />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {goeTable.map((row) => (
              <Card key={row.grade}>
                <CardContent className="py-3">
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`font-serif text-xl font-bold tabular-nums ${
                        row.grade > 0
                          ? 'text-emerald-600'
                          : row.grade < 0
                            ? 'text-red-500'
                            : 'text-gray-400'
                      }`}
                    >
                      {row.label}
                    </span>
                    <span className="text-xs text-gray-500">
                      {row.percentageOfBase > 0 ? '+' : ''}
                      {row.percentageOfBase}% of BV
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-gray-600">{row.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Example calculation */}
      <section className="mt-12">
        <h2 className="font-serif text-2xl font-semibold text-gray-900">Example Calculation</h2>
        <Card className="mt-4">
          <CardContent>
            <h3 className="font-medium text-gray-900">Quad Lutz with +3 GOE</h3>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Base Value (4Lz)</span>
                <span className="tabular-nums font-medium">11.50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">GOE (+3 = +30% of BV)</span>
                <span className="tabular-nums font-medium text-emerald-600">+3.45</span>
              </div>
              <div className="flex justify-between border-t border-gray-100 pt-2">
                <span className="font-medium text-gray-900">Element Score</span>
                <span className="font-serif text-lg font-bold tabular-nums">14.95</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
