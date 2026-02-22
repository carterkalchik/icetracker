import { useState, useEffect, type ReactNode } from 'react'
import { ObjectLink } from './ObjectLink'
import { getAllSkaterNames, resolveSkaterByName } from '../../services/entity-resolution.service'
import type { EntityRef } from '../../types/object-link'

interface RichDescriptionProps {
  text: string
  className?: string
}

/**
 * Renders a text string, replacing recognized skater names with ObjectLink pills.
 * Loads skater names from the API on first render, then resolves inline.
 */
export function RichDescription({ text, className }: RichDescriptionProps) {
  const [parts, setParts] = useState<ReactNode[] | null>(null)

  useEffect(() => {
    let cancelled = false

    async function resolve() {
      const skaterNames = (await getAllSkaterNames()).filter((n) => n.length > 0)
      if (cancelled || skaterNames.length === 0) return

      const namePattern = skaterNames.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
      const regex = new RegExp(`(${namePattern})`, 'gi')
      const matches = [...text.matchAll(regex)]

      if (cancelled || matches.length === 0) return

      const resolved: ReactNode[] = []
      let lastIndex = 0

      for (const match of matches) {
        const matchIndex = match.index!
        const matchedName = match[0]

        if (matchIndex > lastIndex) {
          resolved.push(text.slice(lastIndex, matchIndex))
        }

        const entity: EntityRef | null = await resolveSkaterByName(matchedName)
        if (cancelled) return
        if (entity) {
          resolved.push(<ObjectLink key={`${matchIndex}`} entity={entity} />)
        } else {
          resolved.push(matchedName)
        }

        lastIndex = matchIndex + matchedName.length
      }

      if (lastIndex < text.length) {
        resolved.push(text.slice(lastIndex))
      }

      if (!cancelled) setParts(resolved)
    }

    resolve()
    return () => { cancelled = true }
  }, [text])

  if (!parts) {
    return <p className={className}>{text}</p>
  }

  return <p className={className}>{parts}</p>
}
