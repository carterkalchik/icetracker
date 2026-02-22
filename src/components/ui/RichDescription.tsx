import type { ReactNode } from 'react'
import { ObjectLink } from './ObjectLink'
import { getAllSkaterNames, resolveSkaterByName } from '../../services/entity-resolution.service'

interface RichDescriptionProps {
  text: string
  className?: string
}

// Build pattern once at module init — longest names first to prevent partial matches
const skaterNames = getAllSkaterNames().filter((n) => n.length > 0)
const namePattern = skaterNames.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')

/**
 * Renders a text string, replacing recognized skater names with ObjectLink pills.
 * Uses matchAll with a fresh regex per render to avoid global regex state issues.
 */
export function RichDescription({ text, className }: RichDescriptionProps) {
  if (!namePattern) {
    return <p className={className}>{text}</p>
  }

  const regex = new RegExp(`(${namePattern})`, 'gi')
  const matches = [...text.matchAll(regex)]

  if (matches.length === 0) {
    return <p className={className}>{text}</p>
  }

  const parts: ReactNode[] = []
  let lastIndex = 0

  for (const match of matches) {
    const matchIndex = match.index!
    const matchedName = match[0]

    // Add text before the match
    if (matchIndex > lastIndex) {
      parts.push(text.slice(lastIndex, matchIndex))
    }

    const entity = resolveSkaterByName(matchedName)
    if (entity) {
      parts.push(
        <ObjectLink key={`${matchIndex}`} entity={entity} />
      )
    } else {
      parts.push(matchedName)
    }

    lastIndex = matchIndex + matchedName.length
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return <p className={className}>{parts}</p>
}
