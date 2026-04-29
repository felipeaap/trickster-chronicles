import Link from 'next/link'
import styles from './NoticeRow.module.css'
import Badge from '@/components/ui/Badge/Badge'
import { News } from '@/features/news/types'

type Props = {
  item: News
}

const labels: Record<string, string> = {
  patch: 'Patch',
  event: 'Event',
  notice: 'Notice'
}

export default function NoticeRow({ item }: Props){
  const label = labels[item.category] || item.category

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short'
  }).format(new Date(item.created_at))

  return (
    <div className={styles.row}>

      <Badge variant={item.category as 'notice' | 'patch' | 'event'}>
        {label}
      </Badge>

      <Link href={`/news/${item.slug}`} className={styles.text}>
        {item.title}
      </Link>

      <span className={styles.date}>
        {formattedDate}
      </span>

    </div>
  )
}