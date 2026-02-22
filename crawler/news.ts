import { SEED_FILES, MAX_ARTICLES_PER_RUN } from './config.js'
import type { CrawledArticle, RSSItem } from './types.js'
import { fetchRSSFeeds } from './utils/rss.js'
import { extractArticleText } from './utils/html.js'
import { summarizeArticle, summarizeFromTitle } from './utils/claude.js'
import { extractIds, extractUrls, appendToSeedArray, readSeedFile, validateSeedFile } from './utils/file-writer.js'
import * as log from './utils/logger.js'

const DRY_RUN = process.env.DRY_RUN === 'true'

/**
 * Loads all known entity IDs from the seed data files.
 */
function loadKnownEntities(): {
  skaters: string[]
  elements: string[]
  competitions: string[]
} {
  const skaters = [
    ...extractIds(SEED_FILES.skaters.Men),
    ...extractIds(SEED_FILES.skaters.Women),
    ...extractIds(SEED_FILES.skaters.Pairs),
    ...extractIds(SEED_FILES.skaters['Ice Dance']),
  ]

  const elements = [
    ...extractIds('src/data/elements/jumps.ts'),
    ...extractIds('src/data/elements/spins.ts'),
    ...extractIds('src/data/elements/steps.ts'),
    ...extractIds('src/data/elements/pair-elements.ts'),
    ...extractIds('src/data/elements/dance-elements.ts'),
  ]

  const competitions = extractIds(SEED_FILES.competitions)

  log.info(`Known entities: ${skaters.length} skaters, ${elements.length} elements, ${competitions.length} competitions`)
  return { skaters, elements, competitions }
}

/**
 * Generates a URL-safe slug ID from the article title and date.
 */
function generateArticleId(title: string, date: string): string {
  const datePrefix = date.slice(0, 7).replace('-', '') // e.g. "202602"
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .slice(0, 60)
    .replace(/-+$/, '')
  return `${datePrefix}-${slug}`
}

/**
 * Checks if two titles are similar enough to be considered duplicates.
 */
function titlesSimilar(a: string, b: string): boolean {
  const wordsA = new Set(a.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter((w) => w.length > 3))
  const wordsB = new Set(b.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter((w) => w.length > 3))
  if (wordsA.size === 0 || wordsB.size === 0) return false

  let overlap = 0
  for (const w of wordsA) {
    if (wordsB.has(w)) overlap++
  }
  const similarity = overlap / Math.min(wordsA.size, wordsB.size)
  return similarity > 0.7
}

/**
 * Loads existing article titles from the seed file via regex.
 */
