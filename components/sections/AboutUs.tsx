'use client'

import { motion } from 'framer-motion'
import { Target, Rocket, MapPin, type LucideIcon } from 'lucide-react'

interface Pillar {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

const PILLARS: Pillar[] = [
  {
    icon: Target,
    title: 'Notre mission',
    description:
      'Rendre la préparation aux grands concours accessible à tous les candidats sénégalais, quel que soit leur point de départ.',
    color: '#2D7AFF',
  },
  {
    icon: Rocket,
    title: 'Notre approche',
    description:
      'La technologie au service de la pédagogie : QCM adaptatifs, suivi de progression détaillé et contenus pensés pour un apprentissage efficace.',
    color: '#F59E0B',
  },
  {
    icon: MapPin,
    title: 'Pensé pour le Sénégal',
    description:
      'Mode hors-ligne pour les zones à faible connectivité, paiement Mobile Money, et contenus alignés sur les concours réellement ouverts.',
    color: '#10B981',
  },
]

export function AboutUs() {
  return (
    <section id="qui-sommes-nous" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-500 mb-4"
            style={{ fontFamily: 'var(--font-roboto-condensed)' }}
          >
            Qui sommes-nous ?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-4"
            style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '-0.03em' }}
          >
            Démocratiser l&apos;accès aux grands concours
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-lg font-light max-w-2xl mx-auto"
          >
            TEKKIL est né d&apos;un constat simple : réussir un concours national ne devrait pas
            dépendre des moyens dont on dispose pour se préparer. Notre plateforme réunit dans une
            seule application tout ce qu&apos;il faut pour s&apos;entraîner sérieusement, où que l&apos;on
            soit au Sénégal.
          </motion.p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[20px] border border-[rgba(8,14,46,0.07)] p-6 md:p-8"
              >
                <div
                  className="w-11 h-11 md:w-[52px] md:h-[52px] rounded-xl md:rounded-[14px] flex items-center justify-center mb-4 md:mb-5"
                  style={{ backgroundColor: `${pillar.color}15` }}
                >
                  <Icon className="w-5 h-5 md:w-[26px] md:h-[26px]" style={{ color: pillar.color }} />
                </div>
                <h3
                  className="text-base md:text-lg font-semibold text-text-primary mb-2 md:mb-3"
                  style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                >
                  {pillar.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed font-light">
                  {pillar.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
