import { parseHTML } from 'linkedom'
import { ARTICLE_MAX_CHARS, ARTICLE_MIN_CHARS } from '../config.js'
import type { ArticleText } from '../types.js'
import * as log from './logger.js'

/**
 * Tags to remove from article DOM before extracting text.
 */
const STRIP_SELECTORS = [
  'script',
  'style',
  'nav',
  'footer',
  'header',
  'aside',
  'iframe',
  'noscript',
  '.ad',
  '.advertisement',
  '.social-share',
  '.related-articles',
  '[role="navigation"]',
  '[role="banner"]',
  '[role="contentinfo"]',
]

/**
 * Fetches an article URL and extracts the body text.
 * Uses a cascade: <article> → <main> → <body>.
 * Returns truncated to ARTICLE_MAX_CHARS.
 */
export async function extractArticleText(url: string): Promise<ArticleText> {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (compatible; BladeTracker-Crawler/1.0; +https://bladetracker.net)',
        Accept: 'text/html',
      },
      redirect: 'follow',
      signal: AbortSignal.timeout(15_000),
    })

    if (!res.ok) {
      log.warn(`Article fetch failed (${res.status}): ${url}`)
      return { text: '', ok: false }
    }

    const contentType = res.headers.get('content-type') || ''
    if (!contentType.includes('text/html')) {
      log.warn(`Non-HTML content type for ${url}: ${contentType}`)
      return { text: '', ok: false }
    }

    const html = await res.text()
    const { document } = parseHTML(html)

    // Strip unwanted elements
    for (const selector of STRIP_SELECTORS) {
      for (const el of document.querySelectorAll(selector)) {
        el.remove()
      }
    }

    // Try to find the article body with fallback cascade
    let container =
      document.querySelector('article') ??
      document.querySelector('main') ??
      document.querySelector('[role="main"]') ??
      document.body

    if (!container) {
      return { text: '', ok: false }
    }

    // Get text content, normalize whitespace
    let text = (container.textContent || '')
      .replace(/\s+/g, ' ')
      .trim()

    if (text.length < ARTICLE_MIN_CHARS) {
      log.warn(`Article text too short (${text.length} chars): ${url}`)
      return { text: '', ok: false }
    }

    // Truncate to max chars
    if (text.length > ARTICLE_MAX_CHARS) {
      text = text.slice(0, ARTICLE_MAX_CHARS) + '...'
    }

    return { text, ok: true }
  } catch (err) {
    log.warn(`Failed to extract article text from ${url}: ${err}`)
    return { text: '', ok: false }
  }
}
