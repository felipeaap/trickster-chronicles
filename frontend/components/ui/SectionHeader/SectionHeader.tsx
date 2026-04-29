import Link from 'next/link'
import styles from './SectionHeader.module.css'

type Props = {
  title: string
  cta?: string
  href?: string
}

export default function SectionHeader({ title, cta, href }: Props){
  return (
    <div className={styles.header}>
      <span className={styles.title}>{title}</span>
      <div className={styles.bar}></div>

      {cta && href && (
      <Link className={styles.more} href={href}>
        {cta} →
      </Link>
      )}
    </div>
  )
}