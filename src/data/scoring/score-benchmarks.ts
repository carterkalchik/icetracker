import type { ScoreBenchmark } from '../../types/scoring'

export const scoreBenchmarks: ScoreBenchmark[] = [
  // Men
  {
    label: 'World Record (SP)',
    discipline: 'Men',
    segment: 'Short Program',
    score: 113.97,
    description: 'Ilia Malinin set this record with a historic short program including a quad Axel.',
  },
  {
    label: 'World Record (FS)',
    discipline: 'Men',
    segment: 'Free Skate',
    score: 227.79,
    description: 'Ilia Malinin\'s free skate world record, featuring multiple quad jumps.',
  },
  {
    label: 'World Record (Total)',
    discipline: 'Men',
    segment: 'Total',
    score: 333.16,
    description: 'Ilia Malinin\'s combined total score world record.',
  },
  {
    label: 'Olympic Gold Range',
    discipline: 'Men',
    segment: 'Total',
    score: 310,
    description: 'Recent Olympic gold medalists in men\'s typically score above 310 total.',
  },
  {
    label: 'Competitive Threshold',
    discipline: 'Men',
    segment: 'Total',
    score: 270,
    description: 'A total score above 270 is generally needed to contend for a podium at major events.',
  },
  // Women
  {
    label: 'World Record (SP)',
    discipline: 'Women',
    segment: 'Short Program',
    score: 82.08,
    description: 'Kaori Sakamoto holds the women\'s short program world record.',
  },
  {
    label: 'World Record (FS)',
    discipline: 'Women',
    segment: 'Free Skate',
    score: 160.38,
    description: 'The women\'s free skate world record showcasing technical and artistic excellence.',
  },
  {
    label: 'World Record (Total)',
    discipline: 'Women',
    segment: 'Total',
    score: 236.09,
    description: 'The women\'s combined total score world record.',
  },
  {
    label: 'Olympic Gold Range',
    discipline: 'Women',
    segment: 'Total',
    score: 220,
    description: 'Recent Olympic gold medalists in women\'s typically score above 220 total.',
  },
  {
    label: 'Competitive Threshold',
    discipline: 'Women',
    segment: 'Total',
    score: 200,
    description: 'A total score above 200 is generally needed for women to contend at major events.',
  },
  // Pairs
  {
    label: 'World Record (Total)',
    discipline: 'Pairs',
    segment: 'Total',
    score: 239.82,
    description: 'The pairs combined total score world record.',
  },
  {
    label: 'Competitive Threshold',
    discipline: 'Pairs',
    segment: 'Total',
    score: 200,
    description: 'Top pairs teams at Worlds and Olympics typically exceed 200 total points.',
  },
  // Ice Dance
  {
    label: 'World Record (Total)',
    discipline: 'Ice Dance',
    segment: 'Total',
    score: 229.82,
    description: 'The ice dance combined total score world record.',
  },
  {
    label: 'Competitive Threshold',
    discipline: 'Ice Dance',
    segment: 'Total',
    score: 205,
    description: 'Top ice dance teams contending for medals typically exceed 205 total points.',
  },
]
