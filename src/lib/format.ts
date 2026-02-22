export function formatScore(score: number): string {
  return score.toFixed(2)
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function formatDateRange(start: string, end: string): string {
  const s = new Date(start)
  const e = new Date(end)
  const sMonth = s.toLocaleDateString('en-US', { month: 'short' })
  const eMonth = e.toLocaleDateString('en-US', { month: 'short' })

  if (sMonth === eMonth) {
    return `${sMonth} ${s.getDate()}–${e.getDate()}, ${e.getFullYear()}`
  }
  return `${sMonth} ${s.getDate()} – ${eMonth} ${e.getDate()}, ${e.getFullYear()}`
}

export function formatCountry(code: string): string {
  const names: Record<string, string> = {
    USA: 'United States',
    JPN: 'Japan',
    FRA: 'France',
    KAZ: 'Kazakhstan',
    ITA: 'Italy',
    BEL: 'Belgium',
    KOR: 'South Korea',
    GEO: 'Georgia',
    GER: 'Germany',
    CAN: 'Canada',
    GBR: 'Great Britain',
    RUS: 'Russia',
    ROC: 'ROC (Russia)',
    AIN: 'Individual Neutral Athlete',
    CHN: 'China',
    ESP: 'Spain',
    CZE: 'Czech Republic',
    AUS: 'Australia',
    SWE: 'Sweden',
    UKR: 'Ukraine',
    UZB: 'Uzbekistan',
    LAT: 'Latvia',
    EST: 'Estonia',
    ISR: 'Israel',
    AZE: 'Azerbaijan',
    ARM: 'Armenia',
    FIN: 'Finland',
    SUI: 'Switzerland',
    LTU: 'Lithuania',
    POL: 'Poland',
    HUN: 'Hungary',
  }
  return names[code] ?? code
}

export function countryFlag(code: string): string {
  const flags: Record<string, string> = {
    USA: '🇺🇸',
    JPN: '🇯🇵',
    FRA: '🇫🇷',
    KAZ: '🇰🇿',
    ITA: '🇮🇹',
    BEL: '🇧🇪',
    KOR: '🇰🇷',
    GEO: '🇬🇪',
    GER: '🇩🇪',
    CAN: '🇨🇦',
    GBR: '🇬🇧',
    RUS: '🇷🇺',
    ROC: '🏳️',
    AIN: '🏳️',
    CHN: '🇨🇳',
    ESP: '🇪🇸',
    CZE: '🇨🇿',
    AUS: '🇦🇺',
    SWE: '🇸🇪',
    UKR: '🇺🇦',
    UZB: '🇺🇿',
    LAT: '🇱🇻',
    EST: '🇪🇪',
    ISR: '🇮🇱',
    AZE: '🇦🇿',
    ARM: '🇦🇲',
    FIN: '🇫🇮',
    SUI: '🇨🇭',
    LTU: '🇱🇹',
    POL: '🇵🇱',
    HUN: '🇭🇺',
  }
  return flags[code] ?? ''
}
