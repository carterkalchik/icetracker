import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { Card, CardContent } from '../../components/ui/Card'

const seasonStructure = [
  {
    phase: 'Fall — Grand Prix Series',
    months: 'October – November',
    description:
      'Six international events across the globe. Skaters are assigned to two events each. The top scorers across the series advance to the Grand Prix Final.',
    events: ['Skate America', 'Skate Canada', 'GP France', 'NHK Trophy', 'GP Finland', 'GP Japan'],
  },
  {
    phase: 'December — Grand Prix Final',
    months: 'December',
    description:
      'The top six qualifiers in each discipline compete head-to-head. Considered the "mid-season championship" and a strong indicator of Olympic form.',
    events: ['Grand Prix Final'],
  },
  {
    phase: 'January–February — Championships',
    months: 'January – February',
    description:
      'Continental championships for different regions. Europeans for European skaters and Four Continents for everyone else. These serve as final Olympic tune-ups.',
    events: ['European Championships', 'Four Continents Championships'],
  },
  {
    phase: 'February — Olympics',
    months: 'February (every 4 years)',
    description:
      'The pinnacle of figure skating competition. Features team event, individual events in all four disciplines, and exhibition gala.',
    events: ['Winter Olympics'],
  },
  {
    phase: 'March — World Championships',
    months: 'March',
    description:
      'The season finale and the most prestigious annual competition. Determines the world rankings and future country qualifying spots.',
    events: ['World Championships'],
  },
]

export function SeasonGuidePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb
        items={[{ label: 'Competitions', path: '/competitions' }, { label: 'Season Guide' }]}
      />

      <div className="mt-6">
        <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Season Guide
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          A figure skating season runs from October through March. Here's how the calendar is
          structured and what each phase means.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {seasonStructure.map((phase, i) => (
          <Card key={i} featured={i === 3}>
            <CardContent>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-serif text-xl font-semibold text-gray-900">{phase.phase}</h3>
                <span className="text-sm text-gray-500">{phase.months}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{phase.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {phase.events.map((event) => (
                  <span
                    key={event}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {event}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
