import { useState, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

export function Tooltip({
  children,
  content,
  className,
}: {
  children: ReactNode
  content: string
  className?: string
}) {
  const [show, setShow] = useState(false)

  return (
    <span
      className={cn('relative inline-flex', className)}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      tabIndex={0}
      role="button"
      aria-describedby={show ? 'tooltip' : undefined}
    >
      {children}
      {show && (
        <span
          id="tooltip"
          role="tooltip"
          className="absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white shadow-lg"
        >
          {content}
          <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </span>
      )}
    </span>
  )
}
