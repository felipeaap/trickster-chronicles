import { apiFetch } from '@/lib/api/client'

export function useAuth() {
  async function login(email: string, password: string) {
    return apiFetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
  }

  async function register(email: string, password: string) {
    return apiFetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
  }

  return { login, register }
}