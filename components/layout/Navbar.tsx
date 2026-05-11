'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useScrollY } from '@/hooks/useScrollY'
import { NAV_LINKS } from '@/lib/constants'

export function Navbar() {
  const scrollY = useScrollY()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const isScrolled = scrollY > 80

  // Track active section based on scroll
  useEffect(() => {
    const sections = NAV_LINKS.map(link => link.href.replace('#', ''))
    
    const handleScroll = () => {
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            return
          }
        }
      }
      setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on link click
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[rgba(8,14,46,0.95)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.06)] shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="flex items-center"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-sm">
                <Image
                  src="/tekkil-logo.png"
                  alt="Tekkil"
                  width={120}
                  height={40}
                  priority
                  className="h-8 w-auto object-contain"
                />
              </div>
            </motion.a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative text-sm text-text-muted-dark hover:text-white transition-colors"
                  >
                    <span className={isActive ? 'text-white' : ''}>{link.label}</span>
                    {/* Animated underline */}
                    <motion.span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-gold-500 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.2 }}
                      style={{ originX: 0 }}
                    />
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-gold-500"
                      />
                    )}
                  </a>
                )
              })}
            </div>

            {/* Desktop CTA Button */}
            <motion.a
              href="#download"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:flex items-center gap-2 bg-blue-400 hover:bg-blue-300 text-white px-5 py-2.5 rounded-[10px] text-sm font-medium transition-all"
              style={{
                boxShadow: '0 4px 20px rgba(43, 82, 238, 0.3)',
              }}
            >
              <Download size={16} />
              Télécharger gratuitement
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-blue-900/98 backdrop-blur-md md:hidden"
            onClick={handleLinkClick}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center min-h-screen gap-8 pt-20"
              onClick={(e) => e.stopPropagation()}
            >
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  className="text-2xl text-white font-medium hover:text-gold-500 transition-colors"
                  style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                href="#download"
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="flex items-center gap-2 bg-blue-400 text-white px-8 py-4 rounded-xl text-lg font-medium mt-4"
              >
                <Download size={20} />
                Télécharger
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
