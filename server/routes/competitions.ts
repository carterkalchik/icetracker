import { Router } from 'express'
import db from '../db.js'

const router = Router()

interface CompRow {
  id: string
  name: string
  short_name: string | null
  location: string
  country: string
  start_date: string
  end_date: string
  season: string
  type: string
  disciplines: string
  is_upcoming: number
}

interface SeasonRow {
  id: string
  name: string
  start_year: number
  end_year: number
}

interface ResultRow {
  skater_id: string
  discipline: string
  rank: number
  total_score: number
  short_score: number | null
  free_score: number | null
  medal: string | null
  source_url: string | null
  skater_name: string
  country: string
}

function formatCompetition(row: CompRow) {
  return {
    id: row.id,
    name: row.name,
    shortName: row.short_name,
    location: row.location,
    country: row.country,
    startDate: row.start_date,
    endDate: row.end_date,
    season: row.season,
    type: row.type,
    disciplines: JSON.parse(row.disciplines),
    isUpcoming: row.is_upcoming === 1,
  }
}

function formatSeason(row: SeasonRow) {
  const compIds = (db.prepare('SELECT id FROM competitions WHERE season = ?').all(row.id) as { id: string }[]).map(c => c.id)
  return {
    id: row.id,
    name: row.name,
    startYear: row.start_year,
    endYear: row.end_year,
    competitions: compIds,
  }
}

// GET /api/competitions/upcoming
router.get('/upcoming', (_req, res) => {
  const rows = db.prepare('SELECT * FROM competitions WHERE is_upcoming = 1 ORDER BY start_date').all() as CompRow[]
  res.json(rows.map(formatCompetition))
})

// GET /api/competitions/:id/results
router.get('/:id/results', (req, res) => {
  const comp = db.prepare('SELECT id FROM competitions WHERE id = ?').get(req.params.id) as { id: string } | undefined
  if (!comp) {
    res.status(404).json({ error: 'Competition not found' })
    return
  }

  const rows = db.prepare(`
    SELECT cr.skater_id, cr.discipline, cr.rank, cr.total_score, cr.short_score, cr.free_score, cr.medal, cr.source_url,
           s.name as skater_name, s.country
    FROM competition_results cr
    LEFT JOIN skaters s ON cr.skater_id = s.id
    WHERE cr.competition_id = ?
    ORDER BY cr.discipline, cr.rank
  `).all(req.params.id) as ResultRow[]

  // Group by discipline
  const disciplineMap = new Map<string, Array<{
    rank: number
    skaterId: string
    skaterName: string
    country: string
    totalScore: number
    shortScore: number
    freeScore: number
    medal?: string
  }>>()

  // Get sourceUrl from first result
  let sourceUrl: string | undefined
  for (const r of rows) {
    if (r.source_url && !sourceUrl) sourceUrl = r.source_url

    if (!disciplineMap.has(r.discipline)) {
      disciplineMap.set(r.discipline, [])
    }
    disciplineMap.get(r.discipline)!.push({
      rank: r.rank,
      skaterId: r.skater_id,
      skaterName: r.skater_name ?? r.skater_id,
      country: r.country ?? '',
      totalScore: r.total_score,
      shortScore: r.short_score ?? 0,
      freeScore: r.free_score ?? 0,
      medal: r.medal ?? undefined,
    })
  }

  const results = Array.from(disciplineMap.entries()).map(([discipline, entries]) => ({
    discipline,
    entries,
  }))

  res.json({
    competitionId: req.params.id,
    results,
    sourceUrl,
  })
})

// GET /api/competitions
router.get('/', (req, res) => {
  const season = req.query.season as string | undefined
  let rows: CompRow[]
  if (season) {
    rows = db.prepare('SELECT * FROM competitions WHERE season = ? ORDER BY start_date').all(season) as CompRow[]
  } else {
    rows = db.prepare('SELECT * FROM competitions ORDER BY start_date').all() as CompRow[]
  }
  res.json(rows.map(formatCompetition))
})

// GET /api/competitions/:id
router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM competitions WHERE id = ?').get(req.params.id) as CompRow | undefined
  if (!row) {
    res.status(404).json({ error: 'Competition not found' })
    return
  }
  res.json(formatCompetition(row))
})

// --- Season routes (separate router, mounted at /api/seasons) ---
export const seasonsRouter = Router()

// GET /api/seasons
seasonsRouter.get('/', (_req, res) => {
  const rows = db.prepare('SELECT * FROM seasons ORDER BY start_year DESC').all() as SeasonRow[]
  res.json(rows.map(formatSeason))
})

// GET /api/seasons/:id
seasonsRouter.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM seasons WHERE id = ?').get(req.params.id) as SeasonRow | undefined
  if (!row) {
    res.status(404).json({ error: 'Season not found' })
    return
  }
  res.json(formatSeason(row))
})

export default router
