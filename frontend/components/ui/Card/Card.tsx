import styles from './Card.module.css'
import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  glow?: boolean
  variant?: "default" | "neon" | "outline"
  color?: "blue" | "purple" | "gold" | "red"
}

export default function Card({
  children,
  glow,
  variant = 'default',
  color = 'blue'
}: Props){
  return (
    <div
      className={clsx(
        styles.card,
        styles[variant],
        styles[color],
        glow && styles.glow
      )}
    >
      {children}
    </div>
  )
}