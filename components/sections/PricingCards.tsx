'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FolderOpen,
  ArrowRight,
  X,
  BookOpen,
  Layers,
  ShieldCheck,
  GraduationCap,
  Scale,
  Compass,
  Check,
  ArrowLeftRight,
} from 'lucide-react'
import { REGISTER_URL } from '@/lib/urls'
import { WaitlistForm } from '@/components/ui/WaitlistForm'

/** Carte d'un concours créé dans l'Admin (cf. Pricing.tsx) — sérialisable. */
export interface ConcoursCard {
  slug: string
  label: string
  fullName: string
  typeLabel: string
  description: string | null
  imageUrl: string | null
  /** Réglage admin OU aucun contenu publié (calculé par l'API). */
  comingSoon: boolean
  matieres: string[]
  stats: {
    matieres: number
    lecons: number
    qcmQuestions: number
    flashcards: number
    examensBlancs: number
    exercices: number
  }
  bundlePrice: number | null
}

// Habillage des cartes : couleurs d'origine conservées pour les concours
// connus, puis attribution stable (d'après le slug) pour les suivants.
const PALETTES = [
  {
    color: '#FF6B4A',
    mesh: 'radial-gradient(at 10% 20%, #FB923C 0px, transparent 55%), radial-gradient(at 90% 15%, #E879F9 0px, transparent 60%), radial-gradient(at 50% 60%, #F43F5E 0px, transparent 55%), linear-gradient(135deg, #F97316 0%, #D946EF 100%)',
    icon: GraduationCap,
  },
  {
    color: '#00C6FF',
    mesh: 'radial-gradient(at 15% 20%, #38BDF8 0px, transparent 55%), radial-gradient(at 85% 15%, #6366F1 0px, transparent 60%), radial-gradient(at 50% 60%, #0D9488 0px, transparent 55%), linear-gradient(135deg, #0284C7 0%, #10B981 100%)',
    icon: Scale,
  },
  {
    color: '#F59E0B',
    mesh: 'radial-gradient(at 15% 20%, #FBBF24 0px, transparent 55%), radial-gradient(at 85% 15%, #F43F5E 0px, transparent 60%), radial-gradient(at 50% 60%, #A855F7 0px, transparent 55%), linear-gradient(135deg, #F59E0B 0%, #E11D48 100%)',
    icon: BookOpen,
  },
  {
    color: '#10B981',
    mesh: 'radial-gradient(at 15% 20%, #34D399 0px, transparent 55%), radial-gradient(at 85% 15%, #38BDF8 0px, transparent 60%), radial-gradient(at 50% 60%, #059669 0px, transparent 55%), linear-gradient(135deg, #10B981 0%, #2563EB 100%)',
    icon: Compass,
  },
  {
    color: '#3B82F6',
    mesh: 'radial-gradient(at 15% 20%, #60A5FA 0px, transparent 55%), radial-gradient(at 85% 15%, #A78BFA 0px, transparent 60%), radial-gradient(at 50% 60%, #2563EB 0px, transparent 55%), linear-gradient(135deg, #1D4ED8 0%, #6D28D9 100%)',
    icon: Layers,
  },
  {
    color: '#A855F7',
    mesh: 'radial-gradient(at 15% 20%, #E879F9 0px, transparent 55%), radial-gradient(at 85% 15%, #818CF8 0px, transparent 60%), radial-gradient(at 50% 60%, #9333EA 0px, transparent 55%), linear-gradient(135deg, #7C3AED 0%, #1E1B4B 100%)',
    icon: ShieldCheck,
  },
] as const

const KNOWN_PALETTES: [RegExp, number][] = [
  [/^crem/, 0],
  [/^ena/, 1],
  [/^fastef/, 3],
  [/^douane/, 4],
  [/^(police|gendarmerie)/, 5],
]

function paletteOf(slug: string) {
  const known = KNOWN_PALETTES.find(([re]) => re.test(slug))
  if (known) return PALETTES[known[1]]
  let h = 0
  for (const ch of slug) h = (h * 31 + ch.charCodeAt(0)) >>> 0
  return PALETTES[h % PALETTES.length]
}

