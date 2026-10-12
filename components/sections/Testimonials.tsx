'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import { LOGIN_URL } from '@/lib/urls'

interface Testimonial {
  id: string
  name: string
  initials: string
  avatarGradient: string
  role: string
  concoursTag: string
  category: 'crem' | 'ena' | 'forces' | 'other'
  city: string
  quote: string
  highlight: string
}

const ROW_1_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Aminata Diallo',
    initials: 'AD',
    avatarGradient: 'from-[#1A2356] to-[#27316F]',
    role: 'Admise au CREM',
    concoursTag: 'CREM Français & Pédagogie',
    category: 'crem',
    city: 'Dakar',
    quote: 'Les QCM chronométrés reproduisent exactement le stress du concours. J’ai corrigé mes lacunes en grammaire et pédagogie en quelques semaines.',
    highlight: 'corrigé mes lacunes en quelques semaines',
  },
  {
    id: 't-3',
    name: 'Fatou Ndiaye',
    initials: 'FN',
    avatarGradient: 'from-[#D97706] to-[#F59E0B]',
    role: 'Admise au CREM',
    concoursTag: 'CREM Mathématiques',
    category: 'crem',
    city: 'Thiès',
    quote: 'Je révisais mes flashcards dans le bus et entre mes heures de cours. La régularité des séries quotidiennes a fait toute la différence le jour J.',
    highlight: 'régularité des séries quotidiennes',
  },
  {
    id: 't-4',
    name: 'Ibrahima Fall',
    initials: 'IF',
    avatarGradient: 'from-[#1E2968] to-[#2563EB]',
    role: 'Admis Officiers de Police',
    concoursTag: 'Forces de Sécurité',
    category: 'forces',
    city: 'Ziguinchor',
    quote: 'Les annales corrigées sont d’une précision chirurgicale. On comprend immédiatement les attentes des examinateurs et les pièges à éviter.',
    highlight: 'précision chirurgicale',
  },
  {
    id: 't-6',
    name: 'Cheikh T. Kane',
    initials: 'CK',
    avatarGradient: 'from-[#4F46E5] to-[#6366F1]',
    role: 'Admis à l’ENA',
    concoursTag: 'ENA Trésor & Finances',
    category: 'ena',
    city: 'Dakar',
    quote: 'Le classement national crée une saine émulation. Chaque soir, voir mon rang progresser me poussait à terminer une série supplémentaire.',
    highlight: 'saine émulation stimulante',
  },
  {
    id: 't-12',
    name: 'Salimata Fall',
    initials: 'SF',
    avatarGradient: 'from-[#C2410C] to-[#EA580C]',
    role: 'Admise au CREM (Option Arabe)',
    concoursTag: 'CREM Arabe',
    category: 'crem',
    city: 'Fatick',
    quote: 'Enfin un outil qui prend en compte les spécificités des filières sénégalaises ! Merci à TEKKIL d’avoir rendu cette préparation accessible à tous.',
    highlight: 'adapté aux filières sénégalaises',
  },
]

const ROW_2_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-7',
    name: 'Omar Ba',
    initials: 'OB',
    avatarGradient: 'from-[#1D4ED8] to-[#3B82F6]',
    role: 'Admis Contrôleur des Douanes',
    concoursTag: 'Douanes Sénégalaises',
    category: 'forces',
    city: 'Kaolack',
    quote: 'La meilleure décision de ma préparation. Les modules psychotechniques et la rigueur des tests blancs m’ont permis d’arriver serein.',
    highlight: 'arriver serein et confiant',
  },
  {
    id: 't-8',
    name: 'Aïssatou Diallo',
    initials: 'AD',
    avatarGradient: 'from-[#0D9488] to-[#042F2E]',
    role: 'Admise au CREM',
    concoursTag: 'CREM',
    category: 'crem',
    city: 'Thiès',
    quote: 'J’avais échoué l’année précédente par manque de méthode. Avec TEKKIL, tout était structuré semaine par semaine. Résultat : admise haut la main !',
    highlight: 'structuré semaine par semaine',
  },
  {
    id: 't-9',
    name: 'Babacar Sy',
    initials: 'BS',
    avatarGradient: 'from-[#9333EA] to-[#A855F7]',
    role: 'Admis Greffiers (CFJ)',
    concoursTag: 'Centre Formation Judiciaire',
    category: 'other',
    city: 'Louga',
    quote: 'Les fiches synthétiques et résumés audio m’ont fait gagner un temps inestimable. Tout le programme est condensé sans bavardage superflu.',
    highlight: 'gain de temps inestimable',
  },
  {
    id: 't-10',
    name: 'Khady Seck',
    initials: 'KS',
    avatarGradient: 'from-[#BE185D] to-[#EC4899]',
    role: 'Admise à l’ENA (Cycle B)',
    concoursTag: 'ENA Administration',
    category: 'ena',
    city: 'Dakar',
    quote: 'La visualisation de sa progression donne une confiance immense. Quand les pourcentages augmentent, on sait qu’on est prêt pour le jour J.',
    highlight: 'confiance immense avant l’examen',
  },
  {
    id: 't-11',
    name: 'Mamadou Diop',
    initials: 'MD',
    avatarGradient: 'from-[#0F172A] to-[#334155]',
    role: 'Admis Sous-Officiers Gendarmerie',
    concoursTag: 'Gendarmerie Nationale',
    category: 'forces',
    city: 'Dakar',
    quote: 'Idéal pour réviser la logique et la culture générale. L’application va droit au but avec des corrections claires et sans jargon.',
    highlight: 'droit au but et sans jargon',
  },
]

