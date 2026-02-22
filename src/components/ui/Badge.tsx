import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BadgeVariant = 'default' | 'ice' | 'frost' | 'gold' | 'silver' | 'bronze' | 'outline'

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-gray-100 text-gray-700',
  ice: 'bg-ice-100 text-ice-700',
  frost: 'bg-frost-100 text-frost-700',
  gold: 'bg-amber-100 text-amber-800',
  silver: 'bg-gray-200 text-gray-700',
  bronze: 'bg-orange-100 text-orange-800',
  outline: 'border border-gray-300 text-gray-600',
}

export function Badge({
  children,
  variant = 'default',
  className,
}: {
  children: ReactNode
  variant?: BadgeVariant
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
