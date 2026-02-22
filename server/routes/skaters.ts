import { Router } from 'express'
import db from '../db.js'

const router = Router()

interface SkaterRow {
  id: string
  name: string
  country: string
  discipline: string
  birth_date: string | null
  bio: string | null
  bio_source_url: string | null
  photo_placeholder: string | null
  is_team: number
  partner_name: string | null
}

interface PhotoRow {
  url: string
  author: string
  license: string
  license_url: string
  source: string
}

interface PBRow {
  segment: string
  score: number
  event: string
  date: string | null
  source_url: string | null
}

interface SigRow {
  display_name: string
  element_id: string | null
}

interface ResultRow {
  competition_id: string
  discipline: string
  rank: number
  total_score: number
  short_score: number | null
  free_score: number | null
  medal: string | null
  source_url: string | null
  competition_name: string
  season: string
  start_date: string
}

function formatSkater(row: SkaterRow) {
  const photo = db.prepare('SELECT url, author, license, license_url, source FROM skater_photos WHERE skater_id = ?').get(row.id) as PhotoRow | undefined

  const pbs = (db.prepare('SELECT segment, score, event, date, source_url FROM personal_bests WHERE skater_id = ?').all(row.id) as PBRow[]).map(pb => ({
    segment: pb.segment,
    score: pb.score,
    event: pb.event,
    date: pb.date,
    sourceUrl: pb.source_url,
  }))

  const sigs = (db.prepare('SELECT display_name FROM signature_elements WHERE skater_id = ?').all(row.id) as SigRow[]).map(s => s.display_name)

  const results = (db.prepare(`
    SELECT cr.competition_id, cr.discipline, cr.rank, cr.total_score, cr.short_score, cr.free_score, cr.medal, cr.source_url,
           c.name as competition_name, c.season, c.start_date
    FROM competition_results cr
    JOIN competitions c ON cr.competition_id = c.id
    WHERE cr.skater_id = ?
    ORDER BY c.start_date DESC
  `).all(row.id) as ResultRow[]).map(r => ({
    competitionId: r.competition_id,
    competitionName: r.competition_name,
    season: r.season,
    placement: r.rank,
    medal: r.medal ?? undefined,
    totalScore: r.total_score,
    shortScore: r.short_score ?? undefined,
    freeScore: r.free_score ?? undefined,
    date: r.start_date,
    sourceUrl: r.source_url ?? undefined,
  }))

  return {
    id: row.id,
    name: row.name,
    country: row.country,
    discipline: row.discipline,
    birthDate: row.birth_date,
    bio: row.bio,
    bioSourceUrl: row.bio_source_url,
    photoPlaceholder: row.photo_placeholder,
    isTeam: row.is_team === 1,
    partnerName: row.partner_name,
    photo: photo ? {
      url: photo.url,
      author: photo.author,
      license: photo.license,
      licenseUrl: photo.license_url,
      source: photo.source,
    } : undefined,
    personalBests: pbs,
    signatureElements: sigs,
    competitionResults: results,
  }
}

// GET /api/skaters/batch?ids=a,b,c
router.get('/batch', (req, res) => {
  const idsParam = req.query.ids as string | undefined
  if (!idsParam) {
    res.json([])
    return
  }
  // Sanitize: only allow alphanumeric + hyphens in IDs
  const ids = idsParam.split(',').filter(id => /^[a-zA-Z0-9-]+$/.test(id))
  if (ids.length === 0) {
    res.json([])
    return
  }
  const placeholders = ids.map(() => '?').join(',')
  const rows = db.prepare(`SELECT * FROM skaters WHERE id IN (${placeholders})`).all(...ids) as SkaterRow[]
  res.json(rows.map(r => formatSkater(r)))
})

// GET /api/skaters
router.get('/', (req, res) => {
  const discipline = req.query.discipline as string | undefined
  let rows: SkaterRow[]
  if (discipline) {
    rows = db.prepare('SELECT * FROM skaters WHERE discipline = ?').all(discipline) as SkaterRow[]
  } else {
    rows = db.prepare('SELECT * FROM skaters').all() as SkaterRow[]
  }
  res.json(rows.map(r => formatSkater(r)))
})

// GET /api/skaters/:id
router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM skaters WHERE id = ?').get(req.params.id) as SkaterRow | undefined
  if (!row) {
    res.status(404).json({ error: 'Skater not found' })
    return
  }
  res.json(formatSkater(row))
})

export default router
