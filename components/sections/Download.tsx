'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import { REGISTER_URL } from '@/lib/urls'

export function Download() {
  return (
    <section 
      id="download" 
      className="relative py-24 sm:py-32 md:py-36 bg-[#080E2E] overflow-hidden isolate"
      aria-label="Accès plateforme & téléchargement TEKKIL"
    >
      {/* ─── Atmospheric Lighting & Studio Grid ─── */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Overhead Spotlight Beam onto the Signboard */}
        <div 
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full blur-[120px] opacity-35"
          style={{
            background: 'radial-gradient(ellipse, #2B52EE 0%, #14B09C 40%, transparent 70%)',
          }}
        />

        {/* Ambient Floor Glow under the sign */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[120px] rounded-full blur-[80px] opacity-20 bg-white"
        />

        {/* Studio architectural ceiling / grid pattern */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 75% 65% at 50% 40%, black 30%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 40%, black 30%, transparent 85%)',
          }}
        />

        {/* Atmospheric stars */}
        <div className="absolute top-16 left-[18%] w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
        <div className="absolute top-28 right-[22%] w-1.5 h-1.5 rounded-full bg-[#14B09C]/60" />
        <div className="absolute bottom-20 left-[26%] w-1.5 h-1.5 rounded-full bg-[#F9C623]/60" />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* ─── Section Header ─── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#14B09C] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#14B09C]" />
            <span>Signalétique Officielle • Accès Direct</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-[-0.03em] leading-[1.14] mb-4"
            style={{ fontFamily: 'var(--font-roboto-condensed)' }}
          >
            Prends la direction de{' '}
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#14B09C] to-[#FBBF24] bg-clip-text text-transparent">
              ta réussite.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto"
          >
            Accède dès maintenant à la plateforme interactive sur navigateur. Aucun téléchargement requis pour commencer.
          </motion.p>
        </div>

        {/* ─── SUSPENDED DIRECTIONAL SIGNBOARD (Panneau Signalétique Suspendu) ─── */}
        <div className="relative max-w-3xl mx-auto pt-16 sm:pt-20">
          
          {/* Ceiling Suspension Cables (Left & Right) */}
          <div className="absolute top-0 left-[22%] sm:left-[24%] flex flex-col items-center pointer-events-none">
            {/* Ceiling Anchor Disc */}
            <div className="w-5 h-2 rounded-t-sm bg-slate-500/80 border border-slate-400 shadow-md" />
            {/* Steel Wire Cable */}
            <div className="w-[1.5px] h-16 sm:h-20 bg-gradient-to-b from-slate-400 via-slate-300 to-slate-200 shadow-xs" />
            {/* Top Signboard Mounting Bracket / Lug */}
            <div className="w-3.5 h-3.5 rounded-t bg-[#1A2830] border border-slate-600 shadow-inner -mb-1 z-20" />
          </div>

          <div className="absolute top-0 right-[22%] sm:right-[24%] flex flex-col items-center pointer-events-none">
            {/* Ceiling Anchor Disc */}
            <div className="w-5 h-2 rounded-t-sm bg-slate-500/80 border border-slate-400 shadow-md" />
            {/* Steel Wire Cable */}
            <div className="w-[1.5px] h-16 sm:h-20 bg-gradient-to-b from-slate-400 via-slate-300 to-slate-200 shadow-xs" />
            {/* Top Signboard Mounting Bracket / Lug */}
            <div className="w-3.5 h-3.5 rounded-t bg-[#1A2830] border border-slate-600 shadow-inner -mb-1 z-20" />
          </div>

          {/* Suspended Lightbox Board Body */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', damping: 18, stiffness: 70 }}
            whileHover={{ y: -3 }}
            className="group relative rounded-[28px] sm:rounded-[36px] md:rounded-[42px] transition-all duration-300 isolate"
            style={{
              backgroundColor: '#122026', // Deep industrial chassis tone
              boxShadow: `
                0 35px 70px -15px rgba(0, 0, 0, 0.75),
                0 15px 35px -10px rgba(0, 0, 0, 0.5),
                inset 0 2px 3px rgba(255, 255, 255, 0.25),
                inset 0 -4px 8px rgba(0, 0, 0, 0.8)
              `,
            }}
          >
            {/* Chassis Outer Bezel & Physical Bottom Extrusion */}
            <div className="p-2 sm:p-3 md:p-3.5 rounded-[28px] sm:rounded-[36px] md:rounded-[42px] border-b-[5px] sm:border-b-[6px] border-[#0A1317] border-t border-white/20">
              
              {/* Backlit Illuminated White Face */}
              <div 
                className="relative bg-white rounded-[22px] sm:rounded-[30px] md:rounded-[34px] p-4 sm:p-6 md:p-7 shadow-[inset_0_0_20px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.12)] border border-slate-200 overflow-hidden"
              >
                {/* Subtle illuminated specular streak */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-80 pointer-events-none" />

                {/* 2-Compartment Grid (Faithful to Station Wayfinding Sign Mockup) */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-center">
                  
                  {/* ───────────────────────────────────────────────────────── */}
                  {/* ZONE GAUCHE : Direction & Marque TEKKIL                  */}
                  {/* ───────────────────────────────────────────────────────── */}
                  <div className="flex items-center gap-3.5 sm:gap-4 md:pr-4">
                    {/* Big Bold Directional Arrow (Like ↖ in reference) */}
                    <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-[#080E2E] text-white flex items-center justify-center shadow-md shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2.75]" />
                    </div>

                    {/* Brand Emblem & Name + Metric/Distance Info */}
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <Image 
                        src="/logo-horizontal.png"
                        alt="TEKKIL"
                        width={130}
                        height={32}
                        className="h-7 sm:h-8 w-auto object-contain shrink-0"
                      />

                      {/* Station Distance / Readiness info (like "25 Метров / 25 Meters") */}
                      <div className="border-l border-slate-300/80 pl-3 sm:pl-3.5 py-0.5">
                        <p 
                          className="text-xs sm:text-sm font-black text-slate-900 leading-tight tracking-tight"
                          style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                        >
                          Session 2026
                        </p>
                        <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight mt-0.5">
                          Départ immédiat
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Vertical Hairline Divider between the two halves (Desktop) */}
                  <div className="hidden md:block absolute left-1/2 top-1 bottom-1 w-[1px] bg-slate-200 -translate-x-1/2 pointer-events-none" />

                  {/* Horizontal Divider (Mobile only) */}
                  <div className="md:hidden w-full h-[1px] bg-slate-200" />

                  {/* ───────────────────────────────────────────────────────── */}
                  {/* ZONE DROITE : Destinations & Actions (Lignes 1 & 2)       */}
                  {/* ───────────────────────────────────────────────────────── */}
                  <div className="flex flex-col gap-2 sm:gap-2.5 md:pl-2">
                    
                    {/* Destination 1 : Plateforme Web (Interactive Main CTA) */}
                    <a
                      href={REGISTER_URL}
                      className="group/cta flex items-center justify-between p-2.5 sm:p-3 rounded-xl sm:rounded-2xl hover:bg-slate-50/90 active:bg-slate-100/90 border border-transparent hover:border-slate-200/80 transition-all duration-200 cursor-pointer"
                      title="Accéder immédiatement à la plateforme d'entraînement"
                    >
                      <div className="text-left">
                        <p 
                          className="text-sm sm:text-base font-black text-slate-900 leading-tight group-hover/cta:text-[#0D9488] transition-colors"
                          style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                        >
                          Plateforme Web
                        </p>
                        <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight mt-0.5">
                          Entraînement immédiat sur navigateur
                        </p>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-2">
                        {/* Red Circular Route Badge "1" (Exact replicate of Metro badge in photo) */}
                        <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#E11D48] text-white text-xs sm:text-sm font-black flex items-center justify-center shadow-xs">
                          1
                        </span>

                        {/* Direction Arrow */}
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 group-hover/cta:translate-x-1 transition-transform stroke-[2.75]" />
                      </div>
                    </a>

                    {/* Destination 2 : Applications Mobiles (Upcoming) */}
                    <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50/70 border border-slate-100">
                      <div className="text-left">
                        <p 
                          className="text-sm sm:text-base font-black text-slate-900 leading-tight"
                          style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                        >
                          Applications Mobiles
                        </p>
                        <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight mt-0.5">
                          Android & iOS
                        </p>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-2">
                        {/* Dark Rectangular Badge with Yellow Text (Exact replicate of [2-10] badge) */}
                        <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[#0F172A] text-[#FBBF24] text-[10px] sm:text-xs font-black font-mono tracking-wider shadow-2xs">
                          BIENTÔT
                        </span>

                        {/* Direction Arrow */}
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 stroke-[2.75]" />
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* ─── Bottom Reassurance Pills ─── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-400 font-medium"
        >
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#14B09C]" />
            Sans téléchargement requis
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#14B09C]" />
            0 F CFA pour démarrer
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#14B09C]" />
            Accessible mobile, tablette & PC
          </span>
        </motion.div>

      </div>
    </section>
  )
}
