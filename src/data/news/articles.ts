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
  {
    id: '202602-the-scandals-clouding-sinister-french-ice-dancers-who-beat-c',
    title: 'The scandals clouding ‘sinister’ French ice dancers who beat Chock and Bates for gold',
    url: 'https://www.theguardian.com/sport/2026/feb/12/french-ice-dancing-controversy',
    source: 'theguardian.com',
    publishedAt: '2026-02-12',
    summary: 'French ice dancers Laurence Fournier Beaudry and Guillaume Cizeron won Olympic gold by a narrow margin over Americans Madison Chock and Evan Bates, despite the Americans delivering a flawless performance. The victory is overshadowed by controversies involving both French skaters\' former partners, including sexual assault allegations against Fournier Beaudry\'s boyfriend and former partner, and accusations of abusive conduct against Cizeron by his former partner Gabriella Papadakis.',
    entities: [
      { type: 'skater', id: 'fournier-beaudry-cizeron' }, { type: 'skater', id: 'chock-bates' }, { type: 'skater', id: 'papadakis-cizeron' }, { type: 'competition', id: '2026-olympics' }, { type: 'competition', id: '2022-olympics' }
    ],
  },
  {
    id: '202602-fear-and-gibson-suffer-nightmare-on-ice-as-gb-winter-olympic',
    title: 'Fear and Gibson suffer nightmare on ice as GB Winter Olympic medal drought goes on',
    url: 'https://www.theguardian.com/sport/2026/feb/11/fear-and-gibson-winter-olympics-team-gb-ice-dancing-figure-skating',
    source: 'theguardian.com',
    publishedAt: '2026-02-11',
    summary: 'British ice dancers Lilah Fear and Lewis Gibson finished seventh at the 2026 Winter Olympics after a costly stumble during their free dance routine that ended their medal hopes. The pair dropped from fourth place after the rhythm dance when Fear lost her balance during a twizzle sequence early in their program. Gold went to the French pair Laurence Fournier Beaudry and Guillaume Cizeron with 225.82 points, extending Great Britain\'s Winter Olympic medal drought since 1994.',
    entities: [
      { type: 'skater', id: 'fear-gibson' }, { type: 'skater', id: 'fournier-beaudry-cizeron' }, { type: 'skater', id: 'papadakis-cizeron' }, { type: 'element', id: 'twizzles-l4' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-archive-torvill-and-dean-gb-olympic-figure-skating-medal-win',
    title: 'Archive: Torvill and Dean, GB Olympic figure skating medal winners, 1984 and 1994 – reports',
    url: 'https://www.theguardian.com/sport/2026/feb/11/torvill-and-dean-olympic-figure-skating-gold-medal-winners-1984-and-1994',
    source: 'theguardian.com',
    publishedAt: '2026-02-11',
    summary: 'This archive article recounts Jayne Torvill and Christopher Dean\'s legendary gold medal-winning Boléro ice dancing routine at the 1984 Winter Olympics in Sarajevo, where they received twelve perfect 6.0 scores from judges. The article also references their return to Olympic competition in 1994 at Lillehammer, where they failed to match their earlier success and were criticized by foreign press as being past their prime.',
    entities: [
      
    ],
  },
  {
    id: '202602-us-figure-skater-amber-glenn-resolves-winter-olympics-music',
    title: 'US figure skater Amber Glenn resolves Winter Olympics music dispute with Canadian artist',
    url: 'https://www.theguardian.com/sport/2026/feb/10/us-figure-skater-amber-glenn-resolves-winter-olympics-music-dispute-with-canadian-artist',
    source: 'theguardian.com',
    publishedAt: '2026-02-10',
    summary: 'US figure skater Amber Glenn resolved a copyright dispute with Canadian musician Seb McKinnon after he questioned whether his song \'The Return\' was properly cleared for use in her Olympic free skate program. The issue was described as a misunderstanding, with both parties expressing interest in future collaboration. Glenn won team gold at the Olympics and is scheduled to compete in the women\'s singles event next week.',
    entities: [
      { type: 'skater', id: 'amber-glenn' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-winter-olympics-2026-usa-take-gold-in-figure-skating-team-ev',
    title: 'Winter Olympics 2026: USA take gold in figure skating team event – as it happened',
    url: 'https://www.theguardian.com/sport/live/2026/feb/08/winter-olympics-2026-figure-skating-team-event-updates',
    source: 'theguardian.com',
    publishedAt: '2026-02-08',
    summary: 'The United States won gold in the figure skating team event at the 2026 Winter Olympics. Ilia Malinin led Team USA to victory, successfully defending their title against a resurgent Japanese team.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-ilia-malinin-holds-off-resurgent-japan-to-seal-repeat-us-tea',
    title: 'Ilia Malinin holds off resurgent Japan to seal repeat US team figure skating gold',
    url: 'https://www.theguardian.com/sport/2026/feb/08/malinin-usa-team-figure-skating-gold-olympics-japan-italy',
    source: 'theguardian.com',
    publishedAt: '2026-02-08',
    summary: 'Ilia Malinin led the United States to defend their Olympic team figure skating title, delivering under pressure in the men\'s free skate to secure gold by just one point over Japan. The 21-year-old two-time world champion adjusted his technical strategy, landing five quadruple jumps instead of his usual seven to score 200.03 points and clinch the victory. Japan finished with silver while host nation Italy took bronze in one of the most dramatic team events since the format began in 2014.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'skater', id: 'shun-sato' }, { type: 'element', id: 'quad-flip' }, { type: 'element', id: 'quad-toe-loop' }, { type: 'element', id: 'quad-salchow' }, { type: 'element', id: 'quad-lutz' }, { type: 'element', id: 'quad-axel' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-usa-superstar-liu-wins-womens-skating-olympic-gold',
    title: 'USA superstar Liu wins women\'s skating Olympic gold',
    url: 'https://www.bbc.com/sport/articles/c33jz026mg3o?at_medium=RSS&at_campaign=rss',
    source: 'bbc.com',
    publishedAt: '2026-02-19',
    summary: 'American figure skater Alysa Liu won Olympic gold in the women\'s event at the 2026 Winter Olympics, scoring 226.79 overall to narrowly beat Japan\'s Kaori Sakamoto who took silver. Liu became the first American Olympic champion in women\'s figure skating since Sarah Hughes in 2002, overcoming a third-place position after the short program with a stunning free skate performance.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }, { type: 'skater', id: 'kaori-sakamoto' }, { type: 'skater', id: 'ami-nakai' }, { type: 'skater', id: 'amber-glenn' }, { type: 'skater', id: 'mone-chiba' }, { type: 'skater', id: 'ilia-malinin' }, { type: 'element', id: 'triple-lutz' }, { type: 'competition', id: '2026-olympics' }, { type: 'competition', id: '2022-olympics' }
    ],
  },
  {
    id: '202602-gb-25-years-behind-worlds-best-in-short-track',
    title: 'GB \'25 years\' behind world\'s best in short track',
    url: 'https://www.bbc.com/sport/articles/czx70wpxkp1o?at_medium=RSS&at_campaign=rss',
    source: 'bbc.com',
    publishedAt: '2026-02-20',
    summary: 'Great Britain\'s short track speed skating program has fallen significantly behind world standards due to outdated facilities and reduced funding. Team GB sent only one athlete, Niall Treacy, to Milan-Cortina 2026, a stark decline from their well-funded five-person team at PyeongChang 2018. The sport\'s funding was slashed after failing to medal in 2018, and Britain now lacks international-standard training facilities.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-olympic-reign-of-ex-valieva-coach-ends-in-milan',
    title: 'Olympic reign of ex-Valieva coach ends in Milan',
    url: 'https://www.bbc.com/sport/articles/c98q594z586o?at_medium=RSS&at_campaign=rss',
    source: 'bbc.com',
    publishedAt: '2026-02-19',
    summary: 'Eteri Tutberidze\'s dominance in women\'s Olympic figure skating came to an end at the 2026 Milan-Cortina Olympics. While coaching Georgia\'s pairs team to their first-ever Winter Olympic medal and advising Russian skater Adeliia Petrosian competing as a neutral athlete, Tutberidze did not produce an Olympic champion for the first time since 2014. Alysa Liu of the United States won the women\'s title, breaking Tutberidze\'s streak after her previous students Anna Shcherbakova and Alina Zagitova won in 2022 and 2018 respectively.',
    entities: [
      { type: 'skater', id: 'kamila-valieva' }, { type: 'skater', id: 'metelkina-berulava' }, { type: 'skater', id: 'anna-shcherbakova' }, { type: 'skater', id: 'alysa-liu' }, { type: 'element', id: 'quad-toe-loop' }, { type: 'competition', id: '2026-olympics' }, { type: 'competition', id: '2022-olympics' }
    ],
  },
  {
    id: '202602-analysis-meet-mikhail-shaidorov-the-guy-who-actually-won-men',
    title: 'Analysis | Meet Mikhail Shaidorov, the guy who actually won men’s singles figure skating',
    url: 'https://www.washingtonpost.com',
    source: 'The Washington Post',
    publishedAt: '2026-02-23',
    summary: 'The Washington Post provides analysis highlighting Mikhail Shaidorov as the actual winner of a men\'s singles figure skating competition.',
    entities: [
      { type: 'skater', id: 'mikhail-shaidorov' }
    ],
  },
  {
    id: '202602-crampons-crashes-and-creativity-tom-jenkins-best-photos-from',
    title: 'Crampons, crashes and creativity: Tom Jenkins’ best photos from the Winter Olympics',
    url: 'https://www.theguardian.com/sport/2026/feb/23/tom-jenkins-best-photos-winter-olympics',
    source: 'theguardian.com',
    publishedAt: '2026-02-23',
    summary: 'Photographer Tom Jenkins shares his favorite images from his first Winter Olympics assignment in northern Italy, covering various winter sports including figure skating. The article features a multiple exposure photograph of Sofia Samodelkina of Kazakhstan performing in the women\'s figure skating free program. Jenkins documented the Games across multiple venues, capturing sports ranging from figure skating to ice hockey, biathlon, and ski jumping.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-from-outsider-to-olympic-champion-the-journey-of-mikhail-sha',
    title: 'From outsider to Olympic champion: the journey of Mikhail Shaidorov',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-21',
    summary: 'The article chronicles Mikhail Shaidorov\'s path from being an outsider to becoming an Olympic champion.',
    entities: [
      { type: 'skater', id: 'mikhail-shaidorov' }
    ],
  },
  {
    id: '202602-milan-cortina-olympics-in-pictures-20-captivating-photos-fro',
    title: 'Milan Cortina Olympics in pictures: 20 captivating photos from the Winter Games',
    url: 'https://www.nytimes.com',
    source: 'The New York Times',
    publishedAt: '2026-02-23',
    summary: 'The New York Times presents a photo collection featuring 20 captivating images from the Milan Cortina Winter Olympics.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-the-grand-finale-of-figure-skating-with-the-gala-on-21-febru',
    title: 'The grand finale of figure skating with the Gala on 21 February 2026',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-21',
    summary: 'A figure skating gala event will serve as the grand finale and will take place on February 21, 2026.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-alysa-liu-takes-gold-ilia-malinin-tumbles-at-eventful-olympi',
    title: 'Alysa Liu takes gold, Ilia Malinin tumbles at eventful Olympic figure skating competition in Milan',
    url: 'https://www.reuters.com',
    source: 'Reuters',
    publishedAt: '2026-02-22',
    summary: 'Alysa Liu won gold while Ilia Malinin had a fall at an Olympic figure skating competition held in Milan.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }, { type: 'skater', id: 'ilia-malinin' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-how-to-watch-alysa-liu-ilia-malinin-amber-glenn-in-olympics',
    title: 'How to watch Alysa Liu, Ilia Malinin, Amber Glenn in Olympics figure skating gala',
    url: 'https://www.nytimes.com',
    source: 'The New York Times',
    publishedAt: '2026-02-21',
    summary: 'The article provides information on how to watch Alysa Liu, Ilia Malinin, and Amber Glenn perform in the Olympics figure skating gala.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }, { type: 'skater', id: 'ilia-malinin' }, { type: 'skater', id: 'amber-glenn' }
    ],
  },
  {
    id: '202602-when-do-alysa-liu-ilia-malinin-amber-glenn-skate-next-in-the',
    title: 'When do Alysa Liu, Ilia Malinin, Amber Glenn skate next in the United States?',
    url: 'https://www.usatoday.com',
    source: 'USA Today',
    publishedAt: '2026-02-23',
    summary: 'The headline asks about the upcoming skating schedules for American figure skaters Alysa Liu, Ilia Malinin, and Amber Glenn in the United States.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }, { type: 'skater', id: 'ilia-malinin' }, { type: 'skater', id: 'amber-glenn' }
    ],
  },
  {
    id: '202602-daniel-grassl',
    title: 'Daniel GRASSL',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-22',
    summary: 'The headline mentions Daniel Grassl in connection with Milano Cortina 2026.',
    entities: [
      { type: 'skater', id: 'daniel-grassl' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-laurence-fournier-beaudry',
    title: 'Laurence FOURNIER BEAUDRY',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-22',
    summary: 'News about figure skater Laurence Fournier Beaudry related to Milano Cortina 2026.',
    entities: [
      { type: 'skater', id: 'fournier-beaudry-cizeron' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-after-the-olympians-skate-toys-rain-onto-the-ice-where-do-th',
    title: 'After the Olympians Skate, Toys Rain Onto the Ice. Where Do They All Go?',
    url: 'https://www.nytimes.com',
    source: 'The New York Times',
    publishedAt: '2026-02-21',
    summary: 'The headline discusses what happens to the toys that are thrown onto the ice after Olympic figure skaters perform their routines.',
    entities: [
      
    ],
  },
  {
    id: '202602-everything-that-happened-on-day-13-of-the-2026-winter-olympi',
    title: 'Everything that happened on Day 13 of the 2026 Winter Olympics',
    url: 'https://www.nytimes.com',
    source: 'The New York Times',
    publishedAt: '2026-02-20',
    summary: 'This article covers all the events and results that occurred on the thirteenth day of competition at the 2026 Winter Olympics.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-winter-olympics-american-liu-wins-shock-figure-skating-gold',
    title: 'Winter Olympics: American Liu wins shock figure skating gold after GB\'s curlers reach final',
    url: 'https://www.bbc.com',
    source: 'BBC',
    publishedAt: '2026-02-19',
    summary: 'American figure skater Liu won a surprising gold medal at the Winter Olympics, while Great Britain\'s curling team also reached their final.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }, { type: 'competition', id: '2022-olympics' }
    ],
  },
  {
    id: '202602-figure-skater-saved-from-scrapping-olympic-routine-after-min',
    title: 'Figure skater saved from scrapping Olympic routine after Minions music copyright dispute',
    url: 'https://www.theguardian.com',
    source: 'The Guardian',
    publishedAt: '2026-02-02',
    summary: 'A figure skater was able to keep their Olympic routine after resolving a copyright dispute involving Minions music.',
    entities: [
      
    ],
  },
  {
    id: '202602-history-of-notable-us-figure-skaters-at-the-olympics',
    title: 'History of notable U.S. figure skaters at the Olympics',
    url: 'https://www.espn.com',
    source: 'ESPN',
    publishedAt: '2026-02-24',
    summary: 'This article covers the history of notable U.S. figure skaters who have competed at the Olympics.',
    entities: [
      
    ],
  },
  {
    id: '202602-liu-reigns-golden-in-milan',
    title: 'Liu Reigns Golden in Milan',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-02-20',
    summary: 'Liu achieved a golden victory at a competition in Milan.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }
    ],
  },
  {
    id: '202602-sato-shun',
    title: 'SATO Shun',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-23',
    summary: 'The headline references SATO Shun in connection with Milano Cortina 2026.',
    entities: [
      { type: 'skater', id: 'shun-sato' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-the-masterclass-why-the-2026-exhibition-gala-lineup-represen',
    title: 'The masterclass: Why the 2026 Exhibition Gala lineup represents the pinnacle of modern figure skating',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-20',
    summary: 'The 2026 Exhibition Gala lineup is being praised as representing the highest level of modern figure skating excellence.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-alexandra-feigin',
    title: 'Alexandra FEIGIN',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-23',
    summary: 'The headline mentions Alexandra Feigin in connection with Milano Cortina 2026.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-madison-chock',
    title: 'Madison CHOCK',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-23',
    summary: 'The headline mentions Madison Chock in relation to Milano Cortina 2026.',
    entities: [
      { type: 'skater', id: 'chock-bates' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-guillaume-cizeron',
    title: 'Guillaume CIZERON',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-23',
    summary: 'The headline mentions Guillaume Cizeron in relation to Milano Cortina 2026.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-sakamoto-kaori-japans-figure-skating-star-set-to-launch-coac',
    title: 'Sakamoto Kaori: Japan\'s figure skating star set to launch coaching career after Olympic gold near-miss',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-25',
    summary: 'Japanese figure skating star Kaori Sakamoto is preparing to begin a coaching career following her near-miss at Olympic gold.',
    entities: [
      { type: 'skater', id: 'kaori-sakamoto' }
    ],
  },
  {
    id: '202602-figure-skating-olympics-pairs-results-japan-wins-first-gold',
    title: 'Figure skating Olympics pairs results: Japan wins first gold, USA top 10',
    url: 'https://www.usatoday.com',
    source: 'USA Today',
    publishedAt: '2026-02-19',
    summary: 'Japan won their first Olympic gold medal in pairs figure skating, while the USA finished in the top 10.',
    entities: [
      { type: 'competition', id: '2022-olympics' }
    ],
  },
  {
    id: '202602-winter-olympics-2026-mens-figure-skating-live-updates-ilia-m',
    title: 'Winter Olympics 2026 men\'s figure skating live updates: Ilia Malinin fails to medal after falling twice in final skate',
    url: 'https://www.nytimes.com',
    source: 'The New York Times',
    publishedAt: '2026-02-13',
    summary: 'Ilia Malinin failed to medal in men\'s figure skating at the 2026 Winter Olympics after falling twice during his final skate performance.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-sun-valley-and-the-irvine-family-a-skating-treasure',
    title: 'Sun Valley and the Irvine Family a Skating Treasure',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-02-25',
    summary: 'The headline describes Sun Valley and the Irvine Family as a skating treasure.',
    entities: [
      
    ],
  },
  {
    id: '202602-matteo-rizzo',
    title: 'Matteo RIZZO',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-23',
    summary: 'The headline mentions Matteo Rizzo in relation to Milano Cortina 2026.',
    entities: [
      { type: 'skater', id: 'matteo-rizzo' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-kihara-ryuichi',
    title: 'KIHARA Ryuichi',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-24',
    summary: 'The headline mentions KIHARA Ryuichi in relation to Milano Cortina 2026.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-ellie-kam',
    title: 'Ellie KAM',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-23',
    summary: 'The headline mentions Ellie KAM in relation to Milano Cortina 2026.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-kristen-spours',
    title: 'Kristen SPOURS',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-23',
    summary: 'The headline mentions Kristen SPOURS in relation to Milano Cortina 2026.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-ive-tried-to-stay-a-kid-mikhail-shairodov-recounts-how-letti',
    title: '"I’ve tried to stay a kid": Mikhail Shairodov recounts how letting his inner child loose helped him win Olympic figure skating gold',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-24',
    summary: 'Mikhail Shairodov discusses how embracing his inner child helped him win Olympic figure skating gold.',
    entities: [
      { type: 'skater', id: 'mikhail-shaidorov' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-backflips-spins-and-kung-fu-panda-highlight-olympics-figure',
    title: 'Backflips, spins and Kung Fu panda highlight Olympics figure skating exhibition gala',
    url: 'https://www.usatoday.com',
    source: 'USA Today',
    publishedAt: '2026-02-22',
    summary: 'The Olympics figure skating exhibition gala featured backflips, spins and a Kung Fu panda-themed performance.',
    entities: [
      { type: 'competition', id: '2022-olympics' }
    ],
  },
  {
    id: '202602-figure-skating-women-single-skating',
    title: 'Figure Skating Women Single Skating',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-27',
    summary: 'This is about the women\'s single skating discipline in figure skating at Milano Cortina 2026.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-ilia-malinin-alysa-liu-on-entry-list-for-2026-isu-figure-ska',
    title: 'Ilia Malinin, Alysa Liu on entry list for 2026 ISU Figure Skating World Championships, but Olympic champion Mikhail Shaidorov opts out',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-26',
    summary: 'Ilia Malinin and Alysa Liu are on the entry list for the 2026 ISU Figure Skating World Championships, while Olympic champion Mikhail Shaidorov has decided not to participate.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'skater', id: 'alysa-liu' }, { type: 'skater', id: 'mikhail-shaidorov' }, { type: 'competition', id: '2026-worlds' }
    ],
  },
  {
    id: '202602-miura-riku',
    title: 'MIURA Riku',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-25',
    summary: 'The headline references MIURA Riku in connection with Milano Cortina 2026.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-sara-conti',
    title: 'Sara CONTI',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-24',
    summary: 'Sara Conti is mentioned in relation to Milano Cortina 2026.',
    entities: [
      { type: 'skater', id: 'conti-macii' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-marco-fabbri',
    title: 'Marco FABBRI',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-23',
    summary: 'The headline references Marco Fabbri in relation to Milano Cortina 2026.',
    entities: [
      { type: 'skater', id: 'guignard-fabbri' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-malinin-leads-us-to-repeat-olympic-team-event-title',
    title: 'Malinin Leads U.S. to Repeat Olympic Team Event Title',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-02-08',
    summary: 'Ilia Malinin led the United States figure skating team to successfully defend their Olympic Team Event title.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-luka-berulava',
    title: 'Luka BERULAVA',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-23',
    summary: 'The headline mentions Luka BERULAVA in connection with Milano Cortina 2026.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-womens-figure-skating-at-winter-olympics-2026-schedule-how-t',
    title: 'Women\'s figure skating at Winter Olympics 2026: Schedule, how to watch live',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-15',
    summary: 'The headline discusses the schedule and viewing information for women\'s figure skating at the 2026 Winter Olympics.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-olympic-figure-skating-watch-guide-team-usa-tv-schedule-for',
    title: 'Olympic figure skating watch guide: Team USA, TV schedule for 2026 Winter Games',
    url: 'https://www.nytimes.com',
    source: 'The New York Times',
    publishedAt: '2026-02-17',
    summary: 'The New York Times provides a watch guide for Olympic figure skating at the 2026 Winter Games, focusing on Team USA and television scheduling information.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-alysa-liu-carries-us-olympic-figure-skating-medal-hopes-in-h',
    title: 'Alysa Liu carries U.S. Olympic figure skating medal hopes in her own way',
    url: 'https://www.nytimes.com',
    source: 'The New York Times',
    publishedAt: '2026-02-18',
    summary: 'Alysa Liu is carrying U.S. Olympic figure skating medal hopes in her own distinctive approach.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }
    ],
  },
  {
    id: '202602-figure-skating-stars-dazzle-at-the-winter-olympics-exhibitio',
    title: 'Figure skating stars dazzle at the Winter Olympics exhibition gala, in photos',
    url: 'https://apnews.com',
    source: 'AP News',
    publishedAt: '2026-02-24',
    summary: 'Figure skating stars performed at the Winter Olympics exhibition gala in what appears to be a photo gallery coverage.',
    entities: [
      { type: 'competition', id: '2022-olympics' }
    ],
  },
  {
    id: '202602-olympic-champions-miura-rikukihara-ryuichi-withdraw-from-202',
    title: 'Olympic champions Miura Riku/Kihara Ryuichi withdraw from 2026 World Figure Skating Championships',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-27',
    summary: 'Olympic champions Miura Riku and Kihara Ryuichi have withdrawn from the 2026 World Figure Skating Championships.',
    entities: [
      { type: 'skater', id: 'miura-kihara' }, { type: 'competition', id: '2026-worlds' }
    ],
  },
  {
    id: '202602-wang-shiyue-liu-xinyu',
    title: 'WANG Shiyue / LIU Xinyu',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-23',
    summary: 'The headline references Chinese ice dance team WANG Shiyue and LIU Xinyu in relation to the Milano Cortina 2026 Olympics.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-anastasiia-gubanova',
    title: 'Anastasiia GUBANOVA',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-25',
    summary: 'The headline references Anastasiia Gubanova in connection with Milano Cortina 2026.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-kevin-aymoz',
    title: 'Kevin AYMOZ',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-24',
    summary: 'The headline mentions Kevin Aymoz in relation to Milano Cortina 2026.',
    entities: [
      { type: 'skater', id: 'kevin-aymoz' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-skyliner-lives-life-at-breakneck-speed-as-she-pursues-her-pa',
    title: 'Skyliner Lives Life At Breakneck Speed As She Pursues Her Passion On The Ice, In The Classroom',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-02-26',
    summary: 'A skater nicknamed \'Skyliner\' is featured for living life at a fast pace while balancing figure skating and academic pursuits.',
    entities: [
      
    ],
  },
  {
    id: '202602-charlene-guignard',
    title: 'Charlene GUIGNARD',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-25',
    summary: 'The headline mentions Charlene Guignard in relation to Milano Cortina 2026.',
    entities: [
      { type: 'skater', id: 'guignard-fabbri' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-winter-olympics-2026-how-the-figure-skating-gala-is-a-canvas',
    title: 'Winter Olympics 2026: How the figure skating gala is a canvas of creation for skaters',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-19',
    summary: 'The figure skating gala at the 2026 Winter Olympics serves as a creative platform for skaters to showcase their artistic expression.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-what-is-an-axel-top-olympic-figure-skating-moves-explained',
    title: 'What is an axel? Top Olympic figure skating moves explained',
    url: 'https://www.espn.com',
    source: 'ESPN',
    publishedAt: '2026-02-17',
    summary: 'This article explains what an axel is and provides explanations of top figure skating moves performed at the Olympics.',
    entities: [
      { type: 'element', id: 'axel' }
    ],
  },
  {
    id: '202602-olympic-figure-skating-fashion-behind-the-costume-designs',
    title: 'Olympic figure skating fashion: Behind the costume designs',
    url: 'https://www.espn.com',
    source: 'ESPN',
    publishedAt: '2026-02-19',
    summary: 'The article explores the behind-the-scenes process of costume design for Olympic figure skating competitions.',
    entities: [
      { type: 'competition', id: '2022-olympics' }
    ],
  },
  {
    id: '202602-from-los-angeles-to-oakland-california-artists-celebrate-aly',
    title: 'From Los Angeles to Oakland, California artists celebrate Alysa Liu: ‘How could we not?’',
    url: 'https://www.nytimes.com',
    source: 'The New York Times',
    publishedAt: '2026-02-28',
    summary: 'Artists across California from Los Angeles to Oakland are celebrating figure skater Alysa Liu.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }
    ],
  },
  {
    id: '202602-figure-skating-pair-skating',
    title: 'Figure Skating Pair Skating',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-27',
    summary: 'The headline references pair skating as a discipline in figure skating, in connection with the Milano Cortina 2026 Olympics.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-lara-naki-gutmann',
    title: 'Lara Naki GUTMANN',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-26',
    summary: 'The headline references Lara Naki Gutmann in connection with Milano Cortina 2026.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-piper-gilles',
    title: 'Piper GILLES',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-26',
    summary: 'The headline mentions Piper Gilles in relation to Milano Cortina 2026.',
    entities: [
      { type: 'skater', id: 'gilles-poirier' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-olivia-smart',
    title: 'Olivia SMART',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-26',
    summary: 'The headline mentions Olivia Smart in relation to Milano Cortina 2026.',
    entities: [
      { type: 'skater', id: 'smart-diaz' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-vadym-kolesnik',
    title: 'Vadym KOLESNIK',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-26',
    summary: 'The headline mentions Vadym Kolesnik in relation to Milano Cortina 2026.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-anastasiia-metelkina',
    title: 'Anastasiia METELKINA',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-26',
    summary: 'The headline mentions Anastasiia Metelkina in relation to Milano Cortina 2026.',
    entities: [
      { type: 'skater', id: 'metelkina-berulava' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-exclusive-mikhail-shaidorovs-whirlwind-48-hours-since-winnin',
    title: 'Exclusive: Mikhail Shaidorov\'s whirlwind 48 hours since winning figure skating gold and message of support for Malinin',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-15',
    summary: 'Mikhail Shaidorov discusses his busy 48 hours following his figure skating gold medal victory and shares a message of support for fellow skater Ilia Malinin.',
    entities: [
      { type: 'skater', id: 'mikhail-shaidorov' }, { type: 'skater', id: 'ilia-malinin' }
    ],
  },
  {
    id: '202602-ilia-malinin-alysa-liu-sakamoto-kaori-lead-usa-and-japan-int',
    title: 'Ilia Malinin, Alysa Liu, Sakamoto Kaori lead USA and Japan into figure skating team event at Winter Olympics 2026: All skaters competing',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-06',
    summary: 'Ilia Malinin, Alysa Liu, and Sakamoto Kaori are leading USA and Japan into the figure skating team event at the 2026 Winter Olympics.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'skater', id: 'alysa-liu' }, { type: 'skater', id: 'kaori-sakamoto' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-amber-glenn-proud-of-olympic-fight-as-she-leaves-milano-cort',
    title: 'Amber Glenn proud of Olympic fight as she leaves Milano Cortina 2026 with team gold and momentum',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-28',
    summary: 'Amber Glenn expressed pride in her Olympic performance as she concluded the Milano Cortina 2026 Olympics with a team gold medal and positive momentum.',
    entities: [
      { type: 'skater', id: 'amber-glenn' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202603-in-alysa-liu-and-eileen-gu-china-and-america-see-a-mirror-im',
    title: 'In Alysa Liu and Eileen Gu, China and America See a Mirror Image',
    url: 'https://www.nytimes.com',
    source: 'The New York Times',
    publishedAt: '2026-03-02',
    summary: 'The article examines how Alysa Liu and Eileen Gu represent mirror images for both China and America.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }
    ],
  },
  {
    id: '202602-emilea-zingas',
    title: 'Emilea ZINGAS',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-26',
    summary: 'News related to figure skater Emilea Zingas in connection with Milano Cortina 2026.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-minerva-fabienne-hase',
    title: 'Minerva Fabienne HASE',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-27',
    summary: 'The headline mentions Minerva Fabienne Hase in relation to Milano Cortina 2026.',
    entities: [
      { type: 'skater', id: 'hase-volodin' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-alexei-sviatchenko',
    title: 'Alexei SVIATCHENKO',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-26',
    summary: 'The headline mentions Alexei Sviatchenko in relation to Milano Cortina 2026.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-figure-skating-is-a-young-womans-sport-she-wants-to-change-t',
    title: 'Figure Skating Is a Young Woman’s Sport. She Wants to Change That.',
    url: 'https://www.nytimes.com',
    source: 'The New York Times',
    publishedAt: '2026-02-14',
    summary: 'Figure skating is traditionally dominated by young women, but an unnamed skater is working to change that demographic trend in the sport.',
    entities: [
      
    ],
  },
  {
    id: '202601-us-ice-dance-makes-it-a-clean-sweep-at-four-continents-champ',
    title: 'U.S. Ice Dance Makes It a Clean Sweep at Four Continents Championships',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-01-23',
    summary: 'U.S. ice dance teams achieved a clean sweep at the Four Continents Championships, winning all available medals in the discipline.',
    entities: [
      { type: 'competition', id: '2025-four-continents' }
    ],
  },
  {
    id: '202602-us-team-event-participant-announced-for-mens-short-program',
    title: 'U.S. Team Event Participant Announced for Men’s Short Program',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-02-06',
    summary: 'U.S. Figure Skating has announced which skater will compete in the men\'s short program for the team event.',
    entities: [
      
    ],
  },
  {
    id: '202603-us-figure-skating-sends-14-of-nations-rising-stars-to-world',
    title: 'U.S. Figure Skating Sends 14 of Nation’s Rising Stars to World Junior Championships',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-02',
    summary: 'U.S. Figure Skating has selected 14 rising stars from the nation to compete at the World Junior Championships.',
    entities: [
      
    ],
  },
  {
    id: '202603-alysa-liu-reflects-on-olympics-figure-skating-mentality-on-t',
    title: 'Alysa Liu reflects on Olympics, figure skating mentality on TODAY Show',
    url: 'https://www.nbcsports.com',
    source: 'NBC Sports',
    publishedAt: '2026-03-03',
    summary: 'Alysa Liu appeared on the TODAY Show to discuss her Olympic experience and her perspective on figure skating mentality.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }
    ],
  },
  {
    id: '202603-isu-world-junior-figure-skating-championships-2026-in-tallin',
    title: 'ISU World Junior Figure Skating Championships 2026 in Tallinn: Preview, schedule, and how to watch live',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-03-02',
    summary: 'This article provides a preview, schedule, and viewing information for the ISU World Junior Figure Skating Championships 2026 taking place in Tallinn.',
    entities: [
      
    ],
  },
  {
    id: '202603-us-champion-johnny-johns-passes-away',
    title: 'U.S. Champion Johnny Johns Passes Away',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-02',
    summary: 'U.S. Champion Johnny Johns has passed away.',
    entities: [
      
    ],
  },
  {
    id: '202603-figure-skating-ice-dance',
    title: 'Figure Skating Ice Dance',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-03-01',
    summary: 'This headline references Ice Dance competition at Milano Cortina 2026.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-shin-jia',
    title: 'SHIN Jia',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-28',
    summary: 'The headline mentions SHIN Jia in relation to Milano Cortina 2026.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-lorine-schild',
    title: 'Lorine SCHILD',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-28',
    summary: 'The headline references Lorine Schild in connection with Milano Cortina 2026.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-lukas-britschgi',
    title: 'Lukas BRITSCHGI',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-28',
    summary: 'The headline mentions Lukas Britschgi in relation to Milano Cortina 2026.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-deanna-stellato-dudek',
    title: 'Deanna STELLATO-DUDEK',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-28',
    summary: 'News about figure skater Deanna Stellato-Dudek related to the Milano Cortina 2026 Olympics.',
    entities: [
      { type: 'skater', id: 'stellato-dudek-deschamps' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-winter-olympics-2026-usas-alysa-liu-storms-to-olympic-title',
    title: 'Winter Olympics 2026: USA’s Alysa Liu storms to Olympic title, first American woman to claim gold in 24 years',
    url: 'https://www.olympics.com',
    source: 'Milano Cortina 2026',
    publishedAt: '2026-02-19',
    summary: 'Alysa Liu of Team USA won the Olympic gold medal in women\'s figure skating at the 2026 Winter Olympics, becoming the first American woman to claim Olympic gold in the discipline in 24 years.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202603-isu-world-junior-figure-skating-championships-2026-full-sche',
    title: 'ISU World Junior Figure Skating Championships 2026: Full schedule, all results, scores and medals',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-04',
    summary: 'The headline refers to comprehensive coverage of the ISU World Junior Figure Skating Championships 2026, including the full schedule, all results, scores and medals.',
    entities: [
      
    ],
  },
  {
    id: '202603-teams-elite-junior-looks-to-continue-undefeated-season-after',
    title: 'Teams Elite Junior Looks to Continue Undefeated Season after Short Program Win at U.S. Synchronized Skating Championships',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-05',
    summary: 'Teams Elite Junior won the short program at the U.S. Synchronized Skating Championships and is looking to maintain their undefeated season record.',
    entities: [
      
    ],
  },
  {
    id: '202603-sanchez-flores-and-wang-finish-short-program-in-medal-conten',
    title: 'Sanchez, Flores and Wang Finish Short Program in Medal Contention at ISU Figure Skating Junior World Championships',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-05',
    summary: 'Sanchez, Flores and Wang finished the short program in medal contention at the ISU Figure Skating Junior World Championships.',
    entities: [
      
    ],
  },
  {
    id: '202603-nothing-to-lose-skyliners-junior-build-on-success',
    title: '‘Nothing To Lose,’ Skyliners Junior Build On Success',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-04',
    summary: 'The Skyliners Junior team is building on their previous success with a \'nothing to lose\' mentality.',
    entities: [
      
    ],
  },
  {
    id: '202603-limitless-possibilities-await-latino-skater',
    title: '‘Limitless Possibilities’ Await Latino Skater',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-03',
    summary: 'A Latino figure skater is highlighted as having \'limitless possibilities\' ahead of them.',
    entities: [
      
    ],
  },
  {
    id: '202603-nations-top-teams-to-vie-for-us-titles-at-the-2026-us-synchr',
    title: 'Nation’s Top Teams to Vie for U.S. Titles at the 2026 U.S. Synchronized Skating Championships',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-03',
    summary: 'The nation\'s top synchronized skating teams will compete for U.S. titles at the 2026 U.S. Synchronized Skating Championships.',
    entities: [
      
    ],
  },
  {
    id: '202603-lia-pereira',
    title: 'Lia PEREIRA',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-01',
    summary: 'The headline mentions Lia Pereira, a figure skater.',
    entities: [
      
    ],
  },
  {
    id: '202603-shimada-mao-chasing-history-with-a-smile-at-isu-world-junior',
    title: 'Shimada Mao chasing history with a smile at ISU World Junior Figure Skating Championships 2026',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-03',
    summary: 'Shimada Mao is pursuing a historic achievement with a positive attitude at the ISU World Junior Figure Skating Championships 2026.',
    entities: [
      { type: 'skater', id: 'shimada-mao' }
    ],
  },
  {
    id: '202602-christina-carreira',
    title: 'Christina CARREIRA',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-02-27',
    summary: 'The headline mentions figure skater Christina Carreira.',
    entities: [
      
    ],
  },
  {
    id: '202602-malinin-finishes-eighth-in-olympic-debut',
    title: 'Malinin Finishes Eighth in Olympic Debut',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-02-13',
    summary: 'Malinin finished in eighth place in his Olympic debut competition.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }
    ],
  },
  {
    id: '202603-malinin-wins-fair-play-award-for-his-grace-in-defeat-to-shai',
    title: 'Malinin wins fair play award for his grace in defeat to Shaidorov at Winter Olympics',
    url: 'https://www.washingtonpost.com',
    source: 'The Washington Post',
    publishedAt: '2026-03-06',
    summary: 'Ilia Malinin received a fair play award for displaying grace in his defeat to Shaidorov at the Winter Olympics.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'skater', id: 'mikhail-shaidorov' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202603-figure-skaters-with-disabilities-seek-a-place-in-the-paralym',
    title: 'Figure skaters with disabilities seek a place in the Paralympic spotlight',
    url: 'https://apnews.com',
    source: 'AP News',
    publishedAt: '2026-03-03',
    summary: 'Figure skaters with disabilities are seeking recognition and inclusion in the Paralympic spotlight.',
    entities: [
      
    ],
  },
  {
    id: '202603-teams-elite-junior-completes-three-peat-in-salt-lake-city',
    title: 'Teams Elite Junior Completes Three-Peat in Salt Lake City',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-06',
    summary: 'Teams Elite Junior has completed a three-peat (third consecutive championship) in Salt Lake City.',
    entities: [
      
    ],
  },
  {
    id: '202603-ilia-malinin-receives-milan-cortina-2026-olympics-fair-play',
    title: 'Ilia Malinin receives Milan Cortina 2026 Olympics Fair Play Award',
    url: 'https://www.nbcsports.com',
    source: 'NBC Sports',
    publishedAt: '2026-03-05',
    summary: 'Ilia Malinin has been awarded the Fair Play Award for the Milan Cortina 2026 Olympics.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202603-flores-and-wang-claim-fifth-place-at-junior-worlds',
    title: 'Flores and Wang Claim Fifth Place at Junior Worlds',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-05',
    summary: 'Flores and Wang finished in fifth place at Junior Worlds.',
    entities: [
      
    ],
  },
  {
    id: '202603-malinin-honored-with-milano-cortina-2026-fair-play-award',
    title: 'Malinin Honored With Milano Cortina 2026 Fair Play Award',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-05',
    summary: 'Ilia Malinin has been honored with the Milano Cortina 2026 Fair Play Award.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202603-olga-mikutina',
    title: 'Olga MIKUTINA',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-03',
    summary: 'The headline references Olga Mikutina, a figure skater.',
    entities: [
      
    ],
  },
  {
    id: '202603-madeline-schizas',
    title: 'Madeline SCHIZAS',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-03',
    summary: 'The headline references Madeline Schizas, a figure skater.',
    entities: [
      { type: 'skater', id: 'madeline-schizas' }
    ],
  },
  {
    id: '202603-tomas-guarino-sabate',
    title: 'Tomas GUARINO SABATE',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-03',
    summary: 'The headline mentions Tomas Guarino Sabate, appearing to reference a figure skater by that name.',
    entities: [
      
    ],
  },
  {
    id: '202603-nika-egadze',
    title: 'Nika EGADZE',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-03',
    summary: 'The headline mentions Nika Egadze, a figure skater featured on olympics.com.',
    entities: [
      
    ],
  },
  {
    id: '202603-amber-glenn-says-she-will-not-visit-white-house-to-celebrate',
    title: 'Amber Glenn says she will not visit White House to celebrate Olympic gold',
    url: 'https://www.theguardian.com/sport/2026/mar/06/amber-glenn-trump-white-house-olympics-refusal',
    source: 'theguardian.com',
    publishedAt: '2026-03-06',
    summary: 'Team USA figure skater Amber Glenn announced she will not visit the White House to celebrate her Olympic team gold medal from the Milano Cortina Games. Glenn, who identifies as pansexual and bisexual, has been critical of President Trump and believes athletes have the right to choose what they endorse. She finished fifth in the Olympic women\'s singles, while her teammate Alysa Liu won the individual gold medal.',
    entities: [
      { type: 'skater', id: 'amber-glenn' }, { type: 'skater', id: 'alysa-liu' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202603-alysa-liu-on-dancing-her-way-to-olympic-gold-the-music-carri',
    title: 'Alysa Liu on Dancing Her Way to Olympic Gold: ‘The Music Carries My Body’',
    url: 'https://www.nytimes.com',
    source: 'The New York Times',
    publishedAt: '2026-03-06',
    summary: 'Alysa Liu discusses her approach to dancing her way to Olympic gold, emphasizing how the music carries her body.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }
    ],
  },
  {
    id: '202603-us-figure-skater-ilia-malinin-wins-fair-play-award-for-displ',
    title: 'U.S. Figure skater Ilia Malinin wins Fair Play Award for display of sportsmanship at Winter Olympics 2026',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-05',
    summary: 'U.S. figure skater Ilia Malinin has won the Fair Play Award for demonstrating exceptional sportsmanship at the 2026 Winter Olympics.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-2026-winter-olympics-figure-skater-sabate-hopeful-over-minio',
    title: '2026 Winter Olympics: Figure skater Sabate hopeful over Minions music dispute',
    url: 'https://www.bbc.com',
    source: 'BBC',
    publishedAt: '2026-02-04',
    summary: 'Figure skater Sabate is hopeful regarding a music dispute involving Minions music in relation to the 2026 Winter Olympics.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202603-haydenettes-rise-to-short-program-lead-at-us-synchronized-sk',
    title: 'Haydenettes Rise to Short Program Lead at U.S. Synchronized Skating Championships',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-07',
    summary: 'The Haydenettes team has taken the lead after the short program portion of the U.S. Synchronized Skating Championships.',
    entities: [
      
    ],
  },
  {
    id: '202603-aboian-and-veselukhin-claim-rhythm-dance',
    title: 'Aboian and Veselukhin Claim Rhythm Dance',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-06',
    summary: 'Aboian and Veselukhin won the rhythm dance segment of a figure skating competition.',
    entities: [
      
    ],
  },
  {
    id: '202603-nyquist-brings-championship-standard-to-redhawks',
    title: 'Nyquist brings ‘Championship Standard’ to RedHawks',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-06',
    summary: 'Nyquist is bringing a \'Championship Standard\' to the RedHawks program.',
    entities: [
      
    ],
  },
  {
    id: '202603-andreas-nordeback',
    title: 'Andreas NORDEBACK',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-04',
    summary: 'The headline mentions Andreas Nordeback, a figure skater.',
    entities: [
      
    ],
  },
  {
    id: '202602-kam-and-oshea-chan-and-akira-howe-rise-to-the-occasion',
    title: 'Kam And O’Shea, Chan and Akira Howe Rise to the Occasion',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-02-15',
    summary: 'Skaters Kam and O\'Shea, along with Chan and Akira Howe, delivered strong performances when it mattered most.',
    entities: [
      
    ],
  },
  {
    id: '202602-chan-and-akira-howe-kam-and-oshea-secure-top-10-finishes-in',
    title: 'Chan and Akira Howe, Kam and O’Shea Secure Top-10 Finishes in Olympic Pairs Event',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-02-16',
    summary: 'Pairs teams Chan and Akira Howe, and Kam and O\'Shea both achieved top-10 finishes in the Olympic pairs event.',
    entities: [
      { type: 'competition', id: '2022-olympics' }
    ],
  },
  {
    id: '202603-aboian-and-veselukhin-win-ice-dance-title-cap-season-undefea',
    title: 'Aboian and Veselukhin Win Ice Dance Title, Cap Season Undefeated',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-07',
    summary: 'Aboian and Veselukhin won the ice dance title and completed their season undefeated.',
    entities: [
      
    ],
  },
  {
    id: '202603-olympic-champ-alysa-liu-withdraws-from-figure-skating-worlds',
    title: 'Olympic champ Alysa Liu withdraws from figure skating worlds',
    url: 'https://www.espn.com',
    source: 'ESPN',
    publishedAt: '2026-03-07',
    summary: 'Olympic champion Alysa Liu has withdrawn from the figure skating world championships.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }
    ],
  },
  {
    id: '202603-stephen-gogolev',
    title: 'Stephen GOGOLEV',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-06',
    summary: 'The headline references Stephen Gogolev, a figure skater.',
    entities: [
      
    ],
  },
  {
    id: '202603-chiba-mone',
    title: 'CHIBA Mone',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-05',
    summary: 'The headline references Japanese figure skater Chiba Mone.',
    entities: [
      { type: 'skater', id: 'mone-chiba' }
    ],
  },
  {
    id: '202603-maxime-deschamps',
    title: 'Maxime DESCHAMPS',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-05',
    summary: 'The headline mentions figure skater Maxime Deschamps.',
    entities: [
      { type: 'skater', id: 'stellato-dudek-deschamps' }
    ],
  },
  {
    id: '202602-how-to-watch-pairs-figure-skating-medal-events-at-the-2026-w',
    title: 'How to watch pairs figure skating medal events at the 2026 Winter Olympics',
    url: 'https://www.nytimes.com',
    source: 'The New York Times',
    publishedAt: '2026-02-15',
    summary: 'The article provides information on how to watch pairs figure skating medal events at the 2026 Winter Olympics.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202603-haydenettes-skyliners-go-1-2-to-clinch-world-synchronized-sk',
    title: 'Haydenettes, Skyliners Go 1-2 to Clinch World Synchronized Skating Championships Positions',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-08',
    summary: 'The Haydenettes and Skyliners finished first and second respectively to secure positions for the World Synchronized Skating Championships.',
    entities: [
      
    ],
  },
  {
    id: '202603-isu-world-junior-figure-skating-championships-2026-shimada-m',
    title: 'ISU World Junior Figure Skating Championships 2026: Shimada Mao wins fourth consecutive title despite illness',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-07',
    summary: 'Shimada Mao won her fourth consecutive title at the ISU World Junior Figure Skating Championships 2026 despite competing while ill.',
    entities: [
      { type: 'skater', id: 'shimada-mao' }
    ],
  },
  {
    id: '202603-evan-bates',
    title: 'Evan BATES',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-05',
    summary: 'The headline mentions Evan Bates, an American ice dancer.',
    entities: [
      { type: 'skater', id: 'chock-bates' }
    ],
  },
  {
    id: '202602-how-to-watch-team-usas-alysa-liu-amber-glenn-isabeau-levito',
    title: 'How to watch Team USA’s Alysa Liu, Amber Glenn, Isabeau Levito in women’s figure skating',
    url: 'https://www.nytimes.com',
    source: 'The New York Times',
    publishedAt: '2026-02-17',
    summary: 'The article provides information on how to watch Team USA\'s figure skaters Alysa Liu, Amber Glenn, and Isabeau Levito compete in women\'s figure skating.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }, { type: 'skater', id: 'amber-glenn' }, { type: 'skater', id: 'isabeau-levito' }
    ],
  },
  {
    id: '202602-a-winding-road-to-italy-for-chan-and-howe',
    title: 'A Winding Road to Italy for Chan and Howe',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-02-15',
    summary: 'Chan and Howe have taken a winding road to reach Italy for competition.',
    entities: [
      
    ],
  },
  {
    id: '202602-winter-olympics-2026-mikhail-shaidorov-stuns-for-olympic-fig',
    title: 'Winter Olympics 2026: Mikhail Shaidorov stuns for Olympic figure skating title',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-02-13',
    summary: 'Mikhail Shaidorov delivered a stunning performance to win the Olympic figure skating title at the 2026 Winter Olympics.',
    entities: [
      { type: 'skater', id: 'mikhail-shaidorov' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-malinin-storms-to-short-program-victory',
    title: 'Malinin Storms to Short Program Victory',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-02-10',
    summary: 'Malinin achieved victory in the short program segment of a figure skating competition.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }
    ],
  },
  {
    id: '202603-why-is-figure-skating-not-in-the-paralympics',
    title: 'Why is figure skating not in the Paralympics?',
    url: 'https://www.bbc.com/sport/articles/c0k1ygxlvn7o?at_medium=RSS&at_campaign=rss',
    source: 'bbc.com',
    publishedAt: '2026-03-09',
    summary: 'Figure skating is not included in the Winter Paralympics because the International Skating Union (ISU) is not recognized by the International Paralympic Committee (IPC), and the sport lacks sufficient international participation levels. The sport faces challenges including establishing classification categories for different disabilities and adapting competition formats to accommodate various impairments. While there are growing calls from skaters for inclusion, no new sports have been added to the Winter Paralympics since Para-snowboard in 2014.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202603-winter-paralympics-2026-why-is-figure-skating-not-at-milan-c',
    title: 'Winter Paralympics 2026: Why is figure skating not at Milan-Cortina?',
    url: 'https://www.bbc.com',
    source: 'BBC',
    publishedAt: '2026-03-09',
    summary: 'The headline questions why figure skating is not included in the 2026 Winter Paralympics in Milan-Cortina.',
    entities: [
      
    ],
  },
  {
    id: '202603-alysa-liu-withdraws-from-world-figure-skating-championships',
    title: 'Alysa Liu withdraws from World Figure Skating Championships: ‘See yall next season!!’',
    url: 'https://www.nbcsports.com',
    source: 'NBC Sports',
    publishedAt: '2026-03-08',
    summary: 'Alysa Liu has withdrawn from the World Figure Skating Championships and indicated she will return next season.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }
    ],
  },
  {
    id: '202603-looking-back-the-40th-anniversary-of-tiffany-chins-second-wo',
    title: 'Looking Back: The 40th Anniversary of Tiffany Chin’s Second World medal',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-09',
    summary: 'The article commemorates the 40th anniversary of Tiffany Chin earning her second World Championship medal.',
    entities: [
      
    ],
  },
  {
    id: '202602-team-usa-wins-gold-in-figure-skating-at-olympics-reactions-h',
    title: 'Team USA wins gold in figure skating at Olympics: Reactions, highlights',
    url: 'https://www.usatoday.com',
    source: 'USA Today',
    publishedAt: '2026-02-08',
    summary: 'Team USA won gold in figure skating at the Olympics, with reactions and highlights being reported.',
    entities: [
      { type: 'competition', id: '2022-olympics' }
    ],
  },
  {
    id: '202602-russian-figure-skater-changes-olympic-music-over-copyright',
    title: 'Russian figure skater changes Olympic music over copyright',
    url: 'https://www.espn.com',
    source: 'ESPN',
    publishedAt: '2026-02-08',
    summary: 'A Russian figure skater has changed their Olympic music due to copyright issues.',
    entities: [
      { type: 'competition', id: '2022-olympics' }
    ],
  },
  {
    id: '202602-olympic-figure-skating-music-dispute-between-armenia-and-aze',
    title: 'Olympic figure skating music dispute between Armenia and Azerbaijan resolved after ISU review',
    url: 'https://www.theguardian.com',
    source: 'The Guardian',
    publishedAt: '2026-02-08',
    summary: 'A music dispute between Armenia and Azerbaijan in Olympic figure skating has been resolved following a review by the ISU.',
    entities: [
      { type: 'competition', id: '2022-olympics' }
    ],
  },
  {
    id: '202602-nothing-could-stop-the-us-figure-skating-team-not-even-jd-va',
    title: 'Nothing could stop the U.S. figure skating team. Not even JD Vance’s motorcade.',
    url: 'https://www.washingtonpost.com',
    source: 'The Washington Post',
    publishedAt: '2026-02-06',
    summary: 'The U.S. figure skating team was not deterred by JD Vance\'s motorcade, suggesting they overcame this logistical obstacle during their activities.',
    entities: [
      
    ],
  },
  {
    id: '202603-teams-elite-junior-skyliners-junior-head-to-junior-world-cha',
    title: 'Teams Elite Junior, Skyliners Junior Head to Junior World Championships with Goals of the Podium',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-10',
    summary: 'Teams Elite Junior and Skyliners Junior are heading to the Junior World Championships with aspirations of reaching the podium.',
    entities: [
      
    ],
  },
  {
    id: '202603-2-time-olympic-champs-chock-and-bates-withdraw-from-ice-danc',
    title: '2-time Olympic champs Chock and Bates withdraw from ice dance worlds after Milan Cortina Olympics',
    url: 'https://apnews.com',
    source: 'AP News',
    publishedAt: '2026-03-09',
    summary: 'Two-time Olympic champions Chock and Bates have withdrawn from the ice dance world championships following the Milan Cortina Olympics.',
    entities: [
      { type: 'skater', id: 'chock-bates' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202603-hanyu-yuzuru-commemorates-2011-earthquake-i-want-to-keep-bei',
    title: 'Hanyu Yuzuru commemorates 2011 earthquake: "I want to keep being the catalyst to avoid the disaster fading"',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-11',
    summary: 'Yuzuru Hanyu commemorates the 2011 earthquake, expressing his desire to continue serving as a catalyst to prevent the disaster from being forgotten.',
    entities: [
      { type: 'skater', id: 'yuzuru-hanyu' }
    ],
  },
  {
    id: '202603-lee-haein',
    title: 'LEE Haein',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-09',
    summary: 'The headline references LEE Haein, a figure skater.',
    entities: [
      
    ],
  },
  {
    id: '202603-sui-wenjing',
    title: 'SUI Wenjing',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-09',
    summary: 'The headline references SUI Wenjing, a figure skater.',
    entities: [
      { type: 'skater', id: 'sui-han' }
    ],
  },
  {
    id: '202603-she-is-our-hero-oakland-celebrates-alysa-liu-after-olympics',
    title: '‘She is our hero’: Oakland celebrates Alysa Liu after Olympics triumph',
    url: 'https://www.theguardian.com/sport/2026/mar/12/alysa-liu-olympics-oakland',
    source: 'theguardian.com',
    publishedAt: '2026-03-13',
    summary: 'Olympic figure skating champion Alysa Liu was celebrated by nearly 5,000 people at a homecoming rally in Oakland, California, where she received a key to the city. Liu won two Olympic gold medals in Milan after returning to competitive skating following a two-year break. She became the first US woman to win individual figure skating Olympic gold in 24 years and was previously the youngest US women\'s champion at age 13.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }, { type: 'competition', id: '2022-olympics' }, { type: 'competition', id: '2025-worlds' }
    ],
  },
  {
    id: '202603-behind-the-scenes-of-alysa-lius-olympic-victory-tour-and-her',
    title: 'Behind the scenes of Alysa Liu’s Olympic victory tour and her new level of fame',
    url: 'https://www.nytimes.com',
    source: 'The New York Times',
    publishedAt: '2026-03-12',
    summary: 'The article covers Alysa Liu\'s Olympic victory tour and discusses her increased level of fame following her Olympic success.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }
    ],
  },
  {
    id: '202603-alysa-lius-new-reality-is-a-post-olympic-spotlight-for-a-new',
    title: 'Alysa Liu’s new reality is a post-Olympic spotlight for a new age for figure skating',
    url: 'https://www.nbcsports.com',
    source: 'NBC Sports',
    publishedAt: '2026-03-12',
    summary: 'Alysa Liu is experiencing a new reality in the post-Olympic spotlight, which represents a new age for figure skating.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }
    ],
  },
  {
    id: '202603-alysa-liu-caps-olympic-stardom-tour-with-a-big-party-where-i',
    title: 'Alysa Liu caps Olympic stardom tour with a big party where it all began, in Oakland',
    url: 'https://www.nytimes.com',
    source: 'The New York Times',
    publishedAt: '2026-03-13',
    summary: 'Alysa Liu concluded her Olympic stardom tour with a large celebration in Oakland, where her skating journey began.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }
    ],
  },
  {
    id: '202603-skyliners-junior-posts-seasons-best-for-second-in-short-prog',
    title: 'Skyliners Junior Posts Season’s Best for Second in Short Program at Junior Worlds',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-13',
    summary: 'Skyliners Junior achieved a season\'s best performance to place second in the short program at Junior Worlds.',
    entities: [
      
    ],
  },
  {
    id: '202603-harris-holly-chan-jason',
    title: 'HARRIS Holly / CHAN Jason',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-08',
    summary: 'The headline references figure skaters Holly Harris and Jason Chan.',
    entities: [
      
    ],
  },
  {
    id: '202602-olympics-figure-skating-highlights-alysa-liu-in-3rd-after-sh',
    title: 'Olympics figure skating highlights: Alysa Liu in 3rd after short program',
    url: 'https://www.usatoday.com',
    source: 'USA Today',
    publishedAt: '2026-02-19',
    summary: 'Alysa Liu is currently in third place after completing her short program at the Olympics figure skating competition.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }, { type: 'competition', id: '2022-olympics' }
    ],
  },
  {
    id: '202603-skyliners-junior-clinch-seventh-junior-world-medal-with-bron',
    title: 'Skyliners Junior Clinch Seventh Junior World Medal with Bronze',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-14',
    summary: 'The Skyliners Junior team won a bronze medal, marking their seventh medal at the Junior World Championships.',
    entities: [
      
    ],
  },
  {
    id: '202603-maxim-naumov',
    title: 'Maxim NAUMOV',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-13',
    summary: 'The headline mentions Maxim Naumov, appearing to be about this figure skater.',
    entities: [
      
    ],
  },
  {
    id: '202602-winter-olympics-2026-ilia-malinin-delivers-under-pressure-se',
    title: 'Winter Olympics 2026: Ilia Malinin delivers under pressure, securing Team USA second straight figure skating gold',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-02-08',
    summary: 'Ilia Malinin performed well under pressure at the 2026 Winter Olympics, helping Team USA win their second consecutive figure skating gold medal.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-winter-olympics-2026-japans-nakai-ami-delivers-in-figure-ska',
    title: 'Winter Olympics 2026: Japan’s Nakai Ami delivers in figure skating short program for lead',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-02-17',
    summary: 'Japan\'s Ami Nakai delivered a strong performance in the figure skating short program at the 2026 Winter Olympics, taking the lead.',
    entities: [
      { type: 'skater', id: 'ami-nakai' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-french-ice-dancers-fournier-beaudry-and-cizeron-face-controv',
    title: 'French ice dancers Fournier Beaudry and Cizeron face controversy',
    url: 'https://www.reuters.com',
    source: 'Reuters',
    publishedAt: '2026-02-05',
    summary: 'French ice dancers Fournier Beaudry and Cizeron are facing some form of controversy.',
    entities: [
      { type: 'skater', id: 'fournier-beaudry-cizeron' }
    ],
  },
  {
    id: '202603-niccolo-macii',
    title: 'Niccolo MACII',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-13',
    summary: 'The headline references Niccolo Macii, a figure skater.',
    entities: [
      { type: 'skater', id: 'conti-macii' }
    ],
  },
  {
    id: '202603-how-jeff-norton-created-netflixs-latest-teen-drama-about-fig',
    title: 'How Jeff Norton created Netflix’s latest teen drama about figure skating',
    url: 'https://www.cbc.ca',
    source: 'CBC',
    publishedAt: '2026-03-16',
    summary: 'Jeff Norton created Netflix\'s latest teen drama series that focuses on figure skating.',
    entities: [
      
    ],
  },
  {
    id: '202602-us-figure-skating-announces-2026-27-national-qualifying-seri',
    title: 'U.S. Figure Skating Announces 2026-27 National Qualifying Series Schedule',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-02-02',
    summary: 'U.S. Figure Skating has announced the schedule for the 2026-27 National Qualifying Series.',
    entities: [
      
    ],
  },
  {
    id: '202512-build-a-bear-takes-center-ice-as-the-official-stuffed-animal',
    title: 'Build-A-Bear Takes Center Ice as the Official Stuffed Animal of the 2026 Prevagen U.S. Figure Skating Championships',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2025-12-22',
    summary: 'Build-A-Bear has been announced as the official stuffed animal partner of the 2026 Prevagen U.S. Figure Skating Championships.',
    entities: [
      
    ],
  },
  {
    id: '202603-olympic-champion-alysa-lius-new-high-profile-this-is-crazy',
    title: 'Olympic champion Alysa Liu\'s new high profile: "This is crazy"',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-16',
    summary: 'Olympic champion Alysa Liu is experiencing a new high profile situation that she describes as \'crazy\'.',
    entities: [
      { type: 'skater', id: 'alysa-liu' }
    ],
  },
  {
    id: '202602-japan-pair-knocks-the-king-and-queen-off-their-thrones',
    title: 'Japan pair knocks the king and queen off their thrones.',
    url: 'https://www.nytimes.com',
    source: 'The New York Times',
    publishedAt: '2026-02-18',
    summary: 'A Japanese pairs team has defeated the previously dominant pair, described as the king and queen of their sport.',
    entities: [
      { type: 'skater', id: 'miura-kihara' }
    ],
  },
  {
    id: '202602-winter-olympics-2026-who-is-benoit-richaud-meet-figure-skati',
    title: 'Winter Olympics 2026: Who is Benoit Richaud? Meet figure skating’s kiss and cry royalty, and artist of the ice',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-02-11',
    summary: 'The headline introduces Benoit Richaud, described as figure skating\'s kiss and cry royalty and artist of the ice, in connection with the 2026 Winter Olympics.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202601-glenn-liu-levito-ignite-crowd-in-st-louis',
    title: 'Glenn, Liu, Levito Ignite Crowd in St. Louis',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-01-08',
    summary: 'Glenn, Liu, and Levito delivered exciting performances that energized the crowd at an event in St. Louis.',
    entities: [
      { type: 'skater', id: 'amber-glenn' }, { type: 'skater', id: 'alysa-liu' }, { type: 'skater', id: 'isabeau-levito' }
    ],
  },
  {
    id: '202601-juniors-novice-set-the-tone-at-2026-us-championships',
    title: 'Juniors, Novice Set The Tone at 2026 U.S. Championships',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-01-06',
    summary: 'Junior and Novice level skaters set the tone at the 2026 U.S. Championships competition.',
    entities: [
      
    ],
  },
  {
    id: '202603-never-say-never-oregon-skater-grateful-for-her-skating-journ',
    title: 'Never Say Never: Oregon Skater Grateful For Her Skating Journey',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-17',
    summary: 'An Oregon figure skater reflects on being grateful for her skating journey, with the headline suggesting a story of perseverance.',
    entities: [
      
    ],
  },
  {
    id: '202603-cha-junhwan',
    title: 'CHA Junhwan',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-15',
    summary: 'The headline references CHA Junhwan, a figure skater.',
    entities: [
      { type: 'skater', id: 'junhwan-cha' }
    ],
  },
  {
    id: '202602-ilia-malinin-and-snoop-dogg-figure-skating-masterclass-at-wi',
    title: 'Ilia Malinin and Snoop Dogg: Figure skating masterclass at Winter Games 2026',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-02-03',
    summary: 'Ilia Malinin and Snoop Dogg are involved in a figure skating masterclass at the Winter Games 2026.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202601-glenn-becomes-first-woman-to-win-three-consecutive-us-titles',
    title: 'Glenn Becomes First Woman to Win Three Consecutive U.S. Titles Since Michelle Kwan',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-01-10',
    summary: 'Glenn has become the first woman to win three consecutive U.S. titles since Michelle Kwan accomplished this feat.',
    entities: [
      { type: 'skater', id: 'amber-glenn' }
    ],
  },
  {
    id: '202603-beaming-after-olympic-bronze-ice-dancers-gilles-and-poirier',
    title: 'Beaming after Olympic bronze, ice dancers Gilles and Poirier aim to keep good times rolling at worlds',
    url: 'https://www.cbc.ca',
    source: 'CBC',
    publishedAt: '2026-03-18',
    summary: 'Ice dancers Gilles and Poirier are celebrating their Olympic bronze medal and looking to continue their success at the upcoming world championships.',
    entities: [
      { type: 'skater', id: 'gilles-poirier' }, { type: 'competition', id: '2025-worlds' }
    ],
  },
  {
    id: '202603-houston-teen-driven-to-make-a-difference-in-the-world',
    title: 'Houston Teen Driven to Make a Difference in the World',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-18',
    summary: 'A teenager from Houston is motivated to make a positive impact in the world.',
    entities: [
      
    ],
  },
  {
    id: '202603-kimmy-repond',
    title: 'Kimmy REPOND',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-09',
    summary: 'The headline mentions Kimmy REPOND, appearing to reference a figure skater.',
    entities: [
      
    ],
  },
  {
    id: '202601-us-figure-skating-announces-world-championships-world-junior',
    title: 'U.S. Figure Skating Announces World Championships, World Junior Championships and Four Continents Teams',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-01-11',
    summary: 'U.S. Figure Skating has announced the team selections for World Championships, World Junior Championships and Four Continents Championships.',
    entities: [
      { type: 'competition', id: '2025-worlds' }, { type: 'competition', id: '2025-four-continents' }
    ],
  },
  {
    id: '202601-team-united-states',
    title: 'Team United States',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-01-31',
    summary: 'The headline references Team United States in relation to figure skating coverage on olympics.com.',
    entities: [
      
    ],
  },
  {
    id: '202601-efimova-and-mitrofanov-golden-at-four-continents-championshi',
    title: 'Efimova and Mitrofanov Golden at Four Continents Championships',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-01-24',
    summary: 'Efimova and Mitrofanov won gold at the Four Continents Championships.',
    entities: [
      { type: 'competition', id: '2025-four-continents' }
    ],
  },
  {
    id: '202601-with-hope-efimova-and-mitrofanov-aim-for-second-us-title-and',
    title: 'With Hope, Efimova and Mitrofanov Aim for Second U.S. Title and Olympic Eligibility',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-01-02',
    summary: 'Efimova and Mitrofanov are aiming for their second U.S. title and Olympic eligibility with hope.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202602-highest-scoring-olympic-figure-skating-routines-of-all-time',
    title: 'Highest-scoring Olympic figure skating routines of all time',
    url: 'https://www.espn.com',
    source: 'ESPN',
    publishedAt: '2026-02-11',
    summary: 'ESPN presents the highest-scoring Olympic figure skating routines of all time.',
    entities: [
      
    ],
  },
  {
    id: '202511-spencer-howe-serving-his-country-while-chasing-skating-dream',
    title: 'Spencer Howe Serving His Country While Chasing Skating Dreams',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2025-11-05',
    summary: 'Spencer Howe is balancing military service with pursuing his figure skating career and competitive aspirations.',
    entities: [
      
    ],
  },
  {
    id: '202603-us-figure-skating-announces-locations-of-2027-us-figure-skat',
    title: 'U.S. Figure Skating Announces Locations of 2027 U.S. Figure Skating and Synchronized Skating Championships, 2026 Skate America',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-19',
    summary: 'U.S. Figure Skating has announced the locations for the 2027 U.S. Figure Skating and Synchronized Skating Championships as well as the 2026 Skate America competition.',
    entities: [
      
    ],
  },
  {
    id: '202602-controversial-french-team-winning-gold-is-awful-for-figure-s',
    title: 'Controversial French team winning gold is awful for figure skating, abuse survivors | Opinion',
    url: 'https://www.usatoday.com',
    source: 'USA Today',
    publishedAt: '2026-02-11',
    summary: 'An opinion piece argues that a controversial French team winning gold is detrimental to figure skating and abuse survivors.',
    entities: [
      
    ],
  },
  {
    id: '202602-us-skater-amber-glenn-faces-fallout-over-politics-and-issues',
    title: 'US skater Amber Glenn faces fallout over politics and issues with music copyright after Olympic gold',
    url: 'https://apnews.com',
    source: 'AP News',
    publishedAt: '2026-02-09',
    summary: 'US skater Amber Glenn is dealing with political controversy and music copyright issues following her Olympic gold medal win.',
    entities: [
      { type: 'skater', id: 'amber-glenn' }
    ],
  },
  {
    id: '202603-opinion-china-doesnt-want-you-to-know-about-operation-yellow',
    title: 'Opinion | China doesn’t want you to know about Operation Yellowbird',
    url: 'https://www.washingtonpost.com',
    source: 'The Washington Post',
    publishedAt: '2026-03-20',
    summary: 'This is an opinion piece about China not wanting people to know about Operation Yellowbird.',
    entities: [
      
    ],
  },
  {
    id: '202603-trennt-michaud',
    title: 'Trennt MICHAUD',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-18',
    summary: 'The headline mentions Trennt MICHAUD, though the context or nature of the news is not specified in the headline alone.',
    entities: [
      
    ],
  },
  {
    id: '202603-janse-van-rensburg-jennifer-steffan-benjamin',
    title: 'JANSE van RENSBURG Jennifer / STEFFAN Benjamin',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-10',
    summary: 'The headline references figure skaters Jennifer Janse van Rensburg and Benjamin Steffan.',
    entities: [
      
    ],
  },
  {
    id: '202512-us-figure-skating-partners-with-oofskate-to-bring-ai-powered',
    title: 'U.S. Figure Skating Partners with OOFSkate to Bring AI Powered Jump Metrics to Athletes Nationwide',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2025-12-02',
    summary: 'U.S. Figure Skating has announced a partnership with OOFSkate to provide AI-powered jump metrics technology to athletes across the country.',
    entities: [
      
    ],
  },
  {
    id: '202601-us-captures-four-medals-at-us-synchronized-skating-internati',
    title: 'U.S. Captures Four Medals at U.S. Synchronized Skating International Classic',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-01-31',
    summary: 'The United States won four medals at the U.S. Synchronized Skating International Classic competition.',
    entities: [
      
    ],
  },
  {
    id: '202603-yoshida-utana',
    title: 'YOSHIDA Utana',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-18',
    summary: 'The headline mentions YOSHIDA Utana, appearing to reference a figure skater.',
    entities: [
      
    ],
  },
  {
    id: '202603-paul-poirier',
    title: 'Paul POIRIER',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-18',
    summary: 'The headline mentions Paul Poirier, a figure skater.',
    entities: [
      { type: 'skater', id: 'gilles-poirier' }
    ],
  },
  {
    id: '202602-my-olympic-dream-learning-to-figure-skate-in-middle-age',
    title: 'My Olympic Dream: Learning to Figure Skate in Middle Age',
    url: 'https://www.nytimes.com',
    source: 'The New York Times',
    publishedAt: '2026-02-11',
    summary: 'An article about someone learning to figure skate in middle age while pursuing an Olympic dream.',
    entities: [
      { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202603-mcbeath-and-parkman-embrace-first-worlds-together',
    title: 'McBeath and Parkman Embrace First Worlds Together',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-23',
    summary: 'McBeath and Parkman are preparing for their first World Championships competition together as a team.',
    entities: [
      { type: 'competition', id: '2025-worlds' }
    ],
  },
  {
    id: '202603-malinin-seeks-post-olympics-redemption-at-world-championship',
    title: 'Malinin seeks post-Olympics redemption at world championships in Prague',
    url: 'https://www.japantimes.co.jp',
    source: 'The Japan Times',
    publishedAt: '2026-03-24',
    summary: 'Malinin is looking for redemption at the world championships in Prague following the Olympics.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'competition', id: '2025-worlds' }
    ],
  },
  {
    id: '202512-nathan-chen-enters-us-figure-skating-hall-of-fame',
    title: 'Nathan Chen Enters U.S. Figure Skating Hall of Fame',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2025-12-02',
    summary: 'Nathan Chen has been inducted into the U.S. Figure Skating Hall of Fame.',
    entities: [
      { type: 'skater', id: 'nathan-chen' }
    ],
  },
  {
    id: '202601-full-us-lineup-to-compete-at-four-continents-championships',
    title: 'Full U.S. Lineup to Compete at Four Continents Championships',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-01-20',
    summary: 'The full U.S. lineup has been announced to compete at the Four Continents Championships.',
    entities: [
      { type: 'competition', id: '2025-four-continents' }
    ],
  },
  {
    id: '202603-us-sends-full-slate-of-skaters-to-world-championships',
    title: 'U.S. Sends Full Slate of Skaters to World Championships',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-24',
    summary: 'The United States is sending a complete team of figure skaters to the World Championships.',
    entities: [
      { type: 'competition', id: '2025-worlds' }
    ],
  },
  {
    id: '202603-isu-world-figure-skating-championships-2026-alisa-efimova-an',
    title: 'ISU World Figure Skating Championships 2026: Alisa Efimova and Misha Mitrofanov eager to "create new destinies" after missing out on Olympics',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-24',
    summary: 'Figure skaters Alisa Efimova and Misha Mitrofanov are looking forward to the 2026 World Championships with hopes to \'create new destinies\' after missing out on the Olympics.',
    entities: [
      { type: 'competition', id: '2026-worlds' }
    ],
  },
  {
    id: '202603-ilia-malinin-and-amber-glenn-chase-figure-skating-world-titl',
    title: 'Ilia Malinin and Amber Glenn chase figure skating world titles after Olympic disappointment',
    url: 'https://apnews.com',
    source: 'AP News',
    publishedAt: '2026-03-24',
    summary: 'Ilia Malinin and Amber Glenn are pursuing figure skating world titles following disappointment at the Olympics.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'skater', id: 'amber-glenn' }
    ],
  },
  {
    id: '202603-the-new-slate-of-the-all-time-best-winter-olympics-figure-sk',
    title: 'The new slate of the all-time best Winter Olympics figure-skating fashion',
    url: 'https://www.cbc.ca',
    source: 'CBC',
    publishedAt: '2026-03-24',
    summary: 'CBC presents a new compilation featuring the best fashion moments in figure skating history at the Winter Olympics.',
    entities: [
      
    ],
  },
  {
    id: '202603-olympics-stars-amber-glenn-isabeau-levito-competing-again-af',
    title: 'Olympics stars Amber Glenn, Isabeau Levito competing again after whirlwind month',
    url: 'https://www.usatoday.com',
    source: 'USA Today',
    publishedAt: '2026-03-26',
    summary: 'Olympic figure skating stars Amber Glenn and Isabeau Levito are competing again following a busy month of competition.',
    entities: [
      { type: 'skater', id: 'amber-glenn' }, { type: 'skater', id: 'isabeau-levito' }
    ],
  },
  {
    id: '202603-isu-figure-skating-world-championships-2026-prague-womens-sh',
    title: 'ISU Figure Skating World Championships 2026 Prague: Women\'s short program',
    url: 'https://www.cbc.ca',
    source: 'CBC',
    publishedAt: '2026-03-25',
    summary: 'The headline refers to the women\'s short program at the ISU Figure Skating World Championships 2026 taking place in Prague.',
    entities: [
      { type: 'competition', id: '2026-worlds' }
    ],
  },
  {
    id: '202603-all-session-tickets-for-2027-us-figure-skating-championships',
    title: 'All-Session Tickets for 2027 U.S. Figure Skating Championships Go on Sale Thursday',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-25',
    summary: 'All-session tickets for the 2027 U.S. Figure Skating Championships will go on sale Thursday.',
    entities: [
      
    ],
  },
  {
    id: '202603-kaori-sakamoto-leads-figure-skating-worlds-after-short-progr',
    title: 'Kaori Sakamoto leads figure skating worlds after short program; Americans in medal contention',
    url: 'https://www.nbcsports.com',
    source: 'NBC Sports',
    publishedAt: '2026-03-25',
    summary: 'Kaori Sakamoto is leading after the short program at the World Figure Skating Championships, with American skaters positioned well for potential medals.',
    entities: [
      { type: 'skater', id: 'kaori-sakamoto' }
    ],
  },
  {
    id: '202603-glenn-levito-in-prime-medal-position-at-world-championships',
    title: 'Glenn, Levito in Prime Medal Position at World Championships',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-25',
    summary: 'Glenn and Levito are in prime medal position at the World Championships.',
    entities: [
      { type: 'skater', id: 'amber-glenn' }, { type: 'skater', id: 'isabeau-levito' }, { type: 'competition', id: '2025-worlds' }
    ],
  },
  {
    id: '202603-top-five-stories-to-read-in-the-spring-2026-issue-of-skating',
    title: 'Top Five Stories to Read in the Spring 2026 Issue of SKATING Magazine',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-25',
    summary: 'SKATING Magazine\'s Spring 2026 issue features five top stories for readers.',
    entities: [
      
    ],
  },
  {
    id: '202603-hasevolodin-and-metelkinaberulava-less-than-point-apart-afte',
    title: 'Hase/Volodin and Metelkina/Berulava less than point apart after short in battle for maiden world title',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-25',
    summary: 'Hase/Volodin and Metelkina/Berulava are separated by less than a point after the short program in their competition for a first world championship title.',
    entities: [
      { type: 'skater', id: 'hase-volodin' }, { type: 'skater', id: 'metelkina-berulava' }
    ],
  },
  {
    id: '202603-isu-world-figure-skating-championships-2026-overcoming-post',
    title: 'ISU World Figure Skating Championships 2026: Overcoming post-Milan travel nightmare, Isabeau Levito improves on Olympic short program score with new jump combo at Worlds',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-25',
    summary: 'At the ISU World Figure Skating Championships 2026, Isabeau Levito overcame travel issues following Milan and improved her Olympic short program score by performing a new jump combination.',
    entities: [
      { type: 'skater', id: 'isabeau-levito' }, { type: 'competition', id: '2026-worlds' }
    ],
  },
  {
    id: '202603-after-double-silver-at-milano-cortina-2026-kagiyama-yuma-loo',
    title: 'After double silver at Milano Cortina 2026, Kagiyama Yuma looks back: "I was set on showing everything I had in my skill set"',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-25',
    summary: 'Yuma Kagiyama reflects on winning double silver medals at the Milano Cortina 2026 Olympics, stating he was determined to showcase his complete skill set during the competition.',
    entities: [
      { type: 'skater', id: 'yuma-kagiyama' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202603-amber-glenn-has-shown-grace-on-and-off-the-ice-is-this-her-m',
    title: 'Amber Glenn has shown grace on and off the ice. Is this her medal moment at World Champs?',
    url: 'https://www.nbcsports.com',
    source: 'NBC Sports',
    publishedAt: '2026-03-25',
    summary: 'The headline highlights Amber Glenn\'s graceful conduct both on and off the ice, questioning whether the upcoming World Championships could be her moment to win a medal.',
    entities: [
      { type: 'skater', id: 'amber-glenn' }
    ],
  },
  {
    id: '202603-the-quad-god-reborn-ilia-malinin-leads-world-championships-a',
    title: 'The Quad God reborn: Ilia Malinin leads world championships after Olympic shock',
    url: 'https://www.theguardian.com/sport/2026/mar/26/the-quad-god-reborn-ilia-malinin-leads-world-championships-after-olympic-shock',
    source: 'theguardian.com',
    publishedAt: '2026-03-26',
    summary: 'Ilia Malinin bounced back from his disappointing Olympic performance to lead the men\'s short program at the world figure skating championships in Prague with a personal-best score of 111.29. The defending two-time world champion, known as the Quad God, performed a quad flip and quad lutz combination, holding a commanding nine-point lead heading into Saturday\'s free skate. His Olympic failure, where he fell from first to eighth place due to nerves and pressure, appears to be behind him.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'skater', id: 'adam-siao-him-fa' }, { type: 'skater', id: 'mikhail-shaidorov' }, { type: 'skater', id: 'yuma-kagiyama' }, { type: 'element', id: 'quad-flip' }, { type: 'element', id: 'quad-lutz' }, { type: 'element', id: 'triple-axel' }, { type: 'element', id: 'quad-toe-loop' }, { type: 'element', id: 'quad-salchow' }, { type: 'element', id: 'quad-axel' }, { type: 'competition', id: '2026-olympics' }
    ],
  },
  {
    id: '202603-malinin-stomps-personal-best-short-at-worlds',
    title: 'Malinin stomps personal best short at worlds',
    url: 'https://www.nbcsports.com',
    source: 'NBC Sports',
    publishedAt: '2026-03-26',
    summary: 'Ilia Malinin achieved a personal best score in the short program at the World Championships.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'competition', id: '2024-worlds' }
    ],
  },
  {
    id: '202603-minerva-hase-nikita-volodin-win-world-figure-skating-champio',
    title: 'Minerva Hase, Nikita Volodin win World Figure Skating Championships pairs\' title for Germany',
    url: 'https://www.nbcsports.com',
    source: 'NBC Sports',
    publishedAt: '2026-03-27',
    summary: 'Minerva Hase and Nikita Volodin won the pairs title for Germany at the World Figure Skating Championships.',
    entities: [
      { type: 'skater', id: 'hase-volodin' }, { type: 'competition', id: '2025-worlds' }
    ],
  },
  {
    id: '202603-malinin-delivers-statement-short-program-at-world-championsh',
    title: 'Malinin Delivers Statement Short Program at World Championships',
    url: 'https://usfigureskating.org',
    source: 'U.S. Figure Skating',
    publishedAt: '2026-03-26',
    summary: 'Ilia Malinin delivered a statement short program performance at the World Championships.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'competition', id: '2025-worlds' }
    ],
  },
  {
    id: '202603-quad-god-malinin-posts-personal-best-at-figure-skating-world',
    title: '\'Quad God\' Malinin posts personal best at figure skating worlds',
    url: 'https://www.usatoday.com',
    source: 'USA Today',
    publishedAt: '2026-03-26',
    summary: 'Ilia Malinin, known as the \'Quad God\', achieved a personal best score at the World Figure Skating Championships.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'competition', id: '2024-worlds' }
    ],
  },
  {
    id: '202603-for-ilia-malinin-and-amber-glenn-figure-skating-worlds-bring',
    title: 'For Ilia Malinin and Amber Glenn, figure skating worlds bring a fresh start',
    url: 'https://www.nytimes.com',
    source: 'The New York Times',
    publishedAt: '2026-03-25',
    summary: 'Ilia Malinin and Amber Glenn are approaching the figure skating world championships as an opportunity for a fresh start.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'skater', id: 'amber-glenn' }, { type: 'competition', id: '2025-worlds' }
    ],
  },
  {
    id: '202603-isu-world-figure-skating-championships-2026-hase-and-volodin',
    title: 'ISU World Figure Skating Championships 2026: Hase and Volodin win pairs gold, ending eight-year German wait',
    url: 'https://www.olympics.com',
    source: 'olympics.com',
    publishedAt: '2026-03-26',
    summary: 'Hase and Volodin won the pairs gold medal at the 2026 ISU World Figure Skating Championships, marking Germany\'s first pairs world title in eight years.',
    entities: [
      { type: 'skater', id: 'hase-volodin' }, { type: 'competition', id: '2026-worlds' }
    ],
  },
  {
    id: '202603-ilia-malinin-leads-world-championships-with-personal-best-sh',
    title: 'Ilia Malinin leads World Championships with personal best short program',
    url: 'https://www.nbcsports.com',
    source: 'NBC Sports',
    publishedAt: '2026-03-26',
    summary: 'Ilia Malinin is leading the World Championships after setting a personal best score in the short program.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }
    ],
  },
  {
    id: '202603-skater-ilia-malinin-takes-big-lead-after-worlds-short-progra',
    title: 'Skater Ilia Malinin takes big lead after Worlds short program',
    url: 'https://www.reuters.com',
    source: 'Reuters',
    publishedAt: '2026-03-26',
    summary: 'Ilia Malinin has taken a big lead after the short program at the World Championships.',
    entities: [
      { type: 'skater', id: 'ilia-malinin' }, { type: 'competition', id: '2024-worlds' }
    ],
  },
  {
    id: '202603-germanys-hase-volodin-win-pairs-title-at-figure-skating-worl',
    title: 'Germany\'s Hase, Volodin win pairs title at figure skating worlds',
    url: 'https://www.cbc.ca',
    source: 'CBC',
    publishedAt: '2026-03-27',
    summary: 'German pairs team Hase and Volodin won the pairs title at the figure skating world championships.',
    entities: [
      { type: 'skater', id: 'hase-volodin' }, { type: 'competition', id: '2024-worlds' }
    ],
  },
]
