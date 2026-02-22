import type { GOERow } from '../../types/scoring'

export const goeTable: GOERow[] = [
  {
    grade: -5,
    label: '-5',
    percentageOfBase: -50,
    description: 'Fall, wrong edge, severe errors, or major omission of required elements.',
  },
  {
    grade: -4,
    label: '-4',
    percentageOfBase: -40,
    description: 'Very serious errors such as a fall with additional mistakes, or severe under-rotation.',
  },
  {
    grade: -3,
    label: '-3',
    percentageOfBase: -30,
    description: 'Serious errors: major under-rotation, poor landing, or loss of control.',
  },
  {
    grade: -2,
    label: '-2',
    percentageOfBase: -20,
    description: 'Notable errors: slight under-rotation, two-foot landing, or unclear edge.',
  },
  {
    grade: -1,
    label: '-1',
    percentageOfBase: -10,
    description: 'Minor errors: slight hesitation, minor balance issue, or slightly labored.',
  },
  {
    grade: 0,
    label: '0',
    percentageOfBase: 0,
    description: 'Average execution — meets the basic standard without notable positives or negatives.',
  },
  {
    grade: 1,
    label: '+1',
    percentageOfBase: 10,
    description: 'Good execution with one positive aspect such as good speed, height, or flow.',
  },
  {
    grade: 2,
    label: '+2',
    percentageOfBase: 20,
    description: 'Well-executed with two or more positive aspects. Clearly above average quality.',
  },
  {
    grade: 3,
    label: '+3',
    percentageOfBase: 30,
    description: 'Very good execution with effortless quality, good height/distance, and flow.',
  },
  {
    grade: 4,
    label: '+4',
    percentageOfBase: 40,
    description: 'Excellent execution — exceptional height, distance, speed, and effortless quality.',
  },
  {
    grade: 5,
    label: '+5',
    percentageOfBase: 50,
    description: 'Extraordinary, exceptional execution. Virtuoso quality rarely seen — the absolute best.',
  },
]