const fmt = (n: number) => n.toLocaleString('fr-FR')
const plural = (n: number, one: string, many: string) => `${fmt(n)} ${n > 1 ? many : one}`

/** Contenus réellement publiés, dans l'ordre de lecture du candidat. */
function contentLines(s: ConcoursCard['stats']): string[] {
  return [
    s.lecons ? plural(s.lecons, 'leçon (fiche de cours)', 'leçons (fiches de cours)') : null,
    s.qcmQuestions ? plural(s.qcmQuestions, 'question de QCM corrigée', 'questions de QCM corrigées') : null,
    s.flashcards ? plural(s.flashcards, 'flashcard de révision', 'flashcards de révision') : null,
    s.exercices ? plural(s.exercices, 'exercice corrigé', 'exercices corrigés') : null,
    s.examensBlancs ? plural(s.examensBlancs, 'examen blanc chronométré', 'examens blancs chronométrés') : null,
  ].filter((l): l is string => l !== null)
}

/** Image indisponible : on laisse voir le dégradé de marque en dessous. */
function hideBrokenImage(e: React.SyntheticEvent<HTMLImageElement>) {
  e.currentTarget.style.display = 'none'
}

type Filter = 'all' | 'open' | 'soon'

export function PricingCards({ cards }: { cards: ConcoursCard[] }) {
  const [selected, setSelected] = useState<ConcoursCard | null>(null)
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  // Lock body scroll and stop Lenis when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden'
      if (window.__lenis) window.__lenis.stop()
    } else {
      document.body.style.overflow = ''
      if (window.__lenis) window.__lenis.start()
    }
    return () => {
      document.body.style.overflow = ''
      if (window.__lenis) window.__lenis.start()
    }
  }, [selected])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const openCount = cards.filter((c) => !c.comingSoon).length
  const soonCount = cards.length - openCount
  const filtered =
    activeFilter === 'all' ? cards : cards.filter((c) => (activeFilter === 'soon') === c.comingSoon)
  const filters: { id: Filter; label: string }[] = [
    { id: 'all', label: 'Tous les dossiers' },
    { id: 'open', label: `Disponibles (${openCount})` },
    { id: 'soon', label: `Bientôt disponibles (${soonCount})` },
  ]

  return (
    <section
      id="nos-packs"
      className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] overflow-hidden isolate"
      aria-label="Dossiers de préparation aux concours nationaux"
    >
      {/* ─── Architectural Dot Grid Texture ─── */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 opacity-[0.3]"
        style={{
          backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 25%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 25%, transparent 85%)',
        }}
      />

      {/* ─── Subtle Brand Ambient Lighting ─── */}
      <div
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none -z-10 blur-[140px] opacity-[0.25]"
        style={{ backgroundColor: '#60A5FA' }}
      />
      <div
        className="absolute bottom-10 right-0 w-[600px] h-[600px] rounded-full pointer-events-none -z-10 blur-[150px] opacity-[0.25]"
        style={{ backgroundColor: '#14B09C' }}
      />

      {/* 1px Hairline Section Dividers */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Section Header — Unified TEKKIL Presentation Format */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-5"
          >
            <FolderOpen className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>Dossiers de concours</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050814] tracking-[-0.03em] leading-[1.12] mb-5"
          >
            Tous nos dossiers de préparation{' '}
            <span className="bg-gradient-to-r from-[#1A2356] via-[#27316F] to-[#0D9488] bg-clip-text text-transparent">
              concours.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Chaque dossier réunit les matières officielles du concours : leçons, QCM corrigés, flashcards et examens blancs. Touche un dossier pour en voir le contenu détaillé.
          </motion.p>

          {/* Filtres : seulement s'il y a à la fois des dossiers ouverts et à venir */}
          {openCount > 0 && soonCount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex flex-wrap items-center justify-center gap-2 mt-8"
              role="group"
              aria-label="Filtrer les dossiers"
            >
              {filters.map((tab) => {
                const isActive = activeFilter === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`min-h-9 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer select-none ${
                      isActive
                        ? 'bg-[#050814] text-white shadow-xs'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                    }`}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </motion.div>
          )}
        </div>

        {/* ─── FOLDER CARDS GRID ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8 items-stretch">
          {filtered.map((card, index) => {
            const palette = paletteOf(card.slug)
            const Icon = palette.icon

            return (
              <motion.div
                key={card.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(index, 5) * 0.08 }}
              >
                <button
                  type="button"
                  onClick={() => setSelected(card)}
                  aria-label={`${card.label} — ${card.fullName}${card.comingSoon ? ' (bientôt disponible)' : ''} : voir le détail`}
                  className="group relative block w-full text-left cursor-pointer select-none rounded-[30px] sm:rounded-[34px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#14B09C]/40"
                >
                  <div className="relative rounded-[30px] sm:rounded-[34px] overflow-hidden bg-[#18191B] border-[2px] border-[#23252D] hover:border-[#353945] shadow-[0_12px_36px_-10px_rgba(0,0,0,0.22)] hover:shadow-[0_24px_50px_-10px_rgba(0,0,0,0.38)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-[265px] sm:h-[280px]">

                    {/* ─── Visuel du concours (image Admin) ou dégradé de marque ─── */}
                    <div
                      className="absolute top-0 inset-x-0 h-32 sm:h-36 pointer-events-none transition-transform duration-500 group-hover:scale-105"
                      style={{ background: palette.mesh }}
                    >
                      {card.imageUrl ? (
                        // Image du catalogue (déjà en WebP optimisé côté API)
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={card.imageUrl}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                          decoding="async"
                          className={`absolute inset-0 h-full w-full object-cover ${card.comingSoon ? 'grayscale-[35%]' : ''}`}
                          onError={hideBrokenImage}
                        />
                      ) : (
                        <div
                          className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                          style={{ backgroundColor: palette.color }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20 mix-blend-overlay" />
                    </div>

                    {/* ─── The Front Pocket (Matte Charcoal with Stepped Tab Cutout) ─── */}
                    <div className="relative z-10 flex-1 flex flex-col justify-between mt-12 sm:mt-14">

                      <div className="relative w-full h-[58px] shrink-0">
                        <svg
                          viewBox="0 0 360 58"
                          preserveAspectRatio="none"
                          aria-hidden="true"
                          className="w-full h-full block text-[#18191B] fill-current drop-shadow-[0_-5px_12px_rgba(0,0,0,0.2)]"
                        >
                          <path d="M 0 20 Q 0 8 14 8 L 195 8 C 212 8, 218 36, 236 36 L 360 36 L 360 58 L 0 58 Z" />
                        </svg>

                        {/* Tab Content: sigle + nature du concours */}
                        <div className="absolute top-[10px] left-0 w-[58%] sm:w-[62%] pl-5 sm:pl-6 pr-2 pointer-events-none">
                          <h3 className="text-white font-bold text-sm lg:text-[15px] tracking-tight truncate leading-tight">
                            {card.label}
                          </h3>
                          <p className="text-white/55 text-[11px] font-normal truncate mt-0.5 leading-tight">
                            {card.typeLabel}
                          </p>
                        </div>
                      </div>

                      <div className="flex-1 bg-[#18191B] px-5 sm:px-6 pb-4 sm:pb-5 pt-1 flex flex-col justify-between -mt-[1px]">

                        <div className="flex items-center gap-3.5 my-auto">
                          <div
                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-2xs transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10"
                            style={{ color: palette.color }}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[13px] font-semibold text-slate-200 line-clamp-1 leading-snug">
                              {card.fullName}
                            </p>
                            <p className="text-[11px] text-slate-400 font-normal line-clamp-1 mt-0.5">
                              {card.matieres.length > 0
                                ? card.matieres.join(' · ')
                                : card.comingSoon
                                  ? 'Programme en préparation'
                                  : card.description}
                            </p>
                          </div>
                        </div>

                        {/* Bas de carte : matières + QCM réels, ou « Bientôt disponible » */}
                        <div className="pt-2.5 border-t border-white/[0.08] flex items-end justify-between gap-2">
                          {card.comingSoon ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F9C623]/40 bg-[#F9C623]/10 px-2.5 py-1 text-xs font-semibold text-[#F9C623]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#F9C623] motion-safe:animate-pulse" aria-hidden="true" />
                              Bientôt disponible
                            </span>
                          ) : (
                            <div className="flex items-baseline gap-1.5">
                              <span
                                className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none"
                                style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                              >
                                {String(card.stats.matieres).padStart(2, '0')}
                              </span>
                              <span className="text-xs sm:text-sm font-semibold text-white/60">
                                {card.stats.matieres > 1 ? 'Matières' : 'Matière'}
                              </span>
                            </div>
                          )}

                          <div className="flex items-center gap-2 min-w-0">
                            {!card.comingSoon && (card.stats.qcmQuestions > 0 || card.stats.lecons > 0) && (
                              <span className="text-xs sm:text-sm font-semibold text-white/80 tracking-tight truncate">
                                {card.stats.qcmQuestions > 0
                                  ? `${fmt(card.stats.qcmQuestions)} QCM`
                                  : plural(card.stats.lecons, 'leçon', 'leçons')}
                              </span>
                            )}
                            <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-white text-white/70 group-hover:text-[#18191B] flex items-center justify-center transition-all duration-200 shadow-2xs shrink-0">
                              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 sm:mt-18 max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488] shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#0D9488]" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 leading-tight">
                Les dossiers s’enrichissent à chaque nouvelle publication
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Un aperçu gratuit de chaque matière pour commencer, sans engagement.
              </p>
            </div>
          </div>
          <a
            href={REGISTER_URL}
            className="inline-flex items-center gap-1.5 min-h-11 px-4 py-2 rounded-xl bg-[#050814] hover:bg-[#1A2356] text-white text-xs font-bold transition-all shrink-0 shadow-xs"
          >
            <span>Créer un compte candidat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

      </div>

      {/* ─── MODAL POP-UP DETAILS (Mode Clair — DA TEKKIL) ─── */}
      <AnimatePresence>
        {selected && (() => {
          const palette = paletteOf(selected.slug)
          const Icon = palette.icon
          const lines = contentLines(selected.stats)

          return (
            <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 isolate">

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelected(null)}
                className="absolute inset-0 bg-[#050814]/50 backdrop-blur-sm cursor-pointer"
              />

              {/* Feuille du bas sur mobile, fenêtre centrée à partir de sm */}
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="dossier-titre"
                initial={{ opacity: 0, scale: 0.96, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full sm:max-w-[500px] max-h-[88dvh] overflow-y-auto rounded-t-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 shadow-[0_25px_65px_-12px_rgba(5,8,20,0.25)] p-6 sm:p-7 pb-[max(1.5rem,env(safe-area-inset-bottom))] flex flex-col gap-5 isolate scrollbar-none"
              >
                <div
                  className="absolute top-0 inset-x-0 h-44 pointer-events-none -z-10 opacity-[0.35]"
                  style={{
                    backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                    maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
                  }}
                />

                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-slate-100/80 hover:bg-slate-200/90 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer shrink-0 border border-slate-200/60"
                  aria-label="Fermer les détails"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* [Emblème TEKKIL] ⇄ [Concours] */}
                <div className="flex items-center justify-center gap-3 pt-1">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs border border-slate-200/90 shrink-0 p-2">
                    <Image src="/logo-mark.png" alt="TEKKIL" width={32} height={32} className="w-full h-full object-contain" />
                  </div>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-slate-400">
                    <ArrowLeftRight className="w-3.5 h-3.5" />
                  </div>
                  <div
                    className="relative w-12 h-12 rounded-2xl overflow-hidden flex items-center justify-center text-white shadow-md shrink-0"
                    style={{ background: palette.mesh }}
                  >
                    {selected.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={selected.imageUrl} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" onError={hideBrokenImage} />
                    ) : (
                      <Icon className="w-6 h-6 drop-shadow-sm" />
                    )}
                  </div>
                </div>

                <div className="text-center">
                  {selected.comingSoon && (
                    <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-amber-300/70 bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700">
                      Bientôt disponible
                    </span>
                  )}
                  <h3
                    id="dossier-titre"
                    className="text-xl sm:text-2xl font-black text-[#050814] tracking-[-0.03em] leading-tight"
                    style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                  >
                    {selected.comingSoon ? `Le ${selected.label} arrive bientôt` : `Préparer le ${selected.label}`}
                  </h3>
                  <p className="text-[13px] text-slate-500 font-normal leading-relaxed mt-1 max-w-sm mx-auto">
                    {selected.fullName}
                  </p>
                  {selected.description && (
                    <p className="text-[13px] text-slate-600 leading-relaxed mt-3 max-w-md mx-auto line-clamp-4">
                      {selected.description}
                    </p>
                  )}

                  {selected.matieres.length > 0 && (
                    <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3">
                      {selected.matieres.map((m) => (
                        <span
                          key={m}
                          className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2.5">
                  <p
                    className="text-xs font-bold text-[#050814] tracking-tight"
                    style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                  >
                    {selected.comingSoon ? 'Où en est ce dossier :' : 'Ce dossier comprend aujourd’hui :'}
                  </p>
                  <ul className="space-y-2">
                    {(selected.comingSoon
                      ? [
                          'Programme et matières en cours de préparation par nos enseignants',
                          'Ouverture annoncée par e-mail dès les premiers contenus publiés',
                        ]
                      : [...lines, 'Un aperçu gratuit de chaque matière pour commencer']
                    ).map((line) => (
                      <li key={line} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-[#14B09C]/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#0D9488] stroke-[3]" />
                        </span>
                        <span className="font-medium leading-snug">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {!selected.comingSoon && selected.bundlePrice != null && (
                  <div className="px-3.5 py-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80 flex items-center justify-between gap-3 text-xs text-slate-600">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2 h-2 rounded-full shrink-0 shadow-2xs" style={{ backgroundColor: palette.color }} />
                      <span className="font-semibold text-slate-800">
                        Toutes les matières en un achat : {fmt(selected.bundlePrice)} FCFA
                      </span>
                    </div>
                    <span
                      className="text-[10px] font-bold text-[#1A2356] bg-white border border-slate-200/90 px-2 py-0.5 rounded-md shrink-0 shadow-2xs"
                      style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '0.04em' }}
                    >
                      {selected.label}
                    </span>
                  </div>
                )}

                {selected.comingSoon ? (
                  <WaitlistForm packId={selected.slug} packName={selected.label} />
                ) : (
                  <div className="pt-1 flex flex-col gap-2.5">
                    <a
                      href={REGISTER_URL}
                      className="group relative w-full inline-flex items-center justify-center gap-2.5 min-h-12 py-3 rounded-full text-white text-sm font-bold transition-all duration-300 shadow-[0_8px_24px_rgba(26,35,86,0.32)] hover:shadow-[0_10px_28px_rgba(13,148,136,0.4)] hover:scale-[1.01] active:scale-[0.99] overflow-hidden cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, #1A2356 0%, #27316F 55%, #0D9488 100%)',
                        fontFamily: 'var(--font-roboto-condensed)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                      <span className="relative z-10">Commencer ma préparation</span>
                      <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <Link
                      href={`/concours/${selected.slug}`}
                      className="inline-flex min-h-10 items-center justify-center text-xs font-semibold text-[#1A2356] underline-offset-4 hover:underline"
                    >
                      Voir le programme complet du {selected.label}
                    </Link>
                  </div>
                )}

              </motion.div>
            </div>
          )
        })()}
      </AnimatePresence>

    </section>
  )
}
