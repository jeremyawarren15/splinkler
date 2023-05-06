import './globals.css'
import { Inter } from 'next/font/google'
import Preline from './preline'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Splinkler',
  description: 'Spread shortened links all over the internet like a sprinkler',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Preline />
      <body className={inter.className}>
        <Header
          title="Splinkler"
        />
        {children}
      </body>
    </html>
  )
}
