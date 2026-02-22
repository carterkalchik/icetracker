import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { JumpCard } from '../../components/elements/JumpCard'
import { JumpDiagram } from '../../components/elements/JumpDiagram'
import { GOEScaleVisual } from '../../components/elements/GOEScaleVisual'
import { SkeletonPage } from '../../components/ui/Skeleton'
import { useAsync } from '../../hooks/useAsync'
import { getJumps } from '../../services/elements.service'

export function JumpsPage() {
  const { data: jumps, loading } = useAsync(getJumps)

  if (loading || !jumps) {
    return <SkeletonPage />
  }

  const quadJumps = jumps.filter((j) => j.rotations >= 4)
  const singleDoubleTriple = jumps.filter((j) => j.rotations < 4)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[{ label: 'Elements', path: '/elements' }, { label: 'Jumps' }]}
      />

      <div className="mt-6">
        <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">Jumps</h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          The six types of jumps in figure skating, from the easiest toe loop to the legendary quad
          Axel. Each jump is defined by its takeoff edge and method.
        </p>
      </div>

      {/* GOE Scale */}
      <div className="mt-8 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-medium text-gray-700">Grade of Execution (GOE) Scale</h3>
        <p className="mt-1 text-xs text-gray-500">
          Judges rate each element from -5 (major errors) to +5 (exceptional quality)
        </p>
        <GOEScaleVisual className="mt-4" />
      </div>

      {/* Base types */}
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-semibold text-gray-900">The Six Jump Types</h2>
        <p className="mt-1 text-sm text-gray-600">
          Base values shown are for single rotations. Values multiply dramatically for triples and quads.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {singleDoubleTriple.map((jump) => (
            <JumpCard key={jump.id} jump={jump} />
          ))}
        </div>
      </section>

      {/* Quad jumps */}
      <section className="mt-16">
        <h2 className="font-serif text-2xl font-semibold text-gray-900">Quadruple Jumps</h2>
        <p className="mt-1 text-sm text-gray-600">
          The elite jumps that separate the top competitors. Base values here represent the quad version.
        </p>

        <JumpDiagram
          jumps={quadJumps.map((j) => ({
            name: j.name,
            abbreviation: j.abbreviation,
            baseValue: j.baseValue,
            difficulty: j.difficulty,
          }))}
          className="mt-6 rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quadJumps.map((jump) => (
            <JumpCard key={jump.id} jump={jump} />
          ))}
        </div>
      </section>
    </div>
  )
}
