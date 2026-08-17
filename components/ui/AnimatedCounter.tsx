'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from '@/hooks/useInView'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  duration?: number
  className?: string
}

/**
 * Counter component that animates from 0 to target value when scrolled into view
 * Uses requestAnimationFrame for smooth animation with easeOutQuad easing
 */
export function AnimatedCounter({
  target,
  suffix = '',
  duration = 2000,
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [ref, isInView] = useInView<HTMLSpanElement>({ threshold: 0.5 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()
    const startValue = 0

    // Ease-out quadratic function for natural deceleration
    const easeOutQuad = (t: number): number => t * (2 - t)

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuad(progress)
      const currentValue = Math.floor(startValue + (target - startValue) * easedProgress)

      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, target, duration])

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString('fr-FR')}
      {suffix && <span className="text-gold-500">{suffix}</span>}
    </span>
  )
}
