'use client'

import { motion } from 'framer-motion'
import { Envelope, MessageCircle, Instagram } from 'reicon-react'
import { Facebook, Youtube, type AnyIcon } from '@/components/ui/BrandIcons'
import { Sparkles, HeartHandshake } from 'lucide-react'
import { CONTACT_CHANNELS } from '@/lib/constants'

const iconMap: Record<string, AnyIcon> = {
  Mail: Envelope,
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
}

export function Contact() {
  return (
    <section 
      id="contact" 
      className="relative py-20 md:py-28 lg:py-32 bg-[#F1F5F9] overflow-hidden isolate"
      aria-label="Contact et Support TEKKIL"
    >
      {/* ─── Elegant Hairline Dividers ─── */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* ─── Rich Multi-Color Atmospheric Mesh Gradient ─── */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.45]"
          style={{
            background: `
              radial-gradient(at 15% 50%, rgba(96, 165, 250, 0.45) 0px, transparent 55%),
              radial-gradient(at 85% 30%, rgba(20, 176, 156, 0.35) 0px, transparent 55%),
              radial-gradient(at 50% 80%, rgba(168, 85, 247, 0.25) 0px, transparent 60%),
              radial-gradient(at 80% 90%, rgba(251, 191, 36, 0.25) 0px, transparent 50%),
              radial-gradient(at 20% 85%, rgba(39, 49, 111, 0.30) 0px, transparent 55%)
            `,
          }}
        />

        {/* Ambient Orbs */}
        <div className="absolute top-10 left-10 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.35] bg-[#60A5FA]" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[130px] opacity-[0.30] bg-[#14B09C]" />
        <div className="absolute -bottom-20 left-1/4 w-[550px] h-[550px] rounded-full blur-[110px] opacity-[0.25] bg-[#818CF8]" />

        {/* Subtle Architectural Dot Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 25%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 25%, transparent 85%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Section Header (Modern 2026 Title) ─── */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-2xs text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <HeartHandshake className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>Support</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B132B] tracking-[-0.03em] leading-tight mb-3 sm:mb-4"
            style={{ fontFamily: 'var(--font-roboto-condensed)' }}
          >
            On est là pour{' '}
            <span className="bg-gradient-to-r from-[#1A2356] via-[#27316F] to-[#0D9488] bg-clip-text text-transparent">
              toi.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            Une question, un bug, une suggestion ? Notre équipe te répond en moins de 24h.
          </motion.p>
        </div>

        {/* ─── Contact Cards Grid ─── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {CONTACT_CHANNELS.map((channel, index) => {
            const Icon = iconMap[channel.icon] || Envelope

            return (
              <motion.a
                key={channel.title}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-[28px] p-[1.5px] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_40px_-12px_rgba(20,176,156,0.18),0_6px_20px_-4px_rgba(39,49,111,0.08)] hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-[#14B09C]/50 focus:ring-offset-2 focus:ring-offset-[#F1F5F9]"
              >
                {/* Iridescent background that reveals on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#27316F] via-[#14B09C] to-[#818CF8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Default subtle border */}
                <div className="absolute inset-0 bg-slate-200/60 group-hover:opacity-0 transition-opacity duration-300" />

                {/* Card Body */}
                <div className="relative h-full bg-white/95 backdrop-blur-md rounded-[26.5px] p-5 sm:p-6 flex flex-col items-center text-center">
                  
                  {/* Icon Circle */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-2xs group-hover:shadow-md border border-slate-100 group-hover:border-transparent relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#27316F]/10 via-[#14B09C]/10 to-[#818CF8]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Icon size={24} className="text-slate-700 group-hover:text-[#14B09C] transition-colors duration-300 relative z-10 w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-sm sm:text-base md:text-[17px] font-bold text-slate-900 mb-1.5 group-hover:text-[#27316F] transition-colors"
                    style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                  >
                    {channel.title}
                  </h3>
                  
                  <p className="text-[#0D9488] font-semibold text-xs sm:text-[13px] mb-2 sm:mb-2.5 break-words max-w-full group-hover:text-[#14B09C] transition-colors">
                    {channel.value}
                  </p>
                  
                  <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed mt-auto">
                    {channel.description}
                  </p>

                </div>
              </motion.a>
            )
          })}
        </div>

      </div>
    </section>
  )
}

