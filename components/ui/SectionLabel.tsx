'use client'

import { motion } from 'framer-motion'

interface SectionLabelProps {
  children: string
  className?: string
  dark?: boolean
}

export function SectionLabel({ children, className = '', dark = false }: SectionLabelProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        inline-block text-xs font-semibold uppercase tracking-[0.2em]
        ${dark ? 'text-blue-300' : 'text-blue-500'}
        ${className}
      `}
      style={{ fontFamily: 'var(--font-roboto-condensed)' }}
    >
      {children}
    </motion.span>
  )
}
