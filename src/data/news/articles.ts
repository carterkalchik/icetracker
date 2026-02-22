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
  {
    id: '202602-ilia-malinin-performs-to-fear-as-he-completes-cathartic-olym',
    title: 'Ilia Malinin performs to Fear as he completes cathartic Olympic gala routine',
    url: 'https://www.theguardian.com/sport/2026/feb/21/ilia-malinin-performs-to-fear-as-he-completes-cathartic-olympic-gala-routine',
    source: 'theguardian.com',
    publishedAt: '2026-02-21',
    summary: 'Ilia Malinin performed a cathartic exhibition gala routine to \'Fear\' by NF at the Olympic gala, addressing his mental health struggles after failing to medal in the men\'s competition despite being the heavy favorite. The American skater\'s emotional performance included his trademark backflip and depicted the pressure of social media and expectations. Alysa Liu, who won both team and individual gold medals, closed the gala with an upbeat routine, while Kazakhstan\'s Mikhail Shaidorov performed as Kung-Fu Panda.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'skater', id: 'alysa-liu' }, { type: 'skater', id: 'mikhail-shaidorov' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-alysa-liu-released-the-pressure-reclaimed-her-joy-and-turned',
    title: 'Alysa Liu released the pressure, reclaimed her joy and turned it into Olympic gold | Bryan Armen Graham',
    url: 'https://www.theguardian.com/sport/2026/feb/20/alysa-liu-olympic-figure-skating-gold',
    source: 'theguardian.com',
    publishedAt: '2026-02-20',
    summary: 'Alysa Liu became the first American woman to win Olympic figure skating gold in 24 years, overcoming a third-place position after the short program to defeat Japanese rivals with seven clean triple jumps. Her victory came after she had stepped away from the sport following the 2022 Beijing Olympics due to mental fatigue, only to return with a renewed focus on joy rather than results. Kaori Sakamoto of Japan took silver despite being a three-time world champion, with small mistakes costing her the gold medal.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }, { type: 'skater', id: 'kaori-sakamoto' }, { type: 'element', id: 'flip' }, { type: 'element', id: 'toe-loop' }, { type: 'competition', id: '2022-olympics' }
    ],
  },
  {
    id: '202602-alysa-liu-wins-winter-olympics-gold-to-end-us-womens-24-year',
    title: 'Alysa Liu wins Winter Olympics gold to end US women’s 24-year figure skating drought',
    url: 'https://www.theguardian.com/sport/2026/feb/19/alysa-liu-figure-skating-winter-olympics-2026',
    source: 'theguardian.com',
    publishedAt: '2026-02-19',
    summary: 'Alysa Liu won the Olympic women\'s figure skating gold medal, ending a 24-year drought for the United States in the event. The 20-year-old delivered a career-best free skate program, cleanly landing all seven triple jumps to score 226.79 points overall. Kaori Sakamoto of Japan took silver with 224.90 points, while Ami Nakai earned bronze with 219.16 points.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }, { type: 'skater', id: 'kaori-sakamoto' }, { type: 'skater', id: 'ami-nakai' }, { type: 'skater', id: 'amber-glenn' }, { type: 'skater', id: 'mone-chiba' }, { type: 'element', id: 'layback-spin-l4' }, { type: 'competition', id: '2022-olympics' }
    ],
  },
  {
    id: '202602-japanese-teenager-ami-nakai-overshadows-usas-blade-angels-in',
    title: 'Japanese teenager Ami Nakai overshadows USA’s Blade Angels in women’s figure skating opener',
    url: 'https://www.theguardian.com/sport/2026/feb/17/winter-olympics-womens-figure-skating-short-program',
    source: 'theguardian.com',
    publishedAt: '2026-02-18',
    summary: 'Japanese teenager Ami Nakai took the lead after the short program at the Olympic women\'s figure skating competition with a personal-best score of 78.71, highlighted by a clean triple axel. She edged out three-time world champion Kaori Sakamoto (77.23) and Alysa Liu of the United States (76.59), positioning Japan for a potential podium sweep heading into Thursday\'s free skate.',
    entities: [
      { type: 'skater', id: 'ami-nakai' }, { type: 'skater', id: 'kaori-sakamoto' }, { type: 'skater', id: 'alysa-liu' }, { type: 'element', id: 'triple-axel' }, { type: 'element', id: 'triple-lutz' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-ilia-malinin-writes-about-inevitable-crash-after-olympic-fig',
    title: 'Ilia Malinin writes about ‘inevitable crash’ after Olympic figure skating shock',
    url: 'https://www.theguardian.com/sport/2026/feb/16/ilia-malinin-figure-skating-winter-olympics-pressure',
    source: 'theguardian.com',
    publishedAt: '2026-02-16',
    summary: 'Ilia Malinin, the overwhelming favorite for Olympic gold in men\'s figure skating, suffered a shocking defeat by finishing eighth overall after falling twice during his free skate routine on Friday. Kazakhstan\'s Mikhail Shaidorov won the gold medal while Malinin finished 15th in the free skate out of 24 competitors. Malinin later posted on Instagram about the pressure and \'invisible battles\' he faced, describing the result as an \'inevitable crash\' due to overwhelming nerves and negative thoughts.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'skater', id: 'mikhail-shaidorov' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-anatomy-of-an-upset-how-ilia-malinin-lost-olympic-figure-ska',
    title: 'Anatomy of an upset: how Ilia Malinin lost Olympic figure skating gold',
    url: 'https://www.theguardian.com/sport/2026/feb/14/ilia-malinin-analyis-figure-skating-upset-scoring',
    source: 'theguardian.com',
    publishedAt: '2026-02-14',
    summary: 'Ilia Malinin suffered a shocking Olympic defeat, finishing 8th overall despite entering the free skate with a five-point lead and being the heavy favorite. His performance was marked by a chain reaction of technical errors, including missed jumps and falls that exposed the brutal mathematics of modern figure skating scoring. Other contenders like Daniel Grassl and Adam Siao Him Fa also faltered, making Malinin\'s collapse even more unexpected.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'skater', id: 'daniel-grassl' }, { type: 'skater', id: 'adam-siao-him-fa' }, { type: 'element', id: 'axel' }, { type: 'element', id: 'quad-lutz' }, { type: 'element', id: 'quad-loop' }, { type: 'element', id: 'triple-lutz' }, { type: 'element', id: 'flip' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-fall-of-the-quad-god-ilia-malinin-finds-he-is-all-too-human',
    title: 'Fall of the Quad God: Ilia Malinin finds he is all too human under the Olympic spotlight',
    url: 'https://www.theguardian.com/sport/2026/feb/14/ilia-malinin-winter-olympics-figure-skating-2026',
    source: 'theguardian.com',
    publishedAt: '2026-02-14',
    summary: 'Ilia Malinin, the previously unbeaten American figure skater known as the \'Quad God,\' suffered a shocking defeat at the Olympics in Milan, finishing eighth after multiple jumping errors in his free skate program. The 21-year-old\'s two-year winning streak came to an end as Japan\'s Yuma Kagiyama won Olympic silver despite his own mistakes, while Malinin\'s program disintegrated with popped jumps and falls.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'skater', id: 'yuma-kagiyama' }, { type: 'element', id: 'axel' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-ilia-malinin-falls-twice-as-kazakhstans-shaidorov-stuns-fiel',
    title: 'Ilia Malinin falls twice as Kazakhstan’s Shaidorov stuns field for Olympic gold',
    url: 'https://www.theguardian.com/sport/2026/feb/13/ilia-malinin-olympics-figure-skating-mikhail-shaidorov',
    source: 'theguardian.com',
    publishedAt: '2026-02-13',
    summary: 'Ilia Malinin, the heavy favorite for Olympic figure skating gold, suffered a shocking defeat after falling twice in his free skate program and finishing eighth. Kazakhstan\'s Mikhail Shaidorov claimed the surprising Olympic title with a season-best score of 291.58, while Japan\'s Yuma Kagiyama and Shun Sato took silver and bronze respectively. The result ended Malinin\'s unbeaten streak of over two years spanning 14 competitions.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'skater', id: 'mikhail-shaidorov' }, { type: 'skater', id: 'yuma-kagiyama' }, { type: 'skater', id: 'shun-sato' }, { type: 'element', id: 'quad-flip' }, { type: 'element', id: 'quad-lutz' }, { type: 'element', id: 'quad-axel' }, { type: 'element', id: 'quad-toe-loop' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-winter-olympics-ilia-malinin-misses-podium-in-figure-skating',
    title: 'Winter Olympics: Ilia Malinin misses podium in figure skating shock; Shaidorov takes gold – as it happened',
    url: 'https://www.theguardian.com/sport/live/2026/feb/13/winter-olympics-ilia-malinin-figure-skating-free-skate',
    source: 'theguardian.com',
    publishedAt: '2026-02-13',
    summary: 'In a major upset at the Winter Olympics figure skating competition, Kazakhstan\'s Mikhail Shaidorov won the gold medal while heavily favored American skater Ilia Malinin fell twice and missed the podium entirely. The result represents a stunning surprise in the men\'s figure skating event.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'skater', id: 'mikhail-shaidorov' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-skating-body-defends-olympic-judging-after-french-duos-ice-d',
    title: 'Skating body defends Olympic judging after French duo’s ice dance gold',
    url: 'https://www.theguardian.com/sport/2026/feb/13/olympic-ice-dance-french-judge-scoring-controversy',
    source: 'theguardian.com',
    publishedAt: '2026-02-13',
    summary: 'The International Skating Union (ISU) defended the Olympic ice dance judging system after France\'s Laurence Fournier Beaudry and Guillaume Cizeron narrowly defeated Americans Madison Chock and Evan Bates for gold in a controversial finish. The controversy centered on a French judge who scored the French pair nearly eight points higher than the American team, a margin that would have changed the medal outcome if excluded. An online petition calling for investigation has approached 15,000 signatures, but the ISU maintains confidence in its scoring system and trimmed mean calculation process.',
    entities: [
      { type: 'skater', id: 'fournier-beaudry-cizeron' }, { type: 'skater', id: 'chock-bates' }
    ],
  },
]
