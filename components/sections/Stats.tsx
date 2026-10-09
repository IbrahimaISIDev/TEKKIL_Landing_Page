'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { STATS } from '@/lib/constants'

export function Stats() {
  return (
    <section className="bg-white py-10 md:py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[32px] md:rounded-[40px] p-8 md:p-12 lg:p-16 overflow-hidden border border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-[0_20px_80px_-20px_rgba(8,14,46,0.08)] isolate"
        >
          {/* Subtle ambient lighting inside the container */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b326f]/[0.03] via-[#25b09d]/[0.03] to-[#F59E0B]/[0.03] pointer-events-none -z-10" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#2b326f]/5 rounded-full blur-[60px] pointer-events-none -z-10" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#25b09d]/5 rounded-full blur-[60px] pointer-events-none -z-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            {STATS.map((stat, index) => {
              // Assign distinct brand colors to each stat for a premium feel
              const gradient = 
                index === 0 ? 'linear-gradient(135deg, #2b326f 0%, #515dc2 100%)' :
                index === 1 ? 'linear-gradient(135deg, #F59E0B 0%, #fcd34d 100%)' :
                'linear-gradient(135deg, #25b09d 0%, #5eead4 100%)';

              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center pt-10 first:pt-0 md:pt-0 md:px-8 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold mb-3 tracking-tight leading-none"
                    style={{ 
                      fontFamily: 'var(--font-roboto-condensed)',
                      background: gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      className="inline-block"
                    />
                  </motion.div>
                  <p className="text-slate-500 text-sm md:text-[15px] font-medium tracking-[0.1em] uppercase text-center group-hover:text-slate-800 transition-colors duration-300">
                    {stat.label}
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
