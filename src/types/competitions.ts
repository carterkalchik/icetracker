import type { Country, Discipline, Medal } from './common'

export interface Competition {
  id: string
  name: string
  shortName: string
  location: string
  country: string
  startDate: string
  endDate: string
  season: string
  type: 'olympics' | 'worlds' | 'gp-final' | 'grand-prix' | 'four-continents' | 'europeans' | 'other'
  disciplines: Discipline[]
  isUpcoming: boolean
}

export interface Season {
  id: string
  name: string
  startYear: number
  endYear: number
  competitions: string[] // competition IDs
}

export interface CalendarEntry {
  competitionId: string
  month: number
  year: number
}

export interface CompetitionResultEntry {
  rank: number
  skaterId: string
  skaterName: string
  country: Country
  totalScore: number
  shortScore: number
  freeScore: number
  medal?: Medal
}

export interface DisciplineResults {
  discipline: Discipline
  entries: CompetitionResultEntry[]
}

export interface CompetitionFullResults {
  competitionId: string
  results: DisciplineResults[]
  sourceUrl?: string
}
