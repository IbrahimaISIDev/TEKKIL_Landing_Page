'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Xmark, ArrowRight } from 'reicon-react'
import Image from 'next/image'
import { NAV_LINKS } from '@/lib/constants'
import { LOGIN_URL } from '@/lib/urls'
import { useRouter } from 'next/navigation'

export function Navbar() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>(NAV_LINKS[0].href)

  // High-performance scroll listener for threshold
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 50
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev))
          ticking = false
        })
        ticking = true
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Dynamic Scrollspy to adapt active tab to current page section
  useEffect(() => {
    let ticking = false
    const onScrollSpy = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 180
          if (window.scrollY < 250) {
            setActiveSection(NAV_LINKS[0].href)
            ticking = false
            return
          }
          for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
            const link = NAV_LINKS[i]
            if (link.href.startsWith('#')) {
              const el = document.querySelector(link.href) as HTMLElement | null
              if (el && el.offsetTop <= scrollPos) {
                setActiveSection(link.href)
                break
              }
            }
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScrollSpy, { passive: true })
    onScrollSpy()
    return () => window.removeEventListener('scroll', onScrollSpy)
  }, [])

  // Smooth scroll handler
  const handleLinkClick = (href?: string) => {
    setIsMenuOpen(false)
    if (href) {
      setActiveSection(href)
      if (href.startsWith('#')) {
        const el = document.querySelector(href) as HTMLElement | null
        if (el && window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -90, duration: 1.15 })
          return
        }
      }
      router.push(href)
    }
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

  const [animPhase, setAnimPhase] = useState<'initial' | 'pill' | 'expanding' | 'expanded'>('initial')

  // Framer Motion Sequence
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setAnimPhase('expanded')
      return
    }

    const t1 = setTimeout(() => setAnimPhase('pill'), 100)
    const t2 = setTimeout(() => setAnimPhase('expanding'), 1600) // Hold pill for 1.5s
    const t3 = setTimeout(() => setAnimPhase('expanded'), 2800)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])



  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 px-4 sm:px-8 md:px-[52px] lg:px-20 xl:px-24 transition-[top] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${
          isScrolled ? 'top-3 md:top-3.5' : 'top-5 md:top-6'
        }`}
        aria-label="Navigation principale"
      >
        <div className="w-full relative flex justify-center items-center pointer-events-auto">
          {/* Ambient Genesis Aura behind the capsule */}
          <motion.div
            initial="initial"
            animate={animPhase}
            variants={{
              initial: { scaleX: 0.2, opacity: 0 },
              pill: { scaleX: 0.4, opacity: 0.2 },
              expanding: { scaleX: 1, opacity: isScrolled ? 0.25 : 0.35, transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } },
              expanded: { scaleX: 1, opacity: isScrolled ? 0.25 : 0.35 }
            }}
            aria-hidden
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-12 rounded-full bg-gradient-to-r from-[#60A5FA]/25 via-[#A855F7]/15 to-[#14B09C]/25 blur-2xl pointer-events-none -z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled ? 'w-[75%] max-w-[850px]' : 'w-[85%] max-w-full'
            }`}
          />

          {/* Dynamic Island Morphing Capsule — Compacts smoothly on scroll */}
          <motion.div
            initial="initial"
            animate={animPhase}
            variants={{
              initial: { y: -30, opacity: 0, clipPath: 'inset(0% calc(50% - 34px) 0% calc(50% - 34px) round 9999px)' },
              pill: { 
                y: 0, opacity: 1, clipPath: 'inset(0% calc(50% - 34px) 0% calc(50% - 34px) round 9999px)',
                transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] } 
              },
              expanding: { 
                y: 0, opacity: 1, clipPath: 'inset(0% calc(0% - 0px) 0% calc(0% - 0px) round 9999px)',
                transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] }
              },
              expanded: {
                y: 0, opacity: 1, clipPath: 'inset(0% calc(0% - 0px) 0% calc(0% - 0px) round 9999px)',
                transition: { duration: 0 }
              }
            }}
            style={{
              overflow: animPhase === 'expanded' ? 'visible' : 'hidden',
            }}
            className={`relative rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group/nav ${
              isScrolled
                ? 'w-full max-w-[1060px] bg-white/94 backdrop-blur-2xl border border-slate-200/90 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.15),0_2px_10px_rgba(0,0,0,0.04)]'
                : 'w-full max-w-full bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_12px_32px_-6px_rgba(39,49,111,0.08),0_2px_8px_rgba(0,0,0,0.02)]'
            }`}
          >
            {/* Center Pictogram (during entrance) */}
            {animPhase !== 'expanded' && (
              <motion.div 
                initial="initial"
                animate={animPhase}
                variants={{
                  initial: { opacity: 0, scale: 0.8 },
                  pill: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                  expanding: { opacity: 0, scale: 0.8, transition: { duration: 0.4 } },
                  expanded: { opacity: 0, display: 'none' }
                }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-[100]"
              >
                <div className="relative flex items-center justify-center w-10 h-10">
                  <Image 
                    src="/logo-mark.png" 
                    alt="Tekkil Icon" 
                    width={40} 
                    height={40} 
                    className="w-8 h-8 object-contain drop-shadow-sm"
                    priority
                  />
                </div>
              </motion.div>
            )}



            {/* Titanium Chamfer Horizon Sheen */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-[1.5px] pointer-events-none z-30 overflow-hidden rounded-full"
            >
              <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white via-[#14B09C] to-transparent shadow-[0_0_12px_white]" />
            </div>

            {/* Specular Top Reflection Bevel */}
            <div 
              aria-hidden 
              className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none rounded-full" 
            />

            {/* Subtle Interactive Ambient Glow on Hover */}
            <div 
              aria-hidden
              className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-[#27316F]/15 via-[#14B09C]/25 to-[#60A5FA]/15 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-[2px]"
            />

            {/* Main Capsule Inner Bar — Smoothly compacts vertical padding on scroll */}
            <motion.div 
              initial="initial"
              animate={animPhase}
              variants={{
                initial: { opacity: 0 },
                pill: { opacity: 0 },
                expanding: { opacity: 1, transition: { delay: 0.4, duration: 0.6 } },
                expanded: { opacity: 1 }
              }}
              className={`w-full flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isScrolled 
                  ? 'pl-3.5 sm:pl-5 pr-2.5 sm:pr-3 py-1.5 md:py-2' 
                  : 'pl-4 sm:pl-6 pr-3 py-2 md:py-2.5'
              }`}
            >
              
              {/* Left: Brand Logo (Smooth resize on scroll) */}
              <a 
                href="/" 
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                className="relative group flex items-center shrink-0 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
                aria-label="Accueil Tekkil"
              >
                <Image 
                  src="/logo-horizontal.png"
                  alt="Logo Tekkil"
                  width={150}
                  height={36}
                  className={`w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] drop-shadow-xs ${
                    isScrolled ? 'h-7 md:h-8' : 'h-8 md:h-9'
                  }`}
                  priority
                />
              </a>

              {/* Center: Desktop Nav Links (Adaptive Scrollspy Segmented Capsule) */}
              <div 
                className={`hidden lg:flex items-center bg-slate-100/80 backdrop-blur-md rounded-full p-1 border border-slate-200/80 shadow-xs transition-all duration-500 ${
                  isScrolled ? 'gap-0.5' : 'gap-1'
                }`}
              >
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href
                  return (
                    <button
                      key={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={`relative font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                        isScrolled ? 'px-3 py-1 text-xs' : 'px-3.5 py-1.5 text-xs'
                      } ${isActive ? 'text-[#0A0E28] font-bold' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="nav-active-pill"
                          className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-slate-200/60"
                          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Right: CTA Button & Mobile Menu Toggle */}
              <div className="flex items-center gap-2.5 shrink-0">
                
                {/* Primary CTA « Se connecter » (Smooth compaction on scroll) */}
                <a
                  href={LOGIN_URL}
                  className={`hidden md:inline-flex items-center gap-2 text-white font-bold rounded-full bg-gradient-to-r from-[#1A2356] via-[#27316F] to-[#0D9488] hover:from-[#27316F] hover:to-[#14B09C] shadow-[0_6px_18px_rgba(39,49,111,0.32)] hover:shadow-[0_8px_24px_rgba(13,148,136,0.4)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] active:scale-[0.97] group relative overflow-hidden ${
                    isScrolled ? 'px-4.5 py-2 text-xs' : 'px-5 py-2.5 text-xs md:text-sm'
                  }`}
                >
                  {/* Top Bevel Highlight */}
                  <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                  <span className="relative z-10 flex items-center gap-1.5">
                    Se connecter
                  </span>
                  <ArrowRight size={15} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />

                  {/* Specular Shimmer Sweep */}
                  <span 
                    aria-hidden
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none transform -skew-x-12" 
                  />
                </a>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden w-9.5 h-9.5 md:w-10 md:h-10 flex items-center justify-center bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-full border border-slate-200/90 shadow-xs relative overflow-hidden transition-transform duration-200 hover:scale-105 active:scale-90"
                  aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isMenuOpen ? "close" : "menu"}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isMenuOpen ? <Xmark size={20} /> : <Menu size={20} />}
                    </motion.div>
                  </AnimatePresence>
                </button>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col pt-28 px-7 pb-10 overflow-hidden bg-white/95 backdrop-blur-2xl"
          >
            {/* Ambient mesh accents */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-50/90 to-white/95" />
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#60A5FA]/20 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-10 -left-10 w-80 h-80 rounded-full bg-[#14B09C]/20 blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              
              {/* Navigation Links */}
              <div className="flex flex-col gap-5 pt-4">
                {NAV_LINKS.map((link, i) => {
                  const isActive = activeSection === link.href
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleLinkClick(link.href)
                      }}
                      initial={{ opacity: 0, x: -25 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
                      className={`text-2xl font-black transition-colors flex items-center justify-between py-1 ${
                        isActive ? 'text-[#0D9488]' : 'text-slate-800 hover:text-[#27316F]'
                      }`}
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#0D9488]" />}
                    </motion.a>
                  )
                })}
              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: NAV_LINKS.length * 0.06 }}
                className="mt-8 flex flex-col gap-5"
              >
                <div className="w-full h-[1px] bg-slate-200" />
                <a
                  href={LOGIN_URL}
                  onClick={() => handleLinkClick()}
                  className="text-white px-8 py-3.5 rounded-full text-center text-base font-bold w-full transition-transform active:scale-95 shadow-md flex items-center justify-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #1A2356 0%, #27316F 55%, #0D9488 100%)',
                  }}
                >
                  <span>Se connecter</span>
                  <ArrowRight size={18} />
                </a>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
