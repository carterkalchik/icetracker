export interface DataSource {
  id: string
  name: string
  url: string
  category: 'results' | 'rules' | 'media' | 'reference'
  description: string
}
