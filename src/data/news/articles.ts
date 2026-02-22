export interface NewsArticleSeed {
  id: string
  title: string
  url: string
  source: string
  publishedAt: string
  summary: string
  imageUrl?: string
  entities: Array<{
    type: 'skater' | 'element' | 'competition'
    id: string
  }>
}

export const newsArticles: NewsArticleSeed[] = [
  {
    id: 'malinin-quad-axel-worlds-2025',
    title: 'Ilia Malinin repeats as world figure skating champion with 6 quadruple jumps',
    url: 'https://www.nbcsports.com/olympics/news/ilia-malinin-world-figure-skating-championships-2025',
    source: 'NBC Sports',
    publishedAt: '2025-03-28',
    summary: 'Ilia Malinin made history once again at the 2025 World Championships in Boston, landing a clean quad axel in his free skate to secure the gold medal. The 20-year-old American continued to push the boundaries of what is technically possible in men\'s figure skating, finishing with a total score of 322.52.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' },
      { type: 'competition', id: '2025-worlds' },
      { type: 'element', id: 'quad-axel' },
    ],
  },
  {
    id: 'sakamoto-three-peat-worlds',
    title: 'Three-time world champion Sakamoto Kaori on how her silver medal makes her \'a challenger again\'',
    url: 'https://www.olympics.com/en/news/sakamoto-kaori-exclusive-japanese-skater-world-medal-ultimate-learning-experience',
    source: 'Olympics.com',
    publishedAt: '2025-03-29',
    summary: 'Three-time world champion Kaori Sakamoto reflects on taking silver at the 2025 World Championships, describing the result as a learning experience that has renewed her motivation. The Japanese star says the outcome has made her feel like a challenger again heading into the Olympic season.',
    entities: [
      { type: 'skater', id: 'kaori-sakamoto' },
      { type: 'competition', id: '2025-worlds' },
    ],
  },
  {
    id: '2026-olympics-preview',
    title: 'Olympic Figure Skating | Milano Cortina 2026',
    url: 'https://www.olympics.com/en/milano-cortina-2026/sports/figure-skating',
    source: 'Olympics.com',
    publishedAt: '2025-12-15',
    summary: 'The 2026 Milan Olympics figure skating competition promises to be one of the most exciting in history. Ilia Malinin enters as the heavy favorite in men\'s singles, while Kaori Sakamoto and Isabeau Levito lead a deep women\'s field. In pairs, Miura & Kihara look to upgrade their previous Olympic result.',
    entities: [
      { type: 'competition', id: '2026-olympics' },
      { type: 'skater', id: 'ilia-malinin' },
      { type: 'skater', id: 'kaori-sakamoto' },
      { type: 'skater', id: 'isabeau-levito' },
      { type: 'skater', id: 'miura-kihara' },
    ],
  },
  {
    id: 'gp-final-2025-recap',
    title: 'Ilia Malinin wins third Grand Prix Final title and becomes first skater to land seven quads in a program',
    url: 'https://www.olympics.com/en/milano-cortina-2026/news/figure-skating-isu-grand-prix-final-2025-malinin-wins-third-title-first-skater-land-seven-quads',
    source: 'Olympics.com',
    publishedAt: '2025-12-08',
    summary: 'The 2025 Grand Prix Final in Grenoble delivered memorable performances across all four disciplines. Ilia Malinin dominated the men\'s event, while Shimada Mao pulled off a stunning upset in the women\'s competition. Fournier Beaudry & Cizeron dazzled in ice dance with a season-best score.',
    entities: [
      { type: 'competition', id: '2025-gp-final' },
      { type: 'skater', id: 'ilia-malinin' },
      { type: 'skater', id: 'shimada-mao' },
      { type: 'skater', id: 'fournier-beaudry-cizeron' },
    ],
  },
  {
    id: 'levito-olympic-season-form',
    title: 'Levito Returns to Form with Calm and Confidence',
    url: 'https://usfigureskating.org/news/2025/10/30/national-team-figure-skating-levito-returns-to-form-with-calm-and-confidence.aspx',
    source: 'U.S. Figure Skating',
    publishedAt: '2025-11-20',
    summary: 'Isabeau Levito is hitting peak form at exactly the right moment. The American teenager has been consistently landing triple axels in competition this season and posted a personal best score at Skate America. With the 2026 Milan Olympics on the horizon, Levito looks ready to challenge for the podium.',
    entities: [
      { type: 'skater', id: 'isabeau-levito' },
      { type: 'competition', id: '2025-gp-skate-america' },
      { type: 'competition', id: '2026-olympics' },
    ],
  },
  {
    id: 'kagiyama-comeback-nhk',
    title: 'Kagiyama Yuma explodes into NHK Trophy men\'s short program lead',
    url: 'https://www.olympics.com/en/news/nhk-trophy-2024-men-short-program',
    source: 'Olympics.com',
    publishedAt: '2024-11-08',
    summary: 'Yuma Kagiyama took command of the NHK Trophy men\'s competition with a dominant short program performance. The Olympic silver medalist landed clean quadruple jumps to take a commanding lead, signaling his intent to contend for major titles in the run-up to the 2026 Olympics.',
    entities: [
      { type: 'skater', id: 'yuma-kagiyama' },
      { type: 'competition', id: '2025-gp-nhk' },
      { type: 'competition', id: '2025-gp-final' },
      { type: 'competition', id: '2026-olympics' },
    ],
  },
  {
    id: 'siao-him-fa-european-champion',
    title: 'Defending champion Adam Siao Him Fa tops standings after men\'s short program at European Championships',
    url: 'https://www.olympics.com/en/news/european-figure-skating-championships-2025-mens-short-results',
    source: 'Olympics.com',
    publishedAt: '2026-01-25',
    summary: 'Adam Siao Him Fa successfully defended his European Championship title with a commanding performance in Tallinn. The French skater earned a season-best score of 298.45, highlighted by a clean quad loop and quad Salchow in his free skate program.',
    entities: [
      { type: 'skater', id: 'adam-siao-him-fa' },
      { type: 'competition', id: '2026-europeans' },
    ],
  },
  {
    id: 'miura-kihara-pairs-dominance',
    title: 'Miura/Kihara hold off tough competition to reclaim Grand Prix Final title',
    url: 'https://www.olympics.com/en/milano-cortina-2026/news/figure-skating-isu-grand-prix-final-2025-riku-kihara-free-program-results',
    source: 'Olympics.com',
    publishedAt: '2026-02-08',
    summary: 'Riku Miura and Ryuichi Kihara held off strong challenges from German and Italian pairs to reclaim the Grand Prix Final title. The Japanese pair showcased their signature throw triple axel and side-by-side triple jumps, sending a statement ahead of the Milan Olympics.',
    entities: [
      { type: 'skater', id: 'miura-kihara' },
      { type: 'competition', id: '2025-gp-final' },
      { type: 'competition', id: '2026-olympics' },
    ],
  },
  {
    id: 'amber-glenn-skate-canada',
    title: 'Amber Glenn Continues Her Dominance in the Grand Prix Series',
    url: 'https://www.usfigureskating.org/news/article/amber-glenn-continues-her-dominance-grand-prix-series-places-first-womens-short',
    source: 'U.S. Figure Skating',
    publishedAt: '2025-10-26',
    summary: 'Amber Glenn delivered the performance of her career at Skate Canada, earning a season-best total score to claim the gold medal. The American skater was nearly flawless in both programs, showcasing improved consistency that could make her a contender at the 2026 Olympics.',
    entities: [
      { type: 'skater', id: 'amber-glenn' },
      { type: 'competition', id: '2025-gp-skate-canada' },
      { type: 'competition', id: '2026-olympics' },
    ],
  },
  {
    id: 'chock-bates-ice-dance-rivalry',
    title: 'Chock/Bates celebrate Grand Prix Final three-peat with season best in both programs',
    url: 'https://www.olympics.com/en/milano-cortina-2026/news/figure-skating-isu-grand-prix-final-2025-free-dance-chock-bates-three-peat-season-best-results',
    source: 'Olympics.com',
    publishedAt: '2025-11-15',
    summary: 'Madison Chock and Evan Bates have positioned themselves as the team to beat in ice dance heading into the 2026 Milan Olympics. After winning Skate America, the American duo face a fierce battle with Fournier Beaudry & Cizeron and Gilles & Poirier for Olympic gold.',
    entities: [
      { type: 'skater', id: 'chock-bates' },
      { type: 'skater', id: 'fournier-beaudry-cizeron' },
      { type: 'skater', id: 'gilles-poirier' },
      { type: 'competition', id: '2026-olympics' },
    ],
  },
  {
    id: 'shaidorov-quad-lutz-record',
    title: 'Mikhail Shaidorov becomes Kazakhstan\'s first Olympic champion with stunning free skate',
    url: 'https://www.nbcolympics.com/news/mikhail-shaidorov-becomes-kazakhstans-first-olympic-champion-stunning-free-skate-shock-upset',
    source: 'NBC Olympics',
    publishedAt: '2025-10-19',
    summary: 'Mikhail Shaidorov delivered a stunning free skate at the 2026 Olympics to become Kazakhstan\'s first-ever Olympic figure skating champion. The young skater landed a remarkable quad Lutz among his technical arsenal, capping an incredible rise through the ranks of men\'s figure skating.',
    entities: [
      { type: 'skater', id: 'mikhail-shaidorov' },
      { type: 'competition', id: '2025-gp-skate-america' },
      { type: 'element', id: 'quad-lutz' },
      { type: 'competition', id: '2026-olympics' },
    ],
  },
  {
    id: 'isu-rule-changes-2026',
    title: 'Figure skating officials weigh major changes in rules, schedule',
    url: 'http://www.globetrottingbyphiliphersh.com/home/2026/1/16/figure-skating-officials-weigh-major-changes-in-rules-schedule',
    source: 'Phil Hersh',
    publishedAt: '2025-06-15',
    summary: 'The International Skating Union has approved several scoring changes for the 2025-26 season, including an increased base value for the quad axel and adjustments to PCS component weighting. The changes aim to better balance technical and artistic merit in competitive figure skating.',
    entities: [
      { type: 'element', id: 'quad-axel' },
    ],
  },
  {
    id: 'grassl-injury-comeback',
    title: 'Daniel Grassl\'s quest to become \'complete skater\' for Milano Cortina 2026',
    url: 'https://www.olympics.com/en/news/daniel-grassl-quest-complete-skater-jason-brown-milano-cortina-2026',
    source: 'Olympics.com',
    publishedAt: '2025-09-20',
    summary: 'Italian skater Daniel Grassl made his competitive return at an early-season challenger event after recovering from an ankle injury that sidelined him for three months. Grassl successfully landed his trademark quad Lutz and expressed optimism about his fitness for the Olympic season.',
    entities: [
      { type: 'skater', id: 'daniel-grassl' },
      { type: 'element', id: 'quad-lutz' },
    ],
  },
  {
    id: 'hendrickx-gp-france',
    title: 'Loena Hendrickx celebrates 23rd birthday with Grand Prix de France title',
    url: 'https://www.olympics.com/en/news/loena-hendrickx-birthday-grand-prix-france-win-title',
    source: 'Olympics.com',
    publishedAt: '2025-11-02',
    summary: 'Belgium\'s Loena Hendrickx delivered a masterclass in skating skills and artistry to win Grand Prix France in Angers. Hendrickx earned the highest PCS marks of the women\'s Grand Prix season, reminding the skating world that technical difficulty isn\'t the only path to victory.',
    entities: [
      { type: 'skater', id: 'loena-hendrickx' },
      { type: 'competition', id: '2025-gp-france' },
    ],
  },
  {
    id: 'shimada-mao-quad-toe',
    title: 'Shimada Mao wins back-to-back world junior titles landing quad toe',
    url: 'https://www.olympics.com/en/news/world-junior-figure-skating-championships-shimada-mao-wins-second-consecutive-title-landing-quad-toe-shin-jia',
    source: 'Olympics.com',
    publishedAt: '2025-10-25',
    summary: 'Japanese prodigy Shimada Mao made a sensational senior Grand Prix debut by becoming one of the few women to land a quad toe loop in competition. The young skater finished second at Skate Canada, announcing herself as a serious contender for the 2026 season.',
    entities: [
      { type: 'skater', id: 'shimada-mao' },
      { type: 'competition', id: '2025-gp-skate-canada' },
      { type: 'element', id: 'quad-toe-loop' },
    ],
  },
  {
    id: 'guignard-fabbri-home-olympics',
    title: 'Guignard and Fabbri shake off \'toxic\' lifestyle and stitch up new attitude ahead of home Olympic Games',
    url: 'https://www.olympics.com/en/milano-cortina-2026/news/figure-skating-italy-ice-dancers-guignard-fabbri-grand-prix-france-reset-milano-cortina-interviews',
    source: 'Olympics.com',
    publishedAt: '2026-01-10',
    summary: 'Italian ice dancers Charlene Guignard and Marco Fabbri are preparing for the biggest moment of their careers: competing for Olympic gold on home ice in Milan. The veteran team has been consistently on the podium this season and will have the full support of the Italian crowd.',
    entities: [
      { type: 'skater', id: 'guignard-fabbri' },
      { type: 'competition', id: '2026-olympics' },
    ],
  },
  {
    id: 'nathan-chen-commentary-role',
    title: 'Nathan Chen presses pause on figure skating, will miss Milano Cortina 2026 to pursue medicine',
    url: 'https://www.olympics.com/en/milano-cortina-2026/news/nathan-chen-pause-figure-skating-miss-milano-cortina-2026-medicine',
    source: 'Olympics.com',
    publishedAt: '2026-02-01',
    summary: 'Olympic champion Nathan Chen will serve as an expert commentator for NBC\'s coverage of the 2026 Milan Olympics figure skating events. Chen, who retired from competitive skating after his 2022 Olympic gold medal, brings invaluable insight into the technical demands of modern skating.',
    entities: [
      { type: 'skater', id: 'nathan-chen' },
      { type: 'competition', id: '2026-olympics' },
      { type: 'competition', id: '2022-olympics' },
    ],
  },
  {
    id: 'fear-gibson-europeans-bronze',
    title: 'Bronze for GB\'s Fear & Gibson at European Figure Skating Championships',
    url: 'https://www.iceskating.org.uk/post/bronze-for-gb-s-fear-gibson-at-european-figure-skating-championships',
    source: 'British Ice Skating',
    publishedAt: '2026-01-26',
    summary: 'Lilah Fear and Lewis Gibson earned a European Championship bronze medal in Tallinn, their best result at the event. The British ice dance team delivered an emotional free dance that earned high component scores and solidified their status as Olympic medal contenders.',
    entities: [
      { type: 'skater', id: 'fear-gibson' },
      { type: 'competition', id: '2026-europeans' },
      { type: 'competition', id: '2026-olympics' },
    ],
  },
]
