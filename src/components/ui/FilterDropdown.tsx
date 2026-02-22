import { useState, useRef, useEffect } from 'react'
import { cn } from '../../lib/cn'

export interface FilterOption {
  value: string
  label: string
}

interface FilterDropdownProps {
  label: string
  options: FilterOption[]
  selected: Set<string>
  onChange: (selected: Set<string>) => void
  className?: string
}

export function FilterDropdown({ label, options, selected, onChange, className }: FilterDropdownProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  // Close on click outside
  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
        setSearch('')
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  // Focus search on open
  useEffect(() => {
    if (open) searchRef.current?.focus()
  }, [open])

  const filtered = search
    ? options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()))
    : options

  function toggle(value: string) {
    const next = new Set(selected)
    if (next.has(value)) next.delete(value)
    else next.add(value)
    onChange(next)
  }

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition-colors',
          selected.size > 0
            ? 'border-ice-300 bg-ice-50 text-ice-700'
            : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50',
        )}
      >
        {label}
        {selected.size > 0 && (
          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-ice-500 px-1.5 text-[11px] font-semibold text-white">
            {selected.size}
          </span>
        )}
        <svg
          className={cn('h-3.5 w-3.5 text-gray-400 transition-transform', open && 'rotate-180')}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-40 mt-1 w-72 rounded-lg border border-gray-200 bg-white shadow-lg">
          {/* Search */}
          {options.length > 5 && (
            <div className="border-b border-gray-100 p-2">
              <input
                ref={searchRef}
                type="text"
                placeholder={`Search ${label.toLowerCase()}...`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-ice-400 focus:bg-white"
              />
            </div>
          )}

          {/* Options */}
          <div className="max-h-56 overflow-y-auto p-1.5">
            {filtered.length === 0 ? (
              <p className="px-2 py-3 text-center text-xs text-gray-400">No matches</p>
            ) : (
              filtered.map((option) => {
                const isSelected = selected.has(option.value)
                return (
                  <label
                    key={option.value}
                    className={cn(
                      'flex cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors',
                      isSelected ? 'bg-ice-50 text-ice-800' : 'text-gray-700 hover:bg-gray-50',
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggle(option.value)}
                      className="h-3.5 w-3.5 rounded border-gray-300 text-ice-600 accent-ice-600"
                    />
                    <span className="truncate">{option.label}</span>
                  </label>
                )
              })
            )}
          </div>

          {/* Footer */}
          {selected.size > 0 && (
            <div className="border-t border-gray-100 px-3 py-2">
              <button
                type="button"
                onClick={() => onChange(new Set())}
                className="text-xs font-medium text-ice-600 hover:text-ice-800"
              >
                Clear {label.toLowerCase()}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
