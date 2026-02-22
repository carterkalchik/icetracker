import type { ElementVideo } from '../../types/elements'

/**
 * YouTube video references for element demonstrations.
 * Videos are from ISU, NBC Sports, Vox, and figure skating analysis channels.
 */
export const elementVideos: Record<string, ElementVideo[]> = {
  // Quad jumps
  'quad-axel': [
    {
      youtubeId: 'qDOQ8e8lhVs',
      title: 'Malinin Lands Quad Axel - Skate America',
      skaterName: 'Ilia Malinin',
    },
  ],
  'quad-lutz': [
    {
      youtubeId: 'v7Bffob3bhg',
      title: 'Quad Lutz Slow Motion - PyeongChang Olympics',
      skaterName: 'Vincent Zhou',
    },
  ],
  'quad-flip': [
    {
      youtubeId: '_KX_h-JNOIY',
      title: 'Every Quadruple Flip Attempt',
      skaterName: 'Alexandra Trusova',
    },
  ],
  'quad-loop': [
    {
      youtubeId: 'hJTErwUmMP0',
      title: 'Quad Loop Landing Detail - GP Final 2016',
      skaterName: 'Yuzuru Hanyu',
    },
  ],
  'quad-salchow': [
    {
      youtubeId: '4ms8jDSlWTU',
      title: 'Quadruple Salchow Analysis',
      skaterName: 'Yuzuru Hanyu',
    },
  ],
  'quad-toe-loop': [
    {
      youtubeId: 'GS6z8GM5p6s',
      title: 'Quadruple Toe Loop Analysis',
      skaterName: 'Yuzuru Hanyu',
    },
  ],
  // Triple jumps
  'triple-axel': [
    {
      youtubeId: '7rOQv_6L9fQ',
      title: 'Why the Triple Axel Is Such a Big Deal',
      skaterName: 'Various',
    },
  ],
  'triple-lutz': [
    {
      youtubeId: 'Ngr2MHsLJCg',
      title: '6 Different Jumps - Figure Skating Basics',
      skaterName: 'Various',
    },
  ],
  // Base jumps — all use the ISU official jumps explainer
  axel: [
    {
      youtubeId: 'Ngr2MHsLJCg',
      title: '6 Different Jumps - ISU Figure Skating Basics',
      skaterName: 'Various',
    },
  ],
  salchow: [
    {
      youtubeId: 'Ngr2MHsLJCg',
      title: '6 Different Jumps - ISU Figure Skating Basics',
      skaterName: 'Various',
    },
  ],
  'toe-loop': [
    {
      youtubeId: 'Ngr2MHsLJCg',
      title: '6 Different Jumps - ISU Figure Skating Basics',
      skaterName: 'Various',
    },
  ],
  loop: [
    {
      youtubeId: 'Ngr2MHsLJCg',
      title: '6 Different Jumps - ISU Figure Skating Basics',
      skaterName: 'Various',
    },
  ],
  flip: [
    {
      youtubeId: 'Ngr2MHsLJCg',
      title: '6 Different Jumps - ISU Figure Skating Basics',
      skaterName: 'Various',
    },
  ],
  lutz: [
    {
      youtubeId: 'Ngr2MHsLJCg',
      title: '6 Different Jumps - ISU Figure Skating Basics',
      skaterName: 'Various',
    },
  ],
}
