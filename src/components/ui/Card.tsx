import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface CardProps {
  children: ReactNode
  className?: string
  featured?: boolean
  onClick?: () => void
}

export function Card({ children, className, featured, onClick }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-gray-100 bg-white shadow-sm focus-within:ring-2 focus-within:ring-ice-500 focus-within:ring-offset-2',
        featured && 'border-l-4 border-l-ice-500',
        onClick && 'cursor-pointer transition-shadow hover:shadow-md',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('px-6 pt-6', className)}>{children}</div>
}

export function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('px-6 py-4', className)}>{children}</div>
}

export function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('border-t border-gray-50 px-6 py-4', className)}>{children}</div>
}
