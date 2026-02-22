import type { Deduction } from '../../types/scoring'

export const deductions: Deduction[] = [
  {
    id: 'fall',
    name: 'Fall',
    penalty: -1,
    description:
      'Each fall results in a -1 deduction from the total score. This is separate from the GOE reduction on the specific element.',
  },
  {
    id: 'time-violation',
    name: 'Time Violation',
    penalty: -1,
    description:
      'Programs must be within the required time limits. Each 5-second deviation (over or under) results in a -1 deduction.',
  },
  {
    id: 'music-violation',
    name: 'Music Violation',
    penalty: -1,
    description:
      'Vocal music with lyrics is now allowed, but certain music requirements must still be met depending on the segment.',
  },
  {
    id: 'costume-violation',
    name: 'Costume/Prop Violation',
    penalty: -1,
    description:
      'Costumes must not include props or excessive decoration that falls on the ice. Clothing that detaches during performance triggers a deduction.',
  },
  {
    id: 'interruption',
    name: 'Interruption in Excess',
    penalty: -5,
    description:
      'If a skater stops performing for an extended period (more than the allowed interruption time), a -5 deduction is applied.',
  },
  {
    id: 'late-start',
    name: 'Late Start',
    penalty: -1,
    description:
      'If a skater does not begin their program within the allotted time after being called, a deduction is applied.',
  },
  {
    id: 'illegal-element',
    name: 'Illegal Element',
    penalty: -2,
    description:
      'Performing an element that is not allowed in the segment (e.g., a backflip or extra jumping pass) results in a -2 deduction.',
  },
  {
    id: 'extra-element',
    name: 'Extra Element',
    penalty: -1,
    description:
      'If a skater includes more elements than the maximum allowed in a segment, the extra element receives no value and a deduction is applied.',
  },
]
