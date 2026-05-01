'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { FEATURES } from '@/lib/constants'

export function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionLabel className="mb-4">Fonctionnalités</SectionLabel>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-4"
            style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '-0.03em' }}
          >
            Tout ce qu&apos;il te faut pour réussir
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-lg font-light max-w-2xl mx-auto"
          >
            Un arsenal complet d&apos;outils intelligents pensé pour les candidats sénégalais.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
