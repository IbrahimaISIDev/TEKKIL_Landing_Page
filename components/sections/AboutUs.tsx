'use client'

import { motion } from 'framer-motion'
import { Target, Rocket, MapPoint, ArrowRight, type IconComponent } from 'reicon-react'
import { Sparkles } from 'lucide-react'

interface Pillar {
  number: string
  icon: IconComponent
  title: string
  description: string
  tag: string
  color: string
  bgGlow: string
}

const PILLARS: Pillar[] = [
  {
    number: '01',
    icon: Target,
    title: 'Notre mission',
    description:
      'Rendre la préparation aux grands concours accessible à tous les candidats sénégalais, quel que soit leur point de départ.',
    tag: 'Égalité des chances',
    color: '#2b326f',
    bgGlow: 'rgba(43, 50, 111, 0.1)',
  },
  {
    number: '02',
    icon: Rocket,
    title: 'Notre approche',
    description:
      'La technologie au service de la pédagogie : QCM adaptatifs, suivi de progression détaillé et contenus pensés pour un apprentissage efficace.',
    tag: 'Pédagogie intelligente',
    color: '#F59E0B',
    bgGlow: 'rgba(245, 158, 11, 0.1)',
  },
  {
    number: '03',
    icon: MapPoint,
    title: 'Pensé pour le Sénégal',
    description:
      'Mode hors-ligne pour les zones à faible connectivité, paiement Mobile Money, et contenus alignés sur les concours réellement ouverts.',
    tag: '100% Adapté local',
    color: '#25b09d',
    bgGlow: 'rgba(37, 176, 157, 0.1)',
  },
]

export function AboutUs() {
  return (
    <section id="qui-sommes-nous" className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(37,176,157,0.12) 0%, rgba(43,50,111,0.08) 50%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>Qui sommes-nous ?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050814] tracking-[-0.03em] leading-[1.12] mb-5"
          >
            Démocratiser l&apos;accès aux{' '}
            <span className="bg-gradient-to-r from-[#1A2356] via-[#27316F] to-[#0D9488] bg-clip-text text-transparent">
              grands concours.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            TEKKIL est né d&apos;un constat simple : réussir un concours national ne devrait pas
            dépendre des moyens dont on dispose pour se préparer. Notre plateforme réunit dans une
            seule application tout ce qu&apos;il faut pour s&apos;entraîner sérieusement,{' '}
            <span className="font-semibold text-slate-900">où que l&apos;on soit au Sénégal</span>.
          </motion.p>
        </div>

        {/* Pillars Cards */}
        {/* Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-[24px] md:rounded-[28px] p-6 md:p-7 cursor-pointer overflow-hidden isolate transition-transform duration-500 hover:-translate-y-2"
                style={{
                  backgroundColor: '#f8fafc',
                  boxShadow: '0 4px 20px -4px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.6)',
                }}
              >
                {/* Mesh Gradient Backgrounds */}
                <div 
                  className="absolute top-0 right-0 w-[150%] h-[150%] -translate-y-1/2 translate-x-1/4 rounded-full opacity-[0.12] group-hover:opacity-[0.25] blur-[80px] transition-opacity duration-700 pointer-events-none -z-10"
                  style={{ backgroundColor: pillar.color }}
                />
                <div 
                  className="absolute bottom-0 left-0 w-[100%] h-[100%] translate-y-1/3 -translate-x-1/4 rounded-full opacity-[0.08] group-hover:opacity-[0.15] blur-[60px] transition-opacity duration-700 pointer-events-none -z-10"
                  style={{ backgroundColor: pillar.color }}
                />
                
                {/* Glassmorphic border overlay */}
                <div className="absolute inset-0 rounded-[24px] md:rounded-[28px] border border-white/60 pointer-events-none z-10" />

                {/* Content Container */}
                <div className="relative z-20 flex flex-col h-full justify-between gap-6 md:gap-8">
                  
                  {/* Top Section: Number & Large Icon */}
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-bold text-slate-400 font-mono tracking-wider">
                      {pillar.number}
                    </span>
                    
                    <motion.div
                      className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center bg-white/40 backdrop-blur-md border border-white/50 shadow-sm"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Icon className="w-7 h-7 md:w-8 md:h-8 opacity-80" style={{ color: pillar.color }} />
                    </motion.div>
                  </div>

                  {/* Bottom Section: Text Content */}
                  <div className="flex items-end justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3
                          className="text-lg md:text-xl font-bold text-slate-900 leading-tight tracking-tight"
                          style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                        >
                          {pillar.title}
                        </h3>
                        {pillar.tag && (
                          <span
                            className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap"
                            style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                          >
                            {pillar.tag}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-sm text-slate-600 font-light leading-relaxed max-w-[95%]">
                        {pillar.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-black transition-all duration-300 shadow-md">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
                
                {/* Soft Hover Shadow */}
                <style jsx>{`
                  .group:hover {
                    box-shadow: 0 20px 40px -10px rgba(8, 14, 46, 0.08), inset 0 0 0 1px rgba(255,255,255,0.8);
                  }
                `}</style>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
