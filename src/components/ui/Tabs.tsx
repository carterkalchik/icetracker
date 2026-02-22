import { cn } from '../../lib/cn'

interface TabItem {
  id: string
  label: string
}

interface TabsProps {
  tabs: TabItem[]
  activeTab: string
  onTabChange: (tabId: string) => void
  className?: string
}

export function Tabs({ tabs, activeTab, onTabChange, className }: TabsProps) {
  return (
    <div className={cn('flex gap-1 rounded-lg bg-gray-100 p-1', className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            'rounded-md px-4 py-2 text-sm font-medium transition-colors',
            activeTab === tab.id
              ? 'bg-white text-ice-700 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
