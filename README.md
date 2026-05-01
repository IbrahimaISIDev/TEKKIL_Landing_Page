# TEKKIL — Landing Page

> La plateforme intelligente de préparation aux concours nationaux sénégalais.

Landing page production-ready pour l'application mobile **TEKKIL** — une edtech sénégalaise qui propose des QCM adaptatifs, des flashcards, un assistant IA et un suivi de progression détaillé pour la préparation aux concours nationaux (ENA, fonction publique, concours militaires/paramilitaires).

---

## Aperçu visuel

| Direction esthétique | "African Tech Premium Dark" |
|---|---|
| Palette principale | Bleu nuit profond (`#080E2E`) + brand blue (`#2B52EE`) + gold (`#F9C623`) + pink (`#F94B6A`) |
| Typographies | [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed) (titres) + [Roboto](https://fonts.google.com/specimen/Roboto) (corps) |
| Animations | Framer Motion — scroll reveal, parallax, stagger, CountUp |
| Cible | Mobile-first, jeunes sénégalais 18–30 ans |

---

## Stack technique

| Outil | Version | Rôle |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.x | Framework React (App Router) |
| [React](https://react.dev) | 19.x | UI library |
| [TypeScript](https://www.typescriptlang.org) | 5.7 | Typage strict |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Styling utilitaire |
| [Framer Motion](https://www.framer.com/motion) | 12.x | Animations avancées |
| [Lucide React](https://lucide.dev) | 0.564+ | Icônes SVG |
| [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) | — | Fonts Google sans CLS |
| [Vercel Analytics](https://vercel.com/analytics) | 1.6+ | Analytics en production |
| [Radix UI](https://www.radix-ui.com) | — | Composants accessibles headless |
| [pnpm](https://pnpm.io) | — | Gestionnaire de paquets |

---

## Structure du projet

```
TEKKIL_Landing_Page/
├── app/
│   ├── layout.tsx           # Root layout : fonts, metadata SEO, viewport
│   ├── page.tsx             # Assemblage de toutes les sections
│   └── globals.css          # Variables CSS, reset, utilitaires globaux
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Navigation fixe avec effet scroll (transparent → opaque)
│   │   └── Footer.tsx       # Footer 3 colonnes + newsletter
│   │
│   ├── sections/            # Une section = un composant indépendant
│   │   ├── Hero.tsx         # Section hero plein écran avec parallax
│   │   ├── Stats.tsx        # 4 compteurs animés (CountUp au scroll)
│   │   ├── Features.tsx     # Grille 3×2 des fonctionnalités clés
│   │   ├── AppShowcase.tsx  # Présentation visuelle de l'application
│   │   ├── AIAssistant.tsx  # Mise en avant de l'assistant IA Tekkil
│   │   ├── Testimonials.tsx # Témoignages utilisateurs
│   │   ├── Pricing.tsx      # Plans tarifaires (Gratuit / Premium)
│   │   ├── HowItWorks.tsx   # Timeline "3 étapes vers la réussite"
│   │   ├── Download.tsx     # CTA téléchargement (Google Play / App Store)
│   │   ├── FAQ.tsx          # Accordion FAQ (Framer Motion AnimatePresence)
│   │   ├── Privacy.tsx      # Politique de confidentialité intégrée
│   │   └── Contact.tsx      # 3 canaux de support (Email / WhatsApp / Instagram)
│   │
│   └── ui/                  # Composants réutilisables
│       ├── AnimatedCounter.tsx  # Compteur 0→N animé (requestAnimationFrame)
│       ├── FeatureCard.tsx      # Carte fonctionnalité avec hover effects riches
│       ├── SectionLabel.tsx     # Label de section (uppercase, pill style)
│       ├── ScrollReveal.tsx     # Wrapper whileInView Framer Motion
│       └── [shadcn/ui ...]      # Composants Radix UI (accordion, button, dialog…)
│
├── hooks/
│   ├── useScrollY.ts        # Valeur scroll Y courante (Navbar effect)
│   ├── useInView.ts         # IntersectionObserver (déclenchement animations)
│   ├── use-mobile.ts        # Détection viewport mobile
│   └── use-toast.ts         # Hook toast notifications
│
├── lib/
│   ├── constants.ts         # Toutes les données statiques (features, FAQ, stats…)
│   ├── animations.ts        # Variants Framer Motion réutilisables
│   └── utils.ts             # Utilitaires (cn, formatters…)
│
├── public/
│   ├── icon.svg             # Favicon SVG
│   ├── icon-light-32x32.png # Favicon clair (prefers-color-scheme: light)
│   ├── icon-dark-32x32.png  # Favicon sombre (prefers-color-scheme: dark)
│   └── apple-icon.png       # Apple touch icon
│
├── styles/
│   └── globals.css          # CSS variables du design system
│
├── next.config.ts           # Config Next.js (images AVIF/WebP, headers sécurité)
├── vercel.json              # Config déploiement Vercel (région cdg1 — Paris)
├── tsconfig.json            # TypeScript strict
├── postcss.config.mjs       # PostCSS pour Tailwind v4
└── package.json
```

---

## Installation & lancement

### Prérequis

- Node.js ≥ 20
- pnpm ≥ 9 (`npm install -g pnpm`)

### Démarrage rapide

```bash
# Cloner le projet
git clone <repo-url>
cd TEKKIL_Landing_Page

# Installer les dépendances
pnpm install

# Lancer en développement (hot-reload)
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

### Autres commandes

```bash
pnpm build      # Build de production (Next.js)
pnpm start      # Serveur de production local
pnpm lint       # Linting ESLint
```

---

## Déploiement sur Vercel

Le projet est pré-configuré pour Vercel avec le fichier [vercel.json](vercel.json) :

```json
{
  "framework": "nextjs",
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "installCommand": "pnpm install",
  "regions": ["cdg1"]
}
```

> La région `cdg1` correspond au datacenter de **Paris**, le plus proche du Sénégal sur Vercel pour des latences réduites.

### Déploiement en 2 étapes

1. Importer le dépôt sur [vercel.com](https://vercel.com)
2. Cliquer **Deploy** — aucune variable d'environnement requise

---

## Design system

### Palette de couleurs (design system officiel)

| Token CSS | Valeur | Usage |
|---|---|---|
| `--blue-950` | `#06091C` | Fond le plus sombre |
| `--blue-900` | `#080E2E` | Hero, Footer, section Download |
| `--blue-700` | `#112060` | Fonds intermédiaires sombres |
| `--blue-500` | `#2040D8` | Couleur bleue intermédiaire |
| `--blue-400` | `#2B52EE` | **Brand blue** — CTA primaires, accents forts |
| `--blue-300` | `#5478F5` | Labels section sur fond sombre |
| `--gold-500` | `#F9C623` | **Brand yellow** — logo "IL", badges, suffixes stats |
| `--gold-400` | `#FBD354` | Gradient bouton Premium |
| `--pink-500` | `#F94B6A` | **Brand pink** — accent secondaire corail |
| `--pink-400` | `#FB7090` | Variante pink claire |
| `--gray-50` | `#F8FAFD` | Fonds sections claires (Features, FAQ, Contact) |
| `--text-primary` | `#080E2E` | Texte principal sur fond clair |
| `--text-secondary` | `#546A88` | Texte secondaire, descriptions |

### Typographie (design system officiel)

| Police | Usage | Poids |
|---|---|---|
| **Roboto Condensed** | Tous les titres (h1–h3), logo, labels, stats | 300 / 400 / 600 / **700** |
| **Roboto** | Corps de texte, boutons, descriptions, UI | 300 / 400 / 500 |

Les polices sont chargées via `next/font/google` (sans layout shift, sans requête externe en prod).

### Variants d'animation (`lib/animations.ts`)

| Export | Description |
|---|---|
| `fadeUpVariant` | Apparition du bas vers le haut (usage général) |
| `staggerContainer` | Conteneur pour animations en cascade |
| `staggerItem` | Item individuel dans un stagger |
| `slideFromLeft` / `slideFromRight` | Slide latéral (timeline HowItWorks) |
| `scaleIn` | Zoom entrant (cards, icônes) |
| `blurReveal` | Apparition avec dé-floutage |
| `rotateIn` | Rotation entrant pour icônes |
| `gridStagger` | Stagger optimisé pour grilles |
| `mobileFade` | Animation courte pour mobile (performances) |
| `counterConfig` | Config easing pour AnimatedCounter |

---

## Sections de la page

La page principale ([app/page.tsx](app/page.tsx)) assemble les sections dans cet ordre :

| # | Composant | Section | Fond |
|---|---|---|---|
| 1 | `Navbar` | Navigation fixe sticky | Transparent → `#0A1628` |
| 2 | `Hero` | Accroche + mockup app + CTA | `--blue-900` |
| 3 | `Stats` | 4 compteurs animés au scroll | Blanc |
| 4 | `Features` | 6 fonctionnalités clés | `--gray-50` |
| 5 | `AppShowcase` | Présentation visuelle de l'app | Blanc |
| 6 | `AIAssistant` | Focus sur l'assistant IA Tekkil | `--gray-50` |
| 7 | `Testimonials` | Témoignages candidats | Blanc |
| 8 | `Pricing` | Plans Gratuit / Premium (FCFA) | `--gray-50` |
| 9 | `HowItWorks` | Timeline 3 étapes | Blanc |
| 10 | `Download` | CTA Google Play + App Store | `--blue-900` |
| 11 | `FAQ` | 6 questions / réponses accordion | `--gray-50` |
| 12 | `Privacy` | Politique de confidentialité | Blanc |
| 13 | `Contact` | Email / WhatsApp / Instagram | `--gray-50` |
| 14 | `Footer` | Marque + navigation + newsletter | `--blue-900` |

---

## Fonctionnalités clés de l'app TEKKIL

Données issues de [lib/constants.ts](lib/constants.ts) :

| Fonctionnalité | Description |
|---|---|
| QCM Adaptatifs | Moteur qui ajuste la difficulté en temps réel selon les performances |
| Flashcards interactives | Révision par cartes question/réponse recto-verso |
| Suivi de progression | Tableaux de bord par chapitre et par session |
| Contenus multimédias | Cours, résumés, audio, vidéo — 5 formats d'apprentissage |
| Assistant IA Tekkil | IA contextuelle qui répond aux questions sur le cours en temps réel |
| Mode hors-ligne | Modules téléchargeables pour zones à faible connectivité |

### Statistiques produit

| Métrique | Valeur |
|---|---|
| Questions disponibles | 510+ |
| Sous-tests couverts | 13 |
| Modules de formation | 9 |
| Compatibilité | 100% Mobile-first |

---

## Tarification

| Plan | Prix | Contenu |
|---|---|---|
| **Gratuit** | 0 FCFA/mois | 2 matières, 50 QCM, 10 flashcards/matière, progression basique |
| **Premium** | 4 900 FCFA/mois | Toutes matières ENA, QCM illimités, flashcards illimitées, assistant IA, audio/vidéo, mode hors-ligne complet, support prioritaire |

Paiement accepté : Orange Money, Wave, carte bancaire.

---

## SEO & Metadata

Configuré dans [app/layout.tsx](app/layout.tsx) :

- **Title** : `TEKKIL — Prépare ton concours national sénégalais`
- **Description** : optimisée pour la recherche concours Sénégal
- **OpenGraph** : locale `fr_SN`, URL `https://tekkil.app`
- **Twitter Card** : `summary_large_image`
- **Robots** : `index: true, follow: true`
- **Theme color** : `#0A1628` (bleu nuit, barre navigateur mobile)
- **Icons** : SVG + PNG 32×32 clair/sombre + Apple touch icon

### Mots-clés ciblés

`concours sénégal`, `préparation concours`, `QCM Sénégal`, `TEKKIL`, `edtech Sénégal`, `fonction publique sénégal`, `concours gendarmerie sénégal`

---

## Sécurité

Headers HTTP configurés dans [next.config.ts](next.config.ts) pour toutes les routes :

| Header | Valeur |
|---|---|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |

Images optimisées avec sortie `avif` + `webp` en priorité.

---

## Responsive Design

| Breakpoint | Largeur | Comportement |
|---|---|---|
| Mobile | < 640px | Stack vertical, grilles 1 col, menu overlay fullscreen |
| `sm` | 640px+ | Boutons côte à côte, grilles 2 col pour certaines sections |
| `md` | 768px+ | Navbar desktop, Features 2 col, Stats 4 col compact |
| `lg` | 1024px+ | Hero 2 col (texte + mockup), Features 3 col, HowItWorks zigzag |
| `xl` | 1280px+ | Layout max-width, marges confortables |

---

## Liens à personnaliser

Les éléments suivants dans [lib/constants.ts](lib/constants.ts) sont des placeholders à remplacer avant mise en production :

| Élément | Valeur actuelle | À remplacer par |
|---|---|---|
| WhatsApp | `+221 XX XXX XX XX` | Numéro réel de support |
| WhatsApp href | `https://wa.me/221XXXXXXXXX` | Lien WhatsApp réel |
| Instagram | `@tekkil.app` | Compte Instagram actif |
| Google Play | `#download` | URL Google Play Store |
| App Store | — | URL App Store (à venir) |

---

## Contribution

Ce projet est une landing page statique sans backend. Pour contribuer :

1. Créer une branche depuis `main`
2. Modifier les données dans [lib/constants.ts](lib/constants.ts) pour le contenu
3. Modifier les composants dans [components/sections/](components/sections/) pour le layout
4. Vérifier que `pnpm build` passe sans erreur avant de soumettre

---

## Licence

© 2026 TEKKIL. Tous droits réservés.
