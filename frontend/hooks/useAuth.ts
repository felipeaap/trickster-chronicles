import { apiFetch } from '@/lib/api/client'

export function useAuth() {
  async function login(email: string, password: string) {
    return apiFetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
  }

  async function register(email: string, username: string, password: string) {
    return apiFetch('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, username, password })
    })
  }

  async function requestPasswordReset(email: string) {
    return apiFetch('/auth/request-password-reset', {
      method: 'POST',
      body: JSON.stringify({ email })
    })
  }

  return { login, register, requestPasswordReset }
}
