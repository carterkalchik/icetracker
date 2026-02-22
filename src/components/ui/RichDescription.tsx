import type { ReactNode } from 'react'
import { ObjectLink } from './ObjectLink'
import { getAllSkaterNames, resolveSkaterByName } from '../../services/entity-resolution.service'

interface RichDescriptionProps {
  text: string
  className?: string
}

// Build regex once at module init — matches longest names first
const skaterNames = getAllSkaterNames()
const namePattern = skaterNames.map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
const nameRegex = namePattern ? new RegExp(`(${namePattern})`, 'gi') : null

/**
 * Renders a text string, replacing recognized skater names with ObjectLink pills.
 */
export function RichDescription({ text, className }: RichDescriptionProps) {
  if (!nameRegex) {
    return <p className={className}>{text}</p>
  }

  const parts: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  // Reset regex state
  nameRegex.lastIndex = 0

  while ((match = nameRegex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }

    const matchedName = match[0]
    const entity = resolveSkaterByName(matchedName)

    if (entity) {
      parts.push(
        <ObjectLink key={`${match.index}-${entity.id}`} entity={entity} />
      )
    } else {
      parts.push(matchedName)
    }

    lastIndex = match.index + matchedName.length
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return <p className={className}>{parts}</p>
}
