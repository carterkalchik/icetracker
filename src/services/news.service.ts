import { api } from './api'
import type { NewsArticle } from '../types/news'

export async function getLatestNews(limit?: number): Promise<NewsArticle[]> {
  const params = limit ? `?limit=${limit}` : ''
  return api(`/news${params}`)
}

export async function getNewsBySkater(skaterId: string): Promise<NewsArticle[]> {
  return api(`/news?skater=${encodeURIComponent(skaterId)}`)
}

export async function getNewsByCompetition(competitionId: string): Promise<NewsArticle[]> {
  return api(`/news?competition=${encodeURIComponent(competitionId)}`)
}

export async function getNewsById(id: string): Promise<NewsArticle | undefined> {
  try {
    return await api(`/news/${id}`)
  } catch {
    return undefined
  }
}
