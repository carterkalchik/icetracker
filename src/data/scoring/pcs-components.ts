import type { PCSComponent } from '../../types/scoring'

export const pcsComponents: PCSComponent[] = [
  {
    id: 'skating-skills',
    name: 'Skating Skills',
    abbreviation: 'SS',
    description:
      'Overall quality of skating: edge control, flow, speed, and multi-directional skating. This reflects the fundamental ability to move on the ice with effortless power and control.',
    maxScore: 10,
  },
  {
    id: 'transitions',
    name: 'Transitions',
    abbreviation: 'TR',
    description:
      'The footwork, movements, and linking steps between elements. High marks mean the skater connects elements seamlessly rather than just skating from one element to the next.',
    maxScore: 10,
  },
  {
    id: 'performance',
    name: 'Performance',
    abbreviation: 'PE',
    description:
      'Physical, emotional, and intellectual involvement. How well the skater conveys the music and engages the audience. Includes projection, carriage, and confidence.',
    maxScore: 10,
  },
  {
    id: 'composition',
    name: 'Composition',
    abbreviation: 'CO',
    description:
      'The intentional design and arrangement of movements across the ice. Covers ice coverage, pattern variety, and how well the program is structured to highlight the music.',
    maxScore: 10,
  },
  {
    id: 'interpretation',
    name: 'Interpretation of the Music',
    abbreviation: 'IN',
    description:
      'How well the skater translates the music into movement. Goes beyond just skating to the beat — includes expressing nuances, phrasing, accents, and the character of the music.',
    maxScore: 10,
  },
]
