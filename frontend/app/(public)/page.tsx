import HomeHero from '@/components/sections/home/Hero/HomeHero'
import NoticeSection from '@/components/sections/home/Notice/NoticeSection'
import StoryWithVideo from '@/components/sections/home/Story/StoryWithVideo'
import HomeRanking from '@/components/sections/home/Ranking/RankingHome'

export default async function Home() {
  return (
    <>
      <HomeHero />
      <NoticeSection />
      <StoryWithVideo />
      <HomeRanking />
    </>
  )
}
