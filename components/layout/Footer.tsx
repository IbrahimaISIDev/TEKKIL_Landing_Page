'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Instagram, CheckCircle, ArrowRight } from 'reicon-react'
import { Facebook, Youtube, XTwitter, Linkedin, TikTok } from '@/components/ui/BrandIcons'
import Image from 'next/image'
import { FOOTER_LINKS } from '@/lib/constants'
import { WAITLIST_API_URL } from '@/lib/urls'

type SocialLink = {
  label: string
  handle: string
  href: string
  icon: React.ReactNode
}

const socialLinks: SocialLink[] = [
  { label: 'X', handle: '@tekkil', href: 'https://twitter.com/tekkil_app', icon: <XTwitter size={14} /> },
  { label: 'Instagram', handle: '@tekkil', href: 'https://instagram.com/tekkil', icon: <Instagram size={14} /> },
  { label: 'Facebook', handle: '@tekkil', href: 'https://facebook.com/tekkil', icon: <Facebook size={14} /> },
  { label: 'YouTube', handle: '@tekkil', href: 'https://youtube.com/@tekkil', icon: <Youtube size={14} /> },
  { label: 'TikTok', handle: '@tekkil', href: 'https://tiktok.com/@tekkil', icon: <TikTok size={14} /> },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [currentTime, setCurrentTime] = useState('--:--')

  useEffect(() => {
    const update = () => setCurrentTime(new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }))
    update()
    const interval = setInterval(update, 60000)
    return () => clearInterval(interval)
  }, [])

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
    <footer className="w-full px-2 md:px-3 lg:px-4 pb-2 md:pb-3 lg:pb-4 pt-10 relative z-10">
      {/* Pill Container */}
      <div className="rounded-[40px] md:rounded-[60px] w-full pt-16 md:pt-24 flex flex-col relative text-black shadow-2xl overflow-hidden">
        
        {/* ─── Mesh Gradient Background ─── */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white/70" />
          <div 
            className="absolute inset-0 opacity-[0.55]"
            style={{
              background: `
                radial-gradient(at 12% 18%, rgba(96, 165, 250, 0.45) 0px, transparent 55%),
                radial-gradient(at 88% 12%, rgba(20, 176, 156, 0.40) 0px, transparent 55%),
                radial-gradient(at 50% 48%, rgba(168, 85, 247, 0.22) 0px, transparent 60%),
                radial-gradient(at 15% 82%, rgba(251, 191, 36, 0.30) 0px, transparent 50%),
                radial-gradient(at 85% 85%, rgba(39, 49, 111, 0.35) 0px, transparent 55%)
              `,
            }}
          />
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full blur-[100px] opacity-[0.35]" style={{ backgroundColor: '#60A5FA' }} />
          <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full blur-[100px] opacity-[0.30]" style={{ backgroundColor: '#14B09C' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.15]" style={{ backgroundColor: '#A855F7' }} />
        </div>
        
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-8 lg:gap-8 relative z-10 w-full px-6 sm:px-8 lg:px-16 mx-auto">
          
          {/* Col 1: Brand Logo + Description (span 4) */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start gap-5">
            <Image
              src="/logo-horizontal.png"
              alt="TEKKIL"
              width={400}
              height={100}
              className="w-[240px] md:w-[320px] h-auto object-contain"
              style={{ height: 'auto' }}
            />
            <p className="text-[14px] text-[#444] leading-relaxed max-w-[360px]">
              La plateforme de préparation aux concours nationaux sénégalais. Apprendre mieux, aller plus loin. 🇸🇳
            </p>
          </div>

          {/* Col 2: Navigation (span 2) */}
          <div className="sm:col-span-1 lg:col-span-2 flex flex-col">
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#111]/60 mb-5">Explorer</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="group inline-flex items-center text-[14px] text-[#333] hover:text-[#14B09C] font-medium transition-colors duration-200">
                    <span className="w-0 group-hover:w-4 h-[1.5px] bg-[#14B09C] mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Socials (span 3) */}
          <div className="sm:col-span-1 lg:col-span-3 flex flex-col">
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#111]/60 mb-5">Suivez-nous</h4>
            <ul className="space-y-3">
              {socialLinks.map(({ label, handle, href, icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-[14px] text-[#333] hover:text-black transition-colors duration-200">
                    <span className="w-8 h-8 rounded-lg bg-white/80 shadow-[0_1px_4px_rgba(0,0,0,0.08)] backdrop-blur-sm flex items-center justify-center text-[#333] group-hover:shadow-[0_2px_10px_rgba(20,176,156,0.2)] group-hover:scale-110 transition-all duration-300">
                      {icon}
                    </span>
                    <span className="font-medium">{label}</span>
                    <span className="text-[#999] text-[12px] ml-auto hidden lg:block">{handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: CTAs (span 3) */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col gap-5">
            {/* Contacter */}
            <a href="mailto:support@tekkil.sn" className="group block p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-black/[0.04] hover:border-[#14B09C]/30 hover:shadow-[0_4px_20px_rgba(20,176,156,0.12)] transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[18px] md:text-[20px] font-semibold text-[#14B09C] tracking-tight">Contacter Tekkil</span>
                <span className="w-8 h-8 rounded-full bg-[#14B09C] text-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-[-45deg] transition-all duration-300">
                  <ArrowRight size={14} />
                </span>
              </div>
              <p className="text-[13px] text-[#666]">support@tekkil.sn</p>
            </a>

            {/* S'inscrire */}
            <a href="#download" className="group block p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-black/[0.04] hover:border-[#27316F]/30 hover:shadow-[0_4px_20px_rgba(39,49,111,0.12)] transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[18px] md:text-[20px] font-semibold text-[#27316F] tracking-tight">S&apos;inscrire</span>
                <span className="w-8 h-8 rounded-full bg-[#27316F] text-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-[-45deg] transition-all duration-300">
                  <ArrowRight size={14} />
                </span>
              </div>
              <p className="text-[13px] text-[#666]">Rejoins l&apos;aventure Tekkil</p>
            </a>
          </div>
        </div>

        {/* Massive Cutoff Text at bottom */}
        {/* We use massive HTML text that bleeds off the bottom */}
        <div className="mt-8 md:mt-12 w-full relative flex justify-center pointer-events-none select-none z-0 overflow-hidden h-[25vw] md:h-[16vw]">
          <h1 
            className="absolute bottom-[-22%] text-[#111] font-black tracking-tighter w-full text-center uppercase"
            style={{ fontSize: '20vw', lineHeight: '0.75' }}
          >
            TEKKIL
          </h1>
        </div>

        {/* Tiny Bottom Copyright Bar */}
        <div className="relative z-10 border-t border-black/5 py-4 px-8 md:px-16 flex justify-center items-center text-[12px] text-[#666]">
          <p>Tekkil © {new Date().getFullYear()} Tous droits réservés. — Powered with ❤️ & ☕</p>
        </div>

      </div>
    </footer>
  )
}
