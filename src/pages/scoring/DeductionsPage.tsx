import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { DeductionsList } from '../../components/scoring/DeductionsList'
import { SkeletonPage } from '../../components/ui/Skeleton'
import { useAsync } from '../../hooks/useAsync'
import { getDeductions } from '../../services/scoring.service'

export function DeductionsPage() {
  const { data: deductions, loading } = useAsync(getDeductions)

  if (loading || !deductions) {
    return <SkeletonPage />
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Scoring', path: '/scoring' }, { label: 'Deductions' }]} />

      <div className="mt-6">
        <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">Deductions</h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Deductions are penalties subtracted from the total score. They are applied by the technical
          panel and referee, separate from the GOE reductions judges assign to individual elements.
        </p>
      </div>

      <div className="mt-8 rounded-xl bg-red-50 p-6">
        <h3 className="font-serif text-lg font-semibold text-red-900">Key Concept</h3>
        <p className="mt-2 text-sm text-red-800">
          When a skater falls, two things happen: <strong>(1)</strong> the element where they fell
          gets a negative GOE (typically -3 to -5), reducing that element's score, and{' '}
          <strong>(2)</strong> a flat -1 deduction is applied to the total score. Both penalties
          stack, making falls very costly.
        </p>
      </div>

      <div className="mt-8">
        <DeductionsList deductions={deductions} />
      </div>
    </div>
  )
}
