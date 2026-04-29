
'use client'
import { useState } from 'react'
import HomeHero from '@/components/sections/home/Hero/HomeHero'
import NewsSection from '@/components/sections/home/Notice/NoticeSection'
import StorySection from '@/components/sections/home/Story/StorySection'
import VideoModal from '@/components/ui/VideoModal/VideoModal'
import HomeRanking from '@/components/sections/home/Ranking/RankingHome'

export default function Home() {

  const [open, setOpen] = useState(false)
  
  return (
    <>
      <HomeHero />
      <NewsSection />
      <StorySection onPlay={() => setOpen(true)} />

      <VideoModal
        open={open}
        onClose={() => setOpen(false)}
        videoUrl="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
      />
      <HomeRanking />
    </>
  )
}