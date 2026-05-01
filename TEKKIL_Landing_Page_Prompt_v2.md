# PROMPT — Landing Page TEKKIL (Next.js 15 · Production-Ready · UX Premium)

---

## 🎯 Mission

Tu dois créer une **landing page Next.js 15 complète, production-ready, visuellement
impressionnante et mémorable** pour **TEKKIL** — une application mobile edtech sénégalaise
de préparation aux concours nationaux.

Cette page doit être du niveau des meilleures startups africaines tech (Paystack, Flutterwave,
Wave) : sobre, premium, moderne, avec une UX irréprochable. Pas de design générique,
pas de template recyclé — une identité visuelle forte et unique.

**Résultat attendu :** Un projet Next.js 15 complet, déployable sur Vercel en 2 minutes,
avec une landing page qui donne envie de télécharger l'application immédiatement.

---

## 👥 Contexte produit & audience

**Produit :** TEKKIL est une application mobile Flutter (Android + iOS) de préparation
intelligente aux concours nationaux sénégalais. Elle propose :
- Un moteur de QCM adaptatif (difficulté ajustée en temps réel)
- 510+ questions sur 13 sous-tests psychotechniques
- Un leaderboard 3D en temps réel
- Un système de révision espacée (J+2 / J+7)
- Un suivi de progression détaillé par session
- 9 modules de formation couvrant tous les concours majeurs
- Mode hors-ligne disponible

**Audience principale :** Jeunes sénégalais de 18 à 30 ans préparant des concours
(fonction publique, grandes écoles, concours militaires/paramilitaires, douanes, police).
Ils sont mobile-first, connectés, ambitieux, souvent en zone avec connectivité limitée.

**Ton de la marque :** Tech premium africain — sérieux mais accessible, motivant,
ancré dans le contexte sénégalais. Ni trop corporate ni trop fun. Confiant et aspirationnel.

---

## 🏗️ Stack technique OBLIGATOIRE

```
Framework     : Next.js 15 (App Router)
Language      : TypeScript strict
Styling       : Tailwind CSS v4 + CSS Modules pour effets complexes
Animations    : Framer Motion (framer-motion) — OBLIGATOIRE
Icons         : Lucide React
Fonts         : next/font/google (Syne + DM Sans)
Images        : next/image avec optimisation automatique
SEO           : next/metadata (generateMetadata)
Déploiement   : Vercel (configuration vercel.json incluse)
```

### Structure du projet à générer

```
tekkil-landing/
├── app/
│   ├── layout.tsx              ← Root layout, fonts, metadata globale
│   ├── page.tsx                ← Page principale (assemblage des sections)
│   ├── globals.css             ← CSS variables, reset, utilitaires globaux
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          ← Navigation fixe avec scroll effect
│   │   └── Footer.tsx          ← Footer complet
│   ├── sections/
│   │   ├── Hero.tsx            ← Section hero animée
│   │   ├── Features.tsx        ← Grille de fonctionnalités
│   │   ├── HowItWorks.tsx      ← Étapes du parcours utilisateur
│   │   ├── Stats.tsx           ← Compteurs animés (CountUp)
│   │   ├── Download.tsx        ← Boutons store + mockup
│   │   ├── FAQ.tsx             ← Accordion FAQ
│   │   ├── Privacy.tsx         ← Politique de confidentialité
│   │   └── Contact.tsx         ← Section contact
│   └── ui/
│       ├── AnimatedCounter.tsx ← Compteur qui s'anime au scroll
│       ├── FeatureCard.tsx     ← Carte fonctionnalité réutilisable
│       ├── SectionLabel.tsx    ← Label de section (uppercase)
│       └── ScrollReveal.tsx    ← Wrapper d'animation au scroll
├── hooks/
│   ├── useScrollY.ts           ← Hook pour valeur scroll Y
│   └── useInView.ts            ← Hook IntersectionObserver
├── lib/
│   └── constants.ts            ← Toutes les données (features, FAQ, stats...)
├── public/
│   └── (assets statiques)
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── vercel.json
└── package.json
```

