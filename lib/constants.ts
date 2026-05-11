export const FEATURES = [
  {
    icon: 'Brain',
    title: 'QCM Adaptatifs',
    description: 'Notre moteur ajuste la difficulté en temps réel selon tes performances. Timer intégré et correction instantanée.',
    color: '#2D7AFF',
  },
  {
    icon: 'Layers',
    title: 'Flashcards interactives',
    description: 'Révise avec des cartes question/réponse. Retourne la carte, valide ta réponse et progresse à ton rythme.',
    color: '#8B5CF6',
  },
  {
    icon: 'BarChart3',
    title: 'Suivi de progression',
    description: 'Visualise ta progression globale en pourcentage. Identifie tes forces et tes lacunes chapitre par chapitre.',
    color: '#10B981',
  },
  {
    icon: 'BookOpen',
    title: 'Contenus multimédias',
    description: 'Cours, résumés, audio, vidéo et QCM — 5 formats pour apprendre selon ton style. Préparation ENA complète.',
    color: '#F5C842',
  },
  {
    icon: 'Sparkles',
    title: 'Assistant IA Tekkil',
    description: 'Pose tes questions sur le cours en temps réel. L\'IA contextuelle t\'explique avec des exemples concrets.',
    color: '#F59E0B',
  },
  {
    icon: 'Trophy',
    title: 'Examens Blancs',
    description: 'Simule les conditions réelles du jour J : mode Complet, Verbal ou Numérique. Chrono, scoring et bilan détaillé à la fin.',
    color: '#EF4444',
  },
  {
    icon: 'WifiOff',
    title: 'Mode hors-ligne',
    description: 'Télécharge tes modules et révise sans connexion. Parfait pour les zones à faible connectivité au Sénégal.',
    color: '#06B6D4',
  },
] as const

export const STEPS = [
  {
    number: '01',
    title: 'Crée ton profil',
    description: 'Inscris-toi en 30 secondes. Choisis ton concours et ta filière. TEKKIL calibre ton parcours immédiatement.',
    icon: 'UserPlus',
  },
  {
    number: '02',
    title: 'Entraîne-toi intelligemment',
    description: 'Lance des sessions de QCM chronométrés ou révise avec les flashcards. Pose tes questions à l\'assistant IA Tekkil.',
    icon: 'Zap',
  },
  {
    number: '03',
    title: 'Suis ta progression',
    description: 'Consulte ton pourcentage de progression par chapitre. Identifie tes lacunes et reçois des recommandations personnalisées.',
    icon: 'TrendingUp',
  },
] as const

export const STATS = [
  { value: 500, suffix: '+', label: 'Questions disponibles' },
  { value: 15, suffix: '+', label: 'Rubriques psychotechniques' },
  { value: 3, suffix: '', label: 'Modes d\'examen blanc' },
  { value: 100, suffix: '%', label: 'Mobile-first' },
] as const

export const FAQ_ITEMS = [
  {
    question: 'TEKKIL est-il gratuit ?',
    answer: 'TEKKIL propose un accès gratuit pour démarrer ta préparation. Des modules premium sont disponibles pour débloquer l\'intégralité des contenus et les fonctionnalités avancées comme l\'assistant IA.',
  },
  {
    question: 'Quels concours sont couverts par TEKKIL ?',
    answer: 'TEKKIL couvre les épreuves psychotechniques des grands concours nationaux sénégalais — ENA, fonctions publiques, grandes écoles. Les épreuves sont organisées en deux filières : Verbal (synonymes, analogies, intrus…) et Numérique (calcul, séries logiques…). D\'autres concours sont ajoutés régulièrement.',
  },
  {
    question: 'Comment fonctionne l\'assistant IA Tekkil ?',
    answer: 'L\'assistant IA Tekkil est contextuel : il connaît le cours que tu étudies et répond à tes questions en temps réel avec des explications claires, des exemples concrets et des jurisprudences pertinentes.',
  },
  {
    question: 'Est-ce que TEKKIL fonctionne sans connexion internet ?',
    answer: 'Oui ! Tu peux télécharger tes modules de révision en Wi-Fi et les utiliser ensuite sans connexion. C\'est pensé pour les réalités de connectivité au Sénégal.',
  },
  {
    question: 'Sur quels appareils puis-je utiliser TEKKIL ?',
    answer: 'TEKKIL est disponible sur Android via le Google Play Store. La version iOS (App Store) arrive très prochainement. L\'application est optimisée pour tous les smartphones et tablettes.',
  },
  {
    question: 'Mes données sont-elles en sécurité ?',
    answer: 'Absolument. Tes données sont chiffrées et stockées sur des serveurs sécurisés. Nous ne vendons ni ne partageons jamais tes données avec des tiers.',
  },
] as const

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
    description: 'Actus & tips quotidiens',
  },
  {
    icon: 'Facebook',
    title: 'Facebook',
    value: 'tekkil.app',
    href: 'https://facebook.com/tekkil.app',
    description: 'Communauté & entraide',
  },
  {
    icon: 'Youtube',
    title: 'YouTube',
    value: '@tekkil',
    href: 'https://youtube.com/@tekkil',
    description: 'Tutoriels & démonstrations',
  },
] as const

export const NAV_LINKS = [
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const

export const FOOTER_LINKS = [
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'Télécharger', href: '#download' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Confidentialité', href: '/privacy' },
  { label: 'Contact', href: '#contact' },
] as const
