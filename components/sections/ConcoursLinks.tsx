import Link from 'next/link'
import { concoursLabel, isComingSoon, listConcours } from '@/lib/concours'

// Liens vers les pages /concours/[slug], construits depuis l'API (mêmes
// concours que le catalogue de l'app). Rien n'est affiché si l'API ne répond pas.
export async function ConcoursLinks() {
  const concours = await listConcours()
  if (concours.length === 0) return null

  return (
    <section aria-labelledby="preparer-un-concours" className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 id="preparer-un-concours" className="mb-5 text-center text-[13px] font-semibold uppercase tracking-[0.14em] text-slate-500">
          Préparer un concours
        </h2>
        <ul className="flex flex-wrap justify-center gap-3">
          {concours.map((c) => {
            const q = c.contentStats?.qcmQuestions
            const soon = isComingSoon(c)
            return (
              <li key={c.slug}>
                <Link
                  href={`/concours/${c.slug}`}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-black/[0.08] bg-white px-5 py-2.5 text-[14px] font-semibold text-[#1A2672] transition-colors hover:border-[#14B09C]/50 hover:text-[#14B09C]"
                >
                  Concours {concoursLabel(c)}
                  {soon ? (
                    <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700">Bientôt disponible</span>
                  ) : q ? (
                    <span className="text-[12px] font-medium text-slate-500">{q.toLocaleString('fr-FR')} QCM</span>
                  ) : null}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
