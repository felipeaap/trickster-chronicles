import Hero from '@/components/ui/HeroBanner/Hero'
import RankingPage from '@/components/sections/ranking/RankingPage'
import { getRankingData } from '@/data/MockPlayers/MockPlayers';

export default function Ranking(){

  const { players, stats } = getRankingData();

  return (
    <>
      <Hero />
      <RankingPage
        initialPlayers={players}
        initialStats={stats}
      />
    </>
  )
}
