'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './Navbar.module.css'
import Button from '@/components/ui/Button/Button'

import { useAuth } from '@/context/AuthContext'
import { useLogout } from '@/features/auth/hooks'

type Props = {
  onOpenLogin: () => void
  onOpenRegister: () => void
}

export default function Navbar({ onOpenLogin, onOpenRegister }: Props){
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const { user } = useAuth()
  const logout = useLogout()

  const isActive = (path:string) => pathname === path

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoDot}></div>
          CHRONICLES
        </Link>

        <button
          className={`${styles.hamburger} ${open ? styles.active : ''}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* LINKS */}
      <div className={`${styles.links} ${open ? styles.open : ''}`}>
        <Link href="/" className={`${styles.link} ${isActive('/') ? styles.active : ''}`} onClick={() => setOpen(false)}>Home</Link>
        <Link href="/server" className={`${styles.link} ${isActive('/server') ? styles.active : ''}`} onClick={() => setOpen(false)}>Server</Link>
        <Link href="/ranking" className={`${styles.link} ${isActive('/ranking') ? styles.active : ''}`} onClick={() => setOpen(false)}>Ranking</Link>

        <Link
          href="https://discord.gg/YOUR-LINK"
          target="_blank"
          className={`${styles.link} ${styles.discord}`}
        >
          <span className={styles.discordDot}></span>
          Discord
        </Link>
      </div>

      {/* ACTIONS */}
      <div className={styles.actions}>
        {user ? (
          <>
            <span className={styles.username}>{user.username}</span>

            <Button
              variant="outline"
              onClick={async () => {
                await logout()
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <Button onClick={onOpenLogin} variant="outline">
            Login
          </Button>
        )}

        <Button variant="mint">Download</Button>

        {!user && (
          <Button variant="green" onClick={onOpenRegister}>
            Register
          </Button>
        )}
      </div>
    </nav>
  )
}