function TestimonialCard({ 
  item, 
  activeFilter 
}: { 
  item: Testimonial
  activeFilter: string 
}) {
  const isMatch = activeFilter === 'all' || 
    (activeFilter === 'admis' && item.role.startsWith('Admis')) || 
    item.category === activeFilter

  return (
    <div
      className={`group/card relative w-[85vw] max-w-[340px] sm:w-[370px] sm:max-w-none md:w-[390px] flex-shrink-0 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_24px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-between cursor-pointer select-none ${
        isMatch ? 'opacity-100' : 'opacity-25'
      }`}
    >
      <div>
        {/* Header: Candidate Identity & Subtle Verified Status */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* Minimalist Monochrome Avatar */}
            <div className="w-9 h-9 rounded-full bg-[#0F172A] text-white text-xs font-semibold flex items-center justify-center shrink-0 tracking-tight">
              {item.initials}
            </div>

            {/* Candidate Name & Role */}
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-semibold text-slate-900 truncate tracking-tight">
                  {item.name}
                </h4>
              </div>
              <p className="text-xs text-slate-500 truncate">
                {item.role} • {item.city}
              </p>
            </div>
          </div>

          {/* Mention visible : ces avis ne sont pas de vrais témoignages */}
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full shrink-0 border bg-slate-50 text-slate-500 border-slate-200/60">
            Exemple illustratif
          </span>
        </div>

        {/* Clean, Natural Quote */}
        <p className="text-slate-600 text-[13px] sm:text-[13.5px] leading-relaxed mb-4">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      {/* Footer Meta: Hairline Divider + Concours Tag */}
      <div className="flex items-center text-xs text-slate-400 pt-3 border-t border-slate-100 mt-auto">
        <span className="font-medium text-slate-500 truncate">
          {item.concoursTag}
        </span>
      </div>
    </div>
  )
}

export function Testimonials() {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filterTabs = [
    { id: 'all', label: 'Tous les retours' },
    { id: 'admis', label: 'Admis' },
    { id: 'crem', label: 'CREM' },
    { id: 'ena', label: 'ENA' },
    { id: 'forces', label: 'Police & Douanes' },
  ]

  // Duplicated arrays for 100% gapless continuous marquee
  const loopRow1 = [...ROW_1_TESTIMONIALS, ...ROW_1_TESTIMONIALS]
  const loopRow2 = [...ROW_2_TESTIMONIALS, ...ROW_2_TESTIMONIALS]

  return (
    <section 
      id="temoignages" 
      className="relative py-20 md:py-28 bg-[#F8FAFC] overflow-hidden select-none"
      aria-label="Témoignages et avis des candidats TEKKIL"
    >

      {/* Section Header */}
      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 text-center mb-12 sm:mb-16">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-5"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" />
          <span>Exemples illustratifs</span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050814] tracking-[-0.035em] leading-[1.08] mb-5"
        >
          Des parcours{' '}
          <span className="bg-gradient-to-r from-[#1A2356] via-[#27316F] to-[#0D9488] bg-clip-text text-transparent">
            comme le tien
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Ces témoignages sont des exemples illustratifs : ils montrent comment TEKKIL peut accompagner ta préparation, mais ne sont pas des avis de candidats réels.
        </motion.p>

        {/* Interactive Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-8"
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer select-none ${
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
      </div>

      {/* ─── FULL WIDTH 2-ROW INFINITE CARDS MARQUEE (No Edge Gradient Fades) ─── */}
      <div className="relative w-full overflow-hidden select-none py-2">

        {/* Injected CSS Animation Keyframes for Smooth GPU Loop & Hover Pause */}
        <style>{`
          @keyframes tekkil-marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes tekkil-marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .tekkil-track-left {
            display: flex;
            width: max-content;
            animation: tekkil-marquee-left 52s linear infinite;
            will-change: transform;
          }
          .tekkil-track-right {
            display: flex;
            width: max-content;
            animation: tekkil-marquee-right 58s linear infinite;
            will-change: transform;
          }
          .tekkil-loop-wrapper:hover .tekkil-track-left,
          .tekkil-loop-wrapper:hover .tekkil-track-right {
            animation-play-state: paused;
          }
        `}</style>

        {/* Row 1 — Loop to Left */}
        <div className="tekkil-loop-wrapper mb-4 sm:mb-6 overflow-hidden">
          <div className="tekkil-track-left gap-4 sm:gap-6">
            {loopRow1.map((item, index) => (
              <TestimonialCard 
                key={`row1-${item.id}-${index}`} 
                item={item} 
                activeFilter={activeFilter} 
              />
            ))}
          </div>
        </div>

        {/* Row 2 — Loop to Right */}
        <div className="tekkil-loop-wrapper overflow-hidden">
          <div className="tekkil-track-right gap-4 sm:gap-6">
            {loopRow2.map((item, index) => (
              <TestimonialCard 
                key={`row2-${item.id}-${index}`} 
                item={item} 
                activeFilter={activeFilter} 
              />
            ))}
          </div>
        </div>

      </div>

      {/* ─── Bottom Unified Proof Dock (DA Tekkil Minimalist) ─── */}
      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 mt-14 sm:mt-18">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-sm text-slate-600 font-medium text-center md:text-left">
            Ces témoignages sont des exemples illustratifs. Lance ta préparation avec les contenus TEKKIL.
          </p>
          <div className="flex items-center">
            <a
              href={LOGIN_URL}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#050814] hover:bg-[#1A2356] text-white text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-xs shrink-0"
            >
              <span>Rejoindre</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </motion.div>
      </div>

    </section>
  )
}
