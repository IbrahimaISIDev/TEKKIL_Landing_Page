'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  variant?: Variants
  delay?: number
  className?: string
}

const defaultVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function ScrollReveal({
  children,
  variant = defaultVariant,
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      variants={variant}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  )
}
