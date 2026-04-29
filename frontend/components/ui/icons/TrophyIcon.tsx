type Props = {
    rank: 1 | 2 | 3
  }
  
  export default function TrophyIcon({ rank }: Props){
  
    const colors = {
      1: { fill:'#FFD700', stroke:'#B8960A', glow:'rgba(255,215,0,.6)' },
      2: { fill:'#C8D8E8', stroke:'#7A8898', glow:'rgba(192,210,230,.5)' },
      3: { fill:'#D4844A', stroke:'#8A4A1A', glow:'rgba(212,132,74,.5)' }
    }
  
    const c = colors[rank]
  
    return (
      <svg
        width="18"
        height="20"
        viewBox="0 0 20 22"
        style={{
          filter:`drop-shadow(0 0 8px ${c.glow})`,
          flexShrink:0
        }}
      >
        <path d="M4 2h12v7a6 6 0 0 1-12 0V2Z" fill={c.fill} stroke={c.stroke} strokeWidth="1"/>
        <path d="M1 2h3v4a3 3 0 0 1-3 0V2Z" fill={c.fill} stroke={c.stroke} strokeWidth=".8"/>
        <path d="M16 2h3v4a3 3 0 0 1-3 0V2Z" fill={c.fill} stroke={c.stroke} strokeWidth=".8"/>
        <path d="M7 15h6l1 3H6l1-3Z" fill={c.fill} stroke={c.stroke} strokeWidth=".8"/>
        <rect x="5" y="18" width="10" height="2.5" rx="1" fill={c.fill} stroke={c.stroke} strokeWidth=".8"/>
      </svg>
    )
  }