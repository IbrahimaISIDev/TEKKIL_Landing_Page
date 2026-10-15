// Données structurées schema.org (JSON-LD) de la page d'accueil. Construites
// à partir des mêmes constantes que la page (FAQ_ITEMS, CONTACT_CHANNELS) :
// Google exige que le contenu balisé soit visible tel quel sur la page.
import { CONTACT_CHANNELS, FAQ_ITEMS } from '@/lib/constants'
import { SITE_URL } from '@/lib/urls'

const email = CONTACT_CHANNELS.find((c) => c.icon === 'Mail')?.value
const socialProfiles = CONTACT_CHANNELS.filter((c) => c.href.startsWith('https://')).map((c) => c.href)

export const homeStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': `${SITE_URL}/#organization`,
      name: 'TEKKIL',
      url: SITE_URL,
      logo: `${SITE_URL}/logo-mark.png`,
      description: 'Plateforme de préparation aux concours nationaux au Sénégal.',
      areaServed: { '@type': 'Country', name: 'Sénégal' },
      ...(email && { email }),
      sameAs: socialProfiles,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'TEKKIL',
      inLanguage: 'fr-SN',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ],
}
