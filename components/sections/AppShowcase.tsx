'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'

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
        <div className="text-center mb-16">
          <SectionLabel className="mb-4">Aperçu</SectionLabel>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-4"
            style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '-0.03em' }}
          >
            Une interface pensée pour toi
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-lg font-light max-w-2xl mx-auto"
          >
            Navigue facilement entre tes cours, tes quiz et tes statistiques.
            Tout est conçu pour maximiser ton temps de révision.
          </motion.p>
        </div>

        {/* Screenshots Grid - Horizontal scroll on mobile */}
        <div className="flex justify-start md:justify-center items-end gap-4 md:gap-8 overflow-x-auto pb-4 px-4 -mx-4 md:mx-0 md:px-0 md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide">
          {SCREENSHOTS.map((screenshot, index) => (
            <motion.div
              key={screenshot.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative group flex-shrink-0 snap-center ${
                index === 1 ? 'z-10' : 'z-0'
              }`}
            >
              {/* Phone frame */}
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-[28px] md:rounded-[32px] p-1 md:p-1.5 bg-gray-900 shadow-2xl ${
                  index === 1 
                    ? 'w-[180px] md:w-[280px]' 
                    : 'w-[150px] md:w-[240px] opacity-90'
                }`}
                style={{
                  boxShadow: index === 1 
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.35)' 
                    : '0 15px 30px -8px rgba(0, 0, 0, 0.25)',
                }}
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
                    className="w-full h-auto"
                  />
                </div>

                {/* Reflection effect */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              </motion.div>

              {/* Label */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="mt-4 text-center"
              >
                <span className={`text-sm font-medium ${
                  index === 1 ? 'text-blue-500' : 'text-text-secondary'
                }`}>
                  {screenshot.label}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { value: 'CREM, ENA...', label: 'Concours nationaux' },
            { value: '75%', label: 'Progression visible' },
            { value: '5+', label: 'Formats de contenu' },
            { value: '24/7', label: 'Accès illimité' },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <p 
                className="text-2xl md:text-3xl font-bold text-blue-500 mb-1"
                style={{ fontFamily: 'var(--font-roboto-condensed)' }}
              >
                {item.value}
              </p>
              <p className="text-text-secondary text-sm">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
