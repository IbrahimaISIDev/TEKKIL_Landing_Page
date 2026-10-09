'use client'

import { motion } from 'framer-motion'
import { SplitText } from '@/components/ui/SplitText'

export function PrivacyHeader() {
  return (
    <div className="relative w-full bg-[#0A0A0A] pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8">
        
        {/* Breadcrumb */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 text-[13px] text-white/30 mb-12"
        >
          <a href="/" className="hover:text-white/60 transition-colors">Accueil</a>
          <span className="text-white/15">·</span>
          <span className="text-white/50">Confidentialité</span>
        </motion.nav>

        {/* Title Group */}
        <div className="flex items-start gap-6">
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 56, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="hidden md:block w-[3px] mt-2 rounded-full bg-gradient-to-b from-[#6366F1] to-[#6366F1]/20 flex-shrink-0" 
          />
          <div>
            <h1
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-4"
              style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '-0.03em' }}
            >
              <SplitText text="Politique de confidentialité" delay={30} />
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-white/35 text-sm"
            >
              Dernière mise à jour — 5 mai 2026
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}
