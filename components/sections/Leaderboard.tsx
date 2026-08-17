'use client'

import { motion } from 'framer-motion'
import { Trophy, TrendingUp, Medal, Flame } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

const LEADERBOARD_ENTRIES = [
  { rank: 1, name: 'Moussa S.', city: 'Saint-Louis', score: 94, sessions: 48, badge: '🥇', streak: 21 },
  { rank: 2, name: 'Fatou N.', city: 'Dakar', score: 91, sessions: 52, badge: '🥈', streak: 14 },
  { rank: 3, name: 'Ibrahima F.', city: 'Ziguinchor', score: 89, sessions: 41, badge: '🥉', streak: 9 },
  { rank: 4, name: 'Aissatou D.', city: 'Thiès', score: 86, sessions: 38, badge: null, streak: 7 },
  { rank: 5, name: 'Omar B.', city: 'Kaolack', score: 83, sessions: 35, badge: null, streak: 5 },
]

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Classement en temps réel',
    description: 'Mis à jour après chaque session. Tu vois ta progression par rapport aux autres candidats.',
  },
  {
    icon: Flame,
    title: 'Séries & streaks',
    description: 'Maintiens ta série quotidienne pour grimper dans le classement et débloquer des badges.',
  },
  {
    icon: Medal,
    title: 'Par concours et région',
    description: 'Classements global, hebdomadaire et par sous-test — compare-toi aux candidats de ta ville.',
  },
]

function ScoreBar({ score }: { score: number }) {
  return (
    <div className="relative h-1.5 w-16 md:w-24 rounded-full overflow-hidden bg-white/10">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${score}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className="h-full rounded-full"
        style={{
          background: score >= 90
            ? 'linear-gradient(90deg, #13ECA4, #0BCD8C)'
            : score >= 85
            ? 'linear-gradient(90deg, #F9C623, #F5A623)'
            : 'linear-gradient(90deg, #2B52EE, #5478F5)',
        }}
      />
    </div>
  )
}

export function Leaderboard() {
  return (
    <section id="leaderboard" className="relative bg-blue-900 py-20 md:py-28 overflow-hidden">
      {/* Background decorations */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 800px 500px at 80% 50%, rgba(43,82,238,0.18), transparent)',
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,198,35,0.4), transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Leaderboard UI mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            {/* Card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 24px 48px rgba(0,0,0,0.3)',
              }}
            >
              {/* Card Header */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-gold-500" style={{ color: '#F9C623' }} />
                  <span className="text-white font-semibold text-sm">Classement — Cette semaine</span>
                </div>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: 'rgba(19,236,164,0.15)',
                    color: '#13ECA4',
                    border: '1px solid rgba(19,236,164,0.25)',
                  }}
                >
                  En direct
                </span>
              </div>

              {/* Entries */}
              <div className="divide-y divide-white/5">
                {LEADERBOARD_ENTRIES.map((entry, index) => (
                  <motion.div
                    key={entry.rank}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.07 }}
                    className={`flex items-center gap-3 md:gap-4 px-5 py-3.5 transition-colors ${
                      index === 0
                        ? 'bg-gradient-to-r from-yellow-500/10 to-transparent'
                        : 'hover:bg-white/3'
                    }`}
                  >
                    {/* Rank */}
                    <div className="w-7 text-center flex-shrink-0">
                      {entry.badge ? (
                        <span className="text-lg">{entry.badge}</span>
                      ) : (
                        <span className="text-gray-400 text-sm font-bold tabular-nums">
                          {entry.rank}
                        </span>
                      )}
                    </div>

                    {/* Avatar */}
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{
                        background: index === 0
                          ? 'linear-gradient(135deg, #F9C623, #FBD354)'
                          : 'rgba(43,82,238,0.3)',
                        color: index === 0 ? '#080E2E' : '#fff',
                      }}
                    >
                      {entry.name.split(' ').map(n => n[0]).join('')}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{entry.name}</p>
                      <p className="text-gray-400 text-xs truncate">{entry.city}</p>
                    </div>

                    {/* Streak */}
                    <div className="hidden md:flex items-center gap-1 flex-shrink-0">
                      <Flame className="w-3.5 h-3.5 text-orange-400" />
                      <span className="text-orange-400 text-xs font-medium">{entry.streak}j</span>
                    </div>

                    {/* Score + bar */}
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span
                        className="text-sm font-bold tabular-nums"
                        style={{ color: entry.score >= 90 ? '#13ECA4' : '#fff' }}
                      >
                        {entry.score}%
                      </span>
                      <ScoreBar score={entry.score} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div
                className="px-5 py-3 flex items-center justify-between"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <span className="text-gray-500 text-xs">Basé sur 1 240 candidats actifs</span>
                <span className="text-blue-400 text-xs font-medium">Voir tout →</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2">
            <SectionLabel className="mb-4">Compétition</SectionLabel>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '-0.03em' }}
            >
              Monte dans le
              <br />
              <span className="gradient-text">classement</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-lg font-light leading-relaxed mb-8 max-w-lg"
            >
              Chaque session compte. Compare-toi à d&apos;autres candidats sénégalais,
              maintiens ta série quotidienne et grimpe dans le top 10.
              La compétition rend la préparation addictive.
            </motion.p>

            {/* Feature list */}
            <div className="space-y-5">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(43,82,238,0.25)', border: '1px solid rgba(43,82,238,0.4)' }}
                  >
                    <feature.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
