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
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl font-semibold text-gray-900">Results</h2>
        {results.sourceUrl && (
          <a
            href={results.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-ice-600"
          >
            Source: ISU Results
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        )}
      </div>

      <Tabs
        tabs={disciplines}
        activeTab={activeDiscipline}
        onTabChange={(tab: string) => setActiveDiscipline(tab as typeof activeDiscipline)}
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
