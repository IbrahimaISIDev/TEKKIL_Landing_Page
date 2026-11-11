import type { MetadataRoute } from 'next'
import { listConcours } from '@/lib/concours'
import { listMatieres } from '@/lib/matieres'
import { SITE_URL } from '@/lib/urls'

// Littéral exigé par Next (= CONCOURS_REVALIDATE_SECONDS de lib/concours).
export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [concours, matieres] = await Promise.all([listConcours(), listMatieres()])
  return [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
    ...concours.map((c) => ({
      url: `${SITE_URL}/concours/${c.slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...matieres.map((m) => ({
      url: `${SITE_URL}/matieres/${m.slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
