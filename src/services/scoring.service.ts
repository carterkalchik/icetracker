import { api } from './api'
import type { GOERow, PCSComponent, Deduction, ScoreBenchmark } from '../types/scoring'

export async function getGOETable(): Promise<GOERow[]> {
  return api('/scoring/goe')
}

export async function getPCSComponents(): Promise<PCSComponent[]> {
  return api('/scoring/pcs')
}

export async function getDeductions(): Promise<Deduction[]> {
  return api('/scoring/deductions')
}

export async function getScoreBenchmarks(): Promise<ScoreBenchmark[]> {
  return api('/scoring/benchmarks')
}

export async function getBenchmarksByDiscipline(discipline: string): Promise<ScoreBenchmark[]> {
  return api(`/scoring/benchmarks?discipline=${encodeURIComponent(discipline)}`)
}
