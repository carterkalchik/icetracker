import Database from 'better-sqlite3'
import path from 'path'
import { fileURLToPath } from 'url'

// Data imports
import { jumps } from '../src/data/elements/jumps.js'
import { spins } from '../src/data/elements/spins.js'
import { steps } from '../src/data/elements/steps.js'
import { pairElements } from '../src/data/elements/pair-elements.js'
import { danceElements } from '../src/data/elements/dance-elements.js'
import { jumpAnimations } from '../src/data/elements/animations.js'
import { elementVideos } from '../src/data/elements/videos.js'
import { menSkaters } from '../src/data/skaters/men.js'
import { womenSkaters } from '../src/data/skaters/women.js'
import { pairsSkaters } from '../src/data/skaters/pairs.js'
import { iceDanceSkaters } from '../src/data/skaters/ice-dance.js'
import { skaterPhotos } from '../src/data/skaters/photos.js'
import { competitions } from '../src/data/competitions/competitions.js'
import { seasons } from '../src/data/competitions/seasons.js'
import { allResults } from '../src/data/results/index.js'
import { goeTable } from '../src/data/scoring/goe-table.js'
import { pcsComponents } from '../src/data/scoring/pcs-components.js'
import { deductions } from '../src/data/scoring/deductions.js'
import { scoreBenchmarks } from '../src/data/scoring/score-benchmarks.js'
import { newsArticles } from '../src/data/news/articles.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dbPath = path.join(__dirname, '..', 'icetracker.db')

// Delete existing db for clean re-seed
import fs from 'fs'
if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath)
  console.log('Removed existing database')
}

const db = new Database(dbPath)
db.pragma('journal_mode = WAL')
db.pragma('foreign_keys = ON')

// Create schema
db.exec(`
  CREATE TABLE elements (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    abbreviation TEXT NOT NULL,
    base_value REAL NOT NULL,
    description TEXT,
    element_type TEXT NOT NULL,
    metadata TEXT
  );

  CREATE TABLE element_tags (
    element_id TEXT NOT NULL REFERENCES elements(id),
    tag TEXT NOT NULL,
    PRIMARY KEY (element_id, tag)
  );

  CREATE TABLE element_videos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    element_id TEXT NOT NULL REFERENCES elements(id),
    youtube_id TEXT NOT NULL,
    title TEXT NOT NULL,
    skater_name TEXT,
    timestamp INTEGER
  );

  CREATE TABLE jump_animations (
    element_type_key TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    takeoff_angle REAL,
    rotations REAL,
    landing_edge TEXT,
    svg_path TEXT
  );

  CREATE TABLE skaters (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    country TEXT NOT NULL,
    discipline TEXT NOT NULL,
    birth_date TEXT,
    bio TEXT,
    bio_source_url TEXT,
    photo_placeholder TEXT,
    is_team INTEGER NOT NULL DEFAULT 0,
    partner_name TEXT
  );

  CREATE TABLE skater_photos (
    skater_id TEXT PRIMARY KEY REFERENCES skaters(id),
    url TEXT NOT NULL,
    author TEXT NOT NULL,
    license TEXT NOT NULL,
    license_url TEXT NOT NULL,
    source TEXT NOT NULL
  );

  CREATE TABLE personal_bests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    skater_id TEXT NOT NULL REFERENCES skaters(id),
    segment TEXT NOT NULL,
    score REAL NOT NULL,
    event TEXT NOT NULL,
    date TEXT,
    source_url TEXT
  );

  CREATE TABLE signature_elements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    skater_id TEXT NOT NULL REFERENCES skaters(id),
    display_name TEXT NOT NULL,
    element_id TEXT REFERENCES elements(id)
  );

  CREATE TABLE seasons (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    start_year INTEGER NOT NULL,
    end_year INTEGER NOT NULL
  );

  CREATE TABLE competitions (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    short_name TEXT,
    location TEXT NOT NULL,
    country TEXT NOT NULL,
    start_date TEXT NOT NULL,
    end_date TEXT NOT NULL,
    season TEXT NOT NULL REFERENCES seasons(id),
    type TEXT NOT NULL,
    disciplines TEXT NOT NULL,
    is_upcoming INTEGER NOT NULL DEFAULT 0
  );

  CREATE TABLE competition_results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    competition_id TEXT NOT NULL REFERENCES competitions(id),
    skater_id TEXT NOT NULL,
    discipline TEXT NOT NULL,
    rank INTEGER NOT NULL,
    total_score REAL NOT NULL,
    short_score REAL,
    free_score REAL,
    medal TEXT,
    source_url TEXT
  );

  CREATE TABLE goe_table (
    grade INTEGER PRIMARY KEY,
    label TEXT NOT NULL,
    percentage_of_base REAL NOT NULL,
    description TEXT
  );

  CREATE TABLE pcs_components (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    abbreviation TEXT NOT NULL,
    description TEXT,
    max_score REAL NOT NULL
  );

  CREATE TABLE deductions (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    penalty REAL NOT NULL,
    description TEXT
  );

  CREATE TABLE score_benchmarks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    label TEXT NOT NULL,
    discipline TEXT NOT NULL,
    segment TEXT NOT NULL,
    score REAL NOT NULL,
    description TEXT
  );

  CREATE TABLE news_articles (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    source TEXT NOT NULL,
    published_at TEXT NOT NULL,
    summary TEXT NOT NULL,
    image_url TEXT
  );

  CREATE TABLE article_entities (
    article_id TEXT NOT NULL REFERENCES news_articles(id),
    entity_type TEXT NOT NULL,
    entity_id TEXT NOT NULL,
    PRIMARY KEY (article_id, entity_type, entity_id)
  );
`)

