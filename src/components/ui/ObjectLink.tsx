import { useState, useRef } from 'react'
import type { EntityRef } from '../../types/object-link'
import { cn } from '../../lib/cn'
import { ObjectCard } from './ObjectCard'

const typeIcons: Record<string, string> = {
  skater: '\u26F8\uFE0F',
  element: '\u2744\uFE0F',
  competition: '\uD83C\uDFC6',
}

interface ObjectLinkProps {
  entity: EntityRef
  className?: string
}

export function ObjectLink({ entity, className }: ObjectLinkProps) {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          'inline-flex items-center gap-1 rounded-full border border-ice-200 bg-ice-50/50',
          'px-2 py-0.5 text-xs font-medium text-ice-700',
          'transition-colors hover:bg-ice-100 hover:border-ice-300',
          'cursor-pointer',
          className,
        )}
      >
        <span className="text-[10px] leading-none">{typeIcons[entity.type]}</span>
        {entity.label}
      </button>

      {open && (
        <ObjectCard
          entity={entity}
          anchorRef={buttonRef}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}
