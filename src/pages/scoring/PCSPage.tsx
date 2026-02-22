import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { Card, CardContent } from '../../components/ui/Card'
import { PCSRadar } from '../../components/scoring/PCSRadar'
import { SkeletonPage } from '../../components/ui/Skeleton'
import { useAsync } from '../../hooks/useAsync'
import { getPCSComponents } from '../../services/scoring.service'

export function PCSPage() {
  const { data: components, loading } = useAsync(getPCSComponents)

  if (loading || !components) {
    return <SkeletonPage />
  }

  const exampleScores: Record<string, number> = {
    'skating-skills': 9.25,
    transitions: 9.0,
    performance: 9.5,
    composition: 9.25,
    interpretation: 9.5,
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Scoring', path: '/scoring' }, { label: 'PCS' }]} />

      <div className="mt-6">
        <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Program Component Score (PCS)
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          The PCS measures the artistic and skating quality of a program across five components. Each
          is scored from 0 to 10 by the judges, then multiplied by a factor that varies by discipline
          and segment.
        </p>
      </div>

      {/* Radar visualization */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <Card>
          <CardContent>
            <h3 className="mb-4 text-center font-serif text-lg font-semibold text-gray-900">
              Example: Elite Men's PCS Profile
            </h3>
            <PCSRadar components={components} scores={exampleScores} />
          </CardContent>
        </Card>

        <div className="rounded-xl bg-frost-50 p-6">
          <h3 className="font-serif text-lg font-semibold text-frost-900">Understanding PCS</h3>
          <div className="mt-3 space-y-3 text-sm text-frost-800">
            <p>
              PCS is sometimes called "the artistic score" but it's much more than that. It rewards
              fundamental skating quality, not just choreography.
            </p>
            <p>
              <strong>The factor:</strong> Each segment has a multiplier. For example, in men's free
              skate the factor is 2.0, so a PCS of 9.0 in each component would yield 9.0 x 5 x 2.0
              = 90.0 points.
            </p>
            <p>
              <strong>Score range:</strong> At the elite level, top skaters typically receive 8.0-9.5
              per component. A perfect 10.0 is extremely rare.
            </p>
          </div>
        </div>
      </div>

      {/* Component details */}
      <section className="mt-12">
        <h2 className="font-serif text-2xl font-semibold text-gray-900">The Five Components</h2>
        <div className="mt-6 space-y-4">
          {components.map((c, i) => (
            <Card key={c.id} featured={i === 0}>
              <CardContent>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900">{c.name}</h3>
                    <span className="text-sm text-gray-500">{c.abbreviation}</span>
                  </div>
                  <span className="rounded-full bg-ice-50 px-3 py-1 text-sm font-medium text-ice-700">
                    0–{c.maxScore}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{c.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
