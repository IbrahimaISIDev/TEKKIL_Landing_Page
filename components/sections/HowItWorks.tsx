'use client'

import { motion } from 'framer-motion'
import { UserPlus, Zap, TrendingUp, type LucideIcon } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { STEPS } from '@/lib/constants'

const iconMap: Record<string, LucideIcon> = {
  UserPlus,
  Zap,
  TrendingUp,
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <SectionLabel className="mb-4">Parcours</SectionLabel>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary"
            style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '-0.03em' }}
          >
            En 3 étapes vers la réussite
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="w-full h-full origin-top"
              style={{
                background: 'linear-gradient(to bottom, #2B52EE, #5478F5, transparent)',
              }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-0">
            {STEPS.map((step, index) => {
              const Icon = iconMap[step.icon] || UserPlus
              const isEven = index % 2 === 0

              return (
                <div key={step.number} className="relative lg:py-12">
                  {/* Mobile/Tablet - Vertical layout */}
                  <div className="lg:hidden">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-10%' }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-6"
                    >
                      {/* Step indicator */}
                      <div className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                          <Icon size={24} className="text-white" />
                        </div>
                        {index < STEPS.length - 1 && (
                          <div className="w-[2px] h-full min-h-[80px] bg-gradient-to-b from-blue-400 to-transparent mt-4" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-8">
                        {/* Step number background */}
                        <span
                          className="absolute -left-2 top-0 text-7xl font-extrabold text-blue-100 select-none pointer-events-none opacity-50"
                          style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                        >
                          {step.number}
                        </span>

                        <h3
                          className="relative text-xl font-bold text-text-primary mb-3"
                          style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                        >
                          {step.title}
                        </h3>
                        <p className="relative text-text-secondary font-light leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Desktop - Zigzag layout */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Left side */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-10%' }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`${isEven ? 'text-right pr-16' : 'order-2 text-left pl-16'}`}
                    >
                      {/* Step number background */}
                      <span
                        className={`block text-[8rem] font-extrabold text-blue-100 select-none leading-none -mb-12 ${
                          isEven ? 'text-right' : 'text-left'
                        }`}
                        style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                      >
                        {step.number}
                      </span>

                      <h3
                        className="text-2xl font-bold text-text-primary mb-3 relative"
                        style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-text-secondary font-light leading-relaxed max-w-md relative ml-auto">
                        {step.description}
                      </p>
                    </motion.div>

                    {/* Center - Icon circle */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className={`absolute left-1/2 -translate-x-1/2 z-10 ${
                        isEven ? '' : 'order-1'
                      }`}
                    >
                      <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-xl border-4 border-white">
                        <Icon size={28} className="text-white" />
                      </div>
                    </motion.div>

                    {/* Spacer for opposite side */}
                    <div className={isEven ? 'order-2' : 'order-1'} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
