import { getRankingData } from '@/data/MockPlayers/MockPlayers'
import ChampionCard from './ChampionCard/ChampionCard'
import RankingTable from '@/components/sections/ranking/RankingTable/RankingTable'
import styles from './RankingHome.module.css'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'

export default function HomeRanking() {
  const { players } = getRankingData()

  const champion = players[0]
  const rest = players.slice(0, 5)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeader 
          title='Top 5' 
          cta='See Rankings'
          href='/ranking'
        />
        <div className={styles.rank}>
          <ChampionCard player={champion} />
          <RankingTable
            players={rest}
            variant="home"
          />
        </div>
      </div>
    </section>
  )
}