import type { Competition } from '../../types/competitions'
import { CompetitionCard } from './CompetitionCard'

interface CalendarTimelineProps {
  competitions: Competition[]
}

export function CalendarTimeline({ competitions }: CalendarTimelineProps) {
  // Group by month
  const byMonth: Record<string, Competition[]> = {}
  for (const comp of competitions) {
    const date = new Date(comp.startDate)
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
    if (!byMonth[key]) byMonth[key] = []
    byMonth[key].push(comp)
  }

  const sortedMonths = Object.keys(byMonth).sort()

  return (
    <div className="space-y-10">
      {sortedMonths.map((monthKey) => {
        const [year, month] = monthKey.split('-')
        const monthName = new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString(
          'en-US',
          { month: 'long', year: 'numeric' }
        )

        return (
          <div key={monthKey}>
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <h3 className="font-serif text-lg font-semibold text-gray-700">{monthName}</h3>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {byMonth[monthKey].map((comp) => (
                <CompetitionCard key={comp.id} competition={comp} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
