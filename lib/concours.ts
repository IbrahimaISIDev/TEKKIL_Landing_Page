// Concours publiés, lus depuis l'API publique (GET /concours, GET /concours/:slug)
// — les mêmes données que le catalogue de l'app, pour rester cohérent de bout
// en bout. L'API prévient la landing à chaque modification d'un concours,
// d'une matière ou d'un contenu (POST /api/revalidate → tag CONCOURS_CACHE_TAG) ;
// à défaut, régénération au plus toutes les 5 minutes (ISR). Si l'API ne
// répond pas, on renvoie une liste vide / null plutôt que de casser le build.
import { API_URL } from '@/lib/urls'

export const CONCOURS_REVALIDATE_SECONDS = 300
export const CONCOURS_CACHE_TAG = 'concours'

export type ConcoursContentStats = {
  matieres: number
  lecons: number
  qcmQuestions: number
  flashcards: number
  examensBlancs: number
  exercices: number
}

export type PublicConcours = {
  slug: string
  name: string
  abbreviation: string | null
  kind: 'concours' | 'transversal' | string
  description: string | null
  imageUrl: string | null
  bundlePrice: number | null
  isActive: boolean
  type?: 'direct' | 'indirect' | 'libre' | string
  /** Réglage manuel de l'admin — lire isComingSoon() pour l'affichage. */
  availability?: 'available' | 'coming_soon' | string
  /** « Bientôt disponible » effectif calculé par l'API (réglage admin OU
   * aucun contenu publié). Absent avant redéploiement de l'API. */
  isComingSoon?: boolean
  contentStats: Partial<ConcoursContentStats> | null
  matieres: { id: string; name: string }[] | null
}

async function apiGet<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: CONCOURS_REVALIDATE_SECONDS, tags: [CONCOURS_CACHE_TAG] },
      signal: AbortSignal.timeout(10_000),
    })
    if (!res.ok) return null
    return (await res.json()) as T
  } catch {
    return null
  }
}

/** Concours proprement dits (hors « Matières transversales »), actifs. */
export async function listConcours(): Promise<PublicConcours[]> {
  const body = await apiGet<{ data?: PublicConcours[] } | PublicConcours[]>('/concours?limit=100')
  const items = Array.isArray(body) ? body : (body?.data ?? [])
  return items.filter((c) => c.kind === 'concours' && c.isActive !== false)
}

export async function getConcours(slug: string): Promise<PublicConcours | null> {
  const body = await apiGet<{ data?: PublicConcours } | PublicConcours>(`/concours/${encodeURIComponent(slug)}`)
  const c = body && 'data' in body && body.data ? body.data : (body as PublicConcours | null)
  if (!c || c.kind !== 'concours' || c.isActive === false) return null
  return c
}

export function concoursLabel(c: Pick<PublicConcours, 'abbreviation' | 'name'>) {
  return c.abbreviation?.trim() || c.name
}

/** Au moins un contenu pédagogique publié (leçon, QCM, flashcard, examen
 * blanc ou exercice) — même règle que l'API. */
export function hasPublishedContent(c: Pick<PublicConcours, 'contentStats'>) {
  const s = c.contentStats ?? {}
  return (s.lecons ?? 0) + (s.qcmQuestions ?? 0) + (s.flashcards ?? 0) + (s.examensBlancs ?? 0) + (s.exercices ?? 0) > 0
}

/** « Bientôt disponible » : calculé par l'API ; repli sur la même règle
 * (réglage admin OU aucun contenu publié) tant qu'elle ne l'expose pas. */
export function isComingSoon(c: Pick<PublicConcours, 'isComingSoon' | 'availability' | 'contentStats'>) {
  return c.isComingSoon ?? (c.availability === 'coming_soon' || !hasPublishedContent(c))
}
