import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

interface BreadcrumbItem {
  label: string
  path?: string
}

export function Breadcrumb({ items, className }: { items: BreadcrumbItem[]; className?: string }) {
  return (
    <nav className={cn('flex items-center gap-2 text-sm text-gray-500', className)}>
      <Link to="/" className="hover:text-gray-700">
        Home
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <span className="text-gray-300">/</span>
          {item.path ? (
            <Link to={item.path} className="hover:text-gray-700">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
