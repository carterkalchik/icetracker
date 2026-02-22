import { cn } from '../../lib/cn'

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-gray-200', className)}
    />
  )
}

export function SkeletonCard({ className }: SkeletonProps) {
  return (
    <div className={cn('rounded-xl border border-gray-100 bg-white p-6 shadow-sm', className)}>
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="mt-3 h-3 w-full" />
      <Skeleton className="mt-2 h-3 w-4/5" />
    </div>
  )
}

export function SkeletonSkaterCard() {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="mt-2 h-3 w-24" />
        </div>
      </div>
      <Skeleton className="mt-4 h-3 w-full" />
      <Skeleton className="mt-2 h-3 w-3/4" />
    </div>
  )
}

export function SkeletonPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="mt-6 h-8 w-64" />
      <Skeleton className="mt-3 h-4 w-96" />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  )
}

export function SkeletonDetailPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Skeleton className="h-4 w-40" />
      <div className="mt-6 flex items-start gap-4">
        <Skeleton className="h-20 w-20 rounded-full" />
        <div>
          <Skeleton className="h-8 w-48" />
          <Skeleton className="mt-2 h-4 w-32" />
        </div>
      </div>
      <Skeleton className="mt-6 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-5/6" />
      <Skeleton className="mt-2 h-4 w-4/5" />
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  )
}
