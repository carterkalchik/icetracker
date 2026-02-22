import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { ElementCard } from '../../components/elements/ElementCard'
import { SkeletonPage } from '../../components/ui/Skeleton'
import { useAsync } from '../../hooks/useAsync'
import { getDanceElements } from '../../services/elements.service'

export function DanceElementsPage() {
  const { data: elements, loading } = useAsync(getDanceElements)

  if (loading || !elements) {
    return <SkeletonPage />
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[{ label: 'Elements', path: '/elements' }, { label: 'Dance Elements' }]}
      />

      <div className="mt-6">
        <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Ice Dance Elements
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Ice dance emphasizes rhythm, expression, and intricate footwork performed in hold. Elements
          include pattern dances, twizzles, lifts, spins, and choreographic sequences.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {elements.map((el) => (
          <ElementCard key={el.id} element={el} />
        ))}
      </div>
    </div>
  )
}
