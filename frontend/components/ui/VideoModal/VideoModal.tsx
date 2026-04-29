'use client'

import { useEffect } from 'react'
import styles from './VideoModal.module.css'

type Props = {
  open: boolean
  onClose: () => void
  videoUrl: string
}

export default function VideoModal({ open, onClose, videoUrl }: Props){

  // fechar com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (open){
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className={styles.overlay} onClick={onClose}>

      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}
        <button className={styles.close} onClick={onClose}>
          ✕
        </button>

        {/* VIDEO */}
        <div className={styles.videoWrapper}>
          <iframe
            src={videoUrl}
            title="Trailer"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>

      </div>

    </div>
  )
}