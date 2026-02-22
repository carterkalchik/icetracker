import { results202526 } from './results-2025-26'
import { results202425 } from './results-2024-25'
import { results202324 } from './results-2023-24'
import { results202223 } from './results-2022-23'
import { results202122 } from './results-2021-22'
import type { CompetitionFullResults } from '../../types/competitions'

export const allResults: CompetitionFullResults[] = [
  ...results202526,
  ...results202425,
  ...results202324,
  ...results202223,
  ...results202122,
]

export function getResultsByCompetitionId(competitionId: string): CompetitionFullResults | undefined {
  return allResults.find((r) => r.competitionId === competitionId)
}
