'use client'

import { useState } from 'react'
import * as authApi from './api'
import { LoginInput, RegisterInput, User } from './types'
import { useAuth } from '@/context/AuthContext'

export function useLogin() {
  const { setUser } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (data: LoginInput) => {
    setLoading(true)
    setError(null)

    try {
      const res = await authApi.login(data)
      setUser(res.user)
      return true
    } catch (err: any) {
      setError(err.message || 'Login failed')
      return false
    } finally {
      setLoading(false)
    }
  }

  return { submit, loading, error }
}

export function useRegister() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (data: RegisterInput) => {
    setLoading(true)
    setError(null)

    try {
      await authApi.register(data)
      return true
    } catch (err: any) {
      setError(err.message || 'Register failed')
      return false
    } finally {
      setLoading(false)
    }
  }

  return { submit, loading, error }
}

export function useLogout() {
  const { setUser } = useAuth()

  return async () => {
    await authApi.logout()
    setUser(null)
  }
}