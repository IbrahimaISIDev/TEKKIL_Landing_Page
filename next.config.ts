import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  // Compression faite par Caddy (encode zstd gzip), sur tous les cœurs du
  // VPS, et non dans l'unique processus Node de la page d'accueil (test de
  // capacité du 18/10 : 108 % de CPU à 1 000 visiteurs). Ne pas réactiver
  // sans retirer `encode` du Caddyfile.
  compress: false,
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85, 100],
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

export default nextConfig
