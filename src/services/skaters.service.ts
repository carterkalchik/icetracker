import { menSkaters } from '../data/skaters/men'
import { womenSkaters } from '../data/skaters/women'
import { pairsSkaters } from '../data/skaters/pairs'
import { iceDanceSkaters } from '../data/skaters/ice-dance'
import { skaterPhotos } from '../data/skaters/photos'
import type { Skater } from '../types/skaters'
import type { Discipline } from '../types/common'

// Merge photo data into skater objects
const rawSkaters = [...menSkaters, ...womenSkaters, ...pairsSkaters, ...iceDanceSkaters]
const allSkaters: Skater[] = rawSkaters.map((skater) => ({
  ...skater,
  photo: skaterPhotos[skater.id],
}))

function delay<T>(data: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), 50))
}

export async function getAllSkaters(): Promise<Skater[]> {
  return delay(allSkaters)
}

export async function getSkatersByDiscipline(discipline: Discipline): Promise<Skater[]> {
  return delay(allSkaters.filter((s) => s.discipline === discipline))
}

export async function getSkaterById(id: string): Promise<Skater | undefined> {
  return delay(allSkaters.find((s) => s.id === id))
}

export async function getSkatersByIds(ids: string[]): Promise<Skater[]> {
  return delay(allSkaters.filter((s) => ids.includes(s.id)))
}
