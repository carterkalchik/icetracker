import type { PairElement } from '../../types/elements'

export const pairElements: PairElement[] = [
  {
    id: 'throw-triple-salchow',
    name: 'Throw Triple Salchow',
    abbreviation: '3STh',
    baseValue: 4.4,
    description:
      'The man throws the woman into a triple Salchow. She must complete three rotations and land independently.',
    category: 'throw',
    tags: ['throw', 'triple'],
  },
  {
    id: 'throw-triple-lutz',
    name: 'Throw Triple Lutz',
    abbreviation: '3LzTh',
    baseValue: 5.3,
    description:
      'The most difficult common throw jump. The man assists the woman into a triple Lutz from a back outside edge.',
    category: 'throw',
    tags: ['throw', 'triple', 'high-value'],
  },
  {
    id: 'throw-quad-salchow',
    name: 'Throw Quadruple Salchow',
    abbreviation: '4STh',
    baseValue: 7.7,
    description:
      'An extremely rare throw with four rotations. Only a few pairs in history have landed it in competition.',
    category: 'throw',
    tags: ['throw', 'quad', 'ultra-rare'],
  },
  {
    id: 'triple-twist-l4',
    name: 'Triple Twist Lift Level 4',
    abbreviation: '3Tw4',
    baseValue: 6.6,
    description:
      'The man throws the woman overhead; she completes three rotations while airborne before being caught. A signature pairs element.',
    category: 'twist',
    tags: ['twist', 'triple', 'signature'],
  },
  {
    id: 'group-5-lift-l4',
    name: 'Group 5 Lift Level 4',
    abbreviation: '5ALi4',
    baseValue: 7.0,
    description:
      'A pair lift where the man holds the woman overhead with one arm. The most difficult lift group, requiring exceptional strength and balance.',
    category: 'lift',
    tags: ['lift', 'overhead', 'high-value'],
  },
  {
    id: 'death-spiral-l4',
    name: 'Backward Inside Death Spiral Level 4',
    abbreviation: 'BiDs4',
    baseValue: 3.5,
    description:
      'The woman pivots around the man in a deep back arch, her head nearly touching the ice. One of the most iconic pairs elements.',
    category: 'death-spiral',
    tags: ['death-spiral', 'iconic'],
  },
  {
    id: 'sbs-triple-salchow',
    name: 'Side-by-Side Triple Salchow',
    abbreviation: '3S (sbs)',
    baseValue: 4.3,
    description:
      'Both partners perform a triple Salchow simultaneously, in sync. Judged on unison as well as individual quality.',
    category: 'sbs',
    tags: ['side-by-side', 'unison'],
  },
]
