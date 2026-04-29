import { cookies } from 'next/headers'
import { cookiesToHeader } from '../utils/cookies'
const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getServerUser() {
  const cookieStore = await cookies()
  const cookieHeader = cookiesToHeader(cookieStore)

  const res = await fetch(`${API_URL}/auth/me`, {
    headers: {
      cookie: cookieHeader,
    },
    cache: 'no-store',
  })

  if (!res.ok) return null

  return res.json()
}