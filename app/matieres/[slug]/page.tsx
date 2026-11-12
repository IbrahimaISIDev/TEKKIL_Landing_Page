import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { InstallCta } from '@/components/ui/InstallCta'
import {
  accessDurationLabel,
  getMatiere,
  isMatiereComingSoon,
  listMatieres,
  matierePrice,
  type PublicMatiere,
} from '@/lib/matieres'
import { concoursLabel, listConcours, type ConcoursContentStats } from '@/lib/concours'
import { REGISTER_URL, SITE_URL } from '@/lib/urls'

// Pages des matières transversales (« Apprendre à apprendre »…), vendues
// seules : pré-générées au build, régénérées dès que l'API signale une
// modification (tag « concours ») et au plus toutes les 5 minutes ; une
// matière ajoutée après le build est rendue à la première visite. Littéral
// exigé par Next (= CONCOURS_REVALIDATE_SECONDS).
export const revalidate = 300

export async function generateStaticParams() {
  const matieres = await listMatieres()
  return matieres.map((m) => ({ slug: m.slug }))
}

type Props = { params: Promise<{ slug: string }> }

const STAT_LABELS: [keyof Omit<ConcoursContentStats, 'matieres'>, string][] = [
  ['lecons', 'Leçons'],
  ['qcmQuestions', 'Questions de QCM'],
  ['flashcards', 'Flashcards'],
  ['exercices', 'Exercices corrigés'],
  ['examensBlancs', 'Examens blancs'],
]

const formatNumber = (n: number) => n.toLocaleString('fr-FR')

function summary(m: PublicMatiere) {
  if (m.description?.trim()) return m.description.trim()
  if (isMatiereComingSoon(m)) return `La matière ${m.name} arrive bientôt sur TEKKIL.`
  const alone = m.isLinked ? '' : ' — sans être inscrit(e) à un concours'
  return `Travaille ${m.name} sur TEKKIL, module par module, à ton rythme${alone}.`
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const m = await getMatiere(slug)
  if (!m) return { title: 'Matière introuvable — TEKKIL' }
  const title = `${m.name} — TEKKIL`
  const description = summary(m)
  return {
    title,
    description,
    alternates: { canonical: `/matieres/${m.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/matieres/${m.slug}`,
      type: 'website',
      locale: 'fr_SN',
      siteName: 'TEKKIL',
      ...(m.imageUrl ? { images: [{ url: m.imageUrl }] } : {}),
    },
  }
}

