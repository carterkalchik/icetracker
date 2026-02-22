import { jumps } from '../data/elements/jumps'
import { spins } from '../data/elements/spins'
import { steps } from '../data/elements/steps'
import { pairElements } from '../data/elements/pair-elements'
import { danceElements } from '../data/elements/dance-elements'
import { jumpAnimations } from '../data/elements/animations'
import { elementVideos } from '../data/elements/videos'
import type { Jump, Spin, StepSequence, PairElement, DanceElement, Element } from '../types/elements'

// Simulate async API calls with a small delay
function delay<T>(data: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), 50))
}

// Merge animation and video data into jumps
const enrichedJumps: Jump[] = jumps.map((jump) => {
  // Derive the base jump type from the id for animation lookup
  const baseType = jump.id.replace(/^(quad-|triple-)/, '')
  return {
    ...jump,
    animation: jumpAnimations[baseType],
    videos: elementVideos[jump.id],
  }
})

export async function getJumps(): Promise<Jump[]> {
  return delay(enrichedJumps)
}

export async function getSpins(): Promise<Spin[]> {
  return delay(spins)
}

export async function getSteps(): Promise<StepSequence[]> {
  return delay(steps)
}

export async function getPairElements(): Promise<PairElement[]> {
  return delay(pairElements)
}

export async function getDanceElements(): Promise<DanceElement[]> {
  return delay(danceElements)
}

export async function getAllElements(): Promise<Element[]> {
  return delay([...enrichedJumps, ...spins, ...steps, ...pairElements, ...danceElements])
}

export async function getElementById(id: string): Promise<Element | undefined> {
  const all: Element[] = [...enrichedJumps, ...spins, ...steps, ...pairElements, ...danceElements]
  return delay(all.find((el) => el.id === id))
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
