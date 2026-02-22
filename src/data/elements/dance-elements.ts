import type { DanceElement } from '../../types/elements'

export const danceElements: DanceElement[] = [
  {
    id: 'midnight-blues-pattern',
    name: 'Midnight Blues Pattern Dance',
    abbreviation: 'MiB',
    baseValue: 7.5,
    description:
      'A compulsory pattern dance performed to a blues rhythm. Both partners must execute prescribed steps in unison with precise timing.',
    category: 'pattern-dance',
    tags: ['rhythm-dance', 'required'],
  },
  {
    id: 'twizzles-l4',
    name: 'Sequential Twizzles Level 4',
    abbreviation: 'SqTw4',
    baseValue: 6.84,
    description:
      'Both partners perform rapid multi-rotation turns while traveling across the ice in unison. The most technical dance element — a signature skill of top teams.',
    category: 'twizzle',
    tags: ['twizzle', 'unison', 'signature', 'high-value'],
  },
  {
    id: 'rotational-lift-l4',
    name: 'Rotational Lift Level 4',
    abbreviation: 'RoLi4',
    baseValue: 5.3,
    description:
      'The man lifts the woman while rotating. Dance lifts differ from pair lifts — the man cannot extend arms fully overhead.',
    category: 'lift',
    tags: ['lift', 'rotational'],
  },
  {
    id: 'straight-line-lift-l4',
    name: 'Straight Line Lift Level 4',
    abbreviation: 'SlLi4',
    baseValue: 5.3,
    description:
      'A lift performed while traveling in a straight line across the ice. Requires creative positions and smooth execution.',
    category: 'lift',
    tags: ['lift', 'straight-line'],
  },
  {
    id: 'combination-spin-l4',
    name: 'Combination Spin Level 4',
    abbreviation: 'CoSp4',
    baseValue: 5.25,
    description:
      'Both partners spin together in hold, changing positions and feet. Judged on synchronization and quality.',
    category: 'spin',
    tags: ['spin', 'unison'],
  },
  {
    id: 'diagonal-step-sequence-l4',
    name: 'Diagonal Step Sequence Level 4',
    abbreviation: 'DiSt4',
    baseValue: 7.1,
    description:
      'Both partners perform complex footwork across a diagonal of the ice surface. Judged on synchronization, edge quality, and variety.',
    category: 'step-sequence',
    tags: ['step-sequence', 'unison', 'high-value'],
  },
  {
    id: 'choreographic-slide-lift',
    name: 'Choreographic Sliding Movement',
    abbreviation: 'ChSl1',
    baseValue: 1.1,
    description:
      'A free-form choreographic element where one or both partners slide on the ice. Adds artistic value to the program.',
    category: 'choreographic',
    tags: ['choreographic', 'artistic'],
  },
]
