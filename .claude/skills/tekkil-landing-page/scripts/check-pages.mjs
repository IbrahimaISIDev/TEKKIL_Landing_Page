#!/usr/bin/env node
// Contrôles des pages publiques de tekkilapp.com (TEKKIL_Landing_Page) :
// conventions de données (API publique, cache, délai), de rendu (ISR,
// generateStaticParams, 404) et de référencement (métadonnées, adresse
// canonique, sitemap). Code de sortie 1 si une règle n'est pas respectée.
//
// Usage (depuis TEKKIL_Landing_Page) :
//   node .claude/skills/tekkil-landing-page/scripts/check-pages.mjs [--built]
// --built : vérifie aussi, après `next build`, qu'au moins une page de chaque
// route dynamique a été pré-rendue (.next/server/app/<route>/*.html) —
// sinon l'API n'a rien renvoyé pendant le build.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../../../..');
const built = process.argv.includes('--built');
const errors = [];
const fail = (file, msg) => errors.push(`${relative(ROOT, file)} : ${msg}`);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name !== 'node_modules' && !name.startsWith('.')) walk(p, out);
    } else out.push(p);
  }
  return out;
}

const appDir = join(ROOT, 'app');
const pages = walk(appDir).filter((f) => f.endsWith('page.tsx'));
const sitemap = readFileSync(join(appDir, 'sitemap.ts'), 'utf8');
const libFiles = walk(join(ROOT, 'lib')).filter((f) => f.endsWith('.ts'));

// 1. Pages qui lisent l'API (via lib/*.ts) : ISR par un littéral.
const API_LIBS = libFiles
  .filter((f) => /fetch\(/.test(readFileSync(f, 'utf8')))
  .map((f) => `@/lib/${relative(join(ROOT, 'lib'), f).replace(/\.ts$/, '')}`);

for (const page of pages) {
  const src = readFileSync(page, 'utf8');
  const route = relative(appDir, dirname(page));
  const usesApi = API_LIBS.some((m) => src.includes(`'${m}'`) || src.includes(`"${m}"`));
  if (usesApi && !/export const revalidate = \d+/.test(src)) {
    fail(page, 'lit l\'API sans `export const revalidate = <nombre littéral>` (ISR)');
  }
  // 2. Route dynamique publique : pré-rendu, métadonnées, canonique, 404, sitemap.
  const dyn = route.match(/^([^[]+)\/\[[^\]]+\]$/);
  if (dyn) {
    const base = dyn[1];
    if (!/export async function generateStaticParams/.test(src))
      fail(page, 'route dynamique sans generateStaticParams');
    if (!/export async function generateMetadata/.test(src))
      fail(page, 'route dynamique sans generateMetadata');
    if (!/alternates:\s*\{\s*canonical/.test(src))
      fail(page, 'métadonnées sans adresse canonique (alternates.canonical)');
    if (!/notFound\(\)/.test(src))
      fail(page, 'route dynamique sans notFound() pour un slug inconnu');
    if (!/application\/ld\+json/.test(src))
      fail(page, 'pas de données structurées (fil d\'Ariane JSON-LD)');
    if (!sitemap.includes(`\${SITE_URL}/${base}/`))
      fail(page, `route /${base}/… absente de app/sitemap.ts`);
    if (built) {
      const out = join(ROOT, '.next/server/app', base);
      const html = existsSync(out) ? readdirSync(out).filter((f) => f.endsWith('.html')) : [];
      if (html.length === 0)
        fail(page, `aucune page /${base}/… pré-rendue au build (API muette ?)`);
    }
  }
}

// 3. Lecture de l'API : tag de cache commun, délai, pas d'adresse en dur.
for (const file of libFiles) {
  const src = readFileSync(file, 'utf8');
  if (!/fetch\(/.test(src)) continue;
  if (!/tags:\s*\[CONCOURS_CACHE_TAG\]/.test(src))
    fail(file, 'fetch sans `tags: [CONCOURS_CACHE_TAG]` (revalidation par l\'API)');
  if (!/AbortSignal\.timeout\(/.test(src))
    fail(file, 'fetch sans délai (AbortSignal.timeout) : un build peut rester bloqué');
  if (!/catch\s*\{/.test(src) && !/catch\s*\(/.test(src))
    fail(file, 'fetch sans repli : une API muette doit donner une liste vide / null, pas casser le build');
}

// 4. Adresses des autres domaines : seulement dans lib/urls.ts.
for (const file of walk(ROOT).filter((f) => /\.(tsx?|mjs)$/.test(f) && !f.includes('/.claude/'))) {
  if (file.endsWith(join('lib', 'urls.ts'))) continue;
  const src = readFileSync(file, 'utf8');
  if (/https:\/\/(api|app)\.tekkilapp\.com/.test(src))
    fail(file, 'adresse api/app.tekkilapp.com en dur : utiliser lib/urls.ts (API_URL, APP_URL…)');
}

if (errors.length) {
  console.log(`✖ ${errors.length} problème(s) :\n  - ${errors.join('\n  - ')}`);
  process.exit(1);
}
console.log(`✔ ${pages.length} page(s) vérifiée(s)${built ? ' (pré-rendu compris)' : ''} : conventions respectées.`);
