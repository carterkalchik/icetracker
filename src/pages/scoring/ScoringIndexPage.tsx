import { Link } from 'react-router-dom'
import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { Card, CardContent } from '../../components/ui/Card'
import { ScoreBreakdownCard } from '../../components/scoring/ScoreBreakdownCard'

const sections = [
  {
    title: 'Technical Element Score (TES)',
    description: 'How each jump, spin, and step is scored with base values and GOE',
    path: '/scoring/tes',
    icon: '🎯',
  },
  {
    title: 'Program Component Score (PCS)',
    description: 'The five components that measure artistry, skating skills, and interpretation',
    path: '/scoring/pcs',
    icon: '🎨',
  },
  {
    title: 'Deductions',
    description: 'Falls, time violations, and other penalties that reduce the total score',
    path: '/scoring/deductions',
    icon: '⚠️',
  },
  {
    title: 'Score Context',
    description: 'Benchmarks and records to understand what scores mean at the elite level',
    path: '/scoring/context',
    icon: '📈',
  },
]

export function ScoringIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Scoring' }]} />

      <div className="mt-6">
        <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Scoring System
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Figure skating uses the International Judging System (IJS). Every score is the sum of a
          Technical Element Score and a Program Component Score, minus any deductions.
        </p>
      </div>

      {/* Example breakdown */}
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <ScoreBreakdownCard
          label="Example: Men's Short Program"
          tes={56.82}
          pcs={47.15}
          deductions={0}
        />
        <div className="flex flex-col justify-center rounded-xl bg-ice-50 p-6">
          <h3 className="font-serif text-lg font-semibold text-ice-900">The Formula</h3>
          <p className="mt-3 font-serif text-xl font-bold text-ice-800">
            Total = TES + PCS - Deductions
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ice-800">
            <li>
              <strong>TES</strong> = sum of each element's base value, adjusted by GOE
            </li>
            <li>
              <strong>PCS</strong> = five component scores (0-10 each), multiplied by a factor
            </li>
            <li>
              <strong>Deductions</strong> = penalties for falls, time violations, etc.
            </li>
          </ul>
        </div>
      </div>

      {/* Calculator CTA */}
      <Link
        to="/scoring/calculator"
        className="mt-8 flex items-center justify-between rounded-xl border-2 border-ice-200 bg-gradient-to-r from-ice-50 to-frost-50 p-6 transition-shadow hover:shadow-md"
      >
        <div>
          <h3 className="font-serif text-xl font-semibold text-ice-900">Score Calculator</h3>
          <p className="mt-1 text-sm text-ice-700">
            Build a program element-by-element and calculate the total score interactively.
          </p>
        </div>
        <span className="text-3xl">🧮</span>
      </Link>

      {/* Section cards */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {sections.map((section) => (
          <Link key={section.path} to={section.path}>
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardContent>
                <span className="text-3xl">{section.icon}</span>
                <h3 className="mt-3 font-serif text-xl font-semibold text-gray-900">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{section.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
