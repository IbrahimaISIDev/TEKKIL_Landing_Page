'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Smartphone } from 'lucide-react'

const SCREENSHOTS = [
  {
    src: '/screenshot-cours.png',
    alt: 'Page cours — Droit Administratif',
    label: 'Cours structurés',
  },
  {
    src: '/screenshot-qcm.png',
    alt: 'QCM avec timer et progression',
    label: 'QCM chronométrés',
  },
  {
    src: '/screenshot-flashcards.png',
    alt: 'Mode Flashcards — Révision espacée',
    label: 'Flashcards',
  },
]

export function AppShowcase() {
  return (
    <section className="bg-gray-50 py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-5"
          >
            <Smartphone className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>Aperçu de l&apos;Application</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050814] tracking-[-0.03em] leading-[1.12] mb-5"
          >
            Une interface pensée pour{' '}
            <span className="bg-gradient-to-r from-[#1A2356] via-[#27316F] to-[#0D9488] bg-clip-text text-transparent">
              ta réussite.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Navigue facilement entre tes cours, tes quiz et tes statistiques. Tout est conçu pour maximiser ton temps et ton efficacité de révision.
          </motion.p>
        </div>
      </div>

      {/* Infinite Screenshots Loop */}
      <div className="relative w-full overflow-hidden py-10 md:py-16">
        {/* Marquee Track */}
        <motion.div
          className="flex gap-8 md:gap-12 items-end"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 20, // Adjust speed here
            repeat: Infinity,
          }}
          style={{ width: 'max-content' }}
        >
          {/* We duplicate the screenshots array to make the loop seamless */}
          {[...SCREENSHOTS, ...SCREENSHOTS, ...SCREENSHOTS, ...SCREENSHOTS].map((screenshot, index) => (
            <div
              key={`${screenshot.label}-${index}`}
              className="relative group flex-shrink-0 flex flex-col items-center"
            >
              {/* Phone frame */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-[28px] md:rounded-[32px] p-1 md:p-1.5 bg-gray-900 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] w-[200px] md:w-[260px]"
              >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-b-xl z-20" />
                
                {/* Screen */}
                <div className="w-full rounded-[26px] overflow-hidden bg-white">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={390}
                    height={844}
                    className="w-full h-auto object-cover pointer-events-none"
                  />
                </div>

                {/* Reflection effect */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/15 to-transparent pointer-events-none" />
              </motion.div>

              {/* Label */}
              <div className="mt-6 text-center">
                <span className="text-sm md:text-base font-bold text-slate-700 tracking-wide">
                  {screenshot.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-5%' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-28 relative rounded-[28px] md:rounded-[36px] p-6 md:p-10 overflow-hidden border border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(8,14,46,0.06)] isolate"
        >
          {/* Subtle ambient lighting */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b326f]/[0.02] via-[#25b09d]/[0.02] to-[#F59E0B]/[0.02] pointer-events-none -z-10" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y-0 md:divide-x divide-slate-200/70">
            {[
              { value: 'CREM, ENA...', label: 'Concours nationaux' },
              { value: '75%', label: 'Progression visible' },
              { value: '5+', label: 'Formats de contenu' },
              { value: '24/7', label: 'Accès illimité' },
            ].map((item, index) => {
              // Assign distinct brand gradients
              const gradient = 
                index % 4 === 0 ? 'linear-gradient(135deg, #2b326f 0%, #515dc2 100%)' :
                index % 4 === 1 ? 'linear-gradient(135deg, #F59E0B 0%, #fcd34d 100%)' :
                index % 4 === 2 ? 'linear-gradient(135deg, #25b09d 0%, #5eead4 100%)' :
                'linear-gradient(135deg, #4f46e5 0%, #818cf8 100%)';

              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center group px-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 tracking-tight"
                    style={{ 
                      fontFamily: 'var(--font-roboto-condensed)',
                      background: gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {item.value}
                  </motion.div>
                  <p className="text-slate-500 text-xs md:text-sm font-medium tracking-wider uppercase text-center group-hover:text-slate-800 transition-colors duration-300">
                    {item.label}
                  </p>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
