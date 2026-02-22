import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { ScoreCalculator } from '../../components/scoring/ScoreCalculator'

export function CalculatorPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[{ label: 'Scoring', path: '/scoring' }, { label: 'Calculator' }]}
      />

      <div className="mt-6">
        <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Score Calculator
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Build a program element-by-element and see how the total score is calculated.
          Add elements, adjust GOE, set program components, and see the resulting score.
        </p>
      </div>

      <div className="mt-8">
        <ScoreCalculator />
      </div>
    </div>
  )
}
