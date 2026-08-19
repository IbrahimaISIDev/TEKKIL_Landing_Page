'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles, Zap } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { cn } from '@/lib/utils'
import { REGISTER_URL } from '@/lib/urls'

const plans = [
  {
    name: 'Gratuit',
    subtitle: 'Pour découvrir',
    price: '0',
    currency: 'FCFA',
    period: '',
    priceNote: '',
    description: 'Un aperçu de 3 contenus gratuits par pack pour tester la plateforme avant d\'acheter.',
    features: [
      '3 contenus gratuits par pack',
      'Accès à tous les packs en aperçu',
      'Assistant IA Tekkil (limité)',
    ],
    notIncluded: [
      'Accès intégral aux packs',
      'QCM et flashcards illimités',
      'Examens blancs',
    ],
    cta: 'Commencer gratuitement',
    popular: false,
    icon: Zap,
  },
  {
    name: 'Accès Pack',
    subtitle: 'Recommandé',
    price: '5 000',
    currency: 'FCFA',
    period: '/pack',
    priceNote: 'À partir de',
    description: 'Achète un pack et débloque automatiquement l\'intégralité de son contenu, sans abonnement.',
    features: [
      'Accès complet et intégral au pack acheté',
      'Cours, fiches de lecture et audios',
      'QCM et flashcards illimités',
      'Annales corrigées',
      'Assistant IA Tekkil',
      'Examens blancs',
      'Suivi de progression détaillé',
    ],
    notIncluded: [],
    cta: 'Choisir un pack',
    popular: true,
    icon: Sparkles,
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
            Commence gratuitement, puis achète un pack pour débloquer tout son contenu
          </motion.p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  'relative rounded-2xl p-8 transition-all duration-300',
                  plan.popular
                    ? 'bg-blue-900 text-white shadow-2xl shadow-blue-900/20 scale-[1.02]'
                    : 'bg-white border border-gray-200 hover:border-blue-200 hover:shadow-lg'
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span 
                      className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                      style={{ 
                        background: 'linear-gradient(135deg, #F9C623, #FBD354)',
                        color: '#080E2E'
                      }}
                    >
                      Recommande
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center',
                      plan.popular 
                        ? 'bg-white/10' 
                        : 'bg-blue-50'
                    )}
                  >
                    <Icon 
                      className={cn(
                        'w-5 h-5',
                        plan.popular ? 'text-gold-500' : 'text-blue-500'
                      )} 
                      style={plan.popular ? { color: '#F9C623' } : {}}
                    />
                  </div>
                  <div>
                    <h3 
                      className={cn(
                        'text-xl font-bold',
                        plan.popular ? 'text-white' : 'text-gray-900'
                      )}
                      style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                    >
                      {plan.name}
                    </h3>
                    <p className={cn(
                      'text-sm',
                      plan.popular ? 'text-blue-200' : 'text-gray-500'
                    )}>
                      {plan.subtitle}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {plan.priceNote && (
                    <p className={cn(
                      'text-xs font-medium mb-1',
                      plan.popular ? 'text-blue-200' : 'text-gray-500'
                    )}>
                      {plan.priceNote}
                    </p>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span
                      className={cn(
                        'text-4xl md:text-5xl font-extrabold',
                        plan.popular ? 'text-white' : 'text-gray-900'
                      )}
                      style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                    >
                      {plan.price}
                    </span>
                    <span className={cn(
                      'text-sm font-medium',
                      plan.popular ? 'text-blue-200' : 'text-gray-500'
                    )}>
                      {plan.currency}{plan.period}
                    </span>
                  </div>
                  <p className={cn(
                    'mt-2 text-sm',
                    plan.popular ? 'text-blue-200' : 'text-gray-500'
                  )}>
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div 
                        className={cn(
                          'w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5',
                          plan.popular 
                            ? 'bg-green-400/20' 
                            : 'bg-green-50'
                        )}
                      >
                        <Check 
                          className={cn(
                            'w-3 h-3',
                            plan.popular ? 'text-green-400' : 'text-green-500'
                          )} 
                        />
                      </div>
                      <span className={cn(
                        'text-sm',
                        plan.popular ? 'text-blue-100' : 'text-gray-600'
                      )}>
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 opacity-50">
                      <div 
                        className={cn(
                          'w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5',
                          plan.popular 
                            ? 'bg-white/10' 
                            : 'bg-gray-100'
                        )}
                      >
                        <span className="w-2 h-0.5 bg-current rounded" />
                      </div>
                      <span className={cn(
                        'text-sm line-through',
                        plan.popular ? 'text-blue-200' : 'text-gray-400'
                      )}>
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
                  className={cn(
                    'flex w-full items-center justify-center py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200',
                    plan.popular
                      ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-blue-900 hover:shadow-lg hover:shadow-gold-500/25'
                      : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25'
                  )}
                  style={plan.popular ? {
                    background: 'linear-gradient(135deg, #F9C623, #FBD354)',
                    color: '#080E2E'
                  } : {}}
                >
                  {plan.cta}
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
