const API_URL = process.env.NEXT_PUBLIC_API_URL

export class ApiError extends Error {
  constructor(message: string, public readonly status?: number) {
    super(message)
    this.name = 'ApiError'
  }
}

export async function apiFetch(
  path: string,
  options: RequestInit = {}
) {
  try {
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

      throw new ApiError(message, res.status)
    }

    return await res.json()
  } catch (error) {
    if (error instanceof ApiError) {
      throw error
    }
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new ApiError('Unable to connect to the server. Please check your connection.', 0)
    }
    console.error('API fetch error:', error)
    throw new ApiError('An unexpected error occurred. Please try again later.', 0)
  }
}