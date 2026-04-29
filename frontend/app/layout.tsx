import './globals.css'
import Providers from './providers'
import { getServerUser } from '@/lib/auth/getServerUser'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getServerUser()

  return (
    <html lang="en">
      <body>
        <Providers initialUser={user}>
          {children}
        </Providers>
      </body>
    </html>
  )
}