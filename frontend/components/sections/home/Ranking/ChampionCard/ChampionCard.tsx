import Image from 'next/image'
import styles from './ChampionCard.module.css'
import { Player } from '@/types/ranking'

type Props = {
  player: Player
}

export default function ChampionCard({ player }: Props){

  return (
    <div className={styles.card}>

      {/* FX BG */}
      <div className={styles.bgGlow} />
        {/* FX LAYER */}
        <div className={styles.fx}>
        <div className={styles.shimmer}></div>

        {/* flares */}
        <div className={`${styles.flare} ${styles.f1}`} />
        <div className={`${styles.flare} ${styles.f2}`} />
        <div className={`${styles.flare} ${styles.f3}`} />
        </div>
      {/* CHARACTER (BLEED) */}
      <div className={styles.characterWrap}>
        <Image
          src={player.avatar}
          alt="character"
          width={260}
          height={260}
          className={styles.character}
        />
      </div>

      <div className={styles.inner}>

        <div className={styles.left}>

          {/* LABEL + BADGE */}
          <div className={styles.topRow}>
            <span className={styles.label}>Champion</span>

            <span className={styles.seasonBadge}>
              Season 1
            </span>
          </div>

          <div className={styles.nameRow}>
            <h2 className={styles.name}>
                {player.name}
            </h2>
            <Image
                src={player.jobIcon}
                alt="job"
                width={24}
                height={24}
                className={styles.jobIcon}
            />
            </div>

          <div className={styles.meta}>
            Lv {player.level} / TM {player.tmlv}
          </div>

          <div className={styles.guild}>
            {player.guild}
          </div>

          <div className={styles.exp}>
            {player.exp.toLocaleString()} EXP
          </div>

        </div>

      </div>

    </div>
  )
}