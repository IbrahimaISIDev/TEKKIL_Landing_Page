import { concoursLabel, isComingSoon, listConcours, type PublicConcours } from '@/lib/concours'
import { PricingCards, type ConcoursCard } from './PricingCards'

// Cartes « dossiers » des concours créés dans l'Admin, lues depuis l'API
// (mêmes données que le catalogue de l'app) : rien n'est saisi à la main ici.
// Régénérées dès que l'API signale une modification (cf. lib/concours.ts).
// Section masquée si l'API ne répond pas, plutôt que des cartes vides.

const TYPE_LABELS: Record<string, string> = {
  direct: 'Concours direct',
  indirect: 'Concours indirect',
  libre: 'Concours libre',
}

function toCard(c: PublicConcours): ConcoursCard {
  const s = c.contentStats ?? {}
  return {
    slug: c.slug,
    label: concoursLabel(c),
    fullName: c.name,
    typeLabel: TYPE_LABELS[c.type ?? ''] ?? 'Concours',
    description: c.description?.trim() || null,
    imageUrl: c.imageUrl,
    comingSoon: isComingSoon(c),
    matieres: (c.matieres ?? []).map((m) => m.name),
    stats: {
      matieres: s.matieres ?? c.matieres?.length ?? 0,
      lecons: s.lecons ?? 0,
      qcmQuestions: s.qcmQuestions ?? 0,
      flashcards: s.flashcards ?? 0,
      examensBlancs: s.examensBlancs ?? 0,
      exercices: s.exercices ?? 0,
    },
    bundlePrice: c.bundlePrice != null && c.bundlePrice > 0 ? c.bundlePrice : null,
  }
}

export async function Pricing() {
  const concours = await listConcours()
  if (concours.length === 0) return null
  // Ordre de l'Admin, les concours ouverts d'abord (comme le catalogue de l'app).
  const cards = concours.map(toCard).sort((a, b) => Number(a.comingSoon) - Number(b.comingSoon))
  return <PricingCards cards={cards} />
}
