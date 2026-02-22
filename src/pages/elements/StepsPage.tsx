import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { ElementCard } from '../../components/elements/ElementCard'
import { SkeletonPage } from '../../components/ui/Skeleton'
import { useAsync } from '../../hooks/useAsync'
import { getSteps } from '../../services/elements.service'

export function StepsPage() {
  const { data: steps, loading } = useAsync(getSteps)

  if (loading || !steps) {
    return <SkeletonPage />
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[{ label: 'Elements', path: '/elements' }, { label: 'Steps' }]}
      />

      <div className="mt-6">
        <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Step Sequences & Choreographic Elements
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Step sequences are required in every competitive program. They showcase skating skills through
          complex turns and footwork covering the full ice surface.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {steps.map((step) => (
          <ElementCard key={step.id} element={step} />
        ))}
      </div>
    </div>
  )
}
