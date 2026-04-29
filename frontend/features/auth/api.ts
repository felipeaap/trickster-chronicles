import { apiFetch } from '@/lib/api/client'
import { LoginInput, RegisterInput, AuthResponse, User } from './types'

export async function login(data: LoginInput): Promise<AuthResponse> {
  return apiFetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function register(data: RegisterInput) {
  return apiFetch('/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export async function getMe(): Promise<User> {
  return apiFetch('/auth/me')
}

export async function logout() {
  return apiFetch('/auth/logout', {
    method: 'POST',
  })
}