import { timingSafeEqual } from 'node:crypto'
import { revalidateTag } from 'next/cache'
import { CONCOURS_CACHE_TAG } from '@/lib/concours'

// Appelé par l'API (LandingRevalidationService) dès qu'un concours, une
// matière ou un contenu change : les cartes concours de l'accueil et les pages
// /concours/[slug] sont régénérées à la visite suivante, sans attendre l'ISR.
// Secret partagé : REVALIDATE_SECRET ici = LANDING_REVALIDATE_SECRET côté API.

function authorized(given: string | null): boolean {
  const expected = process.env.REVALIDATE_SECRET
  if (!expected || !given) return false
  const a = Buffer.from(given)
  const b = Buffer.from(expected)
  return a.length === b.length && timingSafeEqual(a, b)
}

export async function POST(request: Request) {
  if (!authorized(request.headers.get('x-revalidate-secret'))) {
    return Response.json({ revalidated: false }, { status: 401 })
  }
  // Expiration immédiate : appel externe (webhook), cf. doc revalidateTag.
  revalidateTag(CONCOURS_CACHE_TAG, { expire: 0 })
  return Response.json({ revalidated: true, now: Date.now() })
}