export default async function MatierePage({ params }: Props) {
  const { slug } = await params
  const m = await getMatiere(slug)
  if (!m) notFound()

  const soon = isMatiereComingSoon(m)
  // Matière d'un concours aussi vendue seule : on le dit, avec un lien vers
  // le concours (son offre complète peut être plus avantageuse).
  const originConcours = m.isLinked
    ? ((await listConcours()).find((c) => c.id === m.concoursId) ?? null)
    : null
  const stats = STAT_LABELS.map(([key, text]) => ({ text, value: m.contentStats?.[key] ?? 0 })).filter((s) => s.value > 0)
  const modules = m.modules ?? []
  const { price, regularPrice } = matierePrice(m)
  const free = price <= 0
  const duration = accessDurationLabel(m.defaultAccessDurationDays)

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: m.name, item: `${SITE_URL}/matieres/${m.slug}` },
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
          {m.imageUrl && (
            // Image du catalogue (déjà en WebP optimisé côté API), en fond discret
            // eslint-disable-next-line @next/next/no-img-element
            <img src={m.imageUrl} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 to-[#0A0A0A]" />
          <div className="relative z-10 mx-auto max-w-4xl px-5 md:px-8">
            <nav aria-label="Fil d'Ariane" className="mb-10 flex items-center gap-2 text-[13px] text-white/40">
              <Link href="/" className="inline-flex items-center transition-colors hover:text-white/70">Accueil</Link>
              <span className="text-white/20">·</span>
              <span className="text-white/60">{m.name}</span>
            </nav>
            <div className="mb-3 flex flex-wrap items-center gap-2.5">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#14B09C]">
                {originConcours ? `Matière du concours ${concoursLabel(originConcours)}` : 'Matière à la carte'}
              </p>
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
              {m.name}
            </h1>
            <p className="max-w-2xl text-[15px] leading-relaxed text-white/60 md:text-base">{summary(m)}</p>
            {originConcours && (
              <p className="mt-3 max-w-2xl text-[14px] text-white/50">
                Vendue seule, cette matière fait aussi partie de la{' '}
                <Link href={`/concours/${originConcours.slug}`} className="font-semibold text-white/80 underline underline-offset-2 hover:text-white">
                  préparation au concours {concoursLabel(originConcours)}
                </Link>
                .
              </p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={REGISTER_URL}
                className="inline-flex items-center justify-center rounded-full bg-[#14B09C] px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#0f9a88]"
              >
                {soon ? 'Créer mon compte' : 'Commencer'}
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
                Ce que contient la matière
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

          {/* ─── Programme ─── */}
          {modules.length > 0 && (
            <section aria-labelledby="programme">
              <h2 id="programme" className="mb-6 text-2xl font-bold text-[#0A0A0A] md:text-3xl">
                Le programme
              </h2>
              <ol className="grid gap-2.5 sm:grid-cols-2">
                {modules.map((mod, i) => (
                  <li key={mod.id} className="flex items-start gap-3 rounded-2xl border border-black/[0.06] bg-white p-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#14B09C]/10 text-[13px] font-bold text-[#14B09C]">
                      {i + 1}
                    </span>
                    <span className="min-w-0 pt-0.5 text-[14px] font-medium text-slate-800">{mod.name}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
                Chaque module est découpé en leçons, à travailler à ton rythme, avec un aperçu gratuit pour commencer.
              </p>
            </section>
          )}

          {/* ─── Offre ─── */}
          <section aria-labelledby="offre" className="rounded-3xl bg-[#0A0A0A] p-7 text-white md:p-10">
            {soon ? (
              <>
                <h2 id="offre" className="mb-3 text-2xl font-bold md:text-3xl">{m.name} arrive bientôt</h2>
                <p className="max-w-2xl text-[15px] leading-relaxed text-white/65">
                  Nos enseignants préparent cette matière. Crée ton compte, puis active « Me prévenir » sur sa page : tu seras averti(e) dès son ouverture.
                </p>
              </>
            ) : (
              <>
                <h2 id="offre" className="mb-3 text-2xl font-bold md:text-3xl">
                  {free ? 'Gratuite' : 'Commencer gratuitement'}
                </h2>
                <p className="max-w-2xl text-[15px] leading-relaxed text-white/65">
                  {free
                    ? 'Crée ton compte : toute la matière est accessible gratuitement.'
                    : m.isFreeWindow
                      ? 'Accès gratuit pour un temps limité : crée ton compte pour en profiter.'
                      : 'Crée ton compte pour découvrir gratuitement un aperçu de la matière, puis débloque tout le contenu quand tu es prêt.'}
                </p>
                {!free && (
                  <p className="mt-5 text-[15px] text-white/80">
                    Matière complète :{' '}
                    <strong className="text-[#F9C623]">{formatNumber(price)} FCFA</strong>
                    {regularPrice != null && (
                      <span className="ml-2 text-white/50 line-through">{formatNumber(regularPrice)} FCFA</span>
                    )}
                    {' '}· accès pendant {duration}.
                  </p>
                )}
              </>
            )}
            <a
              href={REGISTER_URL}
              className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#0A0A0A] transition-colors hover:bg-white/90"
            >
              Créer mon compte
            </a>
          </section>
        </div>
      </div>
      <Footer />
      <InstallCta />
    </main>
  )
}
