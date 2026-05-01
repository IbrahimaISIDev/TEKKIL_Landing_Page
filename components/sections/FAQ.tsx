'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FAQ_ITEMS } from '@/lib/constants'

export function FAQ() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionLabel className="mb-4">FAQ</SectionLabel>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary"
            style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '-0.03em' }}
          >
            Questions fréquentes
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="space-y-0">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border-b border-[rgba(8,14,46,0.08)]"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between py-6 text-left group"
                aria-expanded={openIndex === index}
              >
                <span
                  className="text-base md:text-lg font-semibold text-text-primary pr-8 group-hover:text-blue-500 transition-colors"
                  style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                >
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-text-secondary"
                >
                  <ChevronDown size={20} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <motion.p
                      initial={{ y: -8 }}
                      animate={{ y: 0 }}
                      exit={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="pb-6 text-text-secondary font-light leading-relaxed"
                    >
                      {item.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
