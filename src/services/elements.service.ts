import { api } from './api'
import type { Jump, Spin, StepSequence, PairElement, DanceElement, Element } from '../types/elements'

export async function getJumps(): Promise<Jump[]> {
  return api('/elements/type/jump')
}

export async function getSpins(): Promise<Spin[]> {
  return api('/elements/type/spin')
}

export async function getSteps(): Promise<StepSequence[]> {
  return api('/elements/type/step')
}

export async function getPairElements(): Promise<PairElement[]> {
  return api('/elements/type/pair')
}

export async function getDanceElements(): Promise<DanceElement[]> {
  return api('/elements/type/dance')
}

export async function getAllElements(): Promise<Element[]> {
  return api('/elements')
}

export async function getElementById(id: string): Promise<Element | undefined> {
  try {
    return await api(`/elements/${id}`)
  } catch {
    return undefined
  }
}

export function getElementCategory(element: Element): { key: string; label: string; path: string } {
  if ('takeoffEdge' in element) return { key: 'jumps', label: 'Jumps', path: '/elements/jumps' }
  if ('position' in element) return { key: 'spins', label: 'Spins', path: '/elements/spins' }
  if ('category' in element) {
    const cat = (element as PairElement | DanceElement).category
    if (['throw', 'twist', 'lift', 'sbs', 'death-spiral'].includes(cat)) {
      return { key: 'pairs', label: 'Pair Elements', path: '/elements/pairs' }
    }
    return { key: 'dance', label: 'Dance Elements', path: '/elements/dance' }
  }
  return { key: 'steps', label: 'Steps', path: '/elements/steps' }
}
