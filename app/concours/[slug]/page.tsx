import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import {
  concoursLabel,
  getConcours,
  isComingSoon,
  listConcours,
  type ConcoursContentStats,
  type PublicConcours,
} from '@/lib/concours'
import { REGISTER_URL, SITE_URL } from '@/lib/urls'
import { WaitlistForm } from '@/components/ui/WaitlistForm'

// Pages pré-générées au build pour chaque concours publié, régénérées dès que
// l'API signale une modification (tag « concours ») et au plus toutes les
// 5 minutes ; un concours ajouté après le build est rendu à la première
// visite (dynamicParams par défaut). Littéral exigé par Next
// (= CONCOURS_REVALIDATE_SECONDS).
export const revalidate = 300

export async function generateStaticParams() {
  const concours = await listConcours()
  return concours.map((c) => ({ slug: c.slug }))
}

type Props = { params: Promise<{ slug: string }> }

const STAT_LABELS: [keyof ConcoursContentStats, string][] = [
  ['matieres', 'Matières'],
  ['lecons', 'Leçons'],
  ['qcmQuestions', 'Questions de QCM'],
  ['flashcards', 'Flashcards'],
  ['exercices', 'Exercices corrigés'],
  ['examensBlancs', 'Examens blancs'],
]

const formatNumber = (n: number) => n.toLocaleString('fr-FR')

function summary(c: PublicConcours) {
  if (c.description?.trim()) return c.description.trim()
  if (isComingSoon(c)) return `La préparation au concours ${concoursLabel(c)} arrive bientôt sur TEKKIL.`
  // Seulement les formats réellement présents dans ce concours (contentStats).
  const s = c.contentStats ?? {}
  const formats = [
    s.lecons ? 'fiches de cours' : null,
    s.qcmQuestions ? `QCM (${formatNumber(s.qcmQuestions)} questions)` : null,
    s.flashcards ? 'flashcards' : null,
    s.exercices ? 'exercices corrigés' : null,
    s.examensBlancs ? 'examens blancs' : null,
  ].filter((f): f is string => f !== null)
  const list = formats.length > 1 ? `${formats.slice(0, -1).join(', ')} et ${formats.at(-1)}` : formats[0]
  return `Prépare le concours ${concoursLabel(c)} sur TEKKIL${list ? ` : ${list}` : ''}, matière par matière.`
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const c = await getConcours(slug)
  if (!c) return { title: 'Concours introuvable — TEKKIL' }
  const title = `Préparer le concours ${concoursLabel(c)} — TEKKIL`
  const description = summary(c)
  return {
    title,
    description,
    alternates: { canonical: `/concours/${c.slug}` },
    openGraph: { title, description, url: `${SITE_URL}/concours/${c.slug}`, type: 'website', locale: 'fr_SN', siteName: 'TEKKIL' },
  }
}

