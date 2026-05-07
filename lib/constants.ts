export const FEATURES = [
  {
    icon: 'Brain',
    title: 'QCM Adaptatifs',
    description: 'Notre moteur ajuste la difficulte en temps reel selon tes performances. Timer integre et correction instantanee.',
    color: '#2D7AFF',
  },
  {
    icon: 'Layers',
    title: 'Flashcards interactives',
    description: 'Revise avec des cartes question/reponse. Retourne la carte, valide ta reponse et progresse a ton rythme.',
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
    title: 'Contenus multimedias',
    description: 'Cours, resumes, audio, video et QCM - 5 formats pour apprendre selon ton style. Preparation ENA complete.',
    color: '#F5C842',
  },
  {
    icon: 'Sparkles',
    title: 'Assistant IA Tekkil',
    description: 'Pose tes questions sur le cours en temps reel. L\'IA contextuelle t\'explique avec des exemples concrets.',
    color: '#F59E0B',
  },
  {
    icon: 'Trophy',
    title: 'Examens Blancs',
    description: 'Simule les conditions reelles du jour J : mode Complet, Verbal ou Numerique. Chrono, scoring et bilan detaille a la fin.',
    color: '#EF4444',
  },
  {
    icon: 'WifiOff',
    title: 'Mode hors-ligne',
    description: 'Telecharge tes modules et revise sans connexion. Parfait pour les zones a faible connectivite au Senegal.',
    color: '#06B6D4',
  },
] as const

export const STEPS = [
  {
    number: '01',
    title: 'Cree ton profil',
    description: 'Inscris-toi en 30 secondes. Choisis ton concours et ta filiere. TEKKIL calibre ton parcours immediatement.',
    icon: 'UserPlus',
  },
  {
    number: '02',
    title: 'Entraine-toi intelligemment',
    description: 'Lance des sessions de QCM chronometres ou revise avec les flashcards. Pose tes questions a l\'assistant IA Tekkil.',
    icon: 'Zap',
  },
  {
    number: '03',
    title: 'Suis ta progression',
    description: 'Consulte ton pourcentage de progression par chapitre. Identifie tes lacunes et recois des recommandations personnalisees.',
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
    answer: 'TEKKIL propose un acces gratuit pour demarrer ta preparation. Des modules premium sont disponibles pour debloquer l\'integralite des contenus et les fonctionnalites avancees comme l\'assistant IA.',
  },
  {
    question: 'Quels concours sont couverts par TEKKIL ?',
    answer: 'TEKKIL couvre les epreuves psychotechniques des grands concours nationaux senegalais — ENA, fonctions publiques, grandes ecoles. Les epreuves sont organisees en deux filieres : Verbal (synonymes, analogies, intrus...) et Numerique (calcul, series logiques...). D\'autres concours sont ajoutes regulierement.',
  },
  {
    question: 'Comment fonctionne l\'assistant IA Tekkil ?',
    answer: 'L\'assistant IA Tekkil est contextuel : il connait le cours que tu etudies et repond a tes questions en temps reel avec des explications claires, des exemples concrets et des jurisprudences pertinentes.',
  },
  {
    question: 'Est-ce que TEKKIL fonctionne sans connexion internet ?',
    answer: 'Oui ! Tu peux telecharger tes modules de revision en Wi-Fi et les utiliser ensuite sans connexion. C\'est pense pour les realites de connectivite au Senegal.',
  },
  {
    question: 'Sur quels appareils puis-je utiliser TEKKIL ?',
    answer: 'TEKKIL est disponible sur Android via le Google Play Store. La version iOS (App Store) arrive tres prochainement. L\'application est optimisee pour tous les smartphones et tablettes.',
  },
  {
    question: 'Mes donnees sont-elles en securite ?',
    answer: 'Absolument. Tes donnees sont chiffrees et stockees sur des serveurs securises. Nous ne vendons ni ne partageons jamais tes donnees avec des tiers.',
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
    description: 'Actualités & tips',
  },
] as const

export const NAV_LINKS = [
  { label: 'Fonctionnalites', href: '#features' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Temoignages', href: '#temoignages' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const

export const FOOTER_LINKS = [
  { label: 'Fonctionnalites', href: '#features' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Temoignages', href: '#temoignages' },
  { label: 'Telecharger', href: '#download' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Confidentialite', href: '#privacy' },
  { label: 'Contact', href: '#contact' },
] as const
