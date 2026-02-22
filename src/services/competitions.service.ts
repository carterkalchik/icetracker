import { competitions } from '../data/competitions/competitions'
import { seasons } from '../data/competitions/seasons'
import type { Competition, Season } from '../types/competitions'

function delay<T>(data: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), 50))
}

export async function getAllCompetitions(): Promise<Competition[]> {
  return delay(competitions)
}

export async function getCompetitionById(id: string): Promise<Competition | undefined> {
  return delay(competitions.find((c) => c.id === id))
}

export async function getCompetitionsBySeason(seasonId: string): Promise<Competition[]> {
  return delay(competitions.filter((c) => c.season === seasonId))
}

export async function getUpcomingCompetitions(): Promise<Competition[]> {
  return delay(competitions.filter((c) => c.isUpcoming))
}

export async function getSeasons(): Promise<Season[]> {
  return delay(seasons)
}

export async function getSeasonById(id: string): Promise<Season | undefined> {
  return delay(seasons.find((s) => s.id === id))
}
