export const competitionTypes = {
  olympics: { label: 'Olympics', color: 'gold', priority: 1 },
  worlds: { label: 'World Championships', color: 'ice', priority: 2 },
  'gp-final': { label: 'Grand Prix Final', color: 'ice', priority: 3 },
  'grand-prix': { label: 'Grand Prix', color: 'frost', priority: 4 },
  'four-continents': { label: 'Four Continents', color: 'frost', priority: 5 },
  europeans: { label: 'European Championships', color: 'frost', priority: 5 },
  other: { label: 'Other', color: 'default', priority: 6 },
} as const
