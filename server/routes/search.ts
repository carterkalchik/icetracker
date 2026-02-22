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
  const metadata = row.metadata ? JSON.parse(row.metadata) : {}

  let animation: object | undefined
  if (row.element_type === 'jump') {
    const baseType = row.id.replace(/^(quad-|triple-)/, '')
    const anim = db.prepare('SELECT type, takeoff_angle, rotations, landing_edge, svg_path FROM jump_animations WHERE element_type_key = ?').get(baseType) as AnimationRow | undefined
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

// GET /api/search/tags
router.get('/tags', (_req, res) => {
  const rows = db.prepare('SELECT DISTINCT tag FROM element_tags ORDER BY tag').all() as TagRow[]
  res.json(rows.map(r => r.tag))
})

const VALID_ELEMENT_TYPES = new Set(['jump', 'spin', 'step', 'pair', 'dance'])

// GET /api/search/elements?q=...&types=...&edge=...&tags=...&minBV=...&maxBV=...
router.get('/elements', (req, res) => {
  const q = (req.query.q as string || '').toLowerCase()
  const typesParam = req.query.types as string | undefined
  const types = typesParam ? typesParam.split(',').filter(t => VALID_ELEMENT_TYPES.has(t)) : []
  const edge = (req.query.edge as string) || 'all'
  const tagsParam = req.query.tags as string | undefined
  const filterTags = tagsParam ? tagsParam.split(',') : []
  const minBV = req.query.minBV ? parseFloat(req.query.minBV as string) : undefined
  const maxBV = req.query.maxBV ? parseFloat(req.query.maxBV as string) : undefined

  // Build query conditions
  const conditions: string[] = []
  const params: (string | number)[] = []

  if (types.length > 0) {
    conditions.push(`e.element_type IN (${types.map(() => '?').join(',')})`)
    params.push(...types)
  }

  if (minBV !== undefined) {
    conditions.push('e.base_value >= ?')
    params.push(minBV)
  }
  if (maxBV !== undefined) {
    conditions.push('e.base_value <= ?')
    params.push(maxBV)
  }

  const whereClause = conditions.length > 0 ? 'WHERE ' + conditions.join(' AND ') : ''
  const rows = db.prepare(`SELECT * FROM elements e ${whereClause}`).all(...params) as ElementRow[]

  // Apply client-side filters that are harder in SQL
  const results = rows
    .map(row => {
      const formatted = formatElement(row)
      const matchedFields: string[] = []

      if (!q) {
        matchedFields.push('all')
      } else {
        if (formatted.name.toLowerCase().includes(q)) matchedFields.push('name')
        if (formatted.abbreviation.toLowerCase().includes(q)) matchedFields.push('abbreviation')
        if (formatted.description?.toLowerCase().includes(q)) matchedFields.push('description')
        if (formatted.tags.some((t: string) => t.toLowerCase().includes(q))) matchedFields.push('tags')
      }

      return { element: formatted, elementType: row.element_type, matchedFields }
    })
    .filter(({ element, elementType, matchedFields }) => {
      if (matchedFields.length === 0) return false

      // Edge filter (jumps only)
      if (edge !== 'all' && elementType === 'jump') {
        if (element.takeoffEdge !== edge) return false
      }

      // Tag filter
      if (filterTags.length > 0) {
        if (!filterTags.some((tag: string) => element.tags.includes(tag))) return false
      }

      return true
    })
    .sort((a, b) => {
      const aName = a.matchedFields.includes('name') ? 1 : 0
      const bName = b.matchedFields.includes('name') ? 1 : 0
      if (aName !== bName) return bName - aName
      return b.element.baseValue - a.element.baseValue
    })

  res.json(results)
})

export default router
