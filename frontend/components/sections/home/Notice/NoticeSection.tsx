import NoticeSectionClient from './NoticeSectionClient'
import { fetchNews } from '@/features/news/api'

export default async function NoticeSection() {
  const data = await fetchNews({ page: 1 })

  return (
    <NoticeSectionClient initialItems={data.items} />
  )
}