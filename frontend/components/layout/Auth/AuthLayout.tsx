'use client'

import styles from './Login.module.css'
import Image from 'next/image'

type Props = {
  title: string
  subtitle?: string
  children: React.ReactNode
  footer?: React.ReactNode
}

export default function AuthLayout({
  title,
  subtitle,
  children,
  footer
}: Props) {
  return (
    <div className={styles.panelForm}>

      {/* HEADER PADRÃO */}
      <div className={styles.logoWrap}>
        <Image
          src="/assets/logo.png"
          alt="logo"
          width={320}
          height={190}
          className={styles.logoImg}
        />

        <div className={styles.logoVer}>
          {title}
        </div>

        {subtitle && (
          <div className={styles.info}>
            {subtitle}
          </div>
        )}
      </div>

      {/* CONTEÚDO DO FORM */}
      <div className={styles.form}>
        {children}
      </div>

      {/* FOOTER PADRÃO */}
      <div className={styles.divider} />

      <div className={styles.status}>
        <div className={styles.dot}></div>
        <span className={styles.text}>
          Secure system · Real-time protection
        </span>
      </div>

      {footer}
    </div>
  )
}