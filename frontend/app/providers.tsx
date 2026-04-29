'use client'

import { useState } from 'react'
import { AuthProvider } from '@/context/AuthContext'
import { User } from '@/lib/auth/types'

import Navbar from '@/components/layout/Navbar/Navbar'
import LoginScene from '@/components/layout/Auth/LoginScene'
import Footer from "@/components/layout/Footer/Footer";

type AuthMode = 'login' | 'register' | 'forgot'

export default function Providers({
  children,
  initialUser
}: {
  children: React.ReactNode
  initialUser: User | null
}) {
  const [authMode, setAuthMode] = useState<AuthMode | null>(null)

  return (
    <AuthProvider initialUser={initialUser}>

      <Navbar
        onOpenLogin={() => setAuthMode('login')}
        onOpenRegister={() => setAuthMode('register')}
      />

      {children}

      <Footer />

      {authMode && (
        <LoginScene
          key={authMode}
          initialMode={authMode}
          onClose={() => setAuthMode(null)}
        />
      )}

    </AuthProvider>
  )
}