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
    description: 'Cours, résumés, audio, vidéo et QCM — 5 formats pour apprendre selon ton style. Préparation complète à ton concours.',
    color: '#F5C842',
  },
  {
    icon: 'Sparkles',
    title: 'Assistant IA Tekkil',
    description: 'Pose tes questions sur le cours en temps réel. L\'IA contextuelle t\'explique avec des exemples concrets.',
    color: '#F59E0B',
    badge: 'Bientôt disponible',
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
  {
    icon: 'FileCheck',
    title: 'Annales corrigées',
    description: 'Consulte les sujets des sessions précédentes avec leurs corrigés détaillés pour t\'entraîner en conditions réelles.',
    color: '#EC4899',
  },
  {
    icon: 'FileText',
    title: 'Fiches de lecture',
    description: 'Chaque rubrique dispose d\'une fiche de cours claire et structurée, en complément des QCM et flashcards.',
    color: '#0EA5E9',
  },
  {
    icon: 'Headphones',
    title: 'Audios des packs',
    description: 'Écoute les résumés audio de chaque module, idéal pour réviser en déplacement.',
    color: '#F97316',
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
  { value: 40000, suffix: '+', label: 'Questions disponibles' },
  { value: 100, suffix: '+', label: 'Rubriques' },
  { value: 100, suffix: '%', label: 'Mobile-first' },
] as const

export const FAQ_ITEMS = [
  {
    question: 'TEKKIL est-il gratuit ?',
    answer: 'TEKKIL te donne un aperçu gratuit de 3 contenus par pack pour démarrer ta préparation. L\'achat d\'un pack débloque ensuite automatiquement l\'intégralité de son contenu — cours, QCM, flashcards, annales corrigées et assistant IA.',
  },
  {
    question: 'Quels concours sont couverts par TEKKIL ?',
    answer: 'TEKKIL couvre les épreuves psychotechniques des concours de niveau national au Sénégal — CREM, ENA, fonctions publiques, grandes écoles, et bien d\'autres. Les concours ouverts changent selon les sessions (le CREM est actuellement ouvert). Les épreuves sont organisées en deux filières : Verbal (synonymes, analogies, intrus…) et Numérique (calcul, séries logiques…).',
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
    answer: 'TEKKIL est disponible dès maintenant sur le web, accessible depuis n\'importe quel smartphone, tablette ou ordinateur. Les applications Android et iOS arrivent prochainement.',
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
    value: 'support@tekkil.sn',
    href: 'mailto:support@tekkil.sn',
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
    value: '@tekkil',
    href: 'https://instagram.com/tekkil',
    description: 'Actus & tips quotidiens',
  },
  {
    icon: 'Facebook',
    title: 'Facebook',
    value: 'tekkil',
    href: 'https://facebook.com/tekkil',
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
  { label: 'Qui sommes-nous ?', href: '#qui-sommes-nous' },
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const

export const FOOTER_LINKS = [
  { label: 'Qui sommes-nous ?', href: '#qui-sommes-nous' },
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'Télécharger', href: '#download' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Confidentialité', href: '/privacy' },
  { label: 'Contact', href: '#contact' },
] as const
