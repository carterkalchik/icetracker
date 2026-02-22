import { useState } from 'react'
import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { Tabs } from '../../components/ui/Tabs'
import { BenchmarkChart } from '../../components/scoring/BenchmarkChart'
import { useAsync } from '../../hooks/useAsync'
import { getScoreBenchmarks } from '../../services/scoring.service'

const disciplineTabs = [
  { id: 'Men', label: 'Men' },
  { id: 'Women', label: 'Women' },
  { id: 'Pairs', label: 'Pairs' },
  { id: 'Ice Dance', label: 'Ice Dance' },
]

export function ScoreContextPage() {
  const [activeDiscipline, setActiveDiscipline] = useState('Men')
  const { data: benchmarks, loading } = useAsync(getScoreBenchmarks)

  const filtered = benchmarks?.filter((b) => b.discipline === activeDiscipline) ?? []

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Scoring', path: '/scoring' }, { label: 'Score Context' }]} />

      <div className="mt-6">
        <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Score Context & Benchmarks
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          What do the numbers actually mean? Use these benchmarks and records to understand where a
          score falls relative to the elite field.
        </p>
      </div>

      <Tabs
        tabs={disciplineTabs}
        activeTab={activeDiscipline}
        onTabChange={setActiveDiscipline}
        className="mt-8"
      />

      {loading ? (
        <div className="mt-8 animate-pulse rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="h-6 w-48 rounded bg-gray-200" />
          <div className="mt-6 space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-8 w-full rounded bg-gray-200" />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="mb-6 font-serif text-xl font-semibold text-gray-900">
            {activeDiscipline} — Score Benchmarks
          </h3>
          <BenchmarkChart benchmarks={filtered} />
        </div>
      )}

      <div className="mt-8 rounded-xl bg-ice-50 p-6">
        <h3 className="font-serif text-lg font-semibold text-ice-900">Reading Scores Like a Fan</h3>
        <div className="mt-3 space-y-2 text-sm text-ice-800">
          <p>
            <strong>Short Program vs Free Skate:</strong> The short program is roughly 40% of the
            total score, the free skate is 60%. A strong short gives a huge advantage.
          </p>
          <p>
            <strong>TES vs PCS balance:</strong> Top technical skaters might win on TES but lose on
            PCS to a more artistic competitor. The best champions excel at both.
          </p>
          <p>
            <strong>Season trajectory:</strong> Scores tend to be lower at the start of the season
            (Grand Prix) and peak at Worlds/Olympics as skaters refine their programs.
          </p>
        </div>
      </div>
    </div>
  )
}
