import { apiFetch } from '@/lib/api/client'

export async function fetchNews(params: {
  category?: string
  page?: number
}) {
  const query = new URLSearchParams(params as any).toString()

  return apiFetch(`/news?${query}`)
}