---

## 🎨 Identité visuelle STRICTE

### Palette (définir dans globals.css ET tailwind.config.ts)

```css
:root {
  /* Bleus principaux */
  --blue-950: #060E1C;
  --blue-900: #0A1628;
  --blue-800: #0D2040;
  --blue-700: #103060;
  --blue-600: #1449A8;
  --blue-500: #1B5FD4;
  --blue-400: #2D7AFF;
  --blue-300: #5B9BFF;
  --blue-200: #93BBFF;
  --blue-100: #EBF2FF;

  /* Accent or/doré */
  --gold-500: #F5C842;
  --gold-400: #F7D668;
  --gold-100: rgba(245, 200, 66, 0.12);

  /* Neutres */
  --white: #FFFFFF;
  --gray-50:  #F8FAFD;
  --gray-100: #F4F7FC;
  --gray-200: #E4EAF4;
  --gray-300: #C8D5E8;
  --gray-400: #A0B4CC;
  --gray-500: #7A90B0;
  --gray-600: #546A88;
  --gray-900: #0A1628;

  /* Textes */
  --text-primary:   #0A1628;
  --text-secondary: #546A88;
  --text-muted:     #7A90B0;
  --text-on-dark:   #FFFFFF;
  --text-muted-dark: #C8D5E8;
}
```

### Typographie (via next/font/google)

```typescript
// Dans layout.tsx
import { Syne, DM_Sans } from 'next/font/google'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
})
```

**Règles typographiques :**
- `font-syne` : tous les titres (h1, h2, h3), logo, labels de section, stats
- `font-dm-sans` : tout le corps de texte, boutons, descriptions, UI
- Titres principaux : `font-weight: 800`, `letter-spacing: -0.03em`, `line-height: 1.05`
- Corps : `font-weight: 300` pour les descriptions longues, `400` pour le texte courant
- **JAMAIS** Inter, Roboto, Arial, system-ui — ces polices sont bannies

### Direction esthétique : "African Tech Premium Dark"

Ambiance générale : hero et footer en bleu nuit profond (`--blue-900`), sections
intermédiaires alternant blanc et gris très léger (`--gray-50`). Effets de profondeur
avec des radial-gradients discrets, noise texture en overlay (5% opacité), glassmorphism
pour certains éléments (cards stats, navbar). Accents dorés très ponctuels mais marquants.

**Ce qui rend cette page MÉMORABLE :**
- Une particule/orbe animée en arrière-plan du hero (CSS animation ou canvas léger)
- Des compteurs qui s'incrémentent au scroll (CountUp effect)
- Des hover effects riches sur les cards (pas juste box-shadow — transformation + gradient reveal)
- Une section "Comment ça marche" avec une timeline verticale animée
- Des micro-interactions sur tous les éléments interactifs (boutons, liens, cards)

---

## 📐 Sections détaillées — contenu & design

---

### SECTION 1 : Navbar (`components/layout/Navbar.tsx`)

**Comportement scroll (useScrollY hook) :**
- État initial (top) : `background: transparent`, `border: none`
- Après 80px scroll : `background: rgba(10,22,40,0.95)`, `backdrop-filter: blur(20px)`,
  `border-bottom: 1px solid rgba(255,255,255,0.06)`, légère `box-shadow`
- Transition : `transition: all 0.3s ease`

**Structure :**
```
[Logo TEKKIL] .................. [Nav Links] .................. [CTA Button]
```

