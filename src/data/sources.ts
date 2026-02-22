import type { DataSource } from '../types/sources'

export const dataSources: DataSource[] = [
  // Results
  {
    id: 'isu-results',
    name: 'ISU Results System',
    url: 'https://results.isu.org/',
    category: 'results',
    description:
      'Official competition results, scores, and protocol sheets from all ISU-sanctioned events. Primary source for all competition scores in IceTracker.',
  },
  {
    id: 'isu-bio',
    name: 'ISU Skater Biographies',
    url: 'https://www.isu.org/figure-skating/entries-results/biographies-statistics',
    category: 'results',
    description:
      'Official skater profiles, personal bests, and career records from the International Skating Union.',
  },
  {
    id: 'skatingscores',
    name: 'SkatingScores.com',
    url: 'https://skatingscores.com/',
    category: 'results',
    description:
      'Community-maintained database of historical competition results, protocol details, and score breakdowns.',
  },

  // Rules & Technical
  {
    id: 'isu-sov',
    name: 'ISU Scale of Values',
    url: 'https://www.isu.org/figure-skating/rules/sandp-handbooks-faq',
    category: 'rules',
    description:
      'Official base values for all elements, GOE tables, and level requirements published by the ISU.',
  },
  {
    id: 'isu-tech-rules',
    name: 'ISU Technical Rules',
    url: 'https://www.isu.org/figure-skating/rules/fsk-regulations-rules',
    category: 'rules',
    description:
      'Complete technical rules governing element requirements, program structure, deductions, and competition format.',
  },
  {
    id: 'isu-communications',
    name: 'ISU Communications',
    url: 'https://www.isu.org/figure-skating/rules/fsk-communications',
    category: 'rules',
    description:
      'Official ISU communications with rule updates, clarifications, and seasonal changes to the judging system.',
  },

  // Media
  {
    id: 'wikimedia-photos',
    name: 'Wikimedia Commons',
    url: 'https://commons.wikimedia.org/',
    category: 'media',
    description:
      'Creative Commons licensed photographs of figure skaters used under CC BY-SA and similar licenses.',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://www.youtube.com/',
    category: 'media',
    description:
      'Element demonstration videos and competition footage from official ISU channels and broadcasters.',
  },

  // Reference
  {
    id: 'wikipedia',
    name: 'Wikipedia',
    url: 'https://en.wikipedia.org/',
    category: 'reference',
    description:
      'General reference for skater biographies, competition history, and figure skating terminology. Cross-referenced with ISU data for accuracy.',
  },
  {
    id: 'olympics',
    name: 'Olympics.com',
    url: 'https://www.olympics.com/en/sports/figure-skating',
    category: 'reference',
    description:
      'Official Olympic figure skating records, medal tables, and historical competition data.',
  },
]

export const sourceCategories: Record<string, { label: string; description: string }> = {
  results: {
    label: 'Competition Results',
    description: 'Sources for scores, placements, and protocol data',
  },
  rules: {
    label: 'Rules & Technical',
    description: 'Official ISU rules, base values, and judging criteria',
  },
  media: {
    label: 'Photos & Videos',
    description: 'Licensed media for skater photos and element demonstrations',
  },
  reference: {
    label: 'General Reference',
    description: 'Background information and historical records',
  },
}
