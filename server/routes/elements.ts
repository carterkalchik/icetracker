import { Router } from 'express'
import db from '../db.js'

const router = Router()

interface ElementRow {
  id: string
  name: string
  abbreviation: string
  base_value: number
  description: string
  element_type: string
  metadata: string | null
}

interface TagRow {
  tag: string
}

interface VideoRow {
  youtube_id: string
  title: string
  skater_name: string | null
  timestamp: number | null
}

interface AnimationRow {
  element_type_key: string
  type: string
  takeoff_angle: number | null
  rotations: number | null
  landing_edge: string | null
  svg_path: string | null
}

function formatElement(row: ElementRow) {
  const tags = (db.prepare('SELECT tag FROM element_tags WHERE element_id = ?').all(row.id) as TagRow[]).map(t => t.tag)
  const videos = (db.prepare('SELECT youtube_id, title, skater_name, timestamp FROM element_videos WHERE element_id = ?').all(row.id) as VideoRow[]).map(v => ({
    youtubeId: v.youtube_id,
    title: v.title,
    skaterName: v.skater_name ?? undefined,
    timestamp: v.timestamp ?? undefined,
  }))

  // Parse metadata and spread into result
  const metadata = row.metadata ? JSON.parse(row.metadata) : {}

  // For jumps, attach animation data
  let animation: object | undefined
  if (row.element_type === 'jump') {
    const baseType = row.id.replace(/^(quad-|triple-)/, '')
    const anim = db.prepare('SELECT * FROM jump_animations WHERE element_type_key = ?').get(baseType) as AnimationRow | undefined
    if (anim) {
      animation = {
        type: anim.type,
        takeoffAngle: anim.takeoff_angle,
        rotations: anim.rotations,
        landingEdge: anim.landing_edge,
        svgPath: anim.svg_path,
      }
    }
  }

  return {
    id: row.id,
    name: row.name,
    abbreviation: row.abbreviation,
    baseValue: row.base_value,
    description: row.description,
    tags,
    ...metadata,
    ...(videos.length > 0 ? { videos } : {}),
    ...(animation ? { animation } : {}),
  }
}

// GET /api/elements
router.get('/', (_req, res) => {
  const rows = db.prepare('SELECT * FROM elements').all() as ElementRow[]
  res.json(rows.map(formatElement))
})

// GET /api/elements/type/:type
router.get('/type/:type', (req, res) => {
  const rows = db.prepare('SELECT * FROM elements WHERE element_type = ?').all(req.params.type) as ElementRow[]
  res.json(rows.map(formatElement))
})

// GET /api/elements/:id
router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM elements WHERE id = ?').get(req.params.id) as ElementRow | undefined
  if (!row) {
    res.status(404).json({ error: 'Element not found' })
    return
  }
  res.json(formatElement(row))
})

export default router
