import type { ElementAnimation } from '../../types/elements'

/**
 * SVG animation data for jump diagrams.
 * Each animation describes the blade path from approach through takeoff,
 * rotation in the air, and landing edge.
 */
export const jumpAnimations: Record<string, ElementAnimation> = {
  // Edge jumps - backward takeoff
  axel: {
    type: 'jump',
    takeoffAngle: 0, // forward takeoff (unique to Axel)
    rotations: 1.5,
    landingEdge: 'RBO',
    svgPath:
      'M 20,80 Q 40,75 50,60 Q 55,50 50,35 Q 45,20 55,15 Q 65,10 70,20 Q 75,35 80,50 Q 85,65 90,80',
  },
  salchow: {
    type: 'jump',
    takeoffAngle: 180,
    rotations: 1,
    landingEdge: 'RBO',
    svgPath:
      'M 80,80 Q 70,70 60,55 Q 55,45 50,35 Q 45,20 55,15 Q 65,10 70,20 Q 75,35 80,50 Q 85,65 90,80',
  },
  loop: {
    type: 'jump',
    takeoffAngle: 180,
    rotations: 1,
    landingEdge: 'RBO',
    svgPath:
      'M 80,80 Q 75,65 65,50 Q 55,35 50,25 Q 45,15 55,12 Q 65,10 70,20 Q 75,35 80,50 Q 85,65 90,80',
  },
  // Toe jumps - toe pick assisted
  toeloop: {
    type: 'jump',
    takeoffAngle: 180,
    rotations: 1,
    landingEdge: 'RBO',
    svgPath:
      'M 80,85 L 75,80 Q 70,70 60,55 Q 55,40 50,30 Q 45,18 55,14 Q 65,10 70,22 Q 75,38 82,55 Q 87,68 90,80',
  },
  flip: {
    type: 'jump',
    takeoffAngle: 180,
    rotations: 1,
    landingEdge: 'RBO',
    svgPath:
      'M 80,85 L 72,78 Q 65,68 58,52 Q 52,38 48,28 Q 44,16 54,12 Q 64,8 68,20 Q 74,36 80,52 Q 86,68 90,80',
  },
  lutz: {
    type: 'jump',
    takeoffAngle: 180,
    rotations: 1,
    landingEdge: 'RBO',
    svgPath:
      'M 20,80 Q 30,75 40,65 L 45,58 Q 48,50 46,38 Q 44,24 52,16 Q 62,8 68,18 Q 74,32 80,48 Q 86,64 90,80',
  },
}
