import { useState } from 'react'
import type { PhotoAttribution } from '../../types/skaters'
import { cn } from '../../lib/cn'

interface SkaterPhotoProps {
  photo?: PhotoAttribution
  placeholder: string
  name: string
  size?: 'sm' | 'md' | 'lg'
  showAttribution?: boolean
  className?: string
}

const sizeClasses = {
  sm: 'h-12 w-12 text-sm',
  md: 'h-16 w-16 text-lg',
  lg: 'h-32 w-32 text-2xl',
}

export function SkaterPhoto({
  photo,
  placeholder,
  name,
  size = 'sm',
  showAttribution = false,
  className,
}: SkaterPhotoProps) {
  const [imgError, setImgError] = useState(false)

  if (!photo || imgError) {
    return (
      <div
        className={cn(
          'flex items-center justify-center rounded-full bg-ice-100 font-serif font-bold text-ice-700',
          sizeClasses[size],
          className
        )}
      >
        {placeholder}
      </div>
    )
  }

  return (
    <div className={cn('relative', className)}>
      <img
        src={photo.url}
        alt={name}
        onError={() => setImgError(true)}
        className={cn(
          'rounded-full object-cover',
          sizeClasses[size]
        )}
      />
      {showAttribution && (
        <p className="mt-1 text-xs text-gray-400">
          Photo:{' '}
          <a
            href={photo.licenseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600"
          >
            {photo.license}
          </a>
          {' by '}
          {photo.author} via {photo.source}
        </p>
      )}
    </div>
  )
}
