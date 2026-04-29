'use client'

import styles from './Login.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { loginSchema } from '@/lib/validation/auth'

type Props = {
  onSwitch?: () => void
  onForgot?: () => void
}

export default function LoginForm({ onSwitch, onForgot }: Props){

  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    setError('')
    setLoading(true)

    const result = loginSchema.safeParse({ email, password })

    if (!result.success) {
      setError(result.error.issues[0]?.message || "Validation Error")
      setLoading(false)
      return
    }

    try {
      const data = await login(email, password)

      if (remember) {
        localStorage.setItem('token', data.token)
      }

      console.log('LOGADO:', data)

    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.panelForm}>
      <div className={styles.logoWrap}>
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={320}
          height={190}
          className={styles.logoImg}
        />

        <div className={styles.logoVer}>
          Trickster Chronicles · v1.0
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>

        <div className={styles.field}>
          <label className={styles.label}>ผู้ใช้</label>
          <input
            className={styles.input}
            placeholder="ผู้ใช้"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>รหัสผ่าน</label>
          <input
            type="password"
            placeholder="••••••••"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.remember}>
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <span>จำฉันไว้</span>
        </div>

        {error && (
          <div className={styles.error}>
            {error}
          </div>
        )}

        <button
          className={styles.loginBtn}
          type="submit"
          disabled={loading}
        >
          {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
        </button>

        <div className={styles.links}>
          <button
            type="button"
            onClick={onSwitch}
            className={styles.linkBtn}
          >
            สมัครสมาชิก
          </button>

          <button
            type="button"
            onClick={onForgot}
            className={styles.linkBtn}
          >
            ลืมรหัสผ่าน?
          </button>
        </div>

        <div className={styles.divider} />

        <div className={styles.status}>
          <div className={styles.dot}></div>
          <span className={styles.text}>
            เซิร์ฟเวอร์ <strong>Online</strong> · 321 ผู้เล่นออนไลน์
          </span>
        </div>

      </form>
    </div>
  )
}