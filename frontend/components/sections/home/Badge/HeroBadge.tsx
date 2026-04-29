import styles from './HeroBadge.module.css'
import clsx from 'clsx'

type Props = {
  label: string
  value: string
  variant?: 'default' | 'green' | 'gold'
}

export default function HeroBadge({
  label,
  value,
  variant = 'default'
}: Props){
  return (
    <div className={clsx(styles.badge, styles[variant])}>

      {/* DOT */}
      <span className={styles.dot}></span>

      {/* TEXT */}
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>

    </div>
  )
}