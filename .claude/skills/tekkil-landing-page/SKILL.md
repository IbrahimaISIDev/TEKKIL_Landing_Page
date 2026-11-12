---
name: tekkil-landing-page
description: Ajouter ou modifier une page ou une section publique de tekkilapp.com (dépôt TEKKIL_Landing_Page, Next.js) selon ses conventions réelles — données lues seulement dans l'API publique (lib/concours.ts, lib/matieres.ts), cache et revalidation (tag concours, ISR 5 min), generateStaticParams, métadonnées et adresse canonique, fil d'Ariane JSON-LD, sitemap, liens vers l'application (lib/urls.ts), contrôle du rendu après build. À utiliser dès qu'on parle de la page d'accueil publique, d'une page concours ou matière publique, du référencement (SEO, Google, sitemap) ou d'une nouvelle section de l'accueil.
---

# Pages publiques de tekkilapp.com

Dépôt `TEKKIL_Landing_Page` (Next.js, App Router). Modèles à suivre :
`app/concours/[slug]/page.tsx` et `app/matieres/[slug]/page.tsx` (pages),
`lib/concours.ts` et `lib/matieres.ts` (données),
`components/sections/ConcoursLinks.tsx` (section de l'accueil).

## Procédure

1. **Données : seulement l'API publique**, par une fonction de `lib/*.ts` sur
   le modèle `apiGet` de `lib/concours.ts` :
   `fetch(\`${API_URL}…\`, { next: { revalidate: CONCOURS_REVALIDATE_SECONDS,
   tags: [CONCOURS_CACHE_TAG] }, signal: AbortSignal.timeout(10_000) })`, et
   `null` / liste vide si l'API ne répond pas (le build ne doit jamais casser).
   Jamais d'adresse en dur : `API_URL`, `APP_URL`, `REGISTER_URL`, `SITE_URL`
   viennent de `lib/urls.ts` (fixées au build par le Dockerfile).
2. **Champs récents de l'API = facultatifs** dans les types (`champ?:`) et
   lus avec un repli (`c.bundleOffered !== false`) : la page d'accueil peut
   être construite avant le déploiement de l'API.
3. **Page dynamique** (`app/<route>/[slug]/page.tsx`) :
   - `export const revalidate = 300` (littéral exigé par Next) ;
   - `generateStaticParams` depuis la liste de l'API ;
   - `generateMetadata` : titre « … — TEKKIL », description,
     `alternates: { canonical: '/<route>/<slug>' }`, `openGraph` (`locale:
     'fr_SN'`, `siteName: 'TEKKIL'`, image si disponible) ;
   - `notFound()` pour un slug inconnu ou inactif ;
   - fil d'Ariane JSON-LD (`application/ld+json`, `JSON.stringify(…)
     .replace(/</g, '\\u003c')`) ;
   - `Navbar` + `Footer`, même structure visuelle que les pages concours.
4. **Sitemap** : ajouter la route dans `app/sitemap.ts`. **Accueil** : un lien
   depuis une section de `components/sections/` si la page doit être trouvée.
5. **Revalidation** : les pages se régénèrent au plus toutes les 5 minutes ;
   l'API peut les rafraîchir tout de suite (`POST /api/revalidate`, secret
   `REVALIDATE_SECRET` = `LANDING_REVALIDATE_SECRET` côté API) si c'est
   configuré. Une table nouvelle dont dépend une page : l'ajouter à
   `WATCHED_TABLES` (`tekkil-api/src/landing-revalidation/`).
6. **Contrôles** :
   ```bash
   npx tsc --noEmit && npx eslint <fichiers modifiés>
   node .claude/skills/tekkil-landing-page/scripts/check-pages.mjs
   ```
7. **Rendu réel** : vérifier qu'aucun serveur `next dev` de ce dépôt ne tourne
   (`ps aux | grep next`), puis `npx next build` (lit l'API de production en
   lecture seule) ; contrôler le texte d'une page dans
   `.next/server/app/<route>/<slug>.html`, puis
   `check-pages.mjs --built`. Le build modifie `next-env.d.ts` : le
   restaurer (`git checkout -- next-env.d.ts`) avant de commiter.
8. **Déployer en dernier**, après l'API et le site (`docker compose build
   landing && docker compose up -d landing`, cf. `/tekkil-deploy`).

## Critères de réussite

- `check-pages.mjs` (et `--built` après un build) passe ; `tsc` et `eslint`
  sans erreur.
- La page apparaît dans `sitemap.xml`, a son adresse canonique et un titre
  propre ; un slug inconnu donne une 404.
- Aucune donnée privée ni route authentifiée de l'API utilisée.
- Une API muette au build donne une page vide ou absente, pas un build cassé.

## À ne jamais faire

- Appeler une route authentifiée ou admin de l'API, ou y mettre un secret.
- Coder en dur une adresse de domaine TEKKIL hors de `lib/urls.ts`.
- Écrire `revalidate` autrement qu'en littéral numérique.
- Lancer `next build` pendant qu'un `next dev` de ce dépôt tourne (même
  dossier `.next`).
- Commiter `next-env.d.ts` modifié par un build, ou les fichiers d'une autre
  session (ajouter les fichiers un par un).

## Historique des versions

| Version | Date | Résumé |
|---|---|---|
| 1.0 | 12/11/2026 | Création après les pages publiques `/matieres/[slug]` (11/11) ; script `check-pages.mjs` (ISR, pré-rendu, métadonnées, canonique, 404, JSON-LD, sitemap, cache des appels API, adresses en dur, `--built`). |
