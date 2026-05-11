'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'

const privacySections = [
  {
    title: 'Données collectées',
    content:
      'Nous collectons uniquement les données nécessaires au fonctionnement de l\'application : nom, adresse email, progression dans les modules, scores aux QCM et préférences de notification. Aucune donnée sensible ou personnelle supplémentaire n\'est requise.',
  },
  {
    title: 'Utilisation des données',
    content:
      'Tes données servent exclusivement à personnaliser ton expérience d\'apprentissage, afficher ta progression et te proposer des recommandations adaptées. Nous ne vendons, ne louons et ne partageons jamais tes données avec des tiers à des fins commerciales.',
  },
  {
    title: 'Stockage & sécurité',
    content:
      'Toutes les données sont chiffrées avec l\'algorithme AES-256 au repos et en transit. Nos serveurs sont hébergés dans des centres de données certifiés ISO 27001. Nous appliquons les standards de sécurité les plus stricts de l\'industrie.',
  },
  {
    title: 'Tes droits',
    content:
      'Tu disposes d\'un droit d\'accès, de rectification et de suppression de tes données personnelles à tout moment. Pour exercer ces droits ou poser des questions sur notre politique de confidentialité, contacte-nous à privacy@tekkil.app.',
  },
  {
    title: 'Nous contacter',
    content:
      'Pour toute question relative à la protection de tes données personnelles, tu peux nous joindre par email à support@tekkil.app. Nous nous engageons à répondre dans un délai de 48 heures ouvrées.',
  },
]

export function Privacy() {
  return (
    <section id="privacy" className="bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionLabel className="mb-4">Confidentialité</SectionLabel>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-4"
            style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '-0.03em' }}
          >
            Politique de confidentialité
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-sm"
          >
            Dernière mise à jour : 30 avril 2026
          </motion.p>
        </div>

        {/* Privacy content */}
        <div className="space-y-10">
          {privacySections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <h3
                className="text-xl font-bold text-text-primary mb-3"
                style={{ fontFamily: 'var(--font-roboto-condensed)' }}
              >
                {section.title}
              </h3>
              <p className="text-text-secondary font-light leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Link to full policy */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-100 text-center"
        >
          <a
            href="/privacy"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0B50DA] hover:underline"
          >
            Lire la politique de confidentialité complète
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