function loadExistingTitles(): string[] {
  const content = readSeedFile(SEED_FILES.articles)
  const titles: string[] = []
  const re = /\btitle:\s*'((?:[^'\\]|\\.)*)'/g
  let match
  while ((match = re.exec(content)) !== null) {
    titles.push(match[1].replace(/\\'/g, "'"))
  }
  return titles
}

/**
 * Formats a CrawledArticle as a TypeScript object literal string.
 */
function formatArticleEntry(article: CrawledArticle): string {
  const entities = article.entities
    .map((e) => `{ type: '${e.type}', id: '${e.id}' }`)
    .join(', ')

  const title = article.title.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
  const summary = article.summary.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
  const url = article.url.replace(/'/g, "\\'")

  return `{
    id: '${article.id}',
    title: '${title}',
    url: '${url}',
    source: '${article.source}',
    publishedAt: '${article.publishedAt}',
    summary: '${summary}',
    entities: [
      ${entities}
    ],
  }`
}

/**
 * Processes a single RSS item into a CrawledArticle using Claude.
 * For direct feeds: fetches article text, then summarizes.
 * For Google News: summarizes from title only.
 */
async function processItem(
  item: RSSItem,
  knownEntities: { skaters: string[]; elements: string[]; competitions: string[] },
): Promise<CrawledArticle | null> {
  const pubDate = item.pubDate
    ? new Date(item.pubDate).toISOString().slice(0, 10)
    : new Date().toISOString().slice(0, 10)

  let result

  if (item.isGoogleNews) {
    // Title-only summarization for Google News items
    result = await summarizeFromTitle(item.title, item.source, knownEntities)
  } else {
    // Full article text extraction for direct feeds
    const { text, ok } = await extractArticleText(item.link)
    if (!ok) {
      log.warn(`Skipping (no text): ${item.title}`)
      return null
    }
    result = await summarizeArticle(item.title, text, knownEntities)
  }

  // For Google News items, use the sourceUrl (publisher domain) since
  // the link is an unresolvable Google redirect
  const articleUrl = item.isGoogleNews ? item.sourceUrl : item.link

  return {
    id: generateArticleId(item.title, pubDate),
    title: item.title,
    url: articleUrl,
    source: item.source || 'Unknown',
    publishedAt: pubDate,
    summary: result.summary,
    entities: result.entities,
  }
}

async function main(): Promise<void> {
  log.info(`BladeTracker News Crawler — ${DRY_RUN ? 'DRY RUN' : 'LIVE'}`)

  // 1. Load existing articles for dedup
  log.group('Loading existing data')
  const existingIds = new Set(extractIds(SEED_FILES.articles))
  const existingUrls = new Set(extractUrls(SEED_FILES.articles))
  const existingTitles = loadExistingTitles()
  log.info(`${existingIds.size} existing articles`)
  log.groupEnd()

  // 2. Load known entities
  const knownEntities = loadKnownEntities()

  // 3. Fetch RSS feeds
  log.group('Fetching RSS feeds')
  const rssItems = await fetchRSSFeeds()
  log.info(`${rssItems.length} total items from all feeds`)
  log.groupEnd()

  // 4. Deduplicate
  log.group('Deduplicating')
  const candidates = rssItems.filter((item) => {
    // URL match (skip for Google News since URLs are Google redirects)
    if (!item.isGoogleNews && existingUrls.has(item.link)) {
      log.info(`Skip (URL match): ${item.title}`)
      return false
    }

    // Title similarity
    if (existingTitles.some((t) => titlesSimilar(t, item.title))) {
      log.info(`Skip (similar title): ${item.title}`)
      return false
    }

    return true
  })

  // Prioritize direct feed articles (full text) over Google News (title only)
  candidates.sort((a, b) => {
    if (a.isGoogleNews !== b.isGoogleNews) return a.isGoogleNews ? 1 : -1
    return 0
  })

  log.info(`${candidates.length} new candidates after dedup`)
  log.groupEnd()

  // 5. Process articles (up to MAX_ARTICLES_PER_RUN)
  const toProcess = candidates.slice(0, MAX_ARTICLES_PER_RUN)
  const newArticles: CrawledArticle[] = []

  log.group(`Processing ${toProcess.length} articles`)
  for (const item of toProcess) {
    log.info(`Processing [${item.isGoogleNews ? 'title-only' : 'full-text'}]: ${item.title}`)

    try {
      const article = await processItem(item, knownEntities)
      if (!article) continue

      // Final dedup check on generated ID
      if (existingIds.has(article.id)) {
        log.warn(`Skip (ID collision): ${article.id}`)
        continue
      }

      newArticles.push(article)
      existingIds.add(article.id)
      existingUrls.add(article.url)
      existingTitles.push(article.title)
      log.info(`Added: ${article.id} (${article.entities.length} entities)`)
    } catch (err) {
      log.error(`Error processing "${item.title}": ${err}`)
    }
  }
  log.groupEnd()

  // 6. Write to seed file
  if (newArticles.length === 0) {
    log.info('No new articles to add.')
    return
  }

  if (DRY_RUN) {
    log.info(`DRY RUN: Would add ${newArticles.length} articles:`)
    for (const a of newArticles) {
      log.info(`  - ${a.id}: ${a.title}`)
    }
    return
  }

  log.group('Writing to seed file')
  const entries = newArticles.map(formatArticleEntry)
  appendToSeedArray(SEED_FILES.articles, entries)

  const valid = await validateSeedFile(SEED_FILES.articles)
  if (!valid) {
    log.error('CRITICAL: Seed file validation failed after write!')
    process.exit(1)
  }
  log.groupEnd()

  log.info(`Done. Added ${newArticles.length} new articles.`)
}

main().catch((err) => {
  log.error(`Fatal: ${err}`)
  process.exit(1)
})
