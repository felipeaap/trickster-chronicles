import styles from './Badge.module.css'
import clsx from 'clsx'

type Variant =
  | 'patch'
  | 'event'
  | 'notice'
  | 'gold'
  | 'rare'
  | 'epic'
  | 'accent'  
  | 'green' 
  | 'red' 
  
  type Props = {
    children: React.ReactNode
    variant?: Variant
    glow?: boolean
    shimmer?: boolean
    animatedBorder?: boolean
    icon?: React.ReactNode
    className?: string
  }

  export default function Badge({
    children,
    variant = 'patch',
    glow = false,
    shimmer = false,
    animatedBorder = false,
    icon,
    className
  }: Props){
    return (
      <span
        className={clsx(
          styles.badge,
          styles[variant],
          glow && styles.glow,
          shimmer && styles.shimmer,
          animatedBorder && styles.animatedBorder,
          className
        )}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.label}>{children}</span>
      </span>
    )
  }