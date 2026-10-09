'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X, ArrowRight, Sparkles } from 'lucide-react'
import { FAQ_ITEMS } from '@/lib/constants'

export function FAQ() {
  // First item open by default for immediate engagement (or item index 1 like reference)
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      id="faq" 
      className="relative py-20 md:py-28 lg:py-32 bg-[#F1F5F9] overflow-hidden isolate"
      aria-label="Foire aux questions TEKKIL"
    >
      {/* ─── Elegant Hairline Dividers ─── */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* ─── Rich Multi-Color Atmospheric Mesh Gradient (Matching other sections) ─── */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* CSS Mesh Gradient Multi-Stop Wash */}
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

        {/* Vivid Royal / Sky Blue Orb (Top-Left) */}
        <div 
          className="absolute -top-20 -left-20 w-[640px] h-[640px] rounded-full blur-[110px] opacity-[0.45]"
          style={{ backgroundColor: '#60A5FA' }}
        />
        {/* TEKKIL Mint / Teal Glow (Top-Right) */}
        <div 
          className="absolute -top-16 -right-24 w-[680px] h-[680px] rounded-full blur-[115px] opacity-[0.42]"
          style={{ backgroundColor: '#14B09C' }}
        />
        {/* Soft Violet / Indigo (Center-Right) */}
        <div 
          className="absolute top-1/3 right-1/4 w-[520px] h-[520px] rounded-full blur-[125px] opacity-[0.25]"
          style={{ backgroundColor: '#818CF8' }}
        />
        {/* Warm Golden Amber Accent (Bottom-Left) */}
        <div 
          className="absolute -bottom-16 -left-12 w-[520px] h-[520px] rounded-full blur-[110px] opacity-[0.30]"
          style={{ backgroundColor: '#FBBF24' }}
        />
        {/* Deep TEKKIL Brand Navy (Bottom-Right) */}
        <div 
          className="absolute -bottom-24 right-5 w-[650px] h-[650px] rounded-full blur-[130px] opacity-[0.32]"
          style={{ backgroundColor: '#27316F' }}
        />

        {/* Subtle Architectural Dot Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 25%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 25%, transparent 85%)',
          }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Section Header (Modern 2026 Title) ─── */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-2xs text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>Questions Fréquentes</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B132B] tracking-[-0.03em] leading-tight mb-3 sm:mb-4"
            style={{ fontFamily: 'var(--font-roboto-condensed)' }}
          >
            Tout ce que tu dois{' '}
            <span className="bg-gradient-to-r from-[#1A2356] via-[#27316F] to-[#0D9488] bg-clip-text text-transparent">
              savoir.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed"
          >
            Des réponses claires et directes pour démarrer ta préparation en toute sérénité.
          </motion.p>
        </div>

        {/* ─── Modern 2026 Pill Accordion Cards (Matching Reference) ─── */}
        <div className="flex flex-col gap-3 sm:gap-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            const itemNumber = index + 1

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="w-full transition-all duration-300"
              >
                {isOpen ? (
                  /* ── OPEN / ACTIVE CARD (Iridescent border + white body) ── */
                  <div className="relative rounded-[26px] sm:rounded-[32px] p-[1.5px] bg-gradient-to-r from-[#27316F]/70 via-[#14B09C] to-[#818CF8]/80 shadow-[0_16px_40px_-12px_rgba(20,176,156,0.18),0_6px_20px_-4px_rgba(39,49,111,0.08)] transition-all">
                    <div className="bg-white rounded-[24.5px] sm:rounded-[30.5px] p-5 sm:p-6 md:p-7">
                      
                      {/* Top Trigger Header */}
                      <button
                        type="button"
                        onClick={() => toggleItem(index)}
                        className="w-full flex items-center justify-between gap-3 text-left cursor-pointer group"
                        aria-expanded="true"
                      >
                        <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2">
                          {/* Number Badge */}
                          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-[10px] bg-slate-100 border border-slate-200/90 flex items-center justify-center text-xs sm:text-[13px] font-bold text-slate-700 shrink-0 shadow-2xs">
                            {itemNumber}
                          </span>

                          {/* Question Title */}
                          <h3
                            className="text-sm sm:text-base md:text-[17px] font-bold text-slate-900 leading-snug group-hover:text-[#27316F] transition-colors"
                            style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                          >
                            {item.question}
                          </h3>
                        </div>

                        {/* Iridescent Gradient Close Ring Button */}
                        <div className="shrink-0 p-[1.5px] rounded-full bg-gradient-to-tr from-[#27316F] via-[#14B09C] to-[#818CF8] shadow-2xs group-hover:scale-105 active:scale-95 transition-transform">
                          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center text-slate-700 group-hover:text-slate-950 transition-colors">
                            <X className="w-4 h-4 stroke-[2.2]" />
                          </div>
                        </div>
                      </button>

                      {/* Animated Answer Body */}
                      <AnimatePresence initial={false}>
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3.5 sm:pt-4 pl-10.5 sm:pl-12 pr-1 sm:pr-4">
                            <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-600 font-normal leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      </AnimatePresence>

                    </div>
                  </div>
                ) : (
                  /* ── CLOSED CARD (Smooth pill capsule with dark plus button) ── */
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="w-full group rounded-[22px] sm:rounded-full bg-white/80 hover:bg-white/95 backdrop-blur-md border border-white/80 hover:border-white shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-3 text-left cursor-pointer transition-all duration-200 hover:shadow-md"
                    aria-expanded="false"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-2">
                      {/* Number Badge */}
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-[10px] bg-white/90 border border-slate-200/80 flex items-center justify-center text-xs sm:text-[13px] font-semibold text-slate-500 shrink-0 shadow-2xs group-hover:text-slate-700 group-hover:border-slate-300 transition-colors">
                        {itemNumber}
                      </span>

                      {/* Question Text */}
                      <h3
                        className="text-xs sm:text-sm md:text-[15px] font-semibold text-slate-800 leading-snug group-hover:text-slate-950 transition-colors"
                        style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                      >
                        {item.question}
                      </h3>
                    </div>

                    {/* Dark Circular Plus Button */}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0F172A] group-hover:bg-[#1A2356] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 active:scale-95 transition-all">
                      <Plus className="w-4 h-4 stroke-[2.2]" />
                    </div>
                  </button>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* ─── Footer Assistance (Matching Reference: "Have any other questions? Contact Us ->") ─── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Tu as une autre question ?{' '}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-bold text-[#1A2356] hover:text-[#0D9488] underline underline-offset-4 decoration-slate-300 hover:decoration-[#0D9488] transition-all ml-1 group"
            >
              <span>Contacte-nous</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  )
}
