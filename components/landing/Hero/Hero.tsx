'use client'

import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion'
import type { MouseEvent } from 'react'
import { ArrowRight, Play, CheckCircle, Sparkle } from 'reicon-react'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { LOGIN_URL } from '@/lib/urls'
import SenegalIcon from '@/components/ui/SenegalIcon'

const PHONES = [
  {
    src: '/mockup-hero-left.png',
    alt: 'Assistant IA Tekkil sur iPhone 16 Pro Max',
    width: 1112,
    height: 1976,
    className: '-left-4 xs:-left-2 sm:left-0 md:left-2 lg:-left-2 bottom-[3%] md:bottom-[4%] h-[78%] sm:h-[82%] md:h-[86%] lg:h-[88%] z-10',
    depth: 14,
    float: 7,
    delay: 0.2,
    from: { x: -40, y: 30 },
  },
  {
    src: '/mockup-hero-center.png',
    alt: 'Page d’accueil & Splash Tekkil sur iPhone 16 Pro Max',
    width: 1049,
    height: 2108,
    className: 'inset-x-0 mx-auto w-fit -top-2 sm:-top-3 md:-top-5 h-[94%] sm:h-[98%] md:h-[102%] z-20 scale-100 sm:scale-105 md:scale-110',
    depth: 26,
    float: 6,
    delay: 0.3,
    from: { x: 0, y: 50 },
  },
  {
    src: '/mockup-hero-right.png',
    alt: 'Écran des cours Tekkil sur iPhone 16 Pro Max',
    width: 836,
    height: 2119,
    className: '-right-4 xs:-right-2 sm:right-0 md:right-2 lg:-right-2 bottom-[3%] md:bottom-[5%] h-[78%] sm:h-[82%] md:h-[86%] lg:h-[88%] z-10',
    depth: 14,
    float: 8,
    delay: 0.4,
    from: { x: 40, y: 30 },
  },
] as const

const CONCOURS_LIST = [
  { name: 'CREM', title: 'Concours de Recrutement des Élèves-Maîtres', color: '#1E2968' },
  { name: 'ENA', title: 'École Nationale d’Administration', color: '#D97706' },
  { name: 'FASTEF', title: 'Faculté des Sciences et Technologies de l’Éducation', color: '#0D9488' },
  { name: 'Douanes', title: 'Concours direct des Douanes', color: '#1D4ED8' },
  { name: 'Police & Gendarmerie', title: 'Forces de Police et Gendarmerie', color: '#6D28D9' },
  { name: 'CFJ', title: 'Centre de Formation Judiciaire', color: '#BE185D' },
] as const

