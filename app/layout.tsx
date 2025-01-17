import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Finzy-web',
  // icons: 'favicon.ico',
  description: 'AI expense tracker',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
