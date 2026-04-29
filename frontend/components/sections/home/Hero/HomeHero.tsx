'use client'

import Image from 'next/image'
import styles from './HomeHero.module.css'
import Button from '@/components/ui/Button/Button'
import HeroBadge from '@/components/sections/home/Badge/HeroBadge'
import DownloadIcon from '@/components/ui/icons/DownloadIcon'
import UserIcon from '@/components/ui/icons/UserIcon'
import ServerIcon from '@/components/ui/icons/ServerIcon'

export default function HomeHero(){
  return (
    <section className={styles.hero}>

      {/* BACKGROUND */}
      <Image
        src="/assets/hero.png"
        alt=""
        fill
        priority
        className={styles.bg}
      />

      <div className={styles.overlay}></div>

      {/* CONTENT */}
      <div className={styles.content}>

        <div className={styles.topText}>
          BEGIN YOUR ADVENTURE
        </div>

        {/* LOGO */}
        <Image
          src="/assets/logo.png"
          alt="Trickster Chronicles"
          width={380}
          height={150}
          className={styles.logo}
          priority
        />

        <div className={styles.serverTitle}>
          TRICKSTER ONLINE — PRIVATE SERVER
        </div>

        <p className={styles.subtitle}>
          Relive Trickster Online with a fresh twist.<br/>
          New content, balanced rates and an active community.
        </p>

        {/* ACTIONS */}
        <div className={styles.actions}>
          <Button variant="gold" size="lg" icon={<ServerIcon />}>
            Server Info
          </Button>

          <Button variant="mint" size="lg" icon={<DownloadIcon />}>
            Download
          </Button>

          <Button variant="green" size="lg" icon={<UserIcon />}>
            Register
          </Button>
        </div>

        {/* STATUS */}
        <div className={styles.statusRow}>
          <HeroBadge label="Server:" value="Online" variant="green" />
          <HeroBadge label="Players online:" value="1,247" />
          <HeroBadge label="Exp rate:" value="10x" variant="gold" />
        </div>

      </div>

    </section>
  )
}