// --- Helper: build element-by-name map for signature element resolution ---
interface ElementEntry {
  id: string
  name: string
  abbreviation: string
}

const allElements: ElementEntry[] = [...jumps, ...spins, ...steps, ...pairElements, ...danceElements]
const byAbbreviation = new Map<string, ElementEntry>()
const byNameLower = new Map<string, ElementEntry>()

for (const el of allElements) {
  const abbrKey = el.abbreviation.toUpperCase()
  if (!byAbbreviation.has(abbrKey)) {
    byAbbreviation.set(abbrKey, el)
  }
  byNameLower.set(el.name.toLowerCase(), el)
}

function resolveSignatureElementId(displayName: string): string | null {
  // Strategy 1: Extract abbreviation from parentheses
  const parenMatch = displayName.match(/\(([^)]+)\)/)
  if (parenMatch) {
    const inside = parenMatch[1]
    const abbr = inside.includes('+') ? inside.split('+')[0] : inside
    const el = byAbbreviation.get(abbr.toUpperCase())
    if (el) return el.id
  }

  // Strategy 2: Direct name match
  const el = byNameLower.get(displayName.toLowerCase())
  if (el) return el.id

  // Strategy 3: Combination — resolve first part
  if (displayName.includes('-')) {
    const parts = displayName.split('-')
    const firstMatch = byNameLower.get(parts[0].trim().toLowerCase())
    if (firstMatch) return firstMatch.id
  }

  return null
}

// --- Seed functions ---

function seedElements() {
  const insertElement = db.prepare(`
    INSERT INTO elements (id, name, abbreviation, base_value, description, element_type, metadata)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `)
  const insertTag = db.prepare(`INSERT INTO element_tags (element_id, tag) VALUES (?, ?)`)

  const seed = db.transaction(() => {
    // Jumps
    for (const j of jumps) {
      const metadata = JSON.stringify({
        difficulty: j.difficulty,
        takeoffEdge: j.takeoffEdge,
        rotations: j.rotations,
      })
      insertElement.run(j.id, j.name, j.abbreviation, j.baseValue, j.description, 'jump', metadata)
      for (const tag of j.tags) insertTag.run(j.id, tag)
    }

    // Spins
    for (const s of spins) {
      const metadata = JSON.stringify({
        position: s.position,
        level: s.level,
      })
      insertElement.run(s.id, s.name, s.abbreviation, s.baseValue, s.description, 'spin', metadata)
      for (const tag of s.tags) insertTag.run(s.id, tag)
    }

    // Steps
    for (const s of steps) {
      const metadata = JSON.stringify({
        level: s.level,
      })
      insertElement.run(s.id, s.name, s.abbreviation, s.baseValue, s.description, 'step', metadata)
      for (const tag of s.tags) insertTag.run(s.id, tag)
    }

    // Pair elements
    for (const p of pairElements) {
      const metadata = JSON.stringify({
        category: p.category,
      })
      insertElement.run(p.id, p.name, p.abbreviation, p.baseValue, p.description, 'pair', metadata)
      for (const tag of p.tags) insertTag.run(p.id, tag)
    }

    // Dance elements
    for (const d of danceElements) {
      const metadata = JSON.stringify({
        category: d.category,
      })
      insertElement.run(d.id, d.name, d.abbreviation, d.baseValue, d.description, 'dance', metadata)
      for (const tag of d.tags) insertTag.run(d.id, tag)
    }
  })

  seed()
  const count = (db.prepare('SELECT COUNT(*) as c FROM elements').get() as { c: number }).c
  console.log(`  Elements: ${count}`)
  const tagCount = (db.prepare('SELECT COUNT(*) as c FROM element_tags').get() as { c: number }).c
  console.log(`  Element tags: ${tagCount}`)
}

