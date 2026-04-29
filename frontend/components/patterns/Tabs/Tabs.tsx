'use client'

import Button from '@/components/ui/Button/Button'
import styles from './Tabs.module.css'

type TabItem<T extends string> = {
  key: T
  label: string
  icon?: React.ReactNode
}

type Props<T extends string> = {
  tabs: TabItem<T>[]
  value: T
  onChange: (val: T) => void
  size?: 'sm' | 'md' | 'lg'
}

export default function Tabs<T extends string>({
  tabs,
  value,
  onChange,
  size = 'sm'
}: Props<T>){

  return (
    <div className={styles.tabs}>
      {tabs.map(tab => {
        const isActive = value === tab.key

        return (
          <Button
            key={tab.key}
            variant={isActive ? 'accent' : 'outline'}
            size={size}
            onClick={() => onChange(tab.key)}
          >
            {tab.icon && <span className={styles.icon}>{tab.icon}</span>}
            {tab.label}
          </Button>
        )
      })}
    </div>
  )
}