import type { MetadataRoute } from 'next'
import { listConcours } from '@/lib/concours'
import { SITE_URL } from '@/lib/urls'

// Littéral exigé par Next (= CONCOURS_REVALIDATE_SECONDS de lib/concours).
export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const concours = await listConcours()
  return [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
    ...concours.map((c) => ({
      url: `${SITE_URL}/concours/${c.slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
