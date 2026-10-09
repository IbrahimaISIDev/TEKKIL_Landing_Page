'use client'

import { useMemo, useRef, useEffect, useCallback } from 'react'
import { motion, useInView, useAnimation, type Variant } from 'framer-motion'

interface SplitTextProps {
  text?: string
  className?: string
  delay?: number
  animationFrom?: Variant
  animationTo?: Variant
  easing?: string | number[]
  threshold?: number
  rootMargin?: string
  textAlign?: 'left' | 'right' | 'center' | 'justify'
  onLetterAnimationComplete?: () => void
}

export function SplitText({
  text = '',
  className = '',
  delay = 50,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'left',
  onLetterAnimationComplete,
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: rootMargin as any, amount: threshold })
  const controls = useAnimation()
  const letters = useMemo(() => text.split(''), [text])

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const handleComplete = useCallback(() => {
    if (onLetterAnimationComplete) {
      onLetterAnimationComplete()
    }
  }, [onLetterAnimationComplete])

  return (
    <span ref={ref} style={{ textAlign, display: 'inline' }} className={className}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: animationFrom as Variant,
            visible: {
              ...animationTo as Variant,
              transition: {
                delay: i * (delay / 1000),
                duration: 0.5,
                ease: [0.2, 0.65, 0.3, 0.9],
              },
            },
          }}
          onAnimationComplete={i === letters.length - 1 ? handleComplete : undefined}
          style={{ display: 'inline-block', willChange: 'transform, opacity' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  )
}