**Logo :**
- Texte : `TEKK` blanc + `IL` doré (#F5C842)
- Police : Syne 800
- Légère animation au hover : le `IL` fait un micro-pulse gold

**Nav Links (desktop uniquement) :**
- Fonctionnalités | Comment ça marche | Télécharger | FAQ | Contact
- Couleur : `--text-muted-dark` par défaut, blanc au hover
- Underline animé au hover (pseudo-element qui s'étend de gauche à droite)
- Active state (basé sur l'ancre visible) : blanc + underline gold

**CTA Bouton :**
- Texte : "Télécharger gratuitement"
- Style : fond `--blue-400`, border-radius 10px, padding 0.6rem 1.4rem
- Hover : `--blue-300` + `translateY(-1px)` + glow bleu subtil
- Icône : flèche téléchargement Lucide (Download)

**Mobile (< 768px) :**
- Hamburger menu (3 lignes → X animé avec Framer Motion)
- Menu fullscreen overlay sombre avec liens empilés + animation slide-down
- Fermeture au clic sur un lien ou au clic hors du menu

---

### SECTION 2 : Hero (`components/sections/Hero.tsx`)

**Layout :** Full viewport height (`min-h-screen`), fond `--blue-900`,
flex center avec contenu à gauche et illustration/mockup à droite (50/50 sur desktop).

**Fond :**
- Radial gradient principal : `radial-gradient(ellipse 800px 600px at 70% 50%, rgba(45,122,255,0.12), transparent)`
- Radial gradient secondaire : `radial-gradient(ellipse 400px 400px at 10% 80%, rgba(245,200,66,0.06), transparent)`
- Noise texture SVG en overlay : `opacity: 0.04`
- Points/grille subtile en arrière-plan (CSS background-image pattern de points)

**Contenu gauche (animations Framer Motion staggerées) :**

1. **Badge pill** (delay 0s) :
   ```
   🇸🇳  Fait pour les candidats sénégalais
   ```
   Style : fond `rgba(45,122,255,0.12)`, border `1px solid rgba(45,122,255,0.25)`,
   border-radius 100px, texte `--blue-300`, font-size 0.8rem, padding 0.4rem 1rem

2. **H1** (delay 0.1s) :
   ```
   Transforme ta
   préparation aux
   concours
   ```
   - "concours" en gradient texte : `linear-gradient(135deg, #2D7AFF, #5B9BFF)`
   - Font : Syne 800, clamp(3rem, 5vw, 5rem), letter-spacing -0.03em
   - Line-height : 1.0

3. **Sous-titre** (delay 0.2s) :
   ```
   La plateforme intelligente qui s'adapte à ton niveau.
   QCM adaptatifs, révision espacée et leaderboard en temps réel —
   tout pour réussir ton concours du premier coup.
   ```
   Font : DM Sans 300, 1.1rem, couleur `--gray-300`, line-height 1.75

4. **CTA Buttons** (delay 0.3s) :
   - Bouton primaire : `📲 Télécharger sur Android` — fond `--blue-400`,
     box-shadow `0 4px 24px rgba(45,122,255,0.4)`, border-radius 12px,
     padding 1rem 2rem, hover avec glow intensifié + lift
   - Bouton secondaire : `Voir comment ça marche →` — transparent,
     border `1px solid rgba(255,255,255,0.2)`, hover fond blanc 5%

5. **Trust indicators** (delay 0.4s) :
   ```
   ✓ Gratuit pour commencer   ✓ Sans connexion   ✓ 510+ questions
   ```
   Petite ligne d'icônes check en vert doux + texte gris clair, font-size 0.85rem

**Illustration droite (delay 0.3s) :**
Crée une illustration SVG ou un mockup stylisé représentant un écran de smartphone
avec l'interface de TEKKIL. Utilise des formes géométriques abstraites si pas d'image
réelle disponible. L'illustration doit flotter légèrement (animation CSS `float` infinie,
translateY de ±10px sur 4s). Ajoute un glow bleu en dessous (box-shadow ou pseudo-element).

**Scroll indicator :**
Petite flèche animée en bas du hero (bounce animation) indiquant de scroller.

---

### SECTION 3 : Stats (`components/sections/Stats.tsx`)

**Layout :** Fond blanc, 4 stats en grid horizontale, bordures séparatrices discrètes.

**Compteurs animés (AnimatedCounter.tsx) :**
- Utilise `useInView` pour déclencher l'animation au scroll
- Utilise `requestAnimationFrame` pour incrementer de 0 à la valeur cible sur 2 secondes
- Easing : ease-out (ralentit vers la fin)

**Données :**
| Valeur | Suffixe | Label |
|--------|---------|-------|
| 510 | + | Questions disponibles |
| 13 | | Sous-tests couverts |
| 9 | | Modules de formation |
| 100 | % | Mobile-first |

**Design :**
- Valeur : Syne 800, 3.5rem, couleur `--blue-500`
- Suffixe : même style mais couleur `--gold-500`
- Label : DM Sans 300, 0.9rem, `--text-secondary`
- Séparateur vertical entre chaque stat (border-right, caché sur mobile)

---

### SECTION 4 : Features (`components/sections/Features.tsx`)

**Layout :** Fond `--gray-50`, section-label + titre + sous-titre, puis grille 3×2.

**Section header :**
- Label : `FONCTIONNALITÉS` (SectionLabel component)
- Titre : `Tout ce qu'il te faut pour réussir`
- Sous-titre : `Un arsenal complet d'outils intelligents pensé pour les candidats sénégalais.`

**Données des 6 features (`lib/constants.ts`) :**
```typescript
export const FEATURES = [
  {
    icon: 'Brain',        // Lucide icon name
    title: 'QCM Adaptatifs',
    description: 'Notre moteur ajuste la difficulté en temps réel selon tes performances. Plus tu progresses, plus le défi s\'intensifie.',
    color: '#2D7AFF',
  },
  {
    icon: 'BarChart3',
    title: 'Suivi de progression',
    description: 'Tableaux de bord détaillés par session, par sous-test et par période. Identifie tes lacunes avec précision.',
    color: '#10B981',
  },
  {
    icon: 'Trophy',
    title: 'Leaderboard 3D',
    description: 'Classement en temps réel parmi tous les candidats. La compétition saine est le meilleur moteur de progression.',
    color: '#F5C842',
  },
  {
    icon: 'BookOpen',
    title: '13 Sous-tests',
    description: 'Couverture complète de tous les domaines psychotechniques exigés par les concours nationaux sénégalais.',
    color: '#8B5CF6',
  },
  {
    icon: 'RefreshCw',
    title: 'Révision espacée',
    description: 'Algorithme J+2/J+7 pour ancrer les connaissances en mémoire long terme. Apprends moins, retiens plus.',
    color: '#F59E0B',
  },
  {
    icon: 'WifiOff',
    title: 'Mode hors-ligne',
    description: 'Télécharge tes modules et révise sans connexion. Parfait pour les zones à faible connectivité au Sénégal.',
    color: '#06B6D4',
  },
]
```

**Design des FeatureCard (`components/ui/FeatureCard.tsx`) :**
- Fond : blanc, border-radius 20px, border `1px solid rgba(10,22,40,0.07)`
- Padding : 2rem
- Icône Lucide dans un carré 52×52px, border-radius 14px, fond coloré à 10% d'opacité,
  icône de la couleur thématique de la feature
- Au hover :
  - `translateY(-6px)` + box-shadow `0 20px 60px rgba(10,22,40,0.12)`
  - Barre de 3px en haut de la card (pseudo-element) révélée avec animation width 0→100%
  - Icône : légère rotation 5° + scale 1.05
- Transition : `all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)` (spring effect)
- Stagger d'apparition au scroll : chaque card avec un delay progressif (0.05s par card)

---

### SECTION 5 : Comment ça marche (`components/sections/HowItWorks.tsx`)

**Layout :** Fond blanc, timeline verticale centrée sur desktop, steps empilés sur mobile.

**Section header :**
- Label : `PARCOURS`
- Titre : `En 3 étapes vers la réussite`

**3 étapes :**
```typescript
export const STEPS = [
  {
    number: '01',
    title: 'Crée ton profil',
    description: 'Inscris-toi en 30 secondes. Indique le concours que tu prépares et ton niveau actuel. TEKKIL calibre immédiatement ton parcours.',
    icon: 'UserPlus',
  },
  {
    number: '02',
    title: 'Entraîne-toi intelligemment',
    description: 'Lance des sessions de QCM adaptatifs. L\'algorithme analyse chaque réponse et ajuste la difficulté pour maximiser ta progression.',
    icon: 'Zap',
  },
  {
    number: '03',
    title: 'Suis ta progression',
    description: 'Consulte tes stats détaillées, monte dans le leaderboard et reçois des recommandations personnalisées pour combler tes lacunes.',
    icon: 'TrendingUp',
  },
]
```

**Design de la timeline :**
- Ligne verticale centrale en gradient bleu (visible sur desktop)
- Chaque step : numéro en grand (Syne 800, 4rem, couleur `--blue-100`) en arrière-plan,
  icône dans cercle bleu, titre + description à côté
- Steps alternent gauche/droite sur desktop (zigzag layout)
- Animation : chaque step apparaît avec un slide depuis le côté (gauche ou droite selon position)
- Connecteur animé : la ligne verticale se "remplit" du haut vers le bas au scroll

---

### SECTION 6 : Téléchargement (`components/sections/Download.tsx`)

**Layout :** Fond `--blue-900`, centré, effet de profondeur avec radial gradient.

**Section header :**
- Label (couleur `--blue-300`) : `TÉLÉCHARGEMENT`
- Titre (blanc) : `Commence ta préparation aujourd'hui`
- Sous-titre (--gray-300) : `Gratuit pour démarrer. Disponible sur Android, bientôt sur iOS.`

**Boutons store (glassmorphism) :**
```
[🤖 icône Android]  Disponible sur         [🍎 icône Apple]  Bientôt sur
                    Google Play                               App Store 🔜
```
- Fond : `rgba(255,255,255,0.07)`
- Border : `1px solid rgba(255,255,255,0.12)`
- Border-radius : 16px
- Backdrop-filter : `blur(10px)`
- Au hover : fond `rgba(255,255,255,0.12)` + `translateY(-3px)` + glow subtil
- Badge "BIENTÔT" : fond `rgba(245,200,66,0.15)`, border `1px solid rgba(245,200,66,0.3)`,
  texte `--gold-500`, font-size 0.65rem, letter-spacing 0.1em, uppercase

**Éléments décoratifs :**
- Grand orbe radial centré derrière les boutons
- Quelques points/étoiles animés (CSS animation opacity fluctuante)
- Ligne décorative horizontale avec gradient qui s'évanouit sur les côtés

---

### SECTION 7 : FAQ (`components/sections/FAQ.tsx`)

**Layout :** Fond `--gray-50`, max-width 760px centré.

**Données FAQ (`lib/constants.ts`) :**
```typescript
export const FAQ_ITEMS = [
  {
    question: 'TEKKIL est-il gratuit ?',
    answer: 'TEKKIL propose un accès gratuit complet pour démarrer ta préparation. Des modules premium sont disponibles pour débloquer l\'intégralité des 510+ questions et les fonctionnalités avancées comme le leaderboard 3D et les statistiques détaillées.',
  },
  {
    question: 'Quels concours sont couverts par TEKKIL ?',
    answer: 'TEKKIL couvre les principaux concours nationaux sénégalais : concours de la fonction publique, concours d\'entrée aux grandes écoles, concours militaires (armée, gendarmerie), paramilitaires (police, douanes, pompiers) et pénitentiaires.',
  },
  {
    question: 'Est-ce que TEKKIL fonctionne sans connexion internet ?',
    answer: 'Oui ! Tu peux télécharger tes modules de révision en Wi-Fi et les utiliser ensuite sans connexion. C\'est pensé pour les réalités de connectivité au Sénégal — tu révises n\'importe où, n\'importe quand.',
  },
  {
    question: 'Comment fonctionne le moteur de QCM adaptatif ?',
    answer: 'Notre algorithme analyse chaque réponse en temps réel et ajuste la difficulté des questions suivantes. Si tu maîtrises un domaine, il intensifie le défi. Si tu bloques, il revient sur les fondamentaux. Résultat : zéro temps perdu, progression maximale.',
  },
  {
    question: 'Sur quels appareils puis-je utiliser TEKKIL ?',
    answer: 'TEKKIL est disponible sur Android via le Google Play Store. La version iOS (App Store) arrive très prochainement. L\'application est optimisée pour tous les smartphones et tablettes Android.',
  },
  {
    question: 'Mes données sont-elles en sécurité ?',
    answer: 'Absolument. Tes données sont chiffrées avec AES-256 et stockées sur des serveurs sécurisés. Nous ne vendons ni ne partageons jamais tes données avec des tiers. Tu peux demander la suppression de ton compte à tout moment.',
  },
]
```

**Design Accordion (Framer Motion AnimatePresence) :**
- Chaque item : border-bottom `1px solid rgba(10,22,40,0.08)`, padding 1.5rem 0
- Question : Syne 600, 1rem, curseur pointer, flex justify-between
- Icône : ChevronDown Lucide, rotation animée 0°→180° (Framer Motion)
- Réponse : DM Sans 300, 0.95rem, `--text-secondary`, line-height 1.75
- Animation ouverture : `AnimatePresence` + `motion.div` avec `height: 0 → 'auto'`,
  `opacity: 0 → 1`, `y: -8 → 0`
- Un seul item ouvert à la fois (state local avec index actif)
- Premier item ouvert par défaut

---

### SECTION 8 : Politique de confidentialité (`components/sections/Privacy.tsx`)

**Layout :** Fond blanc, max-width 800px centré, typographie lisible.

**Structure :**
- Date de mise à jour : `30 avril 2026`
- 5 sous-sections avec titres h3 (Syne 700) :
  1. **Données collectées** — nom, email, progression, scores
  2. **Utilisation des données** — uniquement app, jamais vendues
  3. **Stockage & sécurité** — AES-256, serveurs sécurisés, standards internationaux
  4. **Tes droits** — accès, rectification, suppression sur demande
  5. **Nous contacter** — `support@tekkil.app`

---

### SECTION 9 : Contact (`components/sections/Contact.tsx`)

**Layout :** Fond `--gray-50`, titre centré, 3 cards de contact en row.

**Header :**
- Label : `SUPPORT`
- Titre : `On est là pour toi`
- Sous-titre : `Une question, un bug, une suggestion ? Notre équipe te répond en moins de 24h.`

**3 cards de contact :**
```typescript
export const CONTACT_CHANNELS = [
  {
    icon: 'Mail',
    title: 'Email',
    value: 'support@tekkil.app',
    href: 'mailto:support@tekkil.app',
    description: 'Réponse sous 24h',
  },
  {
    icon: 'MessageCircle',
    title: 'WhatsApp',
    value: '+221 XX XXX XX XX',
    href: 'https://wa.me/221XXXXXXXXX',
    description: 'Assistance directe',
  },
  {
    icon: 'Instagram',
    title: 'Instagram',
    value: '@tekkil.app',
    href: 'https://instagram.com/tekkil.app',
    description: 'Actualités & tips',
  },
]
```

**Design des cards :**
- Fond blanc, border-radius 20px, border léger, padding 2rem
- Icône dans cercle `--blue-100` + couleur `--blue-500`
- Au hover : lift + border devient `--blue-200`
- Transition spring : `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Lien complet (href sur toute la card) avec `target="_blank" rel="noopener"`

---

### SECTION 10 : Footer (`components/layout/Footer.tsx`)

**Layout :** Fond `--blue-900`, 3 colonnes sur desktop.

**Colonne 1 — Marque :**
- Logo TEKKIL (Syne 800, IL en doré)
- Tagline : `La plateforme de préparation aux concours nationaux sénégalais.`
- Icône drapeau 🇸🇳
- Réseaux sociaux : icônes Instagram, Twitter/X, LinkedIn (ronds glassmorphism)

**Colonne 2 — Navigation :**
- Titre : `Navigation`
- Liens : Fonctionnalités, Comment ça marche, Télécharger, FAQ, Confidentialité, Contact

**Colonne 3 — Newsletter (optionnel mais recommandé) :**
- Titre : `Reste informé`
- Sous-titre : `Sois le premier à savoir quand iOS sera disponible.`
- Input email + bouton submit (style glassmorphism)
- Pas de backend nécessaire — juste l'UI (href mailto en fallback)

**Bas du footer :**
- Ligne séparatrice `rgba(255,255,255,0.06)`
- Copyright : `© 2026 TEKKIL. Tous droits réservés.`
- Liens légaux : Confidentialité | Conditions d'utilisation

---

## ⚡ Animations & UX — Spécifications Framer Motion

### Variants réutilisables (`lib/animations.ts`)

```typescript
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export const slideFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export const slideFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}
```

### ScrollReveal wrapper (`components/ui/ScrollReveal.tsx`)

```typescript
// Wrapper qui déclenche l'animation quand l'élément entre dans le viewport
// Utilise whileInView de Framer Motion avec viewport: { once: true, margin: '-10%' }
// Props: variant, delay, className, children
```

### Micro-interactions obligatoires

- **Boutons primaires :** `whileHover={{ scale: 1.02, y: -2 }}` + `whileTap={{ scale: 0.98 }}`
- **Cards :** `whileHover={{ y: -6 }}` avec spring physics
- **Logo nav :** `whileHover` sur le `IL` → scale 1.1 + color pulse
- **Liens nav :** underline SVG animé (scaleX 0→1 depuis left)
- **Hamburger mobile :** morphing animé 3 lignes → X avec Framer Motion layout animation
- **FAQ chevron :** `animate={{ rotate: isOpen ? 180 : 0 }}`
- **Scroll indicator hero :** `animate={{ y: [0, 8, 0] }}` repeat infinite

---

## 🔍 SEO & Metadata (`app/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: 'TEKKIL — Prépare ton concours national sénégalais',
  description: 'La plateforme intelligente de préparation aux concours nationaux au Sénégal. QCM adaptatifs, révision espacée, leaderboard 3D. Disponible sur Android.',
  keywords: ['concours sénégal', 'préparation concours', 'QCM Sénégal', 'TEKKIL', 'edtech Sénégal', 'fonction publique sénégal', 'concours gendarmerie sénégal'],
  authors: [{ name: 'TEKKIL' }],
  creator: 'TEKKIL',
  openGraph: {
    type: 'website',
    locale: 'fr_SN',
    url: 'https://tekkil.app',
    title: 'TEKKIL — Prépare ton concours national sénégalais',
    description: 'QCM adaptatifs, révision espacée, leaderboard 3D. Tout pour réussir ton concours.',
    siteName: 'TEKKIL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TEKKIL — Prépare ton concours national sénégalais',
    description: 'QCM adaptatifs, révision espacée, leaderboard 3D. Tout pour réussir ton concours.',
  },
  robots: { index: true, follow: true },
  viewport: 'width=device-width, initial-scale=1',
}
```

---

## 📱 Responsive Design — Breakpoints Tailwind

```
sm  : 640px   → mobile large
md  : 768px   → tablette portrait
lg  : 1024px  → tablette landscape / laptop
xl  : 1280px  → desktop
2xl : 1536px  → grand écran
```

**Règles critiques mobile (< 768px) :**
- Hero : stack vertical (illustration en dessous du texte), h1 clamp(2.4rem, 7vw, 3.5rem)
- Navbar : logo + hamburger uniquement, menu overlay fullscreen
- Features grid : 1 colonne
- Stats : 2×2 grid
- HowItWorks : timeline verticale simple (pas de zigzag)
- Contact cards : colonne unique
- Footer : colonne unique, centré
- Padding horizontal global : 1.25rem (au lieu de 5%)
- Tous les boutons full-width sur mobile si dans une section CTA

**Règles tablette (768px–1024px) :**
- Features grid : 2 colonnes
- Stats : 4 colonnes (compact)
- HowItWorks : timeline verticale centrée (pas encore zigzag)

---

## 🔧 Configuration Next.js (`next.config.ts`)

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Optimisation images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Headers de sécurité
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

export default nextConfig
```

