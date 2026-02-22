import { Router } from 'express'
import db from '../db.js'

const router = Router()

interface GOERow {
  grade: number
  label: string
  percentage_of_base: number
  description: string | null
}

interface PCSRow {
  id: string
  name: string
  abbreviation: string
  description: string | null
  max_score: number
}

interface DeductionRow {
  id: string
  name: string
  penalty: number
  description: string | null
}

interface BenchmarkRow {
  label: string
  discipline: string
  segment: string
  score: number
  description: string | null
}

// GET /api/scoring/goe
router.get('/goe', (_req, res) => {
  const rows = db.prepare('SELECT * FROM goe_table ORDER BY grade').all() as GOERow[]
  res.json(rows.map(r => ({
    grade: r.grade,
    label: r.label,
    percentageOfBase: r.percentage_of_base,
    description: r.description,
  })))
})

// GET /api/scoring/pcs
router.get('/pcs', (_req, res) => {
  const rows = db.prepare('SELECT * FROM pcs_components').all() as PCSRow[]
  res.json(rows.map(r => ({
    id: r.id,
    name: r.name,
    abbreviation: r.abbreviation,
    description: r.description,
    maxScore: r.max_score,
  })))
})

// GET /api/scoring/deductions
router.get('/deductions', (_req, res) => {
  const rows = db.prepare('SELECT * FROM deductions').all() as DeductionRow[]
  res.json(rows.map(r => ({
    id: r.id,
    name: r.name,
    penalty: r.penalty,
    description: r.description,
  })))
})

// GET /api/scoring/benchmarks
router.get('/benchmarks', (req, res) => {
  const discipline = req.query.discipline as string | undefined
  let rows: BenchmarkRow[]
  if (discipline) {
    rows = db.prepare('SELECT * FROM score_benchmarks WHERE discipline = ?').all(discipline) as BenchmarkRow[]
  } else {
    rows = db.prepare('SELECT * FROM score_benchmarks').all() as BenchmarkRow[]
  }
  res.json(rows.map(r => ({
    label: r.label,
    discipline: r.discipline,
    segment: r.segment,
    score: r.score,
    description: r.description,
  })))
})

export default router
