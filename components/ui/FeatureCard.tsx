'use client'

import { motion } from 'framer-motion'
import {
  Cpu,
  ChartSquare,
  Layers,
  BookOpen,
  Sparkles,
  WifiOff,
  CupStar,
  FileCheck,
  FileText,
  Headphones,
  ArrowRight,
  type IconComponent,
} from 'reicon-react'

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  color: string
  index: number
  badge?: string
}

const iconMap: Record<string, IconComponent> = {
  Brain: Cpu,
  BarChart3: ChartSquare,
  Layers,
  BookOpen,
  Sparkles,
  WifiOff,
  Trophy: CupStar,
  FileCheck,
  FileText,
  Headphones,
}

export function FeatureCard({ icon, title, description, color, index, badge }: FeatureCardProps) {
  const Icon = iconMap[icon] || Cpu

  // Format index to be like 01, 02, etc.
  const formattedIndex = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-[24px] md:rounded-[28px] p-6 md:p-7 cursor-pointer overflow-hidden isolate transition-transform duration-500 hover:-translate-y-2"
      style={{
        backgroundColor: '#f8fafc',
        boxShadow: '0 4px 20px -4px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.6)',
      }}
    >
      {/* Mesh Gradient Backgrounds */}
      <div 
        className="absolute top-0 right-0 w-[150%] h-[150%] -translate-y-1/2 translate-x-1/4 rounded-full opacity-[0.12] group-hover:opacity-[0.25] blur-[80px] transition-opacity duration-700 pointer-events-none -z-10"
        style={{ backgroundColor: color }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[100%] h-[100%] translate-y-1/3 -translate-x-1/4 rounded-full opacity-[0.08] group-hover:opacity-[0.15] blur-[60px] transition-opacity duration-700 pointer-events-none -z-10"
        style={{ backgroundColor: color }}
      />
      
      {/* Glassmorphic border overlay to give it a rich feel */}
      <div className="absolute inset-0 rounded-[24px] md:rounded-[28px] border border-white/60 pointer-events-none z-10" />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col h-full justify-between gap-6 md:gap-8">
        
        {/* Top Section: Number & Large Icon */}
        <div className="flex justify-between items-start">
          <span className="text-sm font-bold text-slate-400 font-mono tracking-wider">
            {formattedIndex}
          </span>
          
          <motion.div
            className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center bg-white/40 backdrop-blur-md border border-white/50 shadow-sm"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Icon className="w-7 h-7 md:w-8 md:h-8 opacity-80" style={{ color }} />
          </motion.div>
        </div>

        {/* Bottom Section: Text Content */}
        <div className="flex items-end justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3
                className="text-lg md:text-xl font-bold text-slate-900 leading-tight tracking-tight"
                style={{ fontFamily: 'var(--font-roboto-condensed)' }}
              >
                {title}
              </h3>
              {badge && (
                <span
                  className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap"
                  style={{ backgroundColor: 'rgba(249, 198, 35, 0.15)', color: '#B8860B' }}
                >
                  {badge}
                </span>
              )}
            </div>
            
            <p className="text-sm text-slate-600 font-light leading-relaxed max-w-[95%]">
              {description}
            </p>
          </div>

          {/* Action Button */}
          <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-black transition-all duration-300 shadow-md">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
      
      {/* Soft Hover Shadow */}
      <style jsx>{`
        .group:hover {
          box-shadow: 0 20px 40px -10px rgba(8, 14, 46, 0.08), inset 0 0 0 1px rgba(255,255,255,0.8);
        }
      `}</style>
    </motion.div>
  )
}
