import type { Metadata, Viewport } from 'next'
import { Roboto_Condensed, Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-roboto-condensed',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TEKKIL — Prépare ton concours national sénégalais',
  description:
    'La plateforme intelligente de préparation aux concours nationaux au Sénégal. QCM adaptatifs, révision espacée, leaderboard 3D. Disponible sur Android.',
  keywords: [
    'concours sénégal',
    'préparation concours',
    'QCM Sénégal',
    'TEKKIL',
    'edtech Sénégal',
    'fonction publique sénégal',
    'concours gendarmerie sénégal',
  ],
  authors: [{ name: 'TEKKIL' }],
  creator: 'TEKKIL',
  openGraph: {
    type: 'website',
    locale: 'fr_SN',
    url: 'https://tekkil.app',
    title: 'TEKKIL — Prépare ton concours national sénégalais',
    description:
      'QCM adaptatifs, révision espacée, leaderboard 3D. Tout pour réussir ton concours.',
    siteName: 'TEKKIL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEKKIL — Prépare ton concours national sénégalais',
    description:
      'QCM adaptatifs, révision espacée, leaderboard 3D. Tout pour réussir ton concours.',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080E2E',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${robotoCondensed.variable} ${roboto.variable} bg-blue-900`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
