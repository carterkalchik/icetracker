# IceTracker - Figure Skating Companion App

## Context

The user is a new figure skating fan who started watching the 2026 Milan Olympics and wants to become deeply knowledgeable by the 2030 Olympics. We're building a web app at `~/Desktop/dev/icetracker` to help them track skaters, understand scoring, learn elements, and follow competitions. Design is elegant/editorial (magazine-style). There is no official ISU API for figure skating, so we start with curated seed data behind an async service layer that can later be swapped for real APIs.

## Tech Stack

- React 18 + Vite + TypeScript
- React Router v6
- Tailwind CSS v3 + `@tailwindcss/typography`
- `clsx` + `tailwind-merge` for class utilities
- No charting library (CSS/SVG for visualizations)
- localStorage for watchlist persistence

## Project Structure

```
~/Desktop/dev/icetracker/
├── index.html
├── package.json, tsconfig.json, vite.config.ts, tailwind.config.ts, postcss.config.js
├── public/
│   └── favicon.svg
├── src/
│   ├── main.tsx                    # Entry + router setup
│   ├── App.tsx
│   ├── index.css                   # Tailwind directives + custom layers
│   ├── types/                      # TypeScript interfaces
│   │   ├── common.ts              # Discipline, Segment, Country enums
│   │   ├── elements.ts            # Jump, Spin, StepSequence, PairElement, DanceElement
│   │   ├── scoring.ts             # GOE, PCS, Deduction, ScoreBenchmark
│   │   ├── skaters.ts             # Skater, PersonalBest, CompetitionResult
│   │   └── competitions.ts        # Competition, Season, CalendarEntry
│   ├── data/                       # Seed data as typed TS modules
│   │   ├── elements/              # jumps.ts, spins.ts, steps.ts, pair-elements.ts, dance-elements.ts
│   │   ├── scoring/               # goe-table.ts, pcs-components.ts, deductions.ts, score-benchmarks.ts
│   │   ├── skaters/               # men.ts, women.ts, pairs.ts, ice-dance.ts
│   │   └── competitions/          # seasons.ts, competition-types.ts, results-*.ts, calendar-*.ts
│   ├── services/                   # Async data access layer (simulated API)
│   │   ├── elements.service.ts
│   │   ├── scoring.service.ts
│   │   ├── skaters.service.ts
│   │   ├── competitions.service.ts
│   │   └── watchlist.service.ts   # localStorage CRUD
│   ├── hooks/                      # useWatchlist, useFilter, useMediaQuery
│   ├── layouts/                    # RootLayout, Header, Footer, MobileNav
│   ├── components/
│   │   ├── ui/                    # Card, Badge, Chip, Tabs, Tooltip, ProgressBar, ScoreDisplay, etc.
│   │   ├── elements/              # JumpCard, SpinCard, JumpDiagram, GOEScaleVisual, etc.
│   │   ├── scoring/               # ScoreBreakdownCard, PCSRadar, DeductionsList, ScoreCalculator
│   │   ├── skaters/               # SkaterCard, SkaterGrid, WatchlistButton, CompetitionHistory
│   │   └── competitions/          # CalendarTimeline, CompetitionCard, ResultsTable, UpcomingEvents
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── elements/              # ElementsIndexPage, JumpsPage, SpinsPage, StepsPage, etc.
│   │   ├── scoring/               # ScoringIndexPage, TESPage, PCSPage, DeductionsPage, ScoreContextPage
│   │   ├── skaters/               # SkatersIndexPage, SkaterDetailPage, WatchlistPage
│   │   └── competitions/          # CompetitionsIndexPage, CompetitionDetailPage, SeasonGuidePage
│   └── lib/                        # cn.ts, format.ts, sort.ts, constants.ts
```

## Routing