function seedElementVideos() {
  const insert = db.prepare(`
    INSERT INTO element_videos (element_id, youtube_id, title, skater_name, timestamp)
    VALUES (?, ?, ?, ?, ?)
  `)

  const seed = db.transaction(() => {
    for (const [elementId, videos] of Object.entries(elementVideos)) {
      for (const v of videos) {
        insert.run(elementId, v.youtubeId, v.title, v.skaterName ?? null, v.timestamp ?? null)
      }
    }
  })

  seed()
  const count = (db.prepare('SELECT COUNT(*) as c FROM element_videos').get() as { c: number }).c
  console.log(`  Element videos: ${count}`)
}

function seedJumpAnimations() {
  const insert = db.prepare(`
    INSERT INTO jump_animations (element_type_key, type, takeoff_angle, rotations, landing_edge, svg_path)
    VALUES (?, ?, ?, ?, ?, ?)
  `)

  const seed = db.transaction(() => {
    for (const [key, anim] of Object.entries(jumpAnimations)) {
      insert.run(key, anim.type, anim.takeoffAngle ?? null, anim.rotations ?? null, anim.landingEdge ?? null, anim.svgPath ?? null)
    }
  })

  seed()
  const count = (db.prepare('SELECT COUNT(*) as c FROM jump_animations').get() as { c: number }).c
  console.log(`  Jump animations: ${count}`)
}

