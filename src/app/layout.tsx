import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SKV Global - Cryptocurrency Platform',
  description: 'Professional cryptocurrency trading and portfolio management platform by SKV Global. Trade, track, and manage your crypto investments with advanced tools and real-time market data.',
  keywords: 'cryptocurrency, bitcoin, ethereum, trading, portfolio, blockchain, crypto wallet, SKV Global',
  authors: [{ name: 'SKV Global' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#2563eb',
  openGraph: {
    title: 'SKV Global - Cryptocurrency Platform',
    description: 'Professional cryptocurrency trading and portfolio management platform',
    type: 'website',
    locale: 'en_US',
    siteName: 'SKV Global Crypto',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKV Global - Cryptocurrency Platform',
    description: 'Professional cryptocurrency trading and portfolio management platform',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full antialiased`}>
        <div className="min-h-full bg-gray-50">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}