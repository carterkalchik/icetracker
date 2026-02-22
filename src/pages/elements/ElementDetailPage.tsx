import { useParams, Link } from 'react-router-dom'
import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { Badge } from '../../components/ui/Badge'
import { Card, CardContent } from '../../components/ui/Card'
import { GOEScaleVisual } from '../../components/elements/GOEScaleVisual'
import { ElementMediaSection } from '../../components/elements/ElementMediaSection'
import { SkeletonDetailPage } from '../../components/ui/Skeleton'
import { useAsync } from '../../hooks/useAsync'
import { getElementById, getElementCategory } from '../../services/elements.service'
import { formatScore } from '../../lib/format'
import type { Jump, Spin, StepSequence, PairElement, DanceElement } from '../../types/elements'

function isJump(el: unknown): el is Jump {
  return typeof el === 'object' && el !== null && 'takeoffEdge' in el
}

function isSpin(el: unknown): el is Spin {
  return typeof el === 'object' && el !== null && 'position' in el
}

function isStep(el: unknown): el is StepSequence {
  return typeof el === 'object' && el !== null && 'level' in el && !('position' in el) && !('category' in el)
}

function isPairElement(el: unknown): el is PairElement {
  if (typeof el !== 'object' || el === null || !('category' in el)) return false
  return ['throw', 'twist', 'lift', 'sbs', 'death-spiral'].includes((el as PairElement).category)
}

function isDanceElement(el: unknown): el is DanceElement {
  if (typeof el !== 'object' || el === null || !('category' in el)) return false
  return !isPairElement(el)
}

export function ElementDetailPage() {
  const { elementId } = useParams<{ elementId: string }>()
  const { data: element, loading } = useAsync(() => getElementById(elementId!), [elementId])

  if (loading) {
    return <SkeletonDetailPage />
  }

  if (!element) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-gray-500">Element not found.</p>
        <Link to="/elements" className="mt-2 inline-block text-sm font-medium text-ice-600 hover:text-ice-800">
          &larr; Back to Elements
        </Link>
      </div>
    )
  }

  const category = getElementCategory(element)

  // Calculate GOE adjustments for display
  const goeValues = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((grade) => ({
    grade,
    adjustment: +(element.baseValue * (grade * 0.1)).toFixed(2),
    total: +(element.baseValue + element.baseValue * (grade * 0.1)).toFixed(2),
  }))

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[
          { label: 'Elements', path: '/elements' },
          { label: category.label, path: category.path },
          { label: element.name },
        ]}
      />

      {/* Header */}
      <div className="mt-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="ice" className="px-3 py-1 text-sm">
            {element.abbreviation}
          </Badge>
          {element.tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
        <h1 className="mt-3 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          {element.name}
        </h1>
        <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">
          {element.description}
        </p>
      </div>

      {/* Key stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="text-center">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Base Value</p>
            <p className="mt-1 font-serif text-3xl font-bold tabular-nums text-ice-600">
              {formatScore(element.baseValue)}
            </p>
          </CardContent>
        </Card>

        {isJump(element) && (
          <>
            <Card>
              <CardContent className="text-center">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Takeoff</p>
                <p className="mt-1 text-xl font-semibold text-gray-900 capitalize">
                  {element.takeoffEdge} pick
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Difficulty</p>
                <div className="mt-1 flex justify-center gap-1">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-3 w-3 rounded-full ${
                        i < element.difficulty ? 'bg-ice-500' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-1 text-sm text-gray-500">{element.difficulty}/6</p>
              </CardContent>
            </Card>
          </>
        )}

        {isSpin(element) && (
          <>
            <Card>
              <CardContent className="text-center">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Position</p>
                <p className="mt-1 text-xl font-semibold text-gray-900 capitalize">
                  {element.position}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Level</p>
                <p className="mt-1 text-xl font-semibold text-gray-900">
                  Level {element.level}
                </p>
              </CardContent>
            </Card>
          </>
        )}

        {isStep(element) && (
          <Card>
            <CardContent className="text-center">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Level</p>
              <p className="mt-1 text-xl font-semibold text-gray-900">
                Level {element.level}
              </p>
            </CardContent>
          </Card>
        )}

        {isPairElement(element) && (
          <Card>
            <CardContent className="text-center">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Category</p>
              <p className="mt-1 text-xl font-semibold text-gray-900 capitalize">
                {element.category.replace('-', ' ')}
              </p>
            </CardContent>
          </Card>
        )}

        {isDanceElement(element) && (
          <Card>
            <CardContent className="text-center">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Category</p>
              <p className="mt-1 text-xl font-semibold text-gray-900 capitalize">
                {element.category.replace('-', ' ')}
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Media section (animation + video) */}
      {'animation' in element || 'videos' in element ? (
        <section className="mt-10">
          <h2 className="font-serif text-2xl font-semibold text-gray-900">Visual Reference</h2>
          <ElementMediaSection
            animation={'animation' in element ? (element as Jump).animation : undefined}
            videos={'videos' in element ? element.videos : undefined}
            elementName={element.name}
            className="mt-4"
          />
        </section>
      ) : null}

      {/* GOE Impact */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-gray-900">GOE Impact</h2>
        <p className="mt-1 text-sm text-gray-600">
          How the Grade of Execution adjusts the score for this element.
        </p>

        <Card className="mt-4">
          <CardContent>
            <GOEScaleVisual className="mb-6" />
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-2 text-left font-medium text-gray-500">GOE</th>
                    <th className="py-2 text-right font-medium text-gray-500">Adjustment</th>
                    <th className="py-2 text-right font-medium text-gray-500">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {goeValues.map(({ grade, adjustment, total }) => (
                    <tr
                      key={grade}
                      className={`border-b border-gray-50 ${grade === 0 ? 'bg-gray-50' : ''}`}
                    >
                      <td className="py-2">
                        <span
                          className={`font-medium tabular-nums ${
                            grade > 0 ? 'text-emerald-600' : grade < 0 ? 'text-red-500' : 'text-gray-500'
                          }`}
                        >
                          {grade > 0 ? `+${grade}` : grade}
                        </span>
                      </td>
                      <td
                        className={`py-2 text-right tabular-nums ${
                          adjustment > 0 ? 'text-emerald-600' : adjustment < 0 ? 'text-red-500' : 'text-gray-400'
                        }`}
                      >
                        {adjustment > 0 ? '+' : ''}{formatScore(adjustment)}
                      </td>
                      <td className="py-2 text-right font-serif font-bold tabular-nums text-gray-900">
                        {formatScore(total)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Scoring tip */}
      <div className="mt-8 rounded-xl bg-ice-50 p-6">
        <h3 className="font-serif text-lg font-semibold text-ice-900">Scoring Tip</h3>
        <p className="mt-2 text-sm leading-relaxed text-ice-800">
          The GOE is a percentage of the base value. A +5 GOE adds 50% to the base value, while a
          -5 subtracts 50%. For this element ({element.abbreviation}), the range is{' '}
          <strong>{formatScore(goeValues[0].total)}</strong> to{' '}
          <strong>{formatScore(goeValues[goeValues.length - 1].total)}</strong>.
        </p>
      </div>

      {/* Try in calculator */}
      <div className="mt-8">
        <Link
          to="/scoring/calculator"
          className="inline-flex items-center gap-2 rounded-lg border border-ice-200 bg-ice-50 px-4 py-2 text-sm font-medium text-ice-700 transition-colors hover:bg-ice-100"
        >
          Try in Score Calculator &rarr;
        </Link>
      </div>
    </div>
  )
}
