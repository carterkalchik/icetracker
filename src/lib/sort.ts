export function sortByKey<T>(arr: T[], key: keyof T, direction: 'asc' | 'desc' = 'asc'): T[] {
  return [...arr].sort((a, b) => {
    const aVal = a[key]
    const bVal = b[key]
    if (aVal < bVal) return direction === 'asc' ? -1 : 1
    if (aVal > bVal) return direction === 'asc' ? 1 : -1
    return 0
  })
}

export function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce<Record<string, T[]>>((acc, item) => {
    const group = String(item[key])
    if (!acc[group]) acc[group] = []
    acc[group].push(item)
    return acc
  }, {})
}
