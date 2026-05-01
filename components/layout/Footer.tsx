'use client'

import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin } from 'lucide-react'
import { FOOTER_LINKS } from '@/lib/constants'

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/tekkil.app', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/tekkil_app', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/tekkil', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1 - Brand */}
          <div className="text-center md:text-left">
            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
              <span
                className="text-2xl font-extrabold text-white"
                style={{ fontFamily: 'var(--font-roboto-condensed)' }}
              >
                TEKK
              </span>
              <span
                className="text-2xl font-extrabold text-gold-500"
                style={{ fontFamily: 'var(--font-roboto-condensed)' }}
              >
                IL
              </span>
            </div>

            {/* Tagline */}
            <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-xs mx-auto md:mx-0">
              La plateforme de préparation aux concours nationaux sénégalais.
            </p>

            {/* Flag */}
            <div className="text-2xl mb-6">🇸🇳</div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[rgba(255,255,255,0.15)] transition-colors"
                >
                  <Icon size={18} />
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
              Sois le premier à savoir quand iOS sera disponible.
            </p>

            {/* Email input - UI only, links to mailto as fallback */}
            <form
              action="mailto:newsletter@tekkil.app"
              method="GET"
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                name="subject"
                placeholder="Ton email"
                className="flex-1 px-4 py-3 rounded-xl glass text-white placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-blue-400 hover:bg-blue-300 rounded-xl text-sm font-medium transition-colors"
              >
                S&apos;inscrire
              </motion.button>
            </form>
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
                href="#privacy"
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
