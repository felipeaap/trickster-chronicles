export function cookiesToHeader(cookies: Awaited<ReturnType<typeof import('next/headers').cookies>>) {
    return cookies
      .getAll()
      .map(c => `${c.name}=${c.value}`)
      .join('; ')
  }