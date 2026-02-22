import Database from 'better-sqlite3'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dbPath = path.join(__dirname, '..', 'icetracker.db')

const db = new Database(dbPath)

// Performance settings
db.pragma('journal_mode = WAL')
db.pragma('foreign_keys = ON')

// Create schema
db.exec(`
  CREATE TABLE IF NOT EXISTS skaters (
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

  CREATE TABLE IF NOT EXISTS skater_photos (
    skater_id TEXT PRIMARY KEY REFERENCES skaters(id),
    url TEXT NOT NULL,
    author TEXT NOT NULL,
    license TEXT NOT NULL,
    license_url TEXT NOT NULL,
    source TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS personal_bests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    skater_id TEXT NOT NULL REFERENCES skaters(id),
    segment TEXT NOT NULL,
    score REAL NOT NULL,
    event TEXT NOT NULL,
    date TEXT,
    source_url TEXT
  );

  CREATE TABLE IF NOT EXISTS signature_elements (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    skater_id TEXT NOT NULL REFERENCES skaters(id),
    display_name TEXT NOT NULL,
    element_id TEXT REFERENCES elements(id)
  );

  CREATE TABLE IF NOT EXISTS elements (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    abbreviation TEXT NOT NULL,
    base_value REAL NOT NULL,
    description TEXT,
    element_type TEXT NOT NULL,
    metadata TEXT
  );

  CREATE TABLE IF NOT EXISTS element_tags (
    element_id TEXT NOT NULL REFERENCES elements(id),
    tag TEXT NOT NULL,
    PRIMARY KEY (element_id, tag)
  );

  CREATE TABLE IF NOT EXISTS element_videos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    element_id TEXT NOT NULL REFERENCES elements(id),
    youtube_id TEXT NOT NULL,
    title TEXT NOT NULL,
    skater_name TEXT,
    timestamp INTEGER
  );

  CREATE TABLE IF NOT EXISTS jump_animations (
    element_type_key TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    takeoff_angle REAL,
    rotations REAL,
    landing_edge TEXT,
    svg_path TEXT
  );

  CREATE TABLE IF NOT EXISTS seasons (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    start_year INTEGER NOT NULL,
    end_year INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS competitions (
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

  CREATE TABLE IF NOT EXISTS competition_results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    competition_id TEXT NOT NULL REFERENCES competitions(id),
    skater_id TEXT NOT NULL REFERENCES skaters(id),
    discipline TEXT NOT NULL,
    rank INTEGER NOT NULL,
    total_score REAL NOT NULL,
    short_score REAL,
    free_score REAL,
    medal TEXT,
    source_url TEXT
  );

  CREATE TABLE IF NOT EXISTS goe_table (
    grade INTEGER PRIMARY KEY,
    label TEXT NOT NULL,
    percentage_of_base REAL NOT NULL,
    description TEXT
  );

  CREATE TABLE IF NOT EXISTS pcs_components (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    abbreviation TEXT NOT NULL,
    description TEXT,
    max_score REAL NOT NULL
  );

  CREATE TABLE IF NOT EXISTS deductions (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    penalty REAL NOT NULL,
    description TEXT
  );

  CREATE TABLE IF NOT EXISTS score_benchmarks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    label TEXT NOT NULL,
    discipline TEXT NOT NULL,
    segment TEXT NOT NULL,
    score REAL NOT NULL,
    description TEXT
  );
`)

export default db
