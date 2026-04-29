import styles from './NoticeList.module.css'
import NoticeRow from '../NoticeRow/NoticeRow'
import { News } from '@/features/news/types'

type Props = {
  items: News[]
}

export default function NoticeList({ items }: Props){
  if (!items.length) {
    return (
      <div className={styles.empty}>
        No news available
      </div>
    )
  }
  
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <NoticeRow key={item.id} item={item} />
      ))}
    </div>
  )
}