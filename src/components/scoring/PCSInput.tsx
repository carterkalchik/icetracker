import { formatScore } from '../../lib/format'

interface PCSInputProps {
  pcs: {
    skating: number
    transitions: number
    performance: number
    composition: number
    interpretation: number
  }
  pcsFactor: number
  pcsTotal: number
  onChange: (component: keyof PCSInputProps['pcs'], value: number) => void
  onFactorChange: (factor: number) => void
}

const components: { key: keyof PCSInputProps['pcs']; label: string; abbr: string }[] = [
  { key: 'skating', label: 'Skating Skills', abbr: 'SS' },
  { key: 'transitions', label: 'Transitions', abbr: 'TR' },
  { key: 'performance', label: 'Performance', abbr: 'PE' },
  { key: 'composition', label: 'Composition', abbr: 'CO' },
  { key: 'interpretation', label: 'Interpretation', abbr: 'IN' },
]

const factorOptions = [
  { value: 0.8, label: 'SP (Men) 0.8' },
  { value: 1.0, label: 'FS (Men) 1.0' },
  { value: 0.8, label: 'SP (Women) 0.8' },
  { value: 1.0, label: 'FS (Women) 1.0' },
  { value: 0.8, label: 'RD 0.8' },
  { value: 1.0, label: 'FD 1.0' },
]

export function PCSInput({ pcs, pcsFactor, pcsTotal, onChange, onFactorChange }: PCSInputProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-lg font-semibold text-gray-900">
          Program Components (PCS)
        </h3>
        <span className="font-serif text-xl font-bold tabular-nums text-ice-600">
          {formatScore(pcsTotal)}
        </span>
      </div>

      {/* Factor selector */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">Factor:</span>
        <select
          value={pcsFactor}
          onChange={(e) => onFactorChange(parseFloat(e.target.value))}
          className="rounded-lg border border-gray-200 px-2 py-1 text-sm focus:border-ice-300 focus:outline-none"
        >
          {factorOptions.map((opt, i) => (
            <option key={i} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Sliders */}
      <div className="space-y-3">
        {components.map(({ key, label, abbr }) => (
          <div key={key} className="flex items-center gap-3">
            <span className="w-10 text-xs font-medium text-gray-500">{abbr}</span>
            <span className="hidden w-28 text-sm text-gray-700 sm:block">{label}</span>
            <input
              type="range"
              min={0}
              max={10}
              step={0.25}
              value={pcs[key]}
              onChange={(e) => onChange(key, parseFloat(e.target.value))}
              className="flex-1 accent-ice-600"
            />
            <span className="w-12 text-right font-serif text-sm font-bold tabular-nums text-gray-900">
              {pcs[key].toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
