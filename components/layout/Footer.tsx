'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin, Facebook, Youtube, Check } from 'lucide-react'
import Image from 'next/image'
import { FOOTER_LINKS } from '@/lib/constants'

const WAITLIST_API_URL = 'https://api.tekkilapp.com/api/v1/waitlist'

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.01a8.16 8.16 0 0 0 4.77 1.52V7.07a4.85 4.85 0 0 1-1-.38z" />
    </svg>
  )
}

type SocialLink = {
  label: string
  href: string
  color: string
  icon: React.ReactNode
}

const socialLinks: SocialLink[] = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/tekkil',
    color: 'hover:bg-[#1877F2]/20 hover:border-[#1877F2]/40',
    icon: <Facebook size={18} />,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/tekkil',
    color: 'hover:bg-[#E1306C]/20 hover:border-[#E1306C]/40',
    icon: <Instagram size={18} />,
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com/@tekkil',
    color: 'hover:bg-white/20 hover:border-white/40',
    icon: <TikTokIcon size={18} />,
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@tekkil',
    color: 'hover:bg-[#FF0000]/20 hover:border-[#FF0000]/40',
    icon: <Youtube size={18} />,
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/tekkil_app',
    color: 'hover:bg-white/20 hover:border-white/40',
    icon: <Twitter size={18} />,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/tekkil',
    color: 'hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/40',
    icon: <Linkedin size={18} />,
  },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'loading') return

    setStatus('loading')
    try {
      const res = await fetch(WAITLIST_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'landing-footer' }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1 - Brand */}
          <div className="text-center md:text-left">
            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="bg-white/95 rounded-xl px-3 py-1.5">
                <Image
                  src="/tekkil-logo.png"
                  alt="Tekkil"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>

            {/* Tagline */}
            <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-xs mx-auto md:mx-0">
              La plateforme de préparation aux concours nationaux sénégalais.
            </p>

            {/* Flag */}
            <div className="text-2xl mb-6">🇸🇳</div>

            {/* Social Links — 2 rows of 3 */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              {socialLinks.map(({ label, href, color, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border border-white/10 transition-all duration-200 text-gray-300 hover:text-white ${color}`}
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2 - Navigation */}
          <div className="text-center md:text-left">
            <h4
              className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6"
              style={{ fontFamily: 'var(--font-roboto-condensed)' }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Newsletter */}
          <div className="text-center md:text-left">
            <h4
              className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-6"
              style={{ fontFamily: 'var(--font-roboto-condensed)' }}
            >
              Reste informé
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Sois le premier informé du lancement des applications mobiles.
            </p>

            {/* Email input */}
            {status === 'success' ? (
              <p className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 text-sm font-medium py-3">
                <Check size={18} />
                Merci ! Tu seras prévenu(e) du lancement.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Ton email"
                  disabled={status === 'loading'}
                  className="flex-1 px-4 py-3 rounded-xl text-white placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all disabled:opacity-60"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                />
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-400 rounded-xl text-sm font-medium transition-colors disabled:opacity-60"
                >
                  {status === 'loading' ? 'Inscription...' : 'S’inscrire'}
                </motion.button>
              </form>
            )}

            {status === 'error' && (
              <p className="text-red-400 text-xs mt-2">
                Une erreur est survenue. Réessaie dans un instant.
              </p>
            )}

            {/* Social hint */}
            <p className="text-gray-500 text-xs mt-4">
              Ou suis-nous sur les réseaux pour les actus et tips de révision.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.06)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 TEKKIL. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Confidentialité
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Conditions d&apos;utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
