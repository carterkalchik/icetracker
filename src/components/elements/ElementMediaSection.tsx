import type { ElementAnimation, ElementVideo } from '../../types/elements'
import { YouTubeEmbed } from './YouTubeEmbed'
import { cn } from '../../lib/cn'

interface ElementMediaSectionProps {
  animation?: ElementAnimation
  videos?: ElementVideo[]
  elementName: string
  className?: string
}

export function ElementMediaSection({
  videos,
  className,
}: ElementMediaSectionProps) {
  if (!videos || videos.length === 0) return null

  return (
    <div className={cn('mt-4 rounded-lg border border-gray-100 bg-gray-50/50 p-4', className)}>
      <div>
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
          Video Example
        </p>
        <div className="max-w-2xl">
          <YouTubeEmbed video={videos[0]} />
        </div>
      </div>
    </div>
  )
}
