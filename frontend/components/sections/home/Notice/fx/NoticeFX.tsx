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
  { left:'18%', top:'10%', size:20, color:'#FFE070', opacity:.5, duration:2.5, delay:1.8 },
  { left:'55%', top:'22%', size:12, color:'#FFD700', opacity:.45, duration:2.8, delay:1.8 },
  { left:'75%', top:'40%', size:25, color:'#FFE070', opacity:.28, duration:4.1, delay:1.3 },
  { left:'40%', top:'55%', size:15, color:'#FFC840', opacity:.48, duration:3.3, delay:.1 },
  { left:'80%', top:'15%', size:9, color:'#FFD700', opacity:.6, duration:2.8, delay:1.5 },
  { left:'25%', top:'35%', size:10, color:'#FFC840', opacity:.38, duration:2.7, delay:1.6 },
  { left:'65%', top:'68%', size:18, color:'#FFC840', opacity:.38, duration:3.3, delay:1.1 },
]

export default function NoticeFX(){
  return (
    <div className={styles.fx}>

      {/* LIGHT BASE */}
      <div className={styles.spotlight}></div>
      <div className={styles.radial}></div>

      {/* PARTICLES */}
      {particles.map((p, i) => (
        <div
          key={i}
          className={styles.bk}
          style={{
            left: p.left,
            top: p.top,
            width: p.size * 2,
            height: p.size * 2,
            background: `radial-gradient(circle, ${p.color} 0%, transparent 70%)`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`
          }}
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