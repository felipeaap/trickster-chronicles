'use client'

import { useState } from 'react'
import StorySection from './StorySection'
import VideoModal from '@/components/ui/VideoModal/VideoModal'

export default function StoryWithVideo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StorySection onPlay={() => setOpen(true)} />
      <VideoModal
        open={open}
        onClose={() => setOpen(false)}
        videoUrl="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
      />
    </>
  )
}
