export type EntityType = 'skater' | 'element' | 'competition'

export interface EntityRef {
  type: EntityType
  id: string    // route ID: 'quad-axel', 'ilia-malinin', '2026-olympics'
  label: string // display text
}
