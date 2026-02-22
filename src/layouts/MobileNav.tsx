import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { NAV_LINKS } from '../lib/constants'
import { cn } from '../lib/cn'

export function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="fixed right-0 top-0 h-full w-64 bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="mb-8 rounded-lg p-2 text-gray-600 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ice-500"
          aria-label="Close menu"
          autoFocus
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-4 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ice-500',
                  isActive
                    ? 'bg-ice-50 text-ice-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}
