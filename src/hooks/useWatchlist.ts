import { useState, useCallback } from 'react'
import {
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
} from '../services/watchlist.service'

export function useWatchlist() {
  const [watchlist, setWatchlist] = useState<string[]>(getWatchlist)

  const add = useCallback((skaterId: string) => {
    const updated = addToWatchlist(skaterId)
    setWatchlist(updated)
  }, [])

  const remove = useCallback((skaterId: string) => {
    const updated = removeFromWatchlist(skaterId)
    setWatchlist(updated)
  }, [])

  const toggle = useCallback(
    (skaterId: string) => {
      if (watchlist.includes(skaterId)) {
        remove(skaterId)
      } else {
        add(skaterId)
      }
    },
    [watchlist, add, remove]
  )

  const isWatching = useCallback(
    (skaterId: string) => watchlist.includes(skaterId),
    [watchlist]
  )

  return { watchlist, add, remove, toggle, isWatching }
}
