export interface ElementVideo {
  youtubeId: string
  title: string
  skaterName?: string
  timestamp?: number // start time in seconds
}

export interface ElementAnimation {
  type: 'jump' | 'spin' | 'step'
  svgPath?: string // SVG path data for blade trace
  takeoffAngle?: number
  rotations?: number
  landingEdge?: string
}

export interface Jump {
  id: string
  name: string
  abbreviation: string
  baseValue: number
  description: string
  difficulty: number // 1-6 ranking
  takeoffEdge: 'toe' | 'edge'
  rotations: number
  tags: string[]
  animation?: ElementAnimation
  videos?: ElementVideo[]
}

export interface Spin {
  id: string
  name: string
  abbreviation: string
  baseValue: number
  description: string
  position: 'upright' | 'sit' | 'camel' | 'combination' | 'layback'
  level: 1 | 2 | 3 | 4
  tags: string[]
  animation?: ElementAnimation
  videos?: ElementVideo[]
}

export interface StepSequence {
  id: string
  name: string
  abbreviation: string
  baseValue: number
  description: string
  level: 1 | 2 | 3 | 4
  tags: string[]
  videos?: ElementVideo[]
}

export interface PairElement {
  id: string
  name: string
  abbreviation: string
  baseValue: number
  description: string
  category: 'throw' | 'twist' | 'lift' | 'sbs' | 'death-spiral'
  tags: string[]
  videos?: ElementVideo[]
}

export interface DanceElement {
  id: string
  name: string
  abbreviation: string
  baseValue: number
  description: string
  category: 'pattern-dance' | 'twizzle' | 'lift' | 'spin' | 'step-sequence' | 'choreographic'
  tags: string[]
  videos?: ElementVideo[]
}

export type Element = Jump | Spin | StepSequence | PairElement | DanceElement
