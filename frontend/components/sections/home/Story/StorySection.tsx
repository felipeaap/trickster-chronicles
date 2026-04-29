'use client'

import Image from 'next/image'
import styles from './StorySection.module.css'

type Props = {
  title?: string
  highlight?: string
  label?: string
  image?: string
  onPlay?: () => void
}

export default function StorySection({
  title = 'A brand new',
  highlight = 'Story',
  label = 'Discover the world',
  image = '/assets/story.png',
  onPlay
}: Props){

  return (
    <section className={styles.section}>

      {/* BACKGROUND IMAGE */}
      <Image
        src={image}
        alt="Story background"
        fill
        priority
        className={styles.bg}
      />

      {/* OVERLAY */}
      <div className={styles.overlay} />

      {/* CONTENT */}
      <div className={styles.content}>

        <div className={styles.label}>
          {label}
        </div>

        <h2 className={styles.title}>
          {title} <span>{highlight}</span>
        </h2>

        <div className={styles.thumbWrapper} onClick={onPlay}>
          <Image
            src="/assets/story-thumb.jpg"
            alt="Trailer preview"
            width={420}
            height={240}
            className={styles.thumb}
          />

          <div className={styles.thumbOverlay}>
            ▶ Watch Trailer
          </div>
        </div>
      </div>

    </section>
  )
}