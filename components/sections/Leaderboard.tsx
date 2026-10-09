'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Trophy, 
  Flame, 
  TrendingUp, 
  MapPin, 
  ArrowUpRight, 
  CheckCircle2, 
  Users, 
  ShieldCheck,
  ChevronRight,
  Layers,
  Sparkles
} from 'lucide-react'
import { LOGIN_URL } from '@/lib/urls'

type CategoryKey = 'all' | 'crem' | 'ena' | 'forces'
type TimeframeKey = 'hebdo' | 'mensuel'

interface LeaderboardItem {
  rank: number
  name: string
  city: string
  concours: string
  score: number
  xp: string
  streak: number
  trend: string
  highlight?: string
}

const CATEGORIES: { id: CategoryKey; label: string; count: string }[] = [
  { id: 'all', label: 'National (Tous)', count: '1 240' },
  { id: 'crem', label: 'CREM 2026', count: '480' },
  { id: 'ena', label: 'ENA & Magistrature', count: '310' },
  { id: 'forces', label: 'Police & Douanes', count: '450' },
]

const LEADERBOARD_DATA: Record<TimeframeKey, Record<CategoryKey, LeaderboardItem[]>> = {
  hebdo: {
    all: [
      { rank: 1, name: 'Moussa Sow', city: 'Saint-Louis', concours: 'CREM Français', score: 96, xp: '15 400 pts', streak: 21, trend: '+2', highlight: 'Major hebdo' },
      { rank: 2, name: 'Fatou Ndiaye', city: 'Dakar', concours: 'ENA Cycle A', score: 93, xp: '14 120 pts', streak: 14, trend: '=' },
      { rank: 3, name: 'Ibrahima Fall', city: 'Ziguinchor', concours: 'Police Officiers', score: 89, xp: '12 850 pts', streak: 9, trend: '+1' },
      { rank: 4, name: 'Aïssatou Diallo', city: 'Thiès', concours: 'CREM Maths', score: 86, xp: '11 600 pts', streak: 7, trend: '+3' },
      { rank: 5, name: 'Omar Ba', city: 'Kaolack', concours: 'Douanes Contrôleurs', score: 83, xp: '10 400 pts', streak: 5, trend: '-1' },
    ],
    crem: [
      { rank: 1, name: 'Moussa Sow', city: 'Saint-Louis', concours: 'Français & Pédagogie', score: 96, xp: '15 400 pts', streak: 21, trend: '=', highlight: 'Major CREM' },
      { rank: 2, name: 'Aïssatou Diallo', city: 'Thiès', concours: 'Mathématiques', score: 92, xp: '13 750 pts', streak: 12, trend: '+2' },
      { rank: 3, name: 'Cheikh T. Kane', city: 'Dakar', concours: 'Option Arabe', score: 90, xp: '12 600 pts', streak: 15, trend: '+1' },
      { rank: 4, name: 'Mariama Ba', city: 'Diourbel', concours: 'Français Général', score: 87, xp: '11 350 pts', streak: 8, trend: '+4' },
      { rank: 5, name: 'Babacar Sy', city: 'Louga', concours: 'Sciences & Pédagogie', score: 85, xp: '10 180 pts', streak: 6, trend: '-1' },
    ],
    ena: [
      { rank: 1, name: 'Fatou Ndiaye', city: 'Dakar', concours: 'Diplomatie (Cycle A)', score: 95, xp: '16 200 pts', streak: 18, trend: '+1', highlight: 'Major ENA' },
      { rank: 2, name: 'Amadou Kane', city: 'Saint-Louis', concours: 'Administration Générale', score: 93, xp: '14 900 pts', streak: 11, trend: '=' },
      { rank: 3, name: 'Khady Seck', city: 'Dakar', concours: 'Trésor & Finances', score: 88, xp: '12 550 pts', streak: 9, trend: '+3' },
      { rank: 4, name: 'Abdoulaye Wade', city: 'Fatick', concours: 'ENA Cycle B', score: 86, xp: '11 200 pts', streak: 7, trend: '-1' },
      { rank: 5, name: 'Salimata Fall', city: 'Thiès', concours: 'Douanes Catégorie A', score: 84, xp: '10 600 pts', streak: 5, trend: '+2' },
    ],
    forces: [
      { rank: 1, name: 'Ibrahima Fall', city: 'Ziguinchor', concours: 'Police Officiers', score: 94, xp: '14 850 pts', streak: 16, trend: '+2', highlight: 'Major Police' },
      { rank: 2, name: 'Omar Ba', city: 'Kaolack', concours: 'Douanes Contrôleurs', score: 91, xp: '13 600 pts', streak: 10, trend: '=' },
      { rank: 3, name: 'Mamadou Diop', city: 'Dakar', concours: 'Sous-Officiers Gendarmerie', score: 89, xp: '12 400 pts', streak: 14, trend: '+1' },
      { rank: 4, name: 'Alioune Badara', city: 'Tambacounda', concours: 'Eaux et Forêts', score: 85, xp: '11 150 pts', streak: 6, trend: '+2' },
      { rank: 5, name: 'Samba Ndao', city: 'Kolda', concours: 'Gardiens de la Paix', score: 83, xp: '9 950 pts', streak: 4, trend: '-1' },
    ],
  },
  mensuel: {
    all: [
      { rank: 1, name: 'Fatou Ndiaye', city: 'Dakar', concours: 'ENA Cycle A', score: 97, xp: '48 200 pts', streak: 30, trend: '+1', highlight: 'Leader mensuel' },
      { rank: 2, name: 'Moussa Sow', city: 'Saint-Louis', concours: 'CREM Français', score: 95, xp: '45 100 pts', streak: 28, trend: '-1' },
      { rank: 3, name: 'Ibrahima Fall', city: 'Ziguinchor', concours: 'Police Officiers', score: 91, xp: '39 600 pts', streak: 22, trend: '=' },
      { rank: 4, name: 'Aïssatou Diallo', city: 'Thiès', concours: 'CREM Maths', score: 88, xp: '36 400 pts', streak: 19, trend: '+2' },
      { rank: 5, name: 'Omar Ba', city: 'Kaolack', concours: 'Douanes Contrôleurs', score: 86, xp: '33 150 pts', streak: 16, trend: '+1' },
    ],
    crem: [
      { rank: 1, name: 'Moussa Sow', city: 'Saint-Louis', concours: 'Français & Pédagogie', score: 96, xp: '45 100 pts', streak: 28, trend: '=', highlight: 'Major Mensuel' },
      { rank: 2, name: 'Aïssatou Diallo', city: 'Thiès', concours: 'Mathématiques', score: 93, xp: '40 800 pts', streak: 24, trend: '+1' },
      { rank: 3, name: 'Cheikh T. Kane', city: 'Dakar', concours: 'Option Arabe', score: 91, xp: '38 200 pts', streak: 22, trend: '=' },
      { rank: 4, name: 'Mariama Ba', city: 'Diourbel', concours: 'Français Général', score: 89, xp: '35 400 pts', streak: 18, trend: '+3' },
      { rank: 5, name: 'Babacar Sy', city: 'Louga', concours: 'Sciences & Pédagogie', score: 86, xp: '32 900 pts', streak: 15, trend: '-1' },
    ],
    ena: [
      { rank: 1, name: 'Fatou Ndiaye', city: 'Dakar', concours: 'Diplomatie (Cycle A)', score: 97, xp: '48 200 pts', streak: 30, trend: '=', highlight: 'Major Mensuel' },
      { rank: 2, name: 'Amadou Kane', city: 'Saint-Louis', concours: 'Administration Générale', score: 94, xp: '44 300 pts', streak: 25, trend: '+1' },
      { rank: 3, name: 'Khady Seck', city: 'Dakar', concours: 'Trésor & Finances', score: 90, xp: '39 100 pts', streak: 21, trend: '-1' },
      { rank: 4, name: 'Abdoulaye Wade', city: 'Fatick', concours: 'ENA Cycle B', score: 87, xp: '34 800 pts', streak: 17, trend: '+2' },
      { rank: 5, name: 'Salimata Fall', city: 'Thiès', concours: 'Douanes Catégorie A', score: 85, xp: '32 400 pts', streak: 14, trend: '=' },
    ],
    forces: [
      { rank: 1, name: 'Ibrahima Fall', city: 'Ziguinchor', concours: 'Police Officiers', score: 95, xp: '46 300 pts', streak: 26, trend: '+1', highlight: 'Major Mensuel' },
      { rank: 2, name: 'Omar Ba', city: 'Kaolack', concours: 'Douanes Contrôleurs', score: 92, xp: '42 100 pts', streak: 22, trend: '=' },
      { rank: 3, name: 'Mamadou Diop', city: 'Dakar', concours: 'Sous-Officiers Gendarmerie', score: 90, xp: '38 900 pts', streak: 20, trend: '+1' },
      { rank: 4, name: 'Alioune Badara', city: 'Tambacounda', concours: 'Eaux et Forêts', score: 87, xp: '35 200 pts', streak: 16, trend: '-1' },
      { rank: 5, name: 'Samba Ndao', city: 'Kolda', concours: 'Gardiens de la Paix', score: 84, xp: '31 800 pts', streak: 12, trend: '=' },
    ],
  },
}

