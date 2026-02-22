export interface RSSItem {
  title: string
  link: string
  pubDate: string
  source: string
  sourceUrl: string
  isGoogleNews: boolean
}

export interface ArticleText {
  text: string
  ok: boolean
}

export interface ClaudeSummary {
  summary: string
  entities: Array<{
    type: 'skater' | 'element' | 'competition'
    id: string
  }>
}

export interface CrawledArticle {
  id: string
  title: string
  url: string
  source: string
  publishedAt: string
  summary: string
  entities: Array<{
    type: 'skater' | 'element' | 'competition'
    id: string
  }>
}

export interface ParsedResultEntry {
  rank: number
  skaterName: string
  country: string
  totalScore: number
  shortScore: number
  freeScore: number
}

export interface ParsedDisciplineResults {
  discipline: string
  entries: ParsedResultEntry[]
}

export interface ParsedCompetitionResults {
  competitionId: string
  sourceUrl: string
  disciplines: ParsedDisciplineResults[]
}

export interface SkaterStub {
  id: string
  name: string
  country: string
  discipline: string
}