```
/                           → HomePage
/elements                   → ElementsIndexPage (tabs for Singles/Pairs/Dance)
/elements/jumps             → JumpsPage
/elements/spins             → SpinsPage
/elements/steps             → StepsPage
/elements/pairs             → PairElementsPage
/elements/dance             → DanceElementsPage
/elements/:elementId        → ElementDetailPage
/scoring                    → ScoringIndexPage
/scoring/tes                → TESPage
/scoring/pcs                → PCSPage
/scoring/deductions         → DeductionsPage
/scoring/context            → ScoreContextPage
/skaters                    → SkatersIndexPage (grid with discipline filter)
/skaters/watchlist          → WatchlistPage
/skaters/:skaterId          → SkaterDetailPage
/competitions               → CompetitionsIndexPage (season calendar + results)
/competitions/season-guide  → SeasonGuidePage
/competitions/:competitionId → CompetitionDetailPage
```

## Design System

- **Fonts:** Playfair Display (headings) + Inter (body) via Google Fonts
- **Colors:** Ice-blue primary palette (`ice-50` to `ice-950`), frost secondary, gold/silver/bronze for medals
- **Cards:** `bg-white rounded-xl shadow-sm border border-gray-100`, featured variant with `border-l-4 border-ice-500`
- **Layout:** `max-w-7xl` container, generous whitespace (`py-16` sections, `gap-6` grids)
- **Grid:** 3-col desktop → 2-col tablet → 1-col mobile
- **Scores:** `font-serif text-3xl font-bold tabular-nums`

## Data: Seed Skaters

**Men (8):** Ilia Malinin (USA), Mikhail Shaidorov (KAZ), Yuma Kagiyama (JPN), Shun Sato (JPN), Adam Siao Him Fa (FRA), Kao Miura (JPN), Kevin Aymoz (FRA), Daniel Grassl (ITA)

**Women (8):** Alysa Liu (USA), Kaori Sakamoto (JPN), Ami Nakai (JPN), Isabeau Levito (USA), Loena Hendrickx (BEL), Shimada Mao (JPN), Amber Glenn (USA), Kim Chaeyeon (KOR)

**Pairs (5):** Miura/Kihara (JPN), Metelkina/Berulava (GEO), Hase/Volodin (GER), Stellato-Dudek/Deschamps (CAN), Conti/Macii (ITA)

**Ice Dance (5):** Fournier Beaudry/Cizeron (FRA), Chock/Bates (USA), Gilles/Poirier (CAN), Guignard/Fabbri (ITA), Fear/Gibson (GBR)

## Data: Competitions to Seed

- **2025-26 season:** 2026 Olympics (Milan-Cortina), Worlds (Prague, upcoming), GP Final, all 6 GP events, Four Continents, Europeans
- **2024-25 season:** Worlds (Boston), GP Final, GP series (top 3 results)

## Build Phases

### Phase 1: Foundation + Elements Encyclopedia
1. Scaffold Vite project, install deps, configure Tailwind
2. Build RootLayout, Header, Footer, MobileNav
3. Build shared UI components (Card, Badge, Tabs, Tooltip, Breadcrumb)
4. Define all TypeScript types
5. Create element seed data (jumps with base values, spins, steps, pairs, dance)
6. Build elements service layer
7. Build Elements pages and components (JumpCard, JumpDiagram, SpinCard, GOEScaleVisual, etc.)

### Phase 2: Scoring Explainer
1. Create scoring seed data (GOE table, PCS components, deductions, benchmarks)
2. Build scoring service
3. Build Scoring pages and components (ScoreBreakdownCard, PCSRadar, DeductionsList, etc.)

### Phase 3: Skater Profiles & Tracking
1. Create all skater seed data (26 skaters/teams with bios, PBs, competition history)
2. Build skaters + watchlist services
3. Build useWatchlist hook
4. Build Skaters pages and components (SkaterCard, SkaterGrid, WatchlistButton, etc.)

### Phase 4: Competitions & Calendar
1. Create competition/calendar seed data
2. Build competitions service
3. Build Competition pages and components (CalendarTimeline, ResultsTable, etc.)
4. Build HomePage last (aggregates all sections)

## Verification

After each phase:
1. `npm run dev` - app loads without errors
2. Navigate all routes - no broken links or missing pages
3. Check mobile responsiveness at 375px, 768px, 1024px widths
4. Verify Tailwind typography and color tokens render correctly
5. Phase 3: verify watchlist persists across page refreshes (localStorage)
6. Final: full navigation flow from Home → each section → detail pages → back
