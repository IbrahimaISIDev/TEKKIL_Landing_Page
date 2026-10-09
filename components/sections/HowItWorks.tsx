'use client'

import { motion } from 'framer-motion'
import { UserPlus, Zap, TrendingUp, Sparkles, type LucideIcon } from 'lucide-react'

interface StepItem {
  number: string
  badge: string
  title: string
  description: string
  icon: LucideIcon
  color: string
  accentBg: string
}

const TIMELINE_STEPS: StepItem[] = [
  {
    number: '01',
    badge: 'Étape 01',
    title: 'Crée ton profil',
    description: 'Inscris-toi en 30 secondes, choisis ton concours et lance ton programme sur mesure.',
    icon: UserPlus,
    color: '#27316F',
    accentBg: '#F8FAFC',
  },
  {
    number: '02',
    badge: 'Étape 02',
    title: 'Entraîne-toi intelligemment',
    description: 'Enchaîne les QCM officiels chronométrés et pose tes questions au tuteur IA.',
    icon: Zap,
    color: '#F59E0B',
    accentBg: '#FEFBF6',
  },
  {
    number: '03',
    badge: 'Étape 03',
    title: 'Suis ta progression',
    description: 'Visualise tes scores par chapitre, corrige tes lacunes et vise le haut du classement.',
    icon: TrendingUp,
    color: '#14B09C',
    accentBg: '#F0FDF9',
  },
]