function seedSkaters() {
  const insertSkater = db.prepare(`
    INSERT INTO skaters (id, name, country, discipline, birth_date, bio, bio_source_url, photo_placeholder, is_team, partner_name)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)
  const insertPhoto = db.prepare(`
    INSERT INTO skater_photos (skater_id, url, author, license, license_url, source)
    VALUES (?, ?, ?, ?, ?, ?)
  `)
  const insertPB = db.prepare(`
    INSERT INTO personal_bests (skater_id, segment, score, event, date, source_url)
    VALUES (?, ?, ?, ?, ?, ?)
  `)
  const insertSig = db.prepare(`
    INSERT INTO signature_elements (skater_id, display_name, element_id)
    VALUES (?, ?, ?)
  `)

  const allSkaters = [...menSkaters, ...womenSkaters, ...pairsSkaters, ...iceDanceSkaters]

  const seed = db.transaction(() => {
    for (const s of allSkaters) {
      insertSkater.run(
        s.id, s.name, s.country, s.discipline,
        s.birthDate ?? null, s.bio ?? null, s.bioSourceUrl ?? null,
        s.photoPlaceholder ?? null, s.isTeam ? 1 : 0, s.partnerName ?? null
      )

      // Photo
      const photo = skaterPhotos[s.id]
      if (photo) {
        insertPhoto.run(s.id, photo.url, photo.author, photo.license, photo.licenseUrl, photo.source)
      }

      // Personal bests
      for (const pb of s.personalBests) {
        insertPB.run(s.id, pb.segment, pb.score, pb.event, pb.date ?? null, pb.sourceUrl ?? null)
      }

      // Signature elements
      for (const sig of s.signatureElements) {
        const elementId = resolveSignatureElementId(sig)
        insertSig.run(s.id, sig, elementId)
      }
    }
  })

  seed()
  const count = (db.prepare('SELECT COUNT(*) as c FROM skaters').get() as { c: number }).c
  console.log(`  Skaters: ${count}`)
  const photoCount = (db.prepare('SELECT COUNT(*) as c FROM skater_photos').get() as { c: number }).c
  console.log(`  Skater photos: ${photoCount}`)
  const pbCount = (db.prepare('SELECT COUNT(*) as c FROM personal_bests').get() as { c: number }).c
  console.log(`  Personal bests: ${pbCount}`)
  const sigCount = (db.prepare('SELECT COUNT(*) as c FROM signature_elements').get() as { c: number }).c
  console.log(`  Signature elements: ${sigCount}`)
}

function seedSeasons() {
  const insert = db.prepare(`
    INSERT INTO seasons (id, name, start_year, end_year)
    VALUES (?, ?, ?, ?)
  `)

  const seed = db.transaction(() => {
    for (const s of seasons) {
      insert.run(s.id, s.name, s.startYear, s.endYear)
    }
  })

  seed()
  const count = (db.prepare('SELECT COUNT(*) as c FROM seasons').get() as { c: number }).c
  console.log(`  Seasons: ${count}`)
}

function seedCompetitions() {
  const insert = db.prepare(`
    INSERT INTO competitions (id, name, short_name, location, country, start_date, end_date, season, type, disciplines, is_upcoming)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  const seed = db.transaction(() => {
    for (const c of competitions) {
      insert.run(
        c.id, c.name, c.shortName ?? null, c.location, c.country,
        c.startDate, c.endDate, c.season, c.type,
        JSON.stringify(c.disciplines), c.isUpcoming ? 1 : 0
      )
    }
  })

  seed()
  const count = (db.prepare('SELECT COUNT(*) as c FROM competitions').get() as { c: number }).c
  console.log(`  Competitions: ${count}`)
}

function seedCompetitionResults() {
  const insert = db.prepare(`
    INSERT INTO competition_results (competition_id, skater_id, discipline, rank, total_score, short_score, free_score, medal, source_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `)

  const seed = db.transaction(() => {
    for (const comp of allResults) {
      for (const disc of comp.results) {
        for (const entry of disc.entries) {
          insert.run(
            comp.competitionId,
            entry.skaterId,
            disc.discipline,
            entry.rank,
            entry.totalScore,
            entry.shortScore ?? null,
            entry.freeScore ?? null,
            entry.medal ?? null,
            comp.sourceUrl ?? null
          )
        }
      }
    }
  })

  seed()
  const count = (db.prepare('SELECT COUNT(*) as c FROM competition_results').get() as { c: number }).c
  console.log(`  Competition results: ${count}`)
}

function seedScoring() {
  const insertGOE = db.prepare(`
    INSERT INTO goe_table (grade, label, percentage_of_base, description)
    VALUES (?, ?, ?, ?)
  `)
  const insertPCS = db.prepare(`
    INSERT INTO pcs_components (id, name, abbreviation, description, max_score)
    VALUES (?, ?, ?, ?, ?)
  `)
  const insertDed = db.prepare(`
    INSERT INTO deductions (id, name, penalty, description)
    VALUES (?, ?, ?, ?)
  `)
  const insertBench = db.prepare(`
    INSERT INTO score_benchmarks (label, discipline, segment, score, description)
    VALUES (?, ?, ?, ?, ?)
  `)

  const seed = db.transaction(() => {
    for (const g of goeTable) {
      insertGOE.run(g.grade, g.label, g.percentageOfBase, g.description)
    }
    for (const p of pcsComponents) {
      insertPCS.run(p.id, p.name, p.abbreviation, p.description, p.maxScore)
    }
    for (const d of deductions) {
      insertDed.run(d.id, d.name, d.penalty, d.description)
    }
    for (const b of scoreBenchmarks) {
      insertBench.run(b.label, b.discipline, b.segment, b.score, b.description)
    }
  })

  seed()
  console.log(`  GOE rows: ${(db.prepare('SELECT COUNT(*) as c FROM goe_table').get() as { c: number }).c}`)
  console.log(`  PCS components: ${(db.prepare('SELECT COUNT(*) as c FROM pcs_components').get() as { c: number }).c}`)
  console.log(`  Deductions: ${(db.prepare('SELECT COUNT(*) as c FROM deductions').get() as { c: number }).c}`)
  console.log(`  Score benchmarks: ${(db.prepare('SELECT COUNT(*) as c FROM score_benchmarks').get() as { c: number }).c}`)
}

function seedNews() {
  const insertArticle = db.prepare(`
    INSERT INTO news_articles (id, title, url, source, published_at, summary, image_url)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `)
  const insertEntity = db.prepare(`
    INSERT INTO article_entities (article_id, entity_type, entity_id)
    VALUES (?, ?, ?)
  `)

  const seed = db.transaction(() => {
    for (const a of newsArticles) {
      insertArticle.run(a.id, a.title, a.url, a.source, a.publishedAt, a.summary, a.imageUrl ?? null)
      for (const e of a.entities) {
        insertEntity.run(a.id, e.type, e.id)
      }
    }
  })

  seed()
  const count = (db.prepare('SELECT COUNT(*) as c FROM news_articles').get() as { c: number }).c
  console.log(`  News articles: ${count}`)
  const entityCount = (db.prepare('SELECT COUNT(*) as c FROM article_entities').get() as { c: number }).c
  console.log(`  Article entities: ${entityCount}`)
}

// --- Run seed ---
console.log('Seeding IceTracker database...\n')

seedElements()
seedElementVideos()
seedJumpAnimations()
seedSeasons()
seedCompetitions()
seedSkaters()
seedCompetitionResults()
seedScoring()
seedNews()

console.log('\nDone!')
db.close()
