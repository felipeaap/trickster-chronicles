'use client'

import Image from 'next/image'
import styles from './Hero.module.css'

type HeroProps = {
  title?: string
  subtitle?: string
  showLogo?: boolean
  background?: boolean
  children?: React.ReactNode
}

export default function Hero({
  title,
  subtitle,
  showLogo = true,
  background = true,
  children
}: HeroProps){

  return (
    <section className={styles.hero}>
      {background && (
        <Image
          src="/assets/hero.png"
          alt=""
          fill
          priority
          className={styles.bg}
        />
      )}

      <div className={styles.overlay}></div>
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
      <div className={styles.content}>
        {showLogo && (
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={320}
            height={120}
            className={styles.logo}
            priority
          />
        )}

        {title && (
          <h1 className={styles.title}>
            <span>{title}</span>
          </h1>
        )}

        {subtitle && (
          <p className={styles.subtitle}>{subtitle}</p>
        )}

        {children && (
          <div className={styles.extra}>
            {children}
          </div>
        )}

      </div>

    </section>
  )
}