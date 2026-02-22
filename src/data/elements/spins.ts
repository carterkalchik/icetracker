import type { Spin } from '../../types/elements'

export const spins: Spin[] = [
  {
    id: 'upright-spin-l4',
    name: 'Upright Spin Level 4',
    abbreviation: 'USp4',
    baseValue: 2.1,
    description:
      'A spin performed in an upright position. Level 4 requires difficult variations, clear change of position, and maintaining speed.',
    position: 'upright',
    level: 4,
    tags: ['basic-position'],
  },
  {
    id: 'sit-spin-l4',
    name: 'Sit Spin Level 4',
    abbreviation: 'SSp4',
    baseValue: 2.5,
    description:
      'The skating knee is bent so the thigh is at least parallel to the ice. One of the three basic spin positions.',
    position: 'sit',
    level: 4,
    tags: ['basic-position'],
  },
  {
    id: 'camel-spin-l4',
    name: 'Camel Spin Level 4',
    abbreviation: 'CSp4',
    baseValue: 2.6,
    description:
      'The free leg is extended backwards with the knee above hip level. Creates a graceful horizontal line.',
    position: 'camel',
    level: 4,
    tags: ['basic-position'],
  },
  {
    id: 'layback-spin-l4',
    name: 'Layback Spin Level 4',
    abbreviation: 'LSp4',
    baseValue: 2.7,
    description:
      'An upright spin where the skater arches the back and drops the head backward. Primarily performed by women.',
    position: 'layback',
    level: 4,
    tags: ['women-common', 'artistic'],
  },
  {
    id: 'combo-spin-l4',
    name: 'Combination Spin Level 4',
    abbreviation: 'CCoSp4',
    baseValue: 3.5,
    description:
      'A spin combining all three basic positions (camel, sit, upright) with a change of foot. The most valuable spin type.',
    position: 'combination',
    level: 4,
    tags: ['high-value', 'required'],
  },
  {
    id: 'flying-sit-spin-l4',
    name: 'Flying Sit Spin Level 4',
    abbreviation: 'FSSp4',
    baseValue: 3.0,
    description:
      'A sit spin entered with a flying entry — the skater jumps into the spin. Adds difficulty and visual impact.',
    position: 'sit',
    level: 4,
    tags: ['flying-entry'],
  },
  {
    id: 'flying-camel-spin-l4',
    name: 'Flying Camel Spin Level 4',
    abbreviation: 'FCSp4',
    baseValue: 3.2,
    description:
      'A camel spin entered with a flying (jump) entry. The skater achieves the camel position in the air.',
    position: 'camel',
    level: 4,
    tags: ['flying-entry'],
  },
  {
    id: 'change-foot-combo-l4',
    name: 'Change Foot Combination Spin Level 4',
    abbreviation: 'CCoSp4',
    baseValue: 3.5,
    description:
      'A combination spin that includes a change of spinning foot. Required in many competitive programs.',
    position: 'combination',
    level: 4,
    tags: ['change-foot', 'required'],
  },
]
