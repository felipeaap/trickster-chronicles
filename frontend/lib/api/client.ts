const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function apiFetch(
  path: string,
  options: RequestInit = {}
) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  })

  if (!res.ok) {
    let message = 'Request failed'

    try {
      const data = await res.json()
      message = data?.message || data?.detail || message
    } catch {}

    throw new Error(message)
  }

  return res.json()
}