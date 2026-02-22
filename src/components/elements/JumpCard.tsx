import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Jump } from '../../types/elements'
import { Card, CardContent, CardHeader } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { cn } from '../../lib/cn'

export function JumpCard({ jump }: { jump: Jump }) {
  const difficultyBars = Array.from({ length: 6 }, (_, i) => i < jump.difficulty)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const video = jump.videos?.[0]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <Link to={`/elements/${jump.id}`} className="hover:text-ice-600 transition-colors">
              <h3 className="font-serif text-lg font-semibold text-gray-900">{jump.name}</h3>
            </Link>
            <p className="text-sm text-gray-500">{jump.abbreviation}</p>
          </div>
          <span className="font-serif text-2xl font-bold tabular-nums text-ice-600">
            {jump.baseValue}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-gray-600">{jump.description}</p>

        <div className="mt-4 flex items-center gap-4">
          <div>
            <p className="text-xs font-medium text-gray-500">Difficulty</p>
            <div className="mt-1 flex gap-0.5">
              {difficultyBars.map((filled, i) => (
                <div
                  key={i}
                  className={`h-2 w-4 rounded-sm ${filled ? 'bg-ice-500' : 'bg-gray-200'}`}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500">Takeoff</p>
            <p className="text-sm capitalize text-gray-700">{jump.takeoffEdge}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500">Rotations</p>
            <p className="text-sm text-gray-700">{jump.rotations}</p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {jump.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Inline video thumbnail */}
        {video && (
          <div className="mt-4">
            {!videoLoaded ? (
              <button
                onClick={() => setVideoLoaded(true)}
                className="group relative h-24 w-40 overflow-hidden rounded-lg bg-gray-900"
              >
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                  alt={video.title}
                  className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 shadow-lg transition-transform group-hover:scale-110">
                    <svg className="ml-0.5 h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-2 pb-1 pt-4">
                  <p className="truncate text-left text-[10px] text-white">{video.title}</p>
                </div>
              </button>
            ) : (
              <div className={cn('aspect-video max-w-sm overflow-hidden rounded-lg')}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}${video.timestamp ? `?start=${video.timestamp}` : ''}`}
                  title={video.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
