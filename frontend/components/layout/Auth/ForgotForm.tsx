'use client'

import styles from './Login.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email("Email inválido"),
})

type Props = {
  onSwitch?: () => void
}

export default function ForgotForm({ onSwitch }: Props){

  const { requestPasswordReset } = useAuth()

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    const result = schema.safeParse({ email })

    if (!result.success) {
      setError(result.error.issues[0]?.message || 'Erro')
      setLoading(false)
      return
    }

    try {
      await requestPasswordReset(email)

      setSuccess('Se o email existir, enviaremos instruções.')

      // opcional: voltar automaticamente
      setTimeout(() => {
        onSwitch?.()
      }, 1800)

    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.panelForm}>
      
      {/* 🔥 MESMO HEADER VISUAL */}
      <div className={styles.logoWrap}>
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={320}
          height={190}
          className={styles.logoImg}
        />

        <div className={styles.logoVer}>
          Password Recovery
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>

        {/* 🔥 MENSAGEM CONTEXTUAL */}
        <div className={styles.info}>
          Enter your email to receive a password reset link.
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
        </div>

        {error && <div className={styles.error}>{error}</div>}
        {success && <div className={styles.success}>{success}</div>}

        <button className={styles.loginBtn} disabled={loading}>
          {loading ? 'Sending...' : 'Recover Password'}
        </button>

        <div className={styles.links}>
          <button
            type="button"
            onClick={onSwitch}
            className={styles.linkBtn}
          >
            Back to Login
          </button>
        </div>

        <div className={styles.divider} />

        {/* 🔥 MANTÉM STATUS VISUAL IGUAL */}
        <div className={styles.status}>
          <div className={styles.dot}></div>
          <span className={styles.text}>
            Secure recovery system · Instant delivery
          </span>
        </div>

      </form>
    </div>
  )
}