const FEATURE_POINTS = [
  {
    icon: TrendingUp,
    title: 'Actualisation en direct',
    description: 'Score et percentile recalculés instantanément après chaque série de QCM.',
    badge: 'Temps réel',
  },
  {
    icon: Flame,
    title: 'Séries & régularité',
    description: 'Chaque jour connecté consolide ta flamme et sécurise ton rang dans le peloton.',
    badge: 'Discipline',
  },
  {
    icon: Layers,
    title: 'Filtres par concours & région',
    description: 'Classement national, par filière (CREM, ENA, Police) et par académie.',
    badge: '14 Régions',
  },
]

export function Leaderboard() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('all')
  const [timeframe, setTimeframe] = useState<TimeframeKey>('hebdo')
  const [selectedRank, setSelectedRank] = useState<number | null>(null)

  const currentEntries = LEADERBOARD_DATA[timeframe][activeTab]

  return (
    <section 
      id="leaderboard" 
      className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9]/70 to-[#F8FAFC] overflow-hidden isolate"
      aria-label="Classement national des candidats"
    >
      {/* ─── Architectural Dot Grid Texture Layer with Soft Radial Vignette ─── */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 25%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 25%, transparent 85%)',
        }}
      />

      {/* ─── Rich Multi-Color Brand Ambient Mesh Orbs ─── */}
      {/* Primary TEKKIL Mint / Teal Glow behind the console (Left) */}
      <div 
        className="absolute top-1/4 -left-20 w-[640px] h-[640px] rounded-full pointer-events-none -z-10 blur-[130px] opacity-[0.32]"
        style={{ backgroundColor: '#14B09C' }}
      />
      {/* Royal / Sky Blue Atmospheric Wash (Top Center) */}
      <div 
        className="absolute -top-24 left-1/3 w-[560px] h-[560px] rounded-full pointer-events-none -z-10 blur-[140px] opacity-[0.25]"
        style={{ backgroundColor: '#60A5FA' }}
      />
      {/* Warm Golden Amber Trophy Accent (Top Left) */}
      <div 
        className="absolute top-10 left-10 w-[380px] h-[380px] rounded-full pointer-events-none -z-10 blur-[110px] opacity-[0.16]"
        style={{ backgroundColor: '#F59E0B' }}
      />
      {/* Deep Brand Navy Subtle Depth (Bottom Right) */}
      <div 
        className="absolute -bottom-24 right-5 w-[650px] h-[650px] rounded-full pointer-events-none -z-10 blur-[150px] opacity-[0.22]"
        style={{ backgroundColor: '#27316F' }}
      />
      {/* Fresh Mint Accent (Bottom Center) */}
      <div 
        className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full pointer-events-none -z-10 blur-[120px] opacity-[0.20]"
        style={{ backgroundColor: '#A7F3D0' }}
      />

      {/* ─── Subtle Stadium / Podium Radiance Rings (Centered on the Leaderboard Console) ─── */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 lg:left-12 w-[680px] h-[680px] rounded-full border border-teal-500/10 pointer-events-none -z-10" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 lg:left-12 -translate-x-12 w-[820px] h-[820px] rounded-full border border-slate-300/40 pointer-events-none -z-10" />

      {/* ─── Elegant Gradient Hairline Section Dividers ─── */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column — Clean & Minimalist Interactive Leaderboard Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-2 lg:order-1 w-full min-w-0"
          >
            {/* Minimalist Frosted Console matching TEKKIL Light UI */}
            <div className="relative rounded-3xl bg-white border border-slate-200/80 p-5 sm:p-7 md:p-8 flex flex-col gap-6 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.03)] transition-all">
              
              {/* Card Header: Title + Timeframe Toggle + Live Beacon */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488] shadow-2xs">
                    <Trophy className="w-4 h-4 text-[#0D9488]" />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-base leading-tight">
                      Classement des Candidats
                    </h3>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Mis à jour après chaque session
                    </p>
                  </div>
                </div>

                {/* Right Header Controls: Timeframe switcher & live badge */}
                <div className="flex items-center gap-2.5">
                  {/* Timeframe Toggle */}
                  <div className="inline-flex p-0.5 rounded-lg bg-slate-100 border border-slate-200/70 text-xs">
                    <button
                      onClick={() => setTimeframe('hebdo')}
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                        timeframe === 'hebdo' 
                          ? 'bg-white text-slate-900 shadow-xs' 
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Hebdo
                    </button>
                    <button
                      onClick={() => setTimeframe('mensuel')}
                      className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                        timeframe === 'mensuel' 
                          ? 'bg-white text-slate-900 shadow-xs' 
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      Mensuel
                    </button>
                  </div>

                  {/* Clean Live Beacon */}
                  <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-[11px] font-semibold text-emerald-700">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600" />
                    </span>
                    <span>En direct</span>
                  </div>
                </div>
              </div>

              {/* Minimalist Category Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none w-full min-w-0">
                {CATEGORIES.map((cat) => {
                  const isActive = activeTab === cat.id
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveTab(cat.id)
                        setSelectedRank(null)
                      }}
                      className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs transition-all duration-200 flex-shrink-0 whitespace-nowrap cursor-pointer select-none ${
                        isActive
                          ? 'text-white font-bold'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-transparent'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeLeaderboardCategory"
                          className="absolute inset-0 rounded-xl bg-[#050814] shadow-xs"
                          transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10">{cat.label}</span>
                      <span className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-md ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500 border border-slate-200/60'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Candidate Rows List — Minimalist & High Contrast */}
              <div className="space-y-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${timeframe}-${activeTab}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2"
                  >
                    {currentEntries.map((entry) => {
                      const isSelected = selectedRank === entry.rank
                      const isTop1 = entry.rank === 1
                      const isTop2 = entry.rank === 2
                      const isTop3 = entry.rank === 3

                      return (
                        <div
                          key={entry.rank}
                          onClick={() => setSelectedRank(isSelected ? null : entry.rank)}
                          className={`group flex items-center justify-between gap-3 px-3.5 sm:px-4 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
                            isSelected
                              ? 'bg-teal-50/50 border-teal-300 shadow-xs'
                              : 'bg-slate-50/70 hover:bg-slate-100/80 border-slate-200/60 hover:border-slate-300'
                          }`}
                        >
                          {/* Left: Rank + Avatar + Name & Concours */}
                          <div className="flex items-center gap-3 min-w-0 flex-1">
                            {/* Minimalist Rank Number */}
                            <div className="w-6 flex items-center justify-center flex-shrink-0 text-xs font-black tabular-nums">
                              {isTop1 ? (
                                <span className="text-amber-500 font-extrabold text-sm">#1</span>
                              ) : isTop2 ? (
                                <span className="text-slate-600 font-bold text-sm">#2</span>
                              ) : isTop3 ? (
                                <span className="text-amber-700 font-bold text-sm">#3</span>
                              ) : (
                                <span className="text-slate-400 font-medium text-xs">#{entry.rank}</span>
                              )}
                            </div>

                            {/* Minimalist Avatar */}
                            <div className="w-8 h-8 rounded-lg bg-[#1A2356] text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-2xs">
                              {entry.name.split(' ').map((n) => n[0]).join('')}
                            </div>

                            {/* Candidate Info */}
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-slate-900 text-xs sm:text-sm font-semibold truncate group-hover:text-teal-700 transition-colors">
                                  {entry.name}
                                </span>
                                {entry.highlight && (
                                  <span className="hidden sm:inline-block text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.2 rounded bg-amber-50 border border-amber-200/80 text-amber-800">
                                    {entry.highlight}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 truncate mt-0.5">
                                <span>{entry.city}</span>
                                <span className="text-slate-300">•</span>
                                <span className="truncate text-slate-500">{entry.concours}</span>
                              </div>
                            </div>
                          </div>

                          {/* Right: Streak Flame + Score Percentage */}
                          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                            {/* Streak Flame Pill */}
                            <div className="hidden xs:flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200/80 text-amber-700 text-xs font-bold tabular-nums">
                              <Flame className="w-3 h-3 text-amber-500" />
                              <span>{entry.streak}j</span>
                            </div>

                            {/* Score & Clean Minimal Progress */}
                            <div className="flex flex-col items-end">
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs text-slate-400 font-medium hidden md:inline">
                                  {entry.xp}
                                </span>
                                <span className="text-xs sm:text-sm font-black text-teal-700 tabular-nums">
                                  {entry.score}%
                                </span>
                              </div>
                              {/* Slim high-precision bar */}
                              <div className="w-14 sm:w-16 h-1.5 rounded-full bg-slate-200/80 overflow-hidden mt-1">
                                <div 
                                  className="h-full rounded-full bg-gradient-to-r from-[#0D9488] to-[#14B09C] transition-all duration-500"
                                  style={{ width: `${entry.score}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pinned "Toi" (Simulated Candidate Position) — Clean & Integrated */}
              <div className="relative rounded-2xl p-3.5 sm:p-4 bg-gradient-to-r from-slate-50 via-teal-50/40 to-emerald-50/40 border border-teal-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0D9488] text-white flex items-center justify-center font-black text-[11px] shrink-0 shadow-2xs">
                    TOI
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-slate-900 text-xs sm:text-sm font-bold">
                        Position simulée : <span className="text-teal-700 font-extrabold">#7 National</span>
                      </p>
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-teal-100 text-teal-800 border border-teal-200/70">
                        Top 5%
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Score : <strong className="text-slate-800">84%</strong> • Série : <strong className="text-amber-700">6 jours</strong>
                    </p>
                  </div>
                </div>

                <a
                  href={LOGIN_URL}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#050814] hover:bg-[#1A2356] text-white font-bold text-xs transition-colors shrink-0 shadow-xs"
                >
                  <span>S&apos;entraîner pour monter</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Card Bottom Meta */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span>1 240 candidats actifs au Sénégal</span>
                </span>
                <a
                  href={LOGIN_URL}
                  className="text-teal-700 hover:text-teal-800 font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  <span>Rejoindre le classement</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Column — Editorial & Concise Feature Pillars (5 cols) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center w-full min-w-0">
            
            {/* Minimalist Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-5 w-fit"
            >
              <Trophy className="w-3.5 h-3.5 text-[#0D9488]" />
              <span>Émulation & Rigueur</span>
            </motion.div>

            {/* Headline — Confident & Punchy */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050814] mb-4 leading-[1.08] tracking-tight"
            >
              Monte dans le<br />
              <span className="bg-gradient-to-r from-[#1A2356] via-[#27316F] to-[#0D9488] bg-clip-text text-transparent">
                classement national.
              </span>
            </motion.h2>

            {/* Subtitle — Brief & Direct */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-slate-600 text-sm sm:text-base leading-relaxed mb-7 max-w-lg"
            >
              Chaque série de QCM recalcule instantanément ton percentile. Mesure ton niveau face aux candidats de ton concours et sécurise ta place dans le peloton de tête.
            </motion.p>

            {/* 3 Compact Feature Pillars */}
            <div className="space-y-3">
              {FEATURE_POINTS.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                    className="group rounded-2xl p-3.5 sm:p-4 bg-white border border-slate-200/80 hover:border-slate-300 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-200"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488] shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                        <IconComponent className="w-4 h-4 text-[#0D9488]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <h4 className="text-slate-900 font-bold text-xs sm:text-sm group-hover:text-teal-700 transition-colors">
                            {feature.title}
                          </h4>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200/60 text-slate-600 shrink-0 whitespace-nowrap">
                            {feature.badge}
                          </span>
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Concise Verified Proof Banner */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="mt-6 flex items-center gap-2.5 p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200/60 text-xs text-emerald-900"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong className="text-emerald-950 font-bold">92% des candidats</strong> du Top 100 ont été admis à leur concours en 2025.
              </span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}