**`vercel.json` :**
```json
{
  "framework": "nextjs",
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "regions": ["cdg1"]
}
```
> Note : `cdg1` = Paris (datacenter le plus proche du Sénégal sur Vercel)

**`package.json` — dépendances clés :**
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0"
  }
}
```

---

## ✅ Checklist de validation finale OBLIGATOIRE

Avant de livrer, vérifie point par point :

**Structure & Code**
- [ ] Projet Next.js 15 App Router structuré exactement comme indiqué
- [ ] TypeScript strict sans erreurs (`tsc --noEmit` passe)
- [ ] Toutes les CSS variables définies dans `globals.css`
- [ ] `tailwind.config.ts` étend les couleurs avec les variables du projet
- [ ] `next/font` utilisé pour Syne + DM Sans (pas de @import Google Fonts)
- [ ] `next/image` utilisé pour toutes les images (pas de `<img>` natif)
- [ ] `generateMetadata` ou `metadata` export dans layout.tsx

**Design & UX**
- [ ] Navbar transparente → opaque au scroll (effet visible)
- [ ] Hero : badge pill + h1 gradient + stats row visible
- [ ] Illustration hero avec animation float
- [ ] Tous les compteurs s'animent au scroll (CountUp)
- [ ] 6 feature cards avec hover effects (lift + barre top + rotation icône)
- [ ] Timeline HowItWorks avec connecteur animé
- [ ] FAQ accordion Framer Motion AnimatePresence fonctionnel
- [ ] Boutons store glassmorphism + badge BIENTÔT doré
- [ ] Footer 3 colonnes desktop, 1 colonne mobile

**Animations**
- [ ] Framer Motion importé et utilisé (pas d'animation CSS manuelle pour les éléments complexes)
- [ ] `whileInView` avec `once: true` sur toutes les sections
- [ ] Stagger sur les grilles de cards (features, contact)
- [ ] `whileHover` + `whileTap` sur tous les boutons CTA
- [ ] AnimatePresence sur le menu mobile et la FAQ
- [ ] Aucune animation ne joue avant que l'élément soit visible

**Responsive**
- [ ] Testé à 375px (iPhone SE) — aucun overflow horizontal
- [ ] Testé à 768px (iPad) — layout correct
- [ ] Testé à 1280px (desktop) — layout correct
- [ ] Menu hamburger mobile fonctionnel
- [ ] Images responsive avec next/image et sizes appropriés

**Performance & SEO**
- [ ] `next build` passe sans erreur ni warning critique
- [ ] Metadata complète (title, description, OG, Twitter)
- [ ] Liens internes avec ancres (#features, #download, etc.) fonctionnels
- [ ] Smooth scroll activé (`scroll-behavior: smooth`)
- [ ] Pas de layout shift visible au chargement (CLS proche de 0)
- [ ] `vercel.json` présent avec région `cdg1`

---

## 📝 Instructions de livraison

1. **Livre tout le code source** du projet, fichier par fichier, dans l'ordre de la structure
2. **Commence par** `package.json` → `tailwind.config.ts` → `globals.css` → `layout.tsx` → `lib/constants.ts` → `lib/animations.ts` → composants UI → composants sections → page.tsx
3. **Ne simplifie pas** le code sous prétexte de longueur — livrer le code complet et fonctionnel
4. **Commente** les sections complexes (animations, hooks, algorithme CountUp)
5. **Tous les liens** (`href`) sont des placeholders (`#` ou vraies URLs) — précise lesquels doivent être remplacés
6. **Si tu as des choix créatifs** à faire (ex: forme exacte de l'illustration hero), fais-les avec ambition — ne demande pas de confirmation, exécute

**Critère de succès ultime :** Quelqu'un qui voit cette landing page pour la première fois doit immédiatement comprendre ce qu'est TEKKIL ET avoir envie de télécharger l'app. Le design doit inspirer confiance et ambition.
