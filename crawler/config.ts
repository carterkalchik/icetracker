export type FeedType = 'direct' | 'google-news'

export interface FeedConfig {
  url: string
  name: string
  type: FeedType
}

export const RSS_FEEDS: FeedConfig[] = [
  // Direct publisher feeds — give real article URLs
  {
    url: 'https://www.theguardian.com/sport/figure-skating/rss',
    name: 'The Guardian — Figure Skating',
    type: 'direct',
  },
  {
    url: 'https://feeds.bbci.co.uk/sport/winter-sports/rss.xml',
    name: 'BBC Sport — Winter Sports',
    type: 'direct',
  },
  {
    url: 'https://www.cbc.ca/webfeed/rss/rss-sports',
    name: 'CBC Sports',
    type: 'direct',
  },
  // Google News aggregator — no resolvable article URLs, title-only summarization
  {
    url: 'https://news.google.com/rss/search?q=%22figure+skating%22&hl=en-US&gl=US&ceid=US:en',
    name: 'Google News — Figure Skating',
    type: 'google-news',
  },
]

export const ALLOWED_DOMAINS = [
  'nbcsports.com',
  'olympics.com',
  'isu.org',
  'apnews.com',
  'reuters.com',
  'nytimes.com',
  'washingtonpost.com',
  'espn.com',
  'bbc.com',
  'bbc.co.uk',
  'theguardian.com',
  'cbc.ca',
  'usatoday.com',
  'skatingjapan.com',
  'rockerskating.com',
  'goldenskate.com',
  'icenetwork.com',
  'usfigureskating.org',
  'floatingonedges.com',
  'japantimes.co.jp',
]

/** Keywords to filter non-figure-skating articles from general sports feeds */
export const SKATING_KEYWORDS = [
  'figure skating',
  'figure skater',
  'ice skating',
  'ice dance',
  'free skate',
  'short program',
  'quad axel',
  'triple axel',
  'world championships',
  'grand prix final',
]

export const ISU_RESULTS_BASE = 'https://results.isu.org/results'

export const MAX_ARTICLES_PER_RUN = 10

export const CLAUDE_MODEL = 'claude-sonnet-4-20250514'
export const CLAUDE_RATE_LIMIT_MS = 2000
export const CLAUDE_MAX_RETRIES = 3

export const ARTICLE_MAX_CHARS = 3000
export const ARTICLE_MIN_CHARS = 100

export const SEED_FILES = {
  articles: 'src/data/news/articles.ts',
  competitions: 'src/data/competitions/competitions.ts',
  results: (season: string) => `src/data/results/results-${season}.ts`,
  skaters: {
    Men: 'src/data/skaters/men.ts',
    Women: 'src/data/skaters/women.ts',
    Pairs: 'src/data/skaters/pairs.ts',
    'Ice Dance': 'src/data/skaters/ice-dance.ts',
  },
} as const
