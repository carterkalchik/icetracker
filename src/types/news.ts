import type { EntityRef } from './object-link'

export interface NewsArticle {
  id: string
  title: string
  url: string
  source: string
  publishedAt: string
  summary: string
  imageUrl?: string
  entities: EntityRef[]
}
