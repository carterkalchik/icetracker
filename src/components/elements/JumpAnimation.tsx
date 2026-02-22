import { useState, useEffect } from 'react'
import type { ElementAnimation } from '../../types/elements'
import { cn } from '../../lib/cn'

interface JumpAnimationProps {
  animation: ElementAnimation
  jumpName: string
  className?: string
}

export function JumpAnimation({ animation, jumpName, className }: JumpAnimationProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isPlaying) return
    let frame: number
    const start = Date.now()
    const duration = 2000 // 2 seconds per animation cycle

    const animate = () => {
      const elapsed = Date.now() - start
      const p = Math.min(elapsed / duration, 1)
      setProgress(p)
      if (p < 1) {
        frame = requestAnimationFrame(animate)
      } else {
        setIsPlaying(false)
        setProgress(0)
      }
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [isPlaying])

  const isAxel = animation.takeoffAngle === 0
  const rotations = animation.rotations || 1

  return (
    <div className={cn('relative', className)}>
      <svg
        viewBox="0 0 110 100"
        className="w-full"
        style={{ maxHeight: 160 }}
      >
        {/* Ice surface */}
        <line x1="10" y1="85" x2="100" y2="85" stroke="#e5e7eb" strokeWidth="1" />

        {/* Blade path */}
        <path
          d={animation.svgPath || 'M 20,80 Q 50,20 90,80'}
          fill="none"
          stroke="#93c5fd"
          strokeWidth="1.5"
          strokeDasharray="4 2"
          opacity={0.5}
        />

        {/* Animated blade path */}
        {isPlaying && (
          <path
            d={animation.svgPath || 'M 20,80 Q 50,20 90,80'}
            fill="none"
            stroke="#2563eb"
            strokeWidth="2"
            strokeDasharray="200"
            strokeDashoffset={200 - progress * 200}
            strokeLinecap="round"
          />
        )}

        {/* Takeoff marker */}
        <g>
          <circle
            cx={isAxel ? 50 : 60}
            cy={isAxel ? 60 : 55}
            r="3"
            fill="#3b82f6"
            opacity={0.7}
          />
          <text
            x={isAxel ? 50 : 60}
            y={isAxel ? 72 : 67}
            textAnchor="middle"
            className="fill-gray-500"
            fontSize="6"
          >
            takeoff
          </text>
        </g>

        {/* Rotation indicator */}
        {isPlaying && progress > 0.3 && progress < 0.7 && (
          <g transform={`translate(55, 25)`}>
            <circle
              cx="0"
              cy="0"
              r="8"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="1.5"
              strokeDasharray={`${(progress - 0.3) * 2.5 * rotations * 12} 50`}
            />
            <text
              x="0"
              y="3"
              textAnchor="middle"
              className="fill-blue-600 font-bold"
              fontSize="7"
            >
              {rotations}
            </text>
          </g>
        )}

        {/* Landing marker */}
        <g>
          <circle cx="90" cy="80" r="3" fill="#22c55e" opacity={0.7} />
          <text x="90" y="95" textAnchor="middle" className="fill-gray-500" fontSize="6">
            {animation.landingEdge || 'RBO'}
          </text>
        </g>

        {/* Labels */}
        <text x="55" y="10" textAnchor="middle" className="fill-gray-700 font-serif font-semibold" fontSize="8">
          {jumpName}
        </text>
        {isAxel && (
          <text x="30" y="72" textAnchor="middle" className="fill-blue-500" fontSize="5">
            forward
          </text>
        )}
      </svg>

      {/* Play button */}
      <button
        onClick={() => setIsPlaying(true)}
        disabled={isPlaying}
        className="absolute bottom-1 right-1 rounded-full bg-ice-600 p-1.5 text-white shadow-sm transition-colors hover:bg-ice-700 disabled:opacity-50"
      >
        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  )
}
