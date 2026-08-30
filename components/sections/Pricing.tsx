'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles, Zap, Trophy, ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { REGISTER_URL } from '@/lib/urls'

// Chaque pack a son propre prix, indépendant des autres — un pack = un
// concours. De nouveaux packs (avec leur propre prix) s'ajoutent ici au
// fil des sessions de concours ouvertes. `accent` donne à chaque pack sa
// propre identité visuelle (pas de hiérarchie "populaire" entre eux — ce
// sont 3 concours différents, pas 3 niveaux d'offre).
const plans = [
  {
    name: 'Pack CREM',
    subtitle: 'Concours CREM',
    price: '5 900',
    currency: 'FCFA',
    period: '',
    priceNote: '',
    description: 'Préparation complète aux épreuves psychotechniques du concours CREM — filières Verbal et Numérique.',
    features: [
      'Accès complet et intégral au pack',
      'Cours, fiches de lecture et audios',
      'QCM et flashcards illimités',
      'Annales corrigées',
      'Assistant IA Tekkil',
      'Examens blancs',
      'Suivi de progression détaillé',
    ],
    cta: 'Choisir ce pack',
    icon: Zap,
    accent: '#2D7AFF',
  },
  {
    name: 'Pack ENA — Cycle A',
    subtitle: 'Concours ENA, Cycle A',
    price: '6 900',
    currency: 'FCFA',
    period: '',
    priceNote: '',
    description: 'Préparation complète aux épreuves psychotechniques du concours ENA, Cycle A — filières Verbal et Numérique.',
    features: [
      'Accès complet et intégral au pack',
      'Cours, fiches de lecture et audios',
      'QCM et flashcards illimités',
      'Annales corrigées',
      'Assistant IA Tekkil',
      'Examens blancs',
      'Suivi de progression détaillé',
    ],
    cta: 'Choisir ce pack',
    icon: Sparkles,
    accent: '#8B5CF6',
  },
  {
    name: 'Pack ENA — Cycle B',
    subtitle: 'Concours ENA, Cycle B',
    price: '6 900',
    currency: 'FCFA',
    period: '',
    priceNote: '',
    description: 'Préparation complète aux épreuves psychotechniques du concours ENA, Cycle B — filières Verbal et Numérique.',
    features: [
      'Accès complet et intégral au pack',
      'Cours, fiches de lecture et audios',
      'QCM et flashcards illimités',
      'Annales corrigées',
      'Assistant IA Tekkil',
      'Examens blancs',
      'Suivi de progression détaillé',
    ],
    cta: 'Choisir ce pack',
    icon: Trophy,
    accent: '#F97316',
  },
]

export function Pricing() {
  return (
    <section id="tarifs" className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
      {/* Subtle background gradient */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(43,82,238,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel className="mb-4">Tarifs</SectionLabel>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '-0.03em' }}
          >
            Choisis ton plan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Un pack par concours, chacun avec son propre tarif — un aperçu de 3 contenus gratuits avant d&apos;acheter
          </motion.p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-[24px] bg-white border border-gray-200/80 p-7 md:p-8 pt-8 overflow-hidden"
                style={{
                  boxShadow: '0 1px 2px rgba(8,14,46,0.04), 0 20px 45px -28px rgba(8,14,46,0.18)',
                  transition: 'box-shadow 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                }}
              >
                {/* Barre d'accent — identité du pack */}
                <div
                  className="absolute top-0 inset-x-0 h-[5px]"
                  style={{ background: `linear-gradient(90deg, ${plan.accent}, ${plan.accent}99)` }}
                />

                {/* Plan Header */}
                <div className="flex items-start gap-3.5 mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
                    style={{ backgroundColor: `${plan.accent}14` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: plan.accent }} />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-gray-900 leading-tight"
                      style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                    >
                      {plan.name}
                    </h3>
                    <span
                      className="inline-block mt-1 text-[11px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: `${plan.accent}14`, color: plan.accent }}
                    >
                      {plan.subtitle}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className="text-5xl font-extrabold text-gray-900 tabular-nums"
                      style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '-0.02em' }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-sm font-semibold text-gray-500">
                      {plan.currency}{plan.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${plan.accent}14` }}
                      >
                        <Check className="w-3 h-3" style={{ color: plan.accent }} strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href={REGISTER_URL}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white transition-shadow duration-200"
                  style={{
                    background: `linear-gradient(135deg, ${plan.accent}, ${plan.accent}CC)`,
                    boxShadow: `0 10px 24px -10px ${plan.accent}80`,
                  }}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </motion.a>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          Paiement sécurisé via Orange Money, Wave ou carte bancaire. Achat unique par pack, accès valable jusqu'à la date du concours.
        </motion.p>
      </div>
    </section>
  )
}
