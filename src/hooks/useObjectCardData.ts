import { useState, useEffect } from 'react'
import type { EntityType } from '../types/object-link'
import type { Skater } from '../types/skaters'
import type { Element } from '../types/elements'
import type { Competition } from '../types/competitions'
import { getSkaterById } from '../services/skaters.service'
import { getElementById } from '../services/elements.service'
import { getCompetitionById } from '../services/competitions.service'

export type ObjectCardData =
  | { type: 'skater'; data: Skater }
  | { type: 'element'; data: Element }
  | { type: 'competition'; data: Competition }

export function useObjectCardData(entityType: EntityType, entityId: string, enabled: boolean) {
  const [data, setData] = useState<ObjectCardData | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!enabled) {
      setData(null)
      return
    }

    let cancelled = false
    setLoading(true)

    const fetchData = async () => {
      try {
        if (entityType === 'skater') {
          const skater = await getSkaterById(entityId)
          if (!cancelled && skater) setData({ type: 'skater', data: skater })
        } else if (entityType === 'element') {
          const element = await getElementById(entityId)
          if (!cancelled && element) setData({ type: 'element', data: element })
        } else if (entityType === 'competition') {
          const comp = await getCompetitionById(entityId)
          if (!cancelled && comp) setData({ type: 'competition', data: comp })
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchData()
    return () => { cancelled = true }
  }, [entityType, entityId, enabled])

  return { data, loading }
}
