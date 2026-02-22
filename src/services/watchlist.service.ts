const STORAGE_KEY = 'icetracker-watchlist'

export function getWatchlist(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function addToWatchlist(skaterId: string): string[] {
  const list = getWatchlist()
  if (!list.includes(skaterId)) {
    list.push(skaterId)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
  }
  return list
}

export function removeFromWatchlist(skaterId: string): string[] {
  const list = getWatchlist().filter((id) => id !== skaterId)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
  return list
}

export function isOnWatchlist(skaterId: string): boolean {
  return getWatchlist().includes(skaterId)
}
