import { useState } from 'react'
import type { CompetitionFullResults } from '../../types/competitions'
import { Tabs } from '../ui/Tabs'
import { ResultsTable } from './ResultsTable'

interface CompetitionResultsViewProps {
  results: CompetitionFullResults
}

export function CompetitionResultsView({ results }: CompetitionResultsViewProps) {
  const disciplines = results.results.map((r) => ({
    id: r.discipline,
    label: r.discipline,
  }))

  const [activeDiscipline, setActiveDiscipline] = useState(disciplines[0]?.id ?? '')

  const activeResults = results.results.find((r) => r.discipline === activeDiscipline)

  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold text-gray-900">Results</h2>

      <Tabs
        tabs={disciplines}
        activeTab={activeDiscipline}
        onTabChange={setActiveDiscipline}
        className="mt-4"
      />

      {activeResults && (
        <div className="mt-4">
          <ResultsTable entries={activeResults.entries} />
        </div>
      )}
    </div>
  )
}
