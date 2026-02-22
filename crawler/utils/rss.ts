import { XMLParser } from 'fast-xml-parser'
import type { RSSItem } from '../types.js'
import { ALLOWED_DOMAINS, SKATING_KEYWORDS, RSS_FEEDS } from '../config.js'
import type { FeedConfig } from '../config.js'
import * as log from './logger.js'

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
})

/**
 * Extracts the domain from a URL (e.g. "https://www.nbcsports.com/foo" → "nbcsports.com").
 */
function extractDomain(url: string): string {
  try {
    const hostname = new URL(url).hostname
    return hostname.replace(/^www\./, '')
  } catch {
    return ''
  }
}

/**
 * Checks if a URL belongs to one of the allowed source domains.
 */
function isAllowedDomain(url: string): boolean {
  const domain = extractDomain(url)
  return ALLOWED_DOMAINS.some((d) => domain === d || domain.endsWith('.' + d))
}

/**
 * Checks if a title or description mentions figure skating.
 * Used to filter general sports feeds.
 */
function isSkatingRelated(text: string): boolean {
  const lower = text.toLowerCase()
  return SKATING_KEYWORDS.some((kw) => lower.includes(kw))
}

/**
 * Parses items from a direct publisher RSS feed.
 */
function parseDirectFeedItems(channel: Record<string, unknown>): RSSItem[] {
  const rawItems: unknown[] = Array.isArray(channel.item)
    ? channel.item
    : channel.item
      ? [channel.item]
      : []

  const items: RSSItem[] = []
  for (const raw of rawItems) {
    const item = raw as Record<string, unknown>
    const title = (item.title as string) || ''
    const link = (item.link as string) || ''
    const pubDate = (item.pubDate as string) || ''
    const description = (item.description as string) || ''

    if (!title || !link) continue

    // For general sports feeds, filter to skating content
    if (!isSkatingRelated(title) && !isSkatingRelated(description)) continue

    items.push({
      title: title.replace(/<!\[CDATA\[|\]\]>/g, '').trim(),
      link,
      pubDate,
      source: extractDomain(link),
      sourceUrl: link,
      isGoogleNews: false,
    })
  }
  return items
}

/**
 * Parses items from a Google News RSS feed.
 * Links are Google redirects that can't be resolved — we mark these
 * so the crawler knows to use title-only summarization.
 */
function parseGoogleNewsFeedItems(channel: Record<string, unknown>): RSSItem[] {
  const rawItems: unknown[] = Array.isArray(channel.item)
    ? channel.item
    : channel.item
      ? [channel.item]
      : []

  const items: RSSItem[] = []
  for (const raw of rawItems) {
    const item = raw as Record<string, unknown>
    const title = (item.title as string) || ''
    const link = (item.link as string) || ''
    const pubDate = (item.pubDate as string) || ''

    if (!title || !link) continue

    // Extract source name and URL from <source url="...">Name</source>
    let source = ''
    let sourceUrl = ''
    if (item.source && typeof item.source === 'object') {
      const src = item.source as Record<string, string>
      source = src['#text'] || ''
      sourceUrl = src['@_url'] || ''
    } else if (typeof item.source === 'string') {
      source = item.source
    }

    // Filter by source domain
    if (sourceUrl && !isAllowedDomain(sourceUrl)) continue

    items.push({
      title: title.replace(/ - .*$/, '').trim(), // Strip " - Source Name" suffix
      link, // Google redirect URL (not resolvable)
      pubDate,
      source: source || extractDomain(sourceUrl),
      sourceUrl,
      isGoogleNews: true,
    })
  }
  return items
}

/**
 * Fetches a single RSS feed and returns parsed items.
 */
async function fetchFeed(feed: FeedConfig): Promise<RSSItem[]> {
  const res = await fetch(feed.url, {
    headers: { 'User-Agent': 'BladeTracker-Crawler/1.0' },
    signal: AbortSignal.timeout(15_000),
  })

  if (!res.ok) {
    log.warn(`Feed ${feed.name} returned ${res.status}`)
    return []
  }

  const xml = await res.text()
  const parsed = parser.parse(xml)
  const channel = parsed?.rss?.channel
  if (!channel?.item) {
    log.warn(`No items in ${feed.name}`)
    return []
  }

  return feed.type === 'google-news'
    ? parseGoogleNewsFeedItems(channel as Record<string, unknown>)
    : parseDirectFeedItems(channel as Record<string, unknown>)
}

/**
 * Fetches all configured RSS feeds and returns normalized items.
 */
export async function fetchRSSFeeds(): Promise<RSSItem[]> {
  const allItems: RSSItem[] = []
  const seenTitles = new Set<string>()

  for (const feed of RSS_FEEDS) {
    log.group(`Fetching ${feed.name}`)
    try {
      const items = await fetchFeed(feed)

      // Dedup across feeds by title
      for (const item of items) {
        const key = item.title.toLowerCase().slice(0, 50)
        if (seenTitles.has(key)) continue
        seenTitles.add(key)
        allItems.push(item)
      }

      log.info(`${items.length} items (${feed.type}), ${allItems.length} total after dedup`)
    } catch (err) {
      log.warn(`Failed to fetch ${feed.name}: ${err}`)
    }
    log.groupEnd()
  }

  return allItems
}
