'use client'

import styles from './Login.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { registerSchema } from '@/lib/validation/auth'

type Props = {
  onSwitch?: () => void
}

export default function RegisterForm({ onSwitch }: Props){

  const { register } = useAuth()

  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  })

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  function updateField(field: string, value: string){
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    const result = registerSchema.safeParse(form)

    if (!result.success) {
      setError(result.error.issues[0]?.message || "Validation Error")
      setLoading(false)
      return
    }

    try {
      await register(form.email, form.username, form.password)

      setSuccess('สมัครสมาชิกสำเร็จ!')

      // opcional: voltar pro login automaticamente
      setTimeout(() => {
        onSwitch?.()
      }, 1200)

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
          Trickster Chronicles · Register
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>

        <div className={styles.field}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            placeholder="email@example.com"
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Username</label>
          <input
            className={styles.input}
            placeholder="username"
            value={form.username}
            onChange={(e) => updateField('username', e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className={styles.input}
            value={form.password}
            onChange={(e) => updateField('password', e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Confirm Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className={styles.input}
            value={form.confirmPassword}
            onChange={(e) => updateField('confirmPassword', e.target.value)}
          />
        </div>

        {/* ERRO */}
        {error && (
          <div className={styles.error}>
            {error}
          </div>
        )}

        {/* SUCESSO */}
        {success && (
          <div className={styles.success}>
            {success}
          </div>
        )}

        <button
          className={styles.loginBtn}
          type="submit"
          disabled={loading}
        >
          {loading ? 'กำลังสมัคร...' : 'สมัครสมาชิก'}
        </button>

        <div className={styles.links}>
          <button
            type="button"
            onClick={onSwitch}
            className={styles.linkBtn}
          >
            มีบัญชีอยู่แล้ว? เข้าสู่ระบบ
          </button>
        </div>

        <div className={styles.divider} />

        <div className={styles.status}>
          <div className={styles.dot}></div>
          <span className={styles.text}>
            ระบบพร้อมใช้งาน · สมัครได้ทันที
          </span>
        </div>

      </form>
    </div>
  )
}