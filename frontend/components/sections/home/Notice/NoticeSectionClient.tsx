'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import styles from './NoticeSection.module.css'
import NoticeList from './NoticeList/NoticeList'
import NoticeFX from './fx/NoticeFX'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import { News } from '@/features/news/types'
import NoticeFilters from './NoticeFilters'

type Props = {
  initialItems: News[]
}

export default function NoticeSectionClient({ initialItems }: Props){
  const [activeTab, setActiveTab] = useState('all')
  const baseItems = useMemo(
    () => initialItems.filter(n => !n.is_featured),
    [initialItems]
  )

  const filteredItems = useMemo(() => {
    const filtered =
      activeTab === 'all'
        ? baseItems
        : baseItems.filter(n => n.category === activeTab)

    return filtered.slice(0, 5)
  }, [activeTab, baseItems])

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.left}>

          <SectionHeader 
            title='Notice' 
            cta='See All'
            href='/notice'
          />
          <div className={styles.tabs}>
            <NoticeFilters
              value={activeTab}
              onChange={setActiveTab}
            />
          </div>
          <NoticeList items={filteredItems} />

        </div>

        {/* RIGHT VISUAL */}
        <div className={styles.right}>
          <div className={styles.rightFade}></div>
          <div className={styles.leftFade}></div>

          <Image
            src="/assets/polar_render.png"
            alt="notice"
            fill
            className={styles.char}
          />

          <NoticeFX />
        </div>

      </div>
    </section>
  )
}