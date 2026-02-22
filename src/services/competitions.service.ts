import { api } from './api'
import type { Competition, Season, CompetitionFullResults } from '../types/competitions'

export async function getAllCompetitions(): Promise<Competition[]> {
  return api('/competitions')
}

export async function getCompetitionById(id: string): Promise<Competition | undefined> {
  try {
    return await api(`/competitions/${id}`)
  } catch {
    return undefined
  }
}

export async function getCompetitionsBySeason(seasonId: string): Promise<Competition[]> {
  return api(`/competitions?season=${encodeURIComponent(seasonId)}`)
}

export async function getUpcomingCompetitions(): Promise<Competition[]> {
  return api('/competitions/upcoming')
}

export async function getSeasons(): Promise<Season[]> {
  return api('/seasons')
}

export async function getSeasonById(id: string): Promise<Season | undefined> {
  try {
    return await api(`/seasons/${id}`)
  } catch {
    return undefined
  }
}

export async function getResultsByCompetitionId(competitionId: string): Promise<CompetitionFullResults | undefined> {
  try {
    return await api(`/competitions/${competitionId}/results`)
  } catch {
    return undefined
  }
}
