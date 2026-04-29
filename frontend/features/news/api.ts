import { apiFetch } from '@/lib/api/client'
import { MOCK_NEWS } from '@/data/news/MockNews'

export async function fetchNews(params: {
  category?: string
  page?: number
}) {
  try {
    const query = new URLSearchParams(params as Record<string, string>).toString()
    return await apiFetch(`/news?${query}`)
  } catch (error) {
    console.error('Failed to fetch news, using mocks:', error)
    
    // Filter mocks based on category if provided
    let items = MOCK_NEWS
    if (params.category && params.category !== 'all') {
      items = MOCK_NEWS.filter(n => n.category === params.category)
    }

    return {
      items: items,
      total: items.length,
      page: params.page || 1,
      size: 10
    }
  }
}
