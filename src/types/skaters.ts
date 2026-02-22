import type { Country, Discipline, Medal } from './common'

export interface PersonalBest {
  segment: string
  score: number
  event: string
  date: string
}

export interface CompetitionResult {
  competitionId: string
  competitionName: string
  season: string
  placement: number
  medal?: Medal
  totalScore: number
  shortScore?: number
  freeScore?: number
  date: string
}

export interface PhotoAttribution {
  url: string
  author: string
  license: string
  licenseUrl: string
  source: string // e.g. "Wikimedia Commons"
}

export interface Skater {
  id: string
  name: string
  country: Country
  discipline: Discipline
  birthDate: string
  bio: string
  photoPlaceholder: string // initials or emoji placeholder
  photo?: PhotoAttribution
  personalBests: PersonalBest[]
  competitionResults: CompetitionResult[]
  signatureElements: string[]
  isTeam: boolean
  partnerName?: string
}
