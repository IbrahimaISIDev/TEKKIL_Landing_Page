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
  metadataBase: new URL('https://tekkil.app'),
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
      'QCM adaptatifs, révision espacée, classement en direct. Tout pour réussir ton concours au Sénégal.',
    siteName: 'TEKKIL',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'TEKKIL — Prépare ton concours national sénégalais',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEKKIL — Prépare ton concours national sénégalais',
    description:
      'QCM adaptatifs, révision espacée, classement en direct. Tout pour réussir ton concours au Sénégal.',
    images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true },
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
