import { Breadcrumb } from '../components/ui/Breadcrumb'
import { Card, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { dataSources, sourceCategories } from '../data/sources'

const categoryOrder = ['results', 'rules', 'media', 'reference'] as const

export function SourcesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: 'Sources' }]} />

      <div className="mt-6">
        <h1 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
          Data Sources
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          All data in IceTracker is sourced from official and publicly available resources. Here's
          where it comes from.
        </p>
      </div>

      <div className="mt-10 space-y-12">
        {categoryOrder.map((categoryKey) => {
          const category = sourceCategories[categoryKey]
          const sources = dataSources.filter((s) => s.category === categoryKey)

          return (
            <section key={categoryKey}>
              <div className="mb-4">
                <h2 className="font-serif text-xl font-semibold text-gray-900">
                  {category.label}
                </h2>
                <p className="mt-1 text-sm text-gray-500">{category.description}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sources.map((source) => (
                  <a
                    key={source.id}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="h-full transition-shadow group-hover:shadow-md">
                      <CardContent>
                        <div className="flex items-start justify-between">
                          <h3 className="font-serif text-lg font-semibold text-gray-900 group-hover:text-ice-700">
                            {source.name}
                          </h3>
                          <Badge variant="outline">
                            <span className="inline-flex items-center gap-1">
                              Link
                              <svg
                                className="h-3 w-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                />
                              </svg>
                            </span>
                          </Badge>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                          {source.description}
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      <div className="mt-12 rounded-xl bg-gray-50 p-6">
        <h3 className="font-serif text-lg font-semibold text-gray-900">A Note on Data Accuracy</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          IceTracker is built for educational purposes. While we strive for accuracy, scores and
          results are curated from public sources and may contain minor discrepancies. For official
          records, always refer to the ISU Results System directly.
        </p>
      </div>
    </div>
  )
}