export default async function ConcoursPage({ params }: Props) {
  const { slug } = await params
  const c = await getConcours(slug)
  if (!c) notFound()

  const label = concoursLabel(c)
  const soon = isComingSoon(c)
  const stats = STAT_LABELS.map(([key, text]) => ({ text, value: c.contentStats?.[key] ?? 0 })).filter((s) => s.value > 0)
  const matieres = c.matieres ?? []

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: `Concours ${label}`, item: `${SITE_URL}/concours/${c.slug}` },
    ],
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, '\\u003c') }}
      />
      <Navbar />
      <div className="min-h-screen bg-[#FAFAFA]">
        {/* ─── En-tête ─── */}
        <div className="relative w-full overflow-hidden bg-[#0A0A0A] pt-32 pb-16 md:pt-40 md:pb-20">
          {c.imageUrl && (
            // Image du catalogue (déjà en WebP optimisé côté API), en fond discret
            // eslint-disable-next-line @next/next/no-img-element
            <img src={c.imageUrl} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 to-[#0A0A0A]" />
          <div className="relative z-10 mx-auto max-w-4xl px-5 md:px-8">
            <nav aria-label="Fil d'Ariane" className="mb-10 flex items-center gap-2 text-[13px] text-white/40">
              <Link href="/" className="inline-flex items-center transition-colors hover:text-white/70">Accueil</Link>
              <span className="text-white/20">·</span>
              <span className="text-white/60">Concours {label}</span>
            </nav>
            <div className="mb-3 flex flex-wrap items-center gap-2.5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#14B09C]">Concours {label}</p>
              {soon && (
                <span className="rounded-full border border-[#F9C623]/40 bg-[#F9C623]/10 px-2.5 py-0.5 text-[12px] font-semibold text-[#F9C623]">
                  Bientôt disponible
                </span>
              )}
            </div>
            <h1
              className="mb-5 text-4xl font-extrabold leading-[1.1] text-white md:text-5xl"
              style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '-0.03em' }}
            >
              {c.name}
            </h1>
            <p className="max-w-2xl text-[15px] leading-relaxed text-white/60 md:text-base">{summary(c)}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={soon ? '#offre' : REGISTER_URL}
                className="inline-flex items-center justify-center rounded-full bg-[#14B09C] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#0f9a88]"
              >
                {soon ? 'Être prévenu(e) de l’ouverture' : 'Commencer ma préparation'}
              </a>
              <Link
                href="/#nos-packs"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-[15px] font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                Voir tous les dossiers
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl space-y-14 px-5 py-14 md:px-8 md:py-20">
          {/* ─── Contenus ─── */}
          {stats.length > 0 && (
            <section aria-labelledby="contenus">
              <h2 id="contenus" className="mb-6 text-2xl font-bold text-[#0A0A0A] md:text-3xl">
                Ce que contient la préparation
              </h2>
              <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {stats.map((s) => (
                  <li key={s.text} className="rounded-2xl border border-black/[0.06] bg-white p-5">
                    <p className="text-2xl font-extrabold text-[#1A2672] md:text-3xl">{formatNumber(s.value)}</p>
                    <p className="mt-1 text-[13px] text-slate-600">{s.text}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ─── Matières ─── */}
          {matieres.length > 0 && (
            <section aria-labelledby="matieres">
              <h2 id="matieres" className="mb-6 text-2xl font-bold text-[#0A0A0A] md:text-3xl">
                Les matières du concours
              </h2>
              <ul className="flex flex-wrap gap-2.5">
                {matieres.map((m) => (
                  <li key={m.id} className="rounded-full border border-black/[0.08] bg-white px-4 py-2 text-[14px] font-medium text-slate-800">
                    {m.name}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
                Chaque matière est découpée en leçons, à travailler à ton rythme, avec un aperçu gratuit pour commencer.
              </p>
            </section>
          )}

          {/* ─── Offre ─── */}
          {soon ? (
            <section aria-labelledby="offre" className="scroll-mt-28 rounded-3xl bg-[#0A0A0A] p-7 text-white md:p-10">
              <h2 id="offre" className="mb-3 text-2xl font-bold md:text-3xl">Le {label} arrive bientôt</h2>
              <p className="mb-6 max-w-2xl text-[15px] leading-relaxed text-white/65">
                Nos enseignants préparent les matières de ce concours. Laisse ton e-mail : tu seras prévenu(e) dès la publication des premiers contenus.
              </p>
              <div className="max-w-md">
                <WaitlistForm packId={c.slug} packName={`concours ${label}`} tone="dark" />
              </div>
            </section>
          ) : (
          <section aria-labelledby="offre" className="rounded-3xl bg-[#0A0A0A] p-7 text-white md:p-10">
            <h2 id="offre" className="mb-3 text-2xl font-bold md:text-3xl">Commencer gratuitement</h2>
            <p className="max-w-2xl text-[15px] leading-relaxed text-white/65">
              Crée ton compte pour découvrir gratuitement un aperçu de chaque matière, puis débloque tout le contenu quand tu es prêt.
            </p>
            {c.bundlePrice != null && c.bundlePrice > 0 && (
              <p className="mt-5 text-[15px] text-white/80">
                Offre <strong className="text-white">Concours {label} complet</strong> : toutes les matières en un seul achat,{' '}
                <strong className="text-[#F9C623]">{formatNumber(c.bundlePrice)} FCFA</strong>.
              </p>
            )}
            <a
              href={REGISTER_URL}
              className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#0A0A0A] transition-colors hover:bg-white/90"
            >
              Créer mon compte
            </a>
          </section>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
