import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { SpinCard } from '../../components/elements/SpinCard'
import { SkeletonPage } from '../../components/ui/Skeleton'
import { useAsync } from '../../hooks/useAsync'
import { getSpins } from '../../services/elements.service'

export function SpinsPage() {
  const { data: spins, loading } = useAsync(getSpins)

  if (loading || !spins) {
    return <SkeletonPage />
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[{ label: 'Elements', path: '/elements' }, { label: 'Spins' }]}
      />

      <div className="mt-6">
        <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">Spins</h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Spins are scored based on position, level features, speed, and centering. There are three
          basic positions — upright, sit, and camel — plus variations like layback and combination spins.
        </p>
      </div>

      <div className="mt-8 rounded-xl bg-frost-50 p-6">
        <h3 className="font-serif text-lg font-semibold text-frost-900">Understanding Spin Levels</h3>
        <p className="mt-2 text-sm leading-relaxed text-frost-800">
          Spins are graded from Level 1 to Level 4. Level features include: difficult variations,
          change of foot, change of position, clear increase in speed, and difficult entries. A Level 4
          spin requires the most features and is what top skaters aim for.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {spins.map((spin) => (
          <SpinCard key={spin.id} spin={spin} />
        ))}
      </div>
    </div>
  )
}
