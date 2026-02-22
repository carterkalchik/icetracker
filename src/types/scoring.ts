export interface GOERow {
  grade: number // -5 to +5
  label: string
  percentageOfBase: number
  description: string
}

export interface PCSComponent {
  id: string
  name: string
  abbreviation: string
  description: string
  maxScore: number
}

export interface Deduction {
  id: string
  name: string
  penalty: number
  description: string
}

export interface ScoreBenchmark {
  label: string
  discipline: string
  segment: string
  score: number
  description: string
}
