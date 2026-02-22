import { useState } from 'react'
import type { ElementVideo } from '../../types/elements'
import { cn } from '../../lib/cn'

interface YouTubeEmbedProps {
  video: ElementVideo
  className?: string
}

export function YouTubeEmbed({ video, className }: YouTubeEmbedProps) {
  const [loaded, setLoaded] = useState(false)

  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`
  const embedUrl = `https://www.youtube-nocookie.com/embed/${video.youtubeId}${
    video.timestamp ? `?start=${video.timestamp}` : ''
  }`

  if (!loaded) {
    return (
      <button
        onClick={() => setLoaded(true)}
        className={cn(
          'group relative aspect-video w-full overflow-hidden rounded-lg bg-gray-900',
          className
        )}
      >
        <img
          src={thumbnailUrl}
          alt={video.title}
          className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
          loading="lazy"
        />
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-lg transition-transform group-hover:scale-110">
            <svg className="ml-1 h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2 pt-6">
          <p className="text-left text-xs text-white">{video.title}</p>
          {video.skaterName && (
            <p className="text-left text-xs text-gray-300">{video.skaterName}</p>
          )}
        </div>
      </button>
    )
  }

  return (
    <div className={cn('aspect-video overflow-hidden rounded-lg', className)}>
      <iframe
        src={embedUrl}
        title={video.title}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
