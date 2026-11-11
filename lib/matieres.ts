// Matières transversales (« Apprendre à apprendre »…), vendues seules, lues
// depuis l'API publique : le rayon « Matières transversales » (GET
// /concours?kind=transversal) puis ses matières (GET /concours/:id/packs) —
// les mêmes données que la section du catalogue de l'app. Même cache que les
// concours (tag CONCOURS_CACHE_TAG, régénéré par l'API à chaque modification
// d'une matière ou d'un contenu, sinon toutes les 5 minutes). Si l'API ne
// répond pas : liste vide / null, jamais d'erreur au build.
import { CONCOURS_CACHE_TAG, CONCOURS_REVALIDATE_SECONDS, type ConcoursContentStats } from '@/lib/concours'
import { API_URL } from '@/lib/urls'

export type PublicMatiere = {
  id: string
  slug: string
  name: string
  description: string | null
  imageUrl: string | null
  price: number
  promotionalPrice: number | null
  promotionEnd: string | null
  isFreeWindow: boolean
  isActive: boolean
  closingDate: string
  defaultAccessDurationDays: number
  availability?: 'available' | 'coming_soon' | string
  /** Fermée au public : réglée « bientôt » ou concours d'origine « bientôt ». */
  closedToPublic?: boolean
  contentItemsCount?: number
  contentStats: Partial<Omit<ConcoursContentStats, 'matieres'>> | null
  modules?: { id: string; name: string }[]
  /** Concours d'origine (rattachement au rayon = matière de concours aussi
   * vendue seule, ex. Français du CREM). */
  concoursId?: string
  isLinked?: boolean
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

/** Matières actives du rayon, dans l'ordre de l'admin. */
export async function listMatieres(): Promise<PublicMatiere[]> {
  const body = await apiGet<{ data?: { id: string; kind: string; isActive?: boolean }[] }>('/concours?kind=transversal')
  const shelf = body?.data?.find((c) => c.kind === 'transversal' && c.isActive !== false)
  if (!shelf) return []
  const packs = await apiGet<PublicMatiere[] | { data?: PublicMatiere[] }>(`/concours/${shelf.id}/packs`)
  const items = Array.isArray(packs) ? packs : (packs?.data ?? [])
  const now = Date.now()
  return items.filter((m) => m.isActive !== false && new Date(m.closingDate).getTime() > now)
}

export async function getMatiere(slug: string): Promise<PublicMatiere | null> {
  return (await listMatieres()).find((m) => m.slug === slug) ?? null
}

/** Au moins un contenu publié — même règle que l'API et l'app. */
function hasContent(m: PublicMatiere) {
  const s = m.contentStats ?? {}
  const stats = (s.lecons ?? 0) + (s.qcmQuestions ?? 0) + (s.flashcards ?? 0) + (s.examensBlancs ?? 0) + (s.exercices ?? 0)
  return stats > 0 || (m.contentItemsCount ?? 0) > 0
}

/** « Bientôt disponible » : réglage admin, concours d'origine pas ouvert, ou
 * aucun contenu publié — même règle que la carte de l'app. */
export function isMatiereComingSoon(m: PublicMatiere) {
  return !!m.closedToPublic || m.availability === 'coming_soon' || !hasContent(m)
}

/** Prix payé aujourd'hui : promotion en cours, sinon prix normal. */
export function matierePrice(m: PublicMatiere, now = Date.now()) {
  const promo = m.promotionalPrice
  const promoActive =
    promo != null && promo > 0 && promo < m.price && (!m.promotionEnd || new Date(m.promotionEnd).getTime() > now)
  return { price: promoActive ? promo : m.price, regularPrice: promoActive ? m.price : null }
}

/** Durée d'accès lisible (« 1 an », « 6 mois », « 30 jours »). */
export function accessDurationLabel(days: number) {
  if (days >= 365 && days % 365 === 0) return days === 365 ? '1 an' : `${days / 365} ans`
  if (days >= 30 && days % 30 === 0) return `${days / 30} mois`
  return `${days} jours`
}
