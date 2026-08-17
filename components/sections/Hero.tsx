'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { LogIn, Play, Check, ChevronDown } from 'lucide-react'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -30])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-blue-900 overflow-hidden">
      {/* Background Effects with Parallax */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        {/* Primary radial gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 800px 600px at 70% 50%, rgba(43,82,238,0.15), transparent)',
          }}
        />
        {/* Secondary gold gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 400px 400px at 10% 80%, rgba(249,198,35,0.08), transparent)',
          }}
        />
        {/* Animated floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/20"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
        {/* Noise overlay */}
        <div className="noise-overlay" />
        {/* Dot pattern */}
        <div className="absolute inset-0 dot-pattern" />
      </motion.div>

      <motion.div style={{ y: contentY, opacity }} className="relative max-w-7xl mx-auto px-5 md:px-8 pt-28 md:pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          {/* Left Content */}
          <motion.div style={{ y: contentY }} className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 md:mb-8"
              style={{
                background: 'rgba(43,82,238,0.12)',
                border: '1px solid rgba(43,82,238,0.25)',
              }}
            >
              <span className="text-lg">🇸🇳</span>
              <span className="text-blue-300 text-sm">Fait pour les candidats sénégalais</span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.4rem,7vw,5rem)] font-extrabold text-white leading-[1.0] tracking-tight mb-6"
              style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '-0.03em' }}
            >
              Transforme ta
              <br />
              préparation aux
              <br />
              <span className="gradient-text">concours</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              La plateforme intelligente qui s&apos;adapte à ton niveau.
              QCM adaptatifs, flashcards, assistant IA et suivi de progression —
              que tu prépares le CREM, l&apos;ENA ou un autre concours national,
              tout pour réussir du premier coup.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a
                href="https://app.tekkilapp.com/login"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-400 hover:bg-blue-300 text-white px-8 py-4 rounded-xl text-base font-medium transition-all"
                style={{
                  boxShadow: '0 4px 24px rgba(43,82,238,0.4)',
                }}
              >
                <LogIn size={20} />
                Se connecter
              </motion.a>

              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-white px-6 py-4 rounded-xl text-base font-medium transition-all"
                style={{
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <Play size={18} />
                Voir comment ça marche
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2"
            >
              {[
                'Gratuit pour commencer',
                'Mode hors-ligne',
                'Assistant IA inclus',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check size={16} className="text-emerald-400" />
                  <span className="text-gray-400 text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Phone Mockup with Real Screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: phoneY }}
            className="relative flex items-center justify-center perspective-1000"
          >
            {/* Glow effect behind phone */}
            <div
              className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full blur-[80px]"
              style={{
                background: 'radial-gradient(circle, rgba(43,82,238,0.3), transparent)',
              }}
            />

            {/* Phone mockup with real screenshot */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              {/* Phone frame */}
              <div className="relative w-[280px] md:w-[320px] bg-gray-900 rounded-[40px] p-2 shadow-2xl border border-gray-700">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-20" />
                
                {/* Screen with actual app screenshot */}
                <div className="w-full rounded-[32px] overflow-hidden bg-white">
                  <Image
                    src="/screenshot-home.png"
                    alt="Tekkil App — Écran d'accueil"
                    width={390}
                    height={844}
                    className="w-full h-auto"
                    priority
                  />
                </div>

                {/* Subtle reflection */}
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Decorative orbs */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-20 -left-10 w-4 h-4 rounded-full bg-gold-500"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute bottom-32 -right-8 w-3 h-3 rounded-full bg-blue-400"
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-40 right-0 w-2 h-2 rounded-full bg-blue-300"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs">Découvrir</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