function ParallaxPhone({
  phone,
  mx,
  my,
}: {
  phone: (typeof PHONES)[number]
  mx: MotionValue<number>
  my: MotionValue<number>
}) {
  const x = useTransform(mx, [-0.5, 0.5], [-phone.depth, phone.depth])
  const y = useTransform(my, [-0.5, 0.5], [-phone.depth, phone.depth])

  return (
    <motion.div
      initial={{ opacity: 0, ...phone.from }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay: phone.delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${phone.className}`}
    >
      <motion.div style={{ x, y }} className="h-full">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: phone.float, repeat: Infinity, ease: 'easeInOut', delay: phone.delay }}
          whileHover={{ scale: 1.04, y: -14 }}
          className="h-full cursor-pointer"
        >
          <Image
            src={phone.src}
            alt={phone.alt}
            width={phone.width}
            height={phone.height}
            quality={100}
            priority
            sizes="(min-width: 1024px) 300px, 200px"
            draggable={false}
            className="h-full w-auto max-w-none select-none [filter:drop-shadow(0_40px_45px_rgba(0,0,0,0.65))_drop-shadow(0_10px_15px_rgba(0,0,0,0.4))]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const mx = useSpring(rawX, { stiffness: 80, damping: 20 })
  const my = useSpring(rawY, { stiffness: 80, damping: 20 })

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    rawX.set((e.clientX - r.left) / r.width - 0.5)
    rawY.set((e.clientY - r.top) / r.height - 0.5)
  }
  const handleLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <section className="relative w-full p-2 md:p-3 lg:p-4" aria-label="Section principale — Tekkil">
      <div className="relative w-full">
        {/* ─── Main Rounded Container with High-Contrast Feature Cards Mesh Gradient ─── */}
        <div 
          className="relative w-full min-h-[85vh] lg:min-h-[800px] rounded-[28px] sm:rounded-[36px] md:rounded-[44px] flex flex-col isolate transition-colors duration-500 border border-slate-300/80 shadow-[0_24px_80px_-15px_rgba(15,23,42,0.12),_inset_0_1px_2px_rgba(255,255,255,0.95)]"
          style={{
            backgroundColor: '#F1F5F9',
          }}
        >
          {/* Multi-Color Rich & Contrasted Mesh Gradient Orbs (Matching Feature Cards Vivid Palette) */}
          <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden rounded-[inherit]">
            {/* Vivid Royal / Sky Blue Orb (Top-Left) */}
            <div 
              className="absolute -top-28 -left-20 w-[680px] h-[680px] rounded-full blur-[90px] opacity-[0.55] pointer-events-none"
              style={{ backgroundColor: '#60A5FA' }}
            />
            {/* Vivid Violet / Indigo Orb (Top-Center) */}
            <div 
              className="absolute -top-20 left-1/4 w-[650px] h-[650px] rounded-full blur-[100px] opacity-[0.48] pointer-events-none"
              style={{ backgroundColor: '#A855F7' }}
            />
            {/* Deep Tekkil Brand Navy Accent Orb (Top-Left underflow) */}
            <div 
              className="absolute -top-40 left-0 w-[500px] h-[500px] rounded-full blur-[110px] opacity-[0.35] pointer-events-none"
              style={{ backgroundColor: '#27316F' }}
            />
            {/* Vivid Tekkil Teal / Mint Orb (Right & Behind Mockups) */}
            <div 
              className="absolute top-1/6 -right-20 w-[780px] h-[780px] rounded-full blur-[100px] opacity-[0.52] pointer-events-none"
              style={{ backgroundColor: '#14B09C' }}
            />
            {/* Warm Golden Amber Orb (Bottom-Left) */}
            <div 
              className="absolute -bottom-20 left-5 w-[600px] h-[600px] rounded-full blur-[95px] opacity-[0.42] pointer-events-none"
              style={{ backgroundColor: '#FBBF24' }}
            />
            {/* Vibrant Rose / Coral Orb (Bottom-Right) */}
            <div 
              className="absolute -bottom-20 right-1/4 w-[550px] h-[550px] rounded-full blur-[100px] opacity-[0.38] pointer-events-none"
              style={{ backgroundColor: '#FB7185' }}
            />
            {/* Faint Grid Texture for Modern Architectural Polish */}
            <div 
              className="absolute inset-0 opacity-[0.035] pointer-events-none" 
              style={{
                backgroundImage: 'radial-gradient(#1E293B 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
          </div>

          {/* Glassmorphic border overlay */}
          <div className="absolute inset-0 rounded-[28px] sm:rounded-[36px] md:rounded-[44px] border border-white/80 pointer-events-none z-10" />

          {/* ─── Content ─── */}
          <div className="relative z-10 flex-1 w-full flex flex-col justify-between px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-16 lg:pb-12">
            
            {/* Main Area: Left Copy + Right Phones */}
            <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-8 py-4 sm:py-6 md:py-8">
              
              {/* Left Side: Copy */}
              <div className="w-full flex-1 max-w-2xl xl:max-w-3xl">
                
                {/* Premium Glassmorphic Live Status Pill */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="group inline-flex items-center gap-1.5 sm:gap-3 bg-white/50 hover:bg-white/70 backdrop-blur-md border border-white/60 hover:border-white/80 rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 w-fit max-w-full transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.06)] cursor-default select-none overflow-hidden"
                >
                  {/* Edition Tag with Live Pulse Dot */}
                  <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-0.5 rounded-full bg-white/70 border border-white/80 text-[#1A2672] font-black tracking-wide uppercase text-[9px] sm:text-[10px] shrink-0">
                    <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1A2672] opacity-80" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#1A2672]" />
                    </span>
                    <span>Concours 2026</span>
                  </span>

                  <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-400 shrink-0" />

                  {/* Senegal Flag & Main Label */}
                  <span className="flex items-center gap-1.5 sm:gap-2 text-slate-900 font-semibold text-[10.5px] sm:text-[13px] md:text-sm leading-tight pr-1 sm:pr-0">
                    <SenegalIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[2px] shrink-0 shadow-sm" />
                    <span className="truncate">Plateforme N°1 au Sénégal</span>
                  </span>
                </motion.div>

                {/* High-Contrast Editorial Headline with Split-Text Animation */}
                <motion.h1
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } }
                  }}
                  initial="hidden"
                  animate="visible"
                  className="text-[clamp(2.15rem,5.5vw,4.5rem)] xl:text-[5.25rem] font-black text-[#050814] leading-[1.05] tracking-[-0.04em] mb-6 sm:mb-8 drop-shadow-sm flex flex-col items-start"
                >
                  <span className="flex flex-wrap lg:flex-nowrap gap-x-2.5 sm:gap-x-3.5 xl:gap-x-4 whitespace-normal lg:whitespace-nowrap">
                    {["Transforme", "ta", "préparation"].map((word, i) => (
                      <motion.span 
                        key={i} 
                        variants={{
                          hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
                          visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </span>
                  <span className="flex flex-wrap gap-x-2.5 sm:gap-x-3.5 xl:gap-x-4 mt-1 sm:mt-1.5 lg:mt-0">
                    <motion.span 
                      variants={{
                        hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
                        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="inline-block"
                    >
                      aux
                    </motion.span>
                    <motion.span 
                      variants={{
                        hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
                        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="relative inline-block"
                    >
                      <span className="bg-gradient-to-r from-[#1A2672] to-[#3B28CC] bg-clip-text text-transparent font-black">
                        concours
                      </span>
                      {/* Radiant underglow */}
                      <span 
                        aria-hidden 
                        className="absolute -inset-x-3 -inset-y-1 bg-gradient-to-r from-[#1A2672]/20 to-[#3B28CC]/20 blur-xl -z-10 rounded-full pointer-events-none" 
                      />
                    </motion.span>
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-slate-800 text-[15px] sm:text-lg md:text-[19px] leading-[1.6] max-w-xl mb-8 font-medium"
                >
                  La plateforme intelligente qui s&apos;adapte à ton niveau.{' '}
                  <span className="text-black font-bold">QCM adaptatifs</span>,{' '}
                  <span className="text-black font-bold">flashcards mémorielles</span>,{' '}
                  <span className="inline-block bg-white/60 px-1.5 rounded-md text-[#1A2672] font-extrabold shadow-sm">assistant IA 24/7</span> et suivi de progression pour maîtriser le programme et réussir du premier coup.
                </motion.p>



                {/* Clean 2026 CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-9 w-full sm:w-auto"
                >
                  {/* Primary CTA (Dark Minimal Pill) */}
                  <a
                    href={LOGIN_URL}
                    className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[15px] font-semibold text-white bg-[#111] transition-all duration-300 overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_24px_rgba(20,176,156,0.3)] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center"
                  >
                    <span className="relative z-10 tracking-wide">
                      Se connecter
                    </span>
                    <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0" />
                  </a>

                  {/* Secondary CTA (Glass White Pill) */}
                  <a
                    href="#comment-ca-marche"
                    className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-[15px] font-medium text-[#111] bg-white/90 hover:bg-white backdrop-blur-md border border-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center"
                  >
                    <span className="w-6 h-6 rounded-full bg-black/5 group-hover:bg-[#14B09C]/10 flex items-center justify-center transition-colors duration-300 shrink-0">
                      <Play size={10} weight="Filled" className="text-[#111] group-hover:text-[#14B09C] ml-0.5 transition-colors duration-300" />
                    </span>
                    <span>Voir comment ça marche</span>
                  </a>
                </motion.div>


              </div>

              {/* Right Side: 3 Photoreal iPhone 16 Pro Max Mockups with Floating Proof Pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                className="relative flex-shrink-0 w-full max-w-[500px] sm:max-w-[580px] md:max-w-[640px] lg:w-[600px] xl:w-[680px] h-[380px] xs:h-[420px] sm:h-[480px] md:h-[540px] lg:h-[600px] mx-auto lg:mx-0"
              >
                {/* High-Contrast Multi-Color Mesh Aura behind the phone stack */}
                <div aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] rounded-full bg-gradient-to-br from-[#8B5CF6]/35 via-[#14B09C]/35 to-[#3B82F6]/35 blur-[90px] pointer-events-none" />

                {/* Floating Micro Badge (Top-Right): Success Rate */}
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="hidden sm:inline-flex items-center gap-2 absolute top-4 -right-1 sm:right-2 md:right-4 z-30 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_24px_rgba(0,0,0,0.12)] select-none pointer-events-none"
                >
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                  </span>
                  <span className="text-xs font-black text-slate-900">94%</span>
                  <span className="text-[11px] font-semibold text-slate-600">taux de réussite</span>
                </motion.div>

                {/* Floating Micro Badge (Bottom-Left): Curated Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="hidden sm:inline-flex items-center gap-2 absolute bottom-6 -left-1 sm:left-2 md:left-4 z-30 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_24px_rgba(0,0,0,0.12)] select-none pointer-events-none"
                >
                  <Sparkle size={14} className="text-[#F59E0B]" />
                  <span className="text-xs font-black text-slate-900">+12 000</span>
                  <span className="text-[11px] font-semibold text-slate-600">QCM certifiés</span>
                </motion.div>

                {PHONES.map((phone) => (
                  <ParallaxPhone key={phone.src} phone={phone} mx={mx} my={my} />
                ))}
              </motion.div>

            </div>

          </div>
        </div>

        {/* ─── Overlapping Circular Badge — Decorative downward indicator (Non-clickable, no redirect) ─── */}
        <motion.div
          initial={{ x: "-50%", y: "50%", opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ x: "-50%", y: "50%", opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
          className="absolute bottom-0 left-1/2 z-20 pointer-events-none select-none"
        >
          <div
            aria-hidden="true"
            className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-[#050814] border-[5px] sm:border-[6px] md:border-[8px] border-white flex items-center justify-center text-white cursor-default select-none pointer-events-none"
          >
            {/* Smooth 14s rotating circular SVG text */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_14s_linear_infinite]">
              <defs>
                <path
                  id="circleBadgePath"
                  d="M 50, 50 m -35.5, 0 a 35.5,35.5 0 1,1 71,0 a 35.5,35.5 0 1,1 -71,0"
                  fill="none"
                />
              </defs>
              <text
                fill="#FFFFFF"
                fontSize="7.5"
                fontWeight="800"
                letterSpacing="1.5"
                className="uppercase font-bold tracking-widest select-none"
              >
                <textPath href="#circleBadgePath" startOffset="0%" textLength="216" lengthAdjust="spacing">
                  • COMMENCER MAINTENANT • CONCOURS 2026&#160;
                </textPath>
              </text>
            </svg>

            {/* Radiant Center Arrow pointing straight down in Brand Teal */}
            <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#14B09C] stroke-[2.5]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

