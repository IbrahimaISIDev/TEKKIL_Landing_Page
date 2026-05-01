'use client'

import { motion } from 'framer-motion'
import {
  Brain,
  BarChart3,
  Layers,
  BookOpen,
  Sparkles,
  WifiOff,
  type LucideIcon,
} from 'lucide-react'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  color: string
  index: number
}

const iconMap: Record<string, LucideIcon> = {
  Brain,
  BarChart3,
  Layers,
  BookOpen,
  Sparkles,
  WifiOff,
}

export function FeatureCard({ icon, title, description, color, index }: FeatureCardProps) {
  const Icon = iconMap[icon] || Brain

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-[16px] md:rounded-[20px] border border-[rgba(8,14,46,0.07)] p-5 md:p-8 cursor-pointer"
      style={{
        transition: 'box-shadow 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      {/* Top accent bar that reveals on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px] origin-left"
        style={{ backgroundColor: color }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon container */}
      <motion.div
        className="w-11 h-11 md:w-[52px] md:h-[52px] rounded-xl md:rounded-[14px] flex items-center justify-center mb-4 md:mb-5"
        style={{ backgroundColor: `${color}15` }}
        whileHover={{ rotate: 5, scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="w-5 h-5 md:w-[26px] md:h-[26px]" style={{ color }} />
      </motion.div>

      {/* Title */}
      <h3
        className="text-base md:text-lg font-semibold text-text-primary mb-2 md:mb-3"
        style={{ fontFamily: 'var(--font-roboto-condensed)' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed font-light line-clamp-3 md:line-clamp-none">
        {description}
      </p>

      {/* Hover shadow effect via CSS class */}
      <style jsx>{`
        .group:hover {
          box-shadow: 0 20px 60px rgba(8, 14, 46, 0.12);
        }
      `}</style>
    </motion.div>
  )
}
