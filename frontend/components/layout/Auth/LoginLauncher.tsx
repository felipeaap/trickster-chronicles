'use client'

import { useState } from 'react'
import styles from './Login.module.css'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import LoginArt from './LoginArt'
import ForgotForm from './ForgotForm'

type AuthMode = 'login' | 'register' | 'forgot'

type Props = {
  onClose: () => void
  initialMode?: AuthMode
}

export default function LoginLauncher({
  onClose,
  initialMode = 'login'
}: Props) {
  const [closing, setClosing] = useState(false)
  const [mode, setMode] = useState<AuthMode>(initialMode)

  const handleClose = () => {
    setClosing(true)

    setTimeout(() => {
      onClose()
    }, 300)
  }

  return (
    <div className={`${styles.launcher} ${closing ? styles.closing : ''}`}>
      
      <button onClick={handleClose} className={styles.close}>
        ✕
      </button>

      <div key={mode} className={styles.formWrapper}>
        {mode === 'login' && (
          <LoginForm onSwitch={() => setMode('register')} onForgot={() => setMode('forgot')} />
        )}

        {mode === 'register' && (
          <RegisterForm onSwitch={() => setMode('login')} />
        )}

        {mode === 'forgot' && (
          <ForgotForm onSwitch={() => setMode('login')} />
        )}
      </div>

      <LoginArt />
    </div>
  )
}