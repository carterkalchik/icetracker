import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { HomePage } from './pages/HomePage'

// Lazy-loaded pages — each becomes its own chunk
const ElementsIndexPage = lazy(() => import('./pages/elements/ElementsIndexPage').then(m => ({ default: m.ElementsIndexPage })))
const JumpsPage = lazy(() => import('./pages/elements/JumpsPage').then(m => ({ default: m.JumpsPage })))
const SpinsPage = lazy(() => import('./pages/elements/SpinsPage').then(m => ({ default: m.SpinsPage })))
const StepsPage = lazy(() => import('./pages/elements/StepsPage').then(m => ({ default: m.StepsPage })))
const PairElementsPage = lazy(() => import('./pages/elements/PairElementsPage').then(m => ({ default: m.PairElementsPage })))
const DanceElementsPage = lazy(() => import('./pages/elements/DanceElementsPage').then(m => ({ default: m.DanceElementsPage })))
const ElementDetailPage = lazy(() => import('./pages/elements/ElementDetailPage').then(m => ({ default: m.ElementDetailPage })))
const ScoringIndexPage = lazy(() => import('./pages/scoring/ScoringIndexPage').then(m => ({ default: m.ScoringIndexPage })))
const TESPage = lazy(() => import('./pages/scoring/TESPage').then(m => ({ default: m.TESPage })))
const PCSPage = lazy(() => import('./pages/scoring/PCSPage').then(m => ({ default: m.PCSPage })))
const DeductionsPage = lazy(() => import('./pages/scoring/DeductionsPage').then(m => ({ default: m.DeductionsPage })))
const ScoreContextPage = lazy(() => import('./pages/scoring/ScoreContextPage').then(m => ({ default: m.ScoreContextPage })))
const CalculatorPage = lazy(() => import('./pages/scoring/CalculatorPage').then(m => ({ default: m.CalculatorPage })))
const SkatersIndexPage = lazy(() => import('./pages/skaters/SkatersIndexPage').then(m => ({ default: m.SkatersIndexPage })))
const SkaterDetailPage = lazy(() => import('./pages/skaters/SkaterDetailPage').then(m => ({ default: m.SkaterDetailPage })))
const WatchlistPage = lazy(() => import('./pages/skaters/WatchlistPage').then(m => ({ default: m.WatchlistPage })))
const CompetitionsIndexPage = lazy(() => import('./pages/competitions/CompetitionsIndexPage').then(m => ({ default: m.CompetitionsIndexPage })))
const CompetitionDetailPage = lazy(() => import('./pages/competitions/CompetitionDetailPage').then(m => ({ default: m.CompetitionDetailPage })))
const SeasonGuidePage = lazy(() => import('./pages/competitions/SeasonGuidePage').then(m => ({ default: m.SeasonGuidePage })))
const SourcesPage = lazy(() => import('./pages/SourcesPage').then(m => ({ default: m.SourcesPage })))
const NewsPage = lazy(() => import('./pages/news/NewsPage').then(m => ({ default: m.NewsPage })))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })))

function LazyPage({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-ice-200 border-t-ice-600" />
        </div>
      }
    >
      {children}
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/elements', element: <LazyPage><ElementsIndexPage /></LazyPage> },
      { path: '/elements/jumps', element: <LazyPage><JumpsPage /></LazyPage> },
      { path: '/elements/spins', element: <LazyPage><SpinsPage /></LazyPage> },
      { path: '/elements/steps', element: <LazyPage><StepsPage /></LazyPage> },
      { path: '/elements/pairs', element: <LazyPage><PairElementsPage /></LazyPage> },
      { path: '/elements/dance', element: <LazyPage><DanceElementsPage /></LazyPage> },
      { path: '/elements/:elementId', element: <LazyPage><ElementDetailPage /></LazyPage> },
      { path: '/scoring', element: <LazyPage><ScoringIndexPage /></LazyPage> },
      { path: '/scoring/tes', element: <LazyPage><TESPage /></LazyPage> },
      { path: '/scoring/pcs', element: <LazyPage><PCSPage /></LazyPage> },
      { path: '/scoring/deductions', element: <LazyPage><DeductionsPage /></LazyPage> },
      { path: '/scoring/context', element: <LazyPage><ScoreContextPage /></LazyPage> },
      { path: '/scoring/calculator', element: <LazyPage><CalculatorPage /></LazyPage> },
      { path: '/skaters', element: <LazyPage><SkatersIndexPage /></LazyPage> },
      { path: '/skaters/watchlist', element: <LazyPage><WatchlistPage /></LazyPage> },
      { path: '/skaters/:skaterId', element: <LazyPage><SkaterDetailPage /></LazyPage> },
      { path: '/competitions', element: <LazyPage><CompetitionsIndexPage /></LazyPage> },
      { path: '/competitions/season-guide', element: <LazyPage><SeasonGuidePage /></LazyPage> },
      { path: '/competitions/:competitionId', element: <LazyPage><CompetitionDetailPage /></LazyPage> },
      { path: '/news', element: <LazyPage><NewsPage /></LazyPage> },
      { path: '/sources', element: <LazyPage><SourcesPage /></LazyPage> },
      { path: '*', element: <LazyPage><NotFoundPage /></LazyPage> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
