'use client'

import Tabs from '@/components/patterns/Tabs/Tabs'

type Props = {
  value: string
  onChange: (v: string) => void
}

export default function NoticeFilters({ value, onChange }: Props){
  const tabs = [
    { key:'all', label:'All' },
    { key:'notice', label:'Notice' },
    { key:'patch', label:'Patch' },
    { key:'event', label:'Events' },
  ]

  return (
    <Tabs
      tabs={tabs}
      value={value}
      onChange={onChange}
      size='md'
    />
  )
}