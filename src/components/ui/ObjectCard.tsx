import { useEffect, useRef, useState, type RefObject } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { useObjectCardData } from '../../hooks/useObjectCardData'
import { getElementCategory } from '../../services/elements.service'
import { countryFlag, formatScore, formatDateRange } from '../../lib/format'
import { Badge } from './Badge'
import type { EntityRef } from '../../types/object-link'
import type { Skater } from '../../types/skaters'
import type { Element } from '../../types/elements'
import type { Competition } from '../../types/competitions'

interface ObjectCardProps {
  entity: EntityRef
  anchorRef: RefObject<HTMLButtonElement | null>
  onClose: () => void
}

// Matches Tailwind w-80 (80 * 4px = 320px)
const CARD_WIDTH = 320

export function ObjectCard({ entity, anchorRef, onClose }: ObjectCardProps) {
  const navigate = useNavigate()
  const cardRef = useRef<HTMLDivElement>(null)
  const { data, loading } = useObjectCardData(entity.type, entity.id, true)
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null)

  // Position the card below the anchor using fixed (viewport-relative) coordinates
  useEffect(() => {
    if (!anchorRef.current) return
    const rect = anchorRef.current.getBoundingClientRect()
    let left = rect.left + rect.width / 2 - CARD_WIDTH / 2
    // Clamp to viewport
    left = Math.max(8, Math.min(left, window.innerWidth - CARD_WIDTH - 8))

    let top = rect.bottom + 6
    // If it would overflow the bottom of the viewport, show above
    if (top + 200 > window.innerHeight) {
      top = rect.top - 6
    }

    setPosition({ top, left })
  }, [anchorRef])

  // Focus the card only after it has been positioned
  useEffect(() => {
    if (position && cardRef.current) {
      cardRef.current.focus({ preventScroll: true })
    }
  }, [position])

  // Dismiss on click outside or Escape
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        cardRef.current && !cardRef.current.contains(e.target as Node) &&
        anchorRef.current && !anchorRef.current.contains(e.target as Node)
      ) {
        onClose()
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [onClose, anchorRef])

  function getLink(): string {
    switch (entity.type) {
      case 'skater': return `/skaters/${entity.id}`
      case 'element': return `/elements/${entity.id}`
      case 'competition': return `/competitions/${entity.id}`
    }
  }

  function handleNavigate() {
    onClose()
    navigate(getLink())
  }

  const linkLabel = entity.type === 'skater'
    ? 'View Profile'
    : entity.type === 'element'
    ? 'View Details'
    : 'View Results'

  // Don't render until positioned to avoid flash at top-left
  if (!position) return null

  return createPortal(
    <div
      ref={cardRef}
      role="dialog"
      aria-label={`${entity.label} preview`}
      tabIndex={-1}
      className="object-card-enter fixed z-50 w-80 rounded-lg border border-gray-200 bg-white shadow-lg outline-none"
      style={{ top: position.top, left: position.left }}
    >
      {loading ? (
        <div className="p-4">
          <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
          <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-gray-100" />
        </div>
      ) : data ? (
        <div className="p-4">
          {data.type === 'skater' && <SkaterCardContent skater={data.data} />}
          {data.type === 'element' && <ElementCardContent element={data.data} />}
          {data.type === 'competition' && <CompetitionCardContent competition={data.data} />}

          <button
            type="button"
            onClick={handleNavigate}
            className="mt-3 flex items-center gap-1 text-xs font-medium text-ice-600 hover:text-ice-700"
          >
            {linkLabel} &rarr;
          </button>
        </div>
      ) : (
        <div className="p-4 text-sm text-gray-400">Not found</div>
      )}
    </div>,
    document.body,
  )
}

function SkaterCardContent({ skater }: { skater: Skater }) {
  const totalPB = skater.personalBests.find((pb) => pb.segment === 'Total')
  const recentMedals = skater.competitionResults
    .filter((r) => r.medal)
    .slice(0, 3)

  return (
    <>
      <div className="flex items-center gap-2">
        <span className="font-serif text-sm font-bold text-gray-900">{skater.name}</span>
        <Badge variant="ice">{skater.discipline}</Badge>
      </div>
      <p className="mt-1 text-xs text-gray-500">
        {countryFlag(skater.country)} {skater.country}
        {skater.isTeam && skater.partnerName && ` \u00B7 ${skater.partnerName}`}
      </p>
      {totalPB && (
        <p className="mt-2 text-xs text-gray-600">
          PB Total: <span className="font-serif font-bold text-ice-600">{formatScore(totalPB.score)}</span>
        </p>
      )}
      {recentMedals.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {recentMedals.map((r, i) => (
            <Badge
              key={i}
              variant={r.medal === 'gold' ? 'gold' : r.medal === 'silver' ? 'silver' : 'bronze'}
              className="text-[10px]"
            >
              {r.competitionName}
            </Badge>
          ))}
        </div>
      )}
    </>
  )
}

function ElementCardContent({ element }: { element: Element }) {
  const category = getElementCategory(element)
  const tags = 'tags' in element ? (element as { tags: string[] }).tags.slice(0, 4) : []

  return (
    <>
      <div className="flex items-center gap-2">
        <Badge variant="frost">{category.label}</Badge>
        <span className="font-mono text-xs text-gray-400">{element.abbreviation}</span>
      </div>
      <p className="mt-1 font-serif text-sm font-bold text-gray-900">{element.name}</p>
      <p className="mt-1 text-xs text-gray-600">
        Base Value: <span className="font-serif font-bold text-ice-600">{element.baseValue}</span>
      </p>
      {tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-500">
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  )
}

function CompetitionCardContent({ competition }: { competition: Competition }) {
  const typeLabels: Record<string, string> = {
    olympics: 'Olympics',
    worlds: 'World Championships',
    'gp-final': 'Grand Prix Final',
    'grand-prix': 'Grand Prix',
    'four-continents': 'Four Continents',
    europeans: 'Europeans',
    other: 'Other',
  }

  return (
    <>
      <Badge variant="frost">{typeLabels[competition.type] ?? competition.type}</Badge>
      <p className="mt-1 font-serif text-sm font-bold text-gray-900">{competition.name}</p>
      <p className="mt-1 text-xs text-gray-500">
        {competition.location}, {competition.country}
      </p>
      <p className="mt-1 text-xs text-gray-500">
        {formatDateRange(competition.startDate, competition.endDate)}
      </p>
    </>
  )
}
