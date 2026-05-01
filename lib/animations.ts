import type { Variants } from 'framer-motion'

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
}

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

// Spring physics for hover effects
export const springTransition = {
  type: 'spring',
  stiffness: 400,
  damping: 25,
}

// Cubic bezier for smooth card hover
export const cardSpring = {
  transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
}

// Parallax effect for scroll-linked animations
export const parallaxY = (offset: number = 50) => ({
  initial: { y: offset },
  whileInView: { y: 0 },
  viewport: { once: false, amount: 0.3 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
})

// Blur reveal animation
export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

// Rotate in animation for icons
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -15, scale: 0.8 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
}

// Magnetic hover effect config
export const magneticHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.98 },
}

// Smooth number counter config
export const counterConfig = {
  duration: 2,
  ease: [0.22, 1, 0.36, 1] as const,
}

// Stagger for grid items
export const gridStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
}

// Mobile-optimized fade (shorter duration)
export const mobileFade: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}
