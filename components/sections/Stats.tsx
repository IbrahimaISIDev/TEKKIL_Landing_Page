'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { STATS } from '@/lib/constants'

export function Stats() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4"
        >
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                flex flex-col items-center justify-center py-8 px-4
                ${index < STATS.length - 1 ? 'md:border-r md:border-gray-200' : ''}
                ${index < 2 ? 'border-b md:border-b-0 border-gray-200' : ''}
                ${index === 0 || index === 2 ? 'border-r md:border-r border-gray-200 md:border-r-gray-200' : ''}
              `}
            >
              <div
                className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold text-blue-500 mb-2"
                style={{ fontFamily: 'var(--font-roboto-condensed)' }}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  className="inline"
                />
              </div>
              <p className="text-text-secondary text-sm font-light text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
