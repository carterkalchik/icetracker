import { goeTable } from '../data/scoring/goe-table'
import { pcsComponents } from '../data/scoring/pcs-components'
import { deductions } from '../data/scoring/deductions'
import { scoreBenchmarks } from '../data/scoring/score-benchmarks'
import type { GOERow, PCSComponent, Deduction, ScoreBenchmark } from '../types/scoring'

function delay<T>(data: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), 50))
}

export async function getGOETable(): Promise<GOERow[]> {
  return delay(goeTable)
}

export async function getPCSComponents(): Promise<PCSComponent[]> {
  return delay(pcsComponents)
}

export async function getDeductions(): Promise<Deduction[]> {
  return delay(deductions)
}

export async function getScoreBenchmarks(): Promise<ScoreBenchmark[]> {
  return delay(scoreBenchmarks)
}

export async function getBenchmarksByDiscipline(discipline: string): Promise<ScoreBenchmark[]> {
  return delay(scoreBenchmarks.filter((b) => b.discipline === discipline))
}
