import { Router } from 'express'
import db from '../db.js'

const router = Router()

interface ArticleRow {
  id: string
  title: string
  url: string
  source: string
  published_at: string
  summary: string
  image_url: string | null
}

interface EntityRow {
  entity_type: string
  entity_id: string
  label: string
}

function getEntityLabel(type: string, id: string): string | null {
  if (type === 'skater') {
    const row = db.prepare('SELECT name FROM skaters WHERE id = ?').get(id) as { name: string } | undefined
    return row?.name ?? null
  }
  if (type === 'element') {
    const row = db.prepare('SELECT name FROM elements WHERE id = ?').get(id) as { name: string } | undefined
    return row?.name ?? null
  }
  if (type === 'competition') {
    const row = db.prepare('SELECT name FROM competitions WHERE id = ?').get(id) as { name: string } | undefined
    return row?.name ?? null
  }
  return null
}

function formatArticle(row: ArticleRow) {
  const entityRows = db.prepare(
    'SELECT entity_type, entity_id FROM article_entities WHERE article_id = ?'
  ).all(row.id) as Array<{ entity_type: string; entity_id: string }>

  const entities = entityRows
    .map((e) => {
      const label = getEntityLabel(e.entity_type, e.entity_id)
      if (!label) return null
      return { type: e.entity_type, id: e.entity_id, label }
    })
    .filter((e): e is EntityRow => e !== null)

  return {
    id: row.id,
    title: row.title,
    url: row.url,
    source: row.source,
    publishedAt: row.published_at,
    summary: row.summary,
    imageUrl: row.image_url ?? undefined,
    entities,
  }
}

// GET /api/news
router.get('/', (req, res) => {
  const limit = Math.min(Math.max(parseInt(req.query.limit as string) || 20, 1), 100)
  const skaterId = req.query.skater as string | undefined
  const competitionId = req.query.competition as string | undefined

  let rows: ArticleRow[]

  if (skaterId && /^[a-zA-Z0-9-]+$/.test(skaterId)) {
    rows = db.prepare(`
      SELECT DISTINCT na.* FROM news_articles na
      JOIN article_entities ae ON na.id = ae.article_id
      WHERE ae.entity_type = 'skater' AND ae.entity_id = ?
      ORDER BY na.published_at DESC
      LIMIT ?
    `).all(skaterId, limit) as ArticleRow[]
  } else if (competitionId && /^[a-zA-Z0-9-]+$/.test(competitionId)) {
    rows = db.prepare(`
      SELECT DISTINCT na.* FROM news_articles na
      JOIN article_entities ae ON na.id = ae.article_id
      WHERE ae.entity_type = 'competition' AND ae.entity_id = ?
      ORDER BY na.published_at DESC
      LIMIT ?
    `).all(competitionId, limit) as ArticleRow[]
  } else {
    rows = db.prepare(
      'SELECT * FROM news_articles ORDER BY published_at DESC LIMIT ?'
    ).all(limit) as ArticleRow[]
  }

  res.json(rows.map(formatArticle))
})

// GET /api/news/:id
router.get('/:id', (req, res) => {
  const row = db.prepare('SELECT * FROM news_articles WHERE id = ?').get(req.params.id) as ArticleRow | undefined
  if (!row) {
    res.status(404).json({ error: 'Article not found' })
    return
  }
  res.json(formatArticle(row))
})

export default router
