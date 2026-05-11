'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Sparkles, MessageCircle, Lightbulb, BookOpen } from 'lucide-react'

const AI_FEATURES = [
  {
    icon: MessageCircle,
    title: 'Pose tes questions',
    description: 'Interroge Tekkil AI sur n\'importe quel point du cours. Il répond instantanément.',
  },
  {
    icon: Lightbulb,
    title: 'Explications claires',
    description: 'Des réponses structurées avec des exemples concrets et des jurisprudences.',
  },
  {
    icon: BookOpen,
    title: 'Contextuel',
    description: 'L\'assistant connaît ton cours actuel et adapte ses réponses à ton niveau.',
  },
]

export function AIAssistant() {
  return (
    <section id="ai-assistant" className="bg-blue-900 py-20 md:py-28 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 600px 400px at 30% 50%, rgba(43,82,238,0.15), transparent)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Phone Mockup with Chat */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center order-2 lg:order-1"
          >
            {/* Glow effect */}
            <div
              className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full blur-[80px]"
              style={{
                background: 'radial-gradient(circle, rgba(43,82,238,0.25), transparent)',
              }}
            />

            {/* Phone frame with real screenshot */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div className="relative w-[280px] md:w-[300px] rounded-[40px] p-2 bg-gray-900 shadow-2xl border border-gray-700">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-20" />
                
                {/* Screen with actual screenshot */}
                <div className="w-full rounded-[32px] overflow-hidden bg-white">
                  <Image
                    src="/screenshot-chatbot.png"
                    alt="Tekkil AI — Assistant contextuel"
                    width={390}
                    height={844}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 -right-4 w-4 h-4 rounded-full bg-gold-500"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 -left-6 w-3 h-3 rounded-full bg-blue-400"
            />
          </motion.div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <SectionLabel className="mb-4">Nouveau</SectionLabel>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-gold-500 font-semibold text-lg">Tekkil AI</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '-0.03em' }}
            >
              Ton assistant IA
              <br />
              <span className="gradient-text">personnel</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-300 text-lg font-light leading-relaxed mb-8 max-w-lg"
            >
              Pose tes questions sur le cours en temps réel. Tekkil AI comprend le contexte 
              et t&apos;explique les concepts juridiques avec des exemples concrets et 
              des jurisprudences pertinentes.
            </motion.p>

            {/* AI Features */}
            <div className="space-y-4">
              {AI_FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl transition-all hover:bg-white/5"
                  style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Coming Soon Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30"
            >
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span className="text-gold-500 text-sm font-medium">Disponible prochainement</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
