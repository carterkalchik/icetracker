import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">⛸</span>
            <span className="font-serif text-lg font-bold text-ice-900">BladeTracker</span>
          </div>

          <nav className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-gray-500 transition-colors hover:text-gray-900"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            to="/sources"
            className="text-sm text-gray-400 transition-colors hover:text-gray-600"
          >
            Data Sources & Attribution
          </Link>
        </div>

        <p className="mt-4 text-center text-xs text-gray-400">
          Built for learning figure skating. Data is curated for educational purposes.
        </p>
      </div>
    </footer>
  )
}