export function HowItWorks() {
  return (
    <section 
      id="how-it-works" 
      className="relative py-16 md:py-24 lg:py-28 bg-white overflow-hidden isolate"
      aria-label="Comment ça marche — En 3 étapes vers la réussite"
    >
      {/* ─── Ambient Atmospheric Background Lighting ─── */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Soft Center Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full blur-[130px] opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(20,176,156,0.08) 0%, rgba(39,49,111,0.05) 50%, transparent 70%)',
          }}
        />

        {/* Architectural Dot Grid Texture (matching Pricing & Hero) */}
        <div 
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* ─── Section Header (DA Aligned with AboutUs & Features) ─── */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>Parcours</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050814] tracking-[-0.03em] leading-[1.12] mb-4"
            style={{ fontFamily: 'var(--font-roboto-condensed)' }}
          >
            En 3 étapes vers{' '}
            <span className="bg-gradient-to-r from-[#1A2356] via-[#27316F] to-[#0D9488] bg-clip-text text-transparent">
              la réussite.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            Une méthode simple et directe pour aborder ton concours en toute sérénité.
          </motion.p>
        </div>

        {/* ─── Timeline Container ─── */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Steps List */}
          <div className="space-y-10 lg:space-y-14">
            {TIMELINE_STEPS.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              const isLast = index === TIMELINE_STEPS.length - 1

              return (
                <div key={step.number} className="relative">
                  
                  {/* ───────────────────────────────────────────────────────────── */}
                  {/* DESKTOP TIMELINE CONNECTOR SEGMENT (Between Nodes)           */}
                  {/* ───────────────────────────────────────────────────────────── */}
                  {!isLast && (
                    <div 
                      className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-1/2 h-[calc(100%+3.5rem)] w-[2px] z-10 pointer-events-none rounded-full"
                      style={{
                        background: index === 0 
                          ? 'linear-gradient(to bottom, #27316F 0%, #F59E0B 100%)' 
                          : 'linear-gradient(to bottom, #F59E0B 0%, #14B09C 100%)',
                      }}
                    />
                  )}

                  {/* ───────────────────────────────────────────────────────────── */}
                  {/* DESKTOP LAYOUT (lg & above) : Alternating Zigzag Timeline     */}
                  {/* ───────────────────────────────────────────────────────────── */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center relative">
                    
                    {/* Central Node */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.12 + 0.15 }}
                        className="w-12 h-12 rounded-full bg-white border-2 border-slate-100 shadow-[0_6px_20px_-4px_rgba(15,23,42,0.12)] flex items-center justify-center relative group"
                      >
                        {/* Glow on hover */}
                        <div 
                          className="absolute inset-0 rounded-full blur-[6px] opacity-25 group-hover:opacity-75 transition-opacity duration-300"
                          style={{ backgroundColor: step.color }}
                        />
                        {/* Inner icon disc */}
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white relative z-10 shadow-xs transition-transform duration-300 group-hover:scale-110"
                          style={{
                            background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}ee 100%)`,
                          }}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Step Card: Left Column (when even) */}
                    {isEven ? (
                      <>
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-5%' }}
                          transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                          className="relative"
                        >
                          {/* Horizontal connector arm from card to center node */}
                          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-10 w-10 h-[1px] bg-slate-300 pointer-events-none" />

                          <StepCard step={step} />
                        </motion.div>

                        {/* Empty right column for balance */}
                        <div className="pointer-events-none" />
                      </>
                    ) : (
                      <>
                        {/* Empty left column for balance */}
                        <div className="pointer-events-none order-1" />

                        {/* Step Card: Right Column (when odd) */}
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-5%' }}
                          transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                          className="relative order-2"
                        >
                          {/* Horizontal connector arm from center node to card */}
                          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-10 w-10 h-[1px] bg-slate-300 pointer-events-none" />

                          <StepCard step={step} />
                        </motion.div>
                      </>
                    )}
                  </div>

                  {/* ───────────────────────────────────────────────────────────── */}
                  {/* MOBILE & TABLET LAYOUT (< lg) : Clean Single-Column Timeline  */}
                  {/* ───────────────────────────────────────────────────────────── */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-5%' }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="lg:hidden relative pl-12 sm:pl-14"
                  >
                    {/* Mobile connector line to next node */}
                    {!isLast && (
                      <div 
                        className="absolute left-5 -translate-x-1/2 top-10 -bottom-10 w-[2px] z-10 rounded-full"
                        style={{
                          background: index === 0 
                            ? 'linear-gradient(to bottom, #27316F 0%, #F59E0B 100%)' 
                            : 'linear-gradient(to bottom, #F59E0B 0%, #14B09C 100%)',
                        }}
                      />
                    )}

                    {/* Step Node */}
                    <div className="absolute left-5 top-5 -translate-x-1/2 z-20">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-100 shadow-[0_4px_14px_rgba(15,23,42,0.1)] flex items-center justify-center">
                        <div 
                          className="w-7 h-7 rounded-full flex items-center justify-center text-white shadow-xs"
                          style={{ backgroundColor: step.color }}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                    {/* Step Card */}
                    <StepCard step={step} />
                  </motion.div>

                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

{/* ─── Reusable Épurée & Minimalist Step Card ─── */}
function StepCard({ step }: { step: StepItem }) {
  return (
    <div 
      className="group relative rounded-[20px] md:rounded-[24px] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden isolate"
      style={{
        backgroundColor: step.accentBg,
        boxShadow: '0 4px 18px -4px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(255,255,255,0.7)',
      }}
    >
      {/* Ambient mesh background glow */}
      <div 
        className="absolute top-0 right-0 w-[140%] h-[140%] -translate-y-1/2 translate-x-1/3 rounded-full opacity-[0.10] group-hover:opacity-[0.20] blur-[60px] transition-opacity duration-500 pointer-events-none -z-10"
        style={{ backgroundColor: step.color }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[100%] h-[100%] translate-y-1/3 -translate-x-1/4 rounded-full opacity-[0.05] group-hover:opacity-[0.10] blur-[50px] transition-opacity duration-500 pointer-events-none -z-10"
        style={{ backgroundColor: step.color }}
      />

      {/* Glassmorphic border overlay */}
      <div className="absolute inset-0 rounded-[20px] md:rounded-[24px] border border-white/70 pointer-events-none z-10" />

      {/* Card Header: Step Badge & Faded Step Number */}
      <div className="flex items-center justify-between mb-2.5 relative z-20">
        <span 
          className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-2xs"
          style={{ 
            backgroundColor: `${step.color}15`, 
            color: step.color,
            fontFamily: 'var(--font-roboto-condensed)',
          }}
        >
          {step.badge}
        </span>

        {/* Discreet watermark index number */}
        <span 
          className="text-xl sm:text-2xl font-black font-mono tracking-tight select-none pointer-events-none transition-colors duration-300"
          style={{ color: `${step.color}35` }}
        >
          {step.number}
        </span>
      </div>

      {/* Card Body */}
      <div className="relative z-20">
        <h3 
          className="text-lg sm:text-xl font-black text-[#050814] tracking-tight leading-snug mb-1.5"
          style={{ fontFamily: 'var(--font-roboto-condensed)' }}
        >
          {step.title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          {step.description}
        </p>
      </div>
    </div>
  )
}
