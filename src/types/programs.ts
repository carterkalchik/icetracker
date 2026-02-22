import type { Discipline, Segment } from './common'

export interface ProgramElement {
  elementId: string // FK to element in encyclopedia
  elementName: string
  abbreviation: string
  baseValue: number
  goe: number // -5 to +5
  goeValue: number // computed dollar value of GOE
  totalValue: number // baseValue + goeValue
  isSecondHalf: boolean
  isUnderRotated?: boolean
  isDowngraded?: boolean
}

export interface SegmentProgram {
  segment: Segment
  elements: ProgramElement[]
  tes: number // Total Element Score
  pcs: number // Program Component Score
  deductions: number
  totalScore: number
  skatingComponents: {
    skating: number
    transitions: number
    performance: number
    composition: number
    interpretation: number
  }
}

export interface SkaterProgram {
  skaterId: string
  competitionId: string
  discipline: Discipline
  segments: SegmentProgram[]
  totalScore: number
}
