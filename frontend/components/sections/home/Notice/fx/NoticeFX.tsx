'use client'

import { memo, useMemo } from 'react'
import styles from './NoticeFX.module.css'

type Particle = {
  left: string
  top: string
  size: number
  color: string
  opacity: number
  duration: number
  delay: number
}

const particles: Particle[] = [
  { left:'18%', top:'10%', size:20, color:'#FFE070', opacity:.5, duration:4, delay:1.8 },
  { left:'55%', top:'22%', size:12, color:'#FFD700', opacity:.45, duration:5, delay:1.8 },
  { left:'75%', top:'40%', size:25, color:'#FFE070', opacity:.28, duration:6, delay:1.3 },
  { left:'40%', top:'55%', size:15, color:'#FFC840', opacity:.48, duration:5.5, delay:.1 },
  { left:'80%', top:'15%', size:9, color:'#FFD700', opacity:.6, duration:4.5, delay:1.5 },
]

function NoticeFX(){
  const particleStyles = useMemo(() => particles.map(p => ({
    left: p.left,
    top: p.top,
    width: p.size * 2,
    height: p.size * 2,
    background: `radial-gradient(circle, ${p.color} 0%, transparent 70%)`,
    opacity: p.opacity,
    animationDuration: `${p.duration}s`,
    animationDelay: `${p.delay}s`,
    /* Performance: avoid composite layers if many, but here it's fine */
    transform: 'translate3d(0,0,0)'
  })), [])

  return (
    <div className={styles.fx}>

      {/* LIGHT BASE */}
      <div className={styles.spotlight}></div>
      <div className={styles.radial}></div>

      {/* PARTICLES */}
      {particleStyles.map((style, i) => (
        <div
          key={i}
          className={styles.bk}
          style={style}
        />
      ))}

      {/* FLARE */}
      <svg className={styles.flare} viewBox="-20 -20 40 40">
        <circle cx="0" cy="0" r="10" fill="rgba(255,220,120,.25)" />
        <circle cx="0" cy="0" r="5" stroke="#FFD060" strokeWidth="1" fill="none"/>
      </svg>

    </div>
  )
}

export default memo(NoticeFX)
