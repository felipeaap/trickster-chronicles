import { News } from '@/features/news/types'

export const MOCK_NEWS: News[] = [
  {
    id: '1',
    title: 'Welcome to Trickster Chronicles!',
    slug: 'welcome-to-trickster-chronicles',
    category: 'notice',
    summary: 'We are excited to announce the launch of our new server...',
    is_featured: true,
    created_at: '2024-04-20T10:00:00Z'
  },
  {
    id: '2',
    title: 'Patch Notes v1.0.1',
    slug: 'patch-notes-v1-0-1',
    category: 'patch',
    summary: 'Fixed several bugs and improved server stability...',
    is_featured: false,
    created_at: '2024-04-22T14:30:00Z'
  },
  {
    id: '3',
    title: 'Double EXP Weekend!',
    slug: 'double-exp-weekend',
    category: 'event',
    summary: 'Join us this weekend for double experience points!',
    is_featured: false,
    created_at: '2024-04-25T09:00:00Z'
  },
  {
    id: '4',
    title: 'New Item Mall Update',
    slug: 'new-item-mall-update',
    category: 'notice',
    summary: 'New costumes and items are now available in the store.',
    is_featured: false,
    created_at: '2024-04-26T12:00:00Z'
  },
  {
    id: '5',
    title: 'Guild Wars Season 1',
    slug: 'guild-wars-season-1',
    category: 'event',
    summary: 'Prepare your guilds for the upcoming season of Guild Wars!',
    is_featured: false,
    created_at: '2024-04-27T18:00:00Z'
  },
  {
    id: '6',
    title: 'Maintenance Notice - April 30',
    slug: 'maintenance-notice-april-30',
    category: 'notice',
    summary: 'Scheduled maintenance will occur on April 30th...',
    is_featured: false,
    created_at: '2024-04-28T08:00:00Z'
  },
  {
    id: '7',
    title: 'Spring Blossom Event',
    slug: 'spring-blossom-event',
    category: 'event',
    summary: 'Collect blossoms and trade them for rare rewards!',
    is_featured: false,
    created_at: '2024-04-29T10:00:00Z'
  }
]
