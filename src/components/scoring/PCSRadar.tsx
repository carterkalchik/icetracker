import type { PCSComponent } from '../../types/scoring'
import { cn } from '../../lib/cn'

interface PCSRadarProps {
  components: PCSComponent[]
  scores?: Record<string, number>
  className?: string
}

export function PCSRadar({ components, scores, className }: PCSRadarProps) {
  const size = 240
  const center = size / 2
  const radius = 90
  const levels = [2, 4, 6, 8, 10]

  const angleStep = (2 * Math.PI) / components.length
  const startAngle = -Math.PI / 2

  function polarToCartesian(angle: number, r: number) {
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    }
  }

  function polygonPoints(values: number[]) {
    return values
      .map((v, i) => {
        const angle = startAngle + i * angleStep
        const r = (v / 10) * radius
        const { x, y } = polarToCartesian(angle, r)
        return `${x},${y}`
      })
      .join(' ')
  }

  const defaultScores = components.map(() => 7.5)
  const scoreValues = scores
    ? components.map((c) => scores[c.id] ?? 7.5)
    : defaultScores

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Grid levels */}
        {levels.map((level) => {
          const r = (level / 10) * radius
          const points = components
            .map((_, i) => {
              const angle = startAngle + i * angleStep
              const { x, y } = polarToCartesian(angle, r)
              return `${x},${y}`
            })
            .join(' ')
          return (
            <polygon
              key={level}
              points={points}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth={1}
            />
          )
        })}

        {/* Axis lines */}
        {components.map((_, i) => {
          const angle = startAngle + i * angleStep
          const { x, y } = polarToCartesian(angle, radius)
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="#e5e7eb"
              strokeWidth={1}
            />
          )
        })}

        {/* Data polygon */}
        <polygon
          points={polygonPoints(scoreValues)}
          fill="rgba(12, 142, 235, 0.15)"
          stroke="#0c8eeb"
          strokeWidth={2}
        />

        {/* Data points */}
        {scoreValues.map((v, i) => {
          const angle = startAngle + i * angleStep
          const r = (v / 10) * radius
          const { x, y } = polarToCartesian(angle, r)
          return <circle key={i} cx={x} cy={y} r={4} fill="#0c8eeb" />
        })}

        {/* Labels */}
        {components.map((c, i) => {
          const angle = startAngle + i * angleStep
          const { x, y } = polarToCartesian(angle, radius + 20)
          return (
            <text
              key={c.id}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-gray-600 text-[10px] font-medium"
            >
              {c.abbreviation}
            </text>
          )
        })}
      </svg>

      <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1">
        {components.map((c, i) => (
          <span key={c.id} className="text-xs text-gray-500">
            <span className="font-medium text-gray-700">{c.abbreviation}</span> = {c.name}
            {scores && (
              <span className="ml-1 tabular-nums text-ice-600">{scoreValues[i].toFixed(1)}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
