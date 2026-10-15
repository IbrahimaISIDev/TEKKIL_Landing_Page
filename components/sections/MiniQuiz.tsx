'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { REGISTER_URL } from '@/lib/urls'

// Trois exercices types, du genre des épreuves Verbal / Numérique annoncées
// dans la FAQ. Exemples statiques (pas tirés de la base) : présentés comme tels.
type Question = {
  domain: 'Numérique' | 'Verbal'
  prompt: string
  options: string[]
  answer: number
  explanation: string
}

const QUESTIONS: Question[] = [
  {
    domain: 'Numérique',
    prompt: 'Quel nombre complète la suite : 3 – 6 – 11 – 18 – 27 – ?',
    options: ['36', '38', '39', '40'],
    answer: 1,
    explanation: 'On ajoute 3, puis 5, 7, 9… (nombres impairs successifs). Après 27, on ajoute 11 : 27 + 11 = 38.',
  },
  {
    domain: 'Verbal',
    prompt: 'Quel est le synonyme de « éphémère » ?',
    options: ['Éternel', 'Passager', 'Fragile', 'Rapide'],
    answer: 1,
    explanation: 'Est éphémère ce qui ne dure que peu de temps : « passager ». « Éternel » en est le contraire.',
  },
  {
    domain: 'Numérique',
    prompt: 'Un article coûte 5 000 FCFA. Après une remise de 20 %, quel est son prix ?',
    options: ['4 800 FCFA', '4 500 FCFA', '4 000 FCFA', '3 000 FCFA'],
    answer: 2,
    explanation: '20 % de 5 000 = 1 000. Le prix devient 5 000 − 1 000 = 4 000 FCFA.',
  },
]

export function MiniQuiz() {
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = QUESTIONS[index]
  const answered = picked !== null

  const pick = (i: number) => {
    if (answered) return
    setPicked(i)
    if (i === q.answer) setScore((s) => s + 1)
  }

  const next = () => {
    if (index === QUESTIONS.length - 1) {
      setDone(true)
      return
    }
    setIndex((n) => n + 1)
    setPicked(null)
  }

  const restart = () => {
    setIndex(0)
    setPicked(null)
    setScore(0)
    setDone(false)
  }

  return (
    <section id="essayer" aria-labelledby="essayer-titre" className="relative bg-[#F8FAFC] py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0D9488]"
          >
            Essaie maintenant · sans inscription
          </motion.div>
          <h2
            id="essayer-titre"
            className="mb-3 text-3xl font-black leading-tight tracking-[-0.03em] text-[#0B132B] sm:text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-roboto-condensed)' }}
          >
            3 questions pour{' '}
            <span className="bg-gradient-to-r from-[#1A2356] via-[#27316F] to-[#0D9488] bg-clip-text text-transparent">
              te tester.
            </span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Des exemples d&apos;exercices Verbal et Numérique, corrigés pas à pas comme dans l&apos;app.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_-25px_rgba(8,14,46,0.15)] sm:p-8">
          {done ? (
            <div className="text-center" aria-live="polite">
              <p className="text-[13px] font-semibold uppercase tracking-wider text-slate-500">Ton résultat</p>
              <p className="mt-2 text-5xl font-black text-[#1A2672]" style={{ fontFamily: 'var(--font-roboto-condensed)' }}>
                {score} / {QUESTIONS.length}
              </p>
              <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-slate-600">
                {score === QUESTIONS.length
                  ? 'Excellent départ ! Continue avec des milliers de questions classées par matière et par niveau.'
                  : 'Chaque erreur est une notion à revoir : dans TEKKIL, la correction te renvoie vers la bonne leçon.'}
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={REGISTER_URL}
                  className="inline-flex items-center justify-center rounded-full bg-[#14B09C] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#0f9a88]"
                >
                  Continuer sur TEKKIL
                </a>
                <button
                  type="button"
                  onClick={restart}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-7 py-3.5 text-[15px] font-medium text-slate-700 transition-colors hover:border-slate-300"
                >
                  Recommencer
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-5 flex items-center justify-between text-[13px]">
                <span className="rounded-full bg-[#0D9488]/10 px-3 py-1 font-semibold text-[#0D9488]">{q.domain}</span>
                <span className="font-medium text-slate-500">
                  Question {index + 1} / {QUESTIONS.length}
                </span>
              </div>
              <p className="mb-6 text-lg font-semibold leading-snug text-[#0B132B] sm:text-xl">{q.prompt}</p>
              <div className="grid gap-3 sm:grid-cols-2" role="group" aria-label="Choix de réponse">
                {q.options.map((opt, i) => {
                  const isAnswer = i === q.answer
                  const isPicked = i === picked
                  const state = !answered
                    ? 'border-slate-200 hover:border-[#14B09C]/60 hover:bg-[#14B09C]/[0.04]'
                    : isAnswer
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                      : isPicked
                        ? 'border-red-400 bg-red-50 text-red-900'
                        : 'border-slate-200 opacity-60'
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => pick(i)}
                      disabled={answered}
                      aria-pressed={isPicked}
                      className={`rounded-2xl border-2 px-4 py-3.5 text-left text-[15px] font-medium transition-colors disabled:cursor-default ${state}`}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>

              <div aria-live="polite">
                {answered && (
                  <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-[14px] leading-relaxed text-slate-700">
                    <p className={`mb-1 font-bold ${picked === q.answer ? 'text-emerald-700' : 'text-red-700'}`}>
                      {picked === q.answer ? 'Bonne réponse !' : `Réponse attendue : ${q.options[q.answer]}`}
                    </p>
                    {q.explanation}
                  </div>
                )}
              </div>

              {answered && (
                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={next}
                    className="inline-flex items-center justify-center rounded-full bg-[#0B132B] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#1A2672]"
                  >
                    {index === QUESTIONS.length - 1 ? 'Voir mon résultat' : 'Question suivante'}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
