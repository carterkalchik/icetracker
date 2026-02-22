import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl">⛸</p>
      <h1 className="mt-4 font-serif text-3xl font-bold text-gray-900">Page Not Found</h1>
      <p className="mt-2 text-gray-600">
        Looks like this page took a wrong edge. It doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-lg bg-ice-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ice-700"
      >
        Back to Home
      </Link>
    </div>
  )
}
