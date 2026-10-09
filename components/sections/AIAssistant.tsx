'use client'

import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'
import Image from 'next/image'
import type { MouseEvent } from 'react'
import { Sparkles, MessageSquare, Lightbulb, BookOpen, FileCheck, HelpCircle } from 'lucide-react'

const FLOATING_CARDS = [
  { icon: MessageSquare, text: 'Explications de cours 24h/24' },
  { icon: BookOpen, text: 'Textes de loi & jurisprudence' },
  { icon: Lightbulb, text: 'Méthodologie & cas pratiques' },
  { icon: FileCheck, text: 'Corrections détaillées de QCM' },
  { icon: HelpCircle, text: 'Résolution instantanée de doutes' },
  { icon: Sparkles, text: 'Fiches mémo générées par IA' },
]

export function AIAssistant() {
  const cardsToMapRow1 = [...FLOATING_CARDS, ...FLOATING_CARDS, ...FLOATING_CARDS]
  const reversedCards = [...FLOATING_CARDS].reverse()
  const cardsToMapRow2 = [...reversedCards, ...reversedCards, ...reversedCards]

  // Interactive 3D tilt + glare following the cursor
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const sx = useSpring(mx, { stiffness: 120, damping: 18 })
  const sy = useSpring(my, { stiffness: 120, damping: 18 })
  const rotateY = useTransform(sx, [0, 1], [-8, 8])
  const rotateX = useTransform(sy, [0, 1], [6, -6])
  const glareX = useTransform(sx, [0, 1], ['10%', '90%'])
  const glareY = useTransform(sy, [0, 1], ['10%', '90%'])
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.35), rgba(255,255,255,0) 45%)`

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }
  const handleLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <section 
      id="ai-assistant" 
      className="relative bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9]/60 to-[#F8FAFC] py-16 md:py-20 lg:py-24 w-full overflow-hidden isolate"
      aria-label="Assistant IA Tekkil"
    >
      {/* ─── Architectural Dot Grid Texture ─── */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10 opacity-[0.3]"
        style={{
          backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 25%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 25%, transparent 85%)',
        }}
      />

      {/* ─── Subtle Brand Ambient Lighting ─── */}
      <div 
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none -z-10 blur-[130px] opacity-[0.25]"
        style={{ backgroundColor: '#60A5FA' }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none -z-10 blur-[130px] opacity-[0.25]"
        style={{ backgroundColor: '#14B09C' }}
      />

      {/* 1px Hairline Section Dividers */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative w-full flex flex-col items-center">
        
        {/* Header Text — Concise & Proportioned */}
        <div className="text-center px-5 mb-8 md:mb-12 z-20 w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>Assistant Intelligent 24/7</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050814] tracking-[-0.03em] leading-[1.12] mb-4"
          >
            Ton assistant IA{' '}
            <span className="bg-gradient-to-r from-[#1A2356] via-[#27316F] to-[#0D9488] bg-clip-text text-transparent">
              personnalisé.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            Pose tes questions en temps réel. Tekkil AI comprend les programmes officiels de tes concours, t&apos;explique les concepts et résout tes blocages avec des exemples concrets.
          </motion.p>
        </div>

        {/* Central Visual & Looping Cards — Compact & Balanced */}
        <div className="relative w-full flex items-center justify-center min-h-[440px] sm:min-h-[490px] md:min-h-[540px] overflow-hidden select-none py-2">
          
          {/* Background Marquee Rows (Cards Loop) — Styled in clean TEKKIL DA */}
          <div className="absolute inset-0 flex flex-col justify-center gap-4 sm:gap-5 pointer-events-none">
            {/* Row 1 — Moving Left */}
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
              className="flex w-max"
            >
              {cardsToMapRow1.map((card, i) => {
                const Icon = card.icon
                return (
                  <div 
                    key={`r1-${i}`} 
                    className="flex-shrink-0 px-4 py-2.5 sm:px-5 sm:py-3 mr-4 sm:mr-5 rounded-2xl flex items-center gap-3 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.06)] hover:border-slate-300 transition-transform hover:scale-105 pointer-events-auto cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488] shrink-0">
                      <Icon className="w-4 h-4 text-[#0D9488]" />
                    </div>
                    <p className="text-slate-800 font-semibold text-xs sm:text-sm whitespace-nowrap">
                      {card.text}
                    </p>
                  </div>
                )
              })}
            </motion.div>
            
            {/* Row 2 — Moving Right */}
            <motion.div
              animate={{ x: ['-50%', '0%'] }}
              transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
              className="flex w-max"
            >
              {cardsToMapRow2.map((card, i) => {
                const Icon = card.icon
                return (
                  <div 
                    key={`r2-${i}`} 
                    className="flex-shrink-0 px-4 py-2.5 sm:px-5 sm:py-3 mr-4 sm:mr-5 rounded-2xl flex items-center gap-3 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-[0_4px_16px_-4px_rgba(15,23,42,0.06)] hover:border-slate-300 transition-transform hover:scale-105 pointer-events-auto cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488] shrink-0">
                      <Icon className="w-4 h-4 text-[#0D9488]" />
                    </div>
                    <p className="text-slate-800 font-semibold text-xs sm:text-sm whitespace-nowrap">
                      {card.text}
                    </p>
                  </div>
                )
              })}
            </motion.div>
          </div>

          {/* Central Phone Mockup — Scaled & Positioned Harmoniously */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 mx-auto"
            style={{ perspective: 1400 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.div
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="relative w-[260px] sm:w-[300px] md:w-[340px] cursor-grab active:cursor-grabbing"
              >
                <Image
                  src="/mockup-iphone-ai.png"
                  alt="Tekkil AI — Assistant contextuel sur iPhone 16 Pro Max"
                  width={1116}
                  height={1980}
                  quality={100}
                  priority
                  sizes="(min-width: 768px) 340px, 260px"
                  className="w-full h-auto select-none [filter:drop-shadow(0_10px_20px_rgba(15,23,42,0.08))]"
                  draggable={false}
                />

                {/* Glass glare clipped to the phone silhouette */}
                <motion.div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none mix-blend-soft-light"
                  style={{
                    backgroundImage: glare,
                    WebkitMaskImage: 'url(/mockup-iphone-ai.png)',
                    maskImage: 'url(/mockup-iphone-ai.png)',
                    WebkitMaskSize: '100% 100%',
                    maskSize: '100% 100%',
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Coming Soon Badge — Sleek & Compact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#050814]/95 hover:bg-[#1A2356] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2 border border-white/15 transition-all cursor-pointer z-30 hover:scale-105"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Disponible prochainement</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

