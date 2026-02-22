interface ErrorMessageProps {
  message?: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
        <p className="text-sm font-medium text-red-800">
          {message ?? 'Something went wrong. Please try again later.'}
        </p>
      </div>
    </div>
  )
}
