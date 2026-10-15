// Concours publiés, lus depuis l'API publique (GET /concours, GET /concours/:slug)
// — les mêmes données que le catalogue de l'app, pour rester cohérent de bout
// en bout. Pages régénérées au plus toutes les heures (ISR) ; si l'API ne
// répond pas, on renvoie une liste vide / null plutôt que de casser le build.
import { API_URL } from '@/lib/urls'

export const CONCOURS_REVALIDATE_SECONDS = 3600

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
  contentStats: Partial<ConcoursContentStats> | null
  matieres: { id: string; name: string }[] | null
}

async function apiGet<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: CONCOURS_REVALIDATE_SECONDS },
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
