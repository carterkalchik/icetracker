import { api } from './api'
import type { Skater } from '../types/skaters'
import type { Discipline } from '../types/common'

export async function getAllSkaters(): Promise<Skater[]> {
  return api('/skaters')
}

export async function getSkatersByDiscipline(discipline: Discipline): Promise<Skater[]> {
  return api(`/skaters?discipline=${encodeURIComponent(discipline)}`)
}

export async function getSkaterById(id: string): Promise<Skater | undefined> {
  try {
    return await api(`/skaters/${id}`)
  } catch {
    return undefined
  }
}

export async function getSkatersByIds(ids: string[]): Promise<Skater[]> {
  if (ids.length === 0) return []
  return api(`/skaters/batch?ids=${ids.join(',')}`)
}
