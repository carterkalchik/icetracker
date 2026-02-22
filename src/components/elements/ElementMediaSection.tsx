import type { ElementAnimation, ElementVideo } from '../../types/elements'
import { JumpAnimation } from './JumpAnimation'
import { YouTubeEmbed } from './YouTubeEmbed'
import { cn } from '../../lib/cn'

interface ElementMediaSectionProps {
  animation?: ElementAnimation
  videos?: ElementVideo[]
  elementName: string
  className?: string
}

export function ElementMediaSection({
  animation,
  videos,
  elementName,
  className,
}: ElementMediaSectionProps) {
  if (!animation && (!videos || videos.length === 0)) return null

  return (
    <div className={cn('mt-4 rounded-lg border border-gray-100 bg-gray-50/50 p-4', className)}>
      <div className={cn('grid gap-4', animation && videos?.length ? 'sm:grid-cols-2' : '')}>
        {animation && (
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
              Technical Diagram
            </p>
            <JumpAnimation animation={animation} jumpName={elementName} />
          </div>
        )}

        {videos && videos.length > 0 && (
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
              Video Example
            </p>
            <YouTubeEmbed video={videos[0]} />
          </div>
        )}
      </div>
    </div>
  )
}
