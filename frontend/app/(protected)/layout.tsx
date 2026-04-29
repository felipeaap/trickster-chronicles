import { getServerUser } from '@/lib/auth/server'
import { redirect } from 'next/navigation'

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getServerUser()

  if (!user) {
    redirect('/')
  }

  return (
    <>
      {children}
    </>
  )
}