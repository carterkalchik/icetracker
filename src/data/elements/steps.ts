import type { StepSequence } from '../../types/elements'

export const steps: StepSequence[] = [
  {
    id: 'step-sequence-l4',
    name: 'Step Sequence Level 4',
    abbreviation: 'StSq4',
    baseValue: 3.9,
    description:
      'A sequence of turns and steps covering the full ice surface. Level 4 requires complex turns (twizzles, brackets, counters, rockers) with variety and difficulty.',
    level: 4,
    tags: ['required', 'footwork'],
  },
  {
    id: 'step-sequence-l3',
    name: 'Step Sequence Level 3',
    abbreviation: 'StSq3',
    baseValue: 3.3,
    description:
      'A step sequence with good variety of turns and steps. Slightly less complex than Level 4 but still demonstrates strong skating skills.',
    level: 3,
    tags: ['required', 'footwork'],
  },
  {
    id: 'step-sequence-l2',
    name: 'Step Sequence Level 2',
    abbreviation: 'StSq2',
    baseValue: 2.6,
    description:
      'A step sequence with moderate complexity. Includes basic turns like threes, mohawks, and some advanced turns.',
    level: 2,
    tags: ['required', 'footwork'],
  },
  {
    id: 'choreographic-sequence',
    name: 'Choreographic Sequence',
    abbreviation: 'ChSq1',
    baseValue: 3.0,
    description:
      'A free-form sequence that showcases artistry and skating skills. Can include any movements, spirals, and choreographic elements. Required in free skate programs.',
    level: 1,
    tags: ['required', 'artistic', 'free-skate'],
  },
]
