'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FolderOpen, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Sparkles, 
  BookOpen, 
  Layers, 
  ShieldCheck, 
  GraduationCap, 
  Scale, 
  Compass, 
  Bot, 
  Trophy, 
  WifiOff,
  Check,
  ArrowLeftRight
} from 'lucide-react'
import { REGISTER_URL, LOGIN_URL } from '@/lib/urls'

interface PackModule {
  title: string
  description: string
}

interface ConcoursPack {
  id: string
  code: string
  name: string
  fullName: string
  category: 'education' | 'admin' | 'forces'
  categoryLabel: string
  color: string
  meshGradient: string
  icon: typeof GraduationCap
  description: string
  targetAudience: string
  modulesCount: number
  qcmCount: string
  annalesYears: string
  tags: string[]
  modules: PackModule[]
  highlights: string[]
}

const CONCOURS_PACKS: ConcoursPack[] = [
  {
    id: 'crem',
    code: 'CREM-2026',
    name: 'Pack CREM',
    fullName: 'Concours de Recrutement des Élèves-Maîtres',
    category: 'education',
    categoryLabel: 'Éducation & Enseignement',
    color: '#FF6B4A',
    meshGradient: 'radial-gradient(at 10% 20%, #FB923C 0px, transparent 55%), radial-gradient(at 90% 15%, #E879F9 0px, transparent 60%), radial-gradient(at 50% 60%, #F43F5E 0px, transparent 55%), linear-gradient(135deg, #F97316 0%, #D946EF 100%)',
    icon: GraduationCap,
    description: 'Préparation complète et méthodique aux épreuves psychotechniques et écrites du concours CREM pour les options Français et Arabe.',
    targetAudience: 'Candidats titulaires du BFEM ou Baccalauréat au Sénégal',
    modulesCount: 5,
    qcmCount: '+1 800 QCM',
    annalesYears: 'Annales 2018–2025',
    tags: ['Français & Grammaire', 'Pédagogie Générale', 'Épreuves Numériques', 'Option Arabe'],
    modules: [
      { title: 'Épreuves Verbales & Grammaire', description: 'Orthographe, syntaxe, vocabulaire et compréhension de texte aux standards du CREM.' },
      { title: 'Raisonnement Logique & Numérique', description: 'Calcul rapide, suites logiques, problèmes arithmétiques et psychotechniques.' },
      { title: 'Pédagogie Générale & Législation', description: 'Principes fondamentaux de l’enseignement élémentaire et déontologie de l’éducateur.' },
      { title: 'Annales Corrigées Détaillées', description: 'Sujets des 7 dernières sessions résolus pas à pas avec barèmes officiels.' },
      { title: 'Examens Blancs Chronométrés', description: 'Simulations conformes au temps réel de l’épreuve avec calcul immédiat du score.' },
    ],
    highlights: [
      'Assistant IA disponible 24h/24 pour expliquer chaque correction',
      'Mode révision hors-ligne pour réviser sans connexion',
      'Classement national en direct pour mesurer son niveau',
    ],
  },
  {
    id: 'ena-a',
    code: 'ENA-CYCA',
    name: 'Pack ENA — Cycle A',
    fullName: 'École Nationale d’Administration (Cycle A)',
    category: 'admin',
    categoryLabel: 'Haute Fonction Publique',
    color: '#00C6FF',
    meshGradient: 'radial-gradient(at 15% 20%, #38BDF8 0px, transparent 55%), radial-gradient(at 85% 15%, #6366F1 0px, transparent 60%), radial-gradient(at 50% 60%, #0D9488 0px, transparent 55%), linear-gradient(135deg, #0284C7 0%, #10B981 100%)',
    icon: Scale,
    description: 'Programme d’excellence préparant aux filières d’élite : Diplomatie, Administration Générale, Trésor & Finances publiques.',
    targetAudience: 'Titulaires de Master 2 ou diplôme équivalent',
    modulesCount: 6,
    qcmCount: '+2 200 QCM',
    annalesYears: 'Annales 2017–2025',
    tags: ['Droit Administratif', 'Finances Publiques', 'Diplomatie', 'Dissertation'],
    modules: [
      { title: 'Droit Public & Administratif Sénégalais', description: 'Jurisprudences, contentieux administratif et organisation de l’État.' },
      { title: 'Économie Générale & Finances Publiques', description: 'Budget de l’État, politique monétaire de l’UEMOA et gestion fiscale.' },
      { title: 'Culture Générale & Enjeux Contemporains', description: 'Méthodologie de dissertation, grands débats politiques et géopolitiques.' },
      { title: 'Note de Synthèse & Cas Pratiques', description: 'Techniques de rédaction administrative et traitement de dossiers complexes.' },
      { title: 'Annales Officielles Corrigées', description: 'Décorticage minutieux des épreuves écrites et orales de l’ENA.' },
      { title: 'Tuteur IA en Droit Administratif', description: 'Explications juridiques instantanées avec références aux textes de loi.' },
    ],
    highlights: [
      'Base juridique sénégalaise intégrée avec jurisprudences récentes',
      'Fiches de synthèse prêtes à imprimer ou à consulter hors-ligne',
      'Feedback instantané sur les exercices de méthodologie',
    ],
  },
  {
    id: 'ena-b',
    code: 'ENA-CYCB',
    name: 'Pack ENA — Cycle B',
    fullName: 'École Nationale d’Administration (Cycle B)',
    category: 'admin',
    categoryLabel: 'Administration Publique',
    color: '#F59E0B',
    meshGradient: 'radial-gradient(at 15% 20%, #FBBF24 0px, transparent 55%), radial-gradient(at 85% 15%, #F43F5E 0px, transparent 60%), radial-gradient(at 50% 60%, #A855F7 0px, transparent 55%), linear-gradient(135deg, #F59E0B 0%, #E11D48 100%)',
    icon: BookOpen,
    description: 'Préparation ciblée pour le Cycle B : Secrétaires d’administration, Contrôleurs du Trésor et Cadres des collectivités territoriales.',
    targetAudience: 'Titulaires du Baccalauréat ou Licence',
    modulesCount: 5,
    qcmCount: '+1 600 QCM',
    annalesYears: 'Annales 2019–2025',
    tags: ['Rédaction Administrative', 'Comptabilité', 'Organisation État', 'QCM Logique'],
    modules: [
      { title: 'Organisation Administrative du Sénégal', description: 'Décentralisation, déconcentration et fonctionnement des services publics.' },
      { title: 'Techniques d’Expression & Note de Service', description: 'Règles de style administratif, procès-verbaux et correspondances.' },
      { title: 'Tests Psychotechniques & Logique', description: 'Entraînement intensif sur les séries éliminatoires de logique.' },
      { title: 'Notions de Comptabilité Publique', description: 'Principes de comptabilité générale et règles de gestion budgétaire.' },
      { title: 'Annales et Sujets d’Examens Blancs', description: 'Mises en situation chronométrées avec correction détaillée.' },
    ],
    highlights: [
      'Fiches méthodologiques prêtes pour l’épreuve de rédaction',
      'Tests psychotechniques mis à jour selon les derniers formats',
      'Suivi de progression semaine par semaine',
    ],
  },
  {
    id: 'fastef',
    code: 'FASTEF-26',
    name: 'Pack FASTEF',
    fullName: 'Faculté des Sciences & Technologies de l’Éducation',
    category: 'education',
    categoryLabel: 'Enseignement Secondaire',
    color: '#10B981',
    meshGradient: 'radial-gradient(at 15% 20%, #34D399 0px, transparent 55%), radial-gradient(at 85% 15%, #38BDF8 0px, transparent 60%), radial-gradient(at 50% 60%, #059669 0px, transparent 55%), linear-gradient(135deg, #10B981 0%, #2563EB 100%)',
    icon: Compass,
    description: 'Entraînement complet pour décrocher le concours de formation des professeurs de l’enseignement moyen et secondaire au Sénégal.',
    targetAudience: 'Titulaires de Licence, Master ou équivalent académique',
    modulesCount: 5,
    qcmCount: '+1 500 QCM',
    annalesYears: 'Annales 2018–2025',
    tags: ['Didactique des Disciplines', 'Sciences & Mathématiques', 'Lettres', 'Pédagogie'],
    modules: [
      { title: 'Didactique Disciplinaire', description: 'Méthodes d’enseignement adaptées à la spécialité (Sciences, Lettres, Histoire).' },
      { title: 'Psychologie de l’Apprentissage', description: 'Développement de l’adolescent, gestion de classe et dynamique de groupe.' },
      { title: 'Épreuves Spécifiques par Matière', description: 'Banques d’exercices et sujets corrigés selon votre discipline.' },
      { title: 'Législation & Déontologie de l’Enseignant', description: 'Règlements scolaires au Sénégal et statut de la fonction enseignante.' },
      { title: 'Sujets Corrigés des Concours Antérieurs', description: 'Historique des examens FASTEF analysés avec des professeurs certifiés.' },
    ],
    highlights: [
      'Modules adaptés aux filières Scientifiques et Littéraires',
      'Flashcards mémo pour retenir les définitions pédagogiques clés',
      'Téléchargement complet disponible en mode hors-ligne',
    ],
  },
  {
    id: 'douanes',
    code: 'DOUANE-26',
    name: 'Pack Douanes & Trésor',
    fullName: 'Concours Direct des Douanes Sénégalaises',
    category: 'forces',
    categoryLabel: 'Finances & Paramilitaire',
    color: '#3B82F6',
    meshGradient: 'radial-gradient(at 15% 20%, #60A5FA 0px, transparent 55%), radial-gradient(at 85% 15%, #A78BFA 0px, transparent 60%), radial-gradient(at 50% 60%, #2563EB 0px, transparent 55%), linear-gradient(135deg, #1D4ED8 0%, #6D28D9 100%)',
    icon: Layers,
    description: 'Entraînement intensif aux tests psychotechniques éliminatoires, logique abstraite, calcul rapide et culture générale des Douanes.',
    targetAudience: 'Candidats aux corps de Contrôleurs et Préposés des Douanes',
    modulesCount: 5,
    qcmCount: '+2 000 QCM',
    annalesYears: 'Annales 2018–2025',
    tags: ['Psychotechnique Intensif', 'Logique Spatiale', 'Culture Générale', 'Calcul Mental'],
    modules: [
      { title: 'Batteries de Tests Psychotechniques', description: 'Matrices de Raven, suites de dominos, cartes et analogies visuelles.' },
      { title: 'Aptitude Numérique & Calcul Rapide', description: 'Opérations chronométrées, fractions, pourcentages et raisonnement mathématique.' },
      { title: 'Culture Générale & Institutions Sénégalaises', description: 'Histoire politique, géographie économique et actualités nationales.' },
      { title: 'Initiation au Droit Douanier & Fiscal', description: 'Rôles des douanes, tarif extérieur commun et code des douanes sénégalais.' },
      { title: 'Simulations Chronométrées d’Admissibilité', description: 'Tests sous pression de temps réel reproduisant le stress du concours.' },
    ],
    highlights: [
      'Algorithme adaptatif ciblant vos faiblesses en logique',
      'Explications claires de chaque schéma et matrice abstraite',
      'Indicateur de vitesse et de précision de réponse',
    ],
  },
  {
    id: 'police',
    code: 'FORCES-26',
    name: 'Pack Police & Gendarmerie',
    fullName: 'Forces de Police & Gendarmerie Nationale',
    category: 'forces',
    categoryLabel: 'Sécurité & Défense',
    color: '#A855F7',
    meshGradient: 'radial-gradient(at 15% 20%, #E879F9 0px, transparent 55%), radial-gradient(at 85% 15%, #818CF8 0px, transparent 60%), radial-gradient(at 50% 60%, #9333EA 0px, transparent 55%), linear-gradient(135deg, #7C3AED 0%, #1E1B4B 100%)',
    icon: ShieldCheck,
    description: 'Préparation complète aux épreuves d’admissibilité : Officiers et Sous-officiers de Police, Gendarmerie et Gardiens de la Paix.',
    targetAudience: 'Candidats aux concours de Police et de Gendarmerie',
    modulesCount: 5,
    qcmCount: '+1 700 QCM',
    annalesYears: 'Annales 2019–2025',
    tags: ['Logique Verbale', 'Culture Générale', 'Droit Pénal Usuel', 'Tests Situationnels'],
    modules: [
      { title: 'Raisonnement Logique & Tests Psychotechniques', description: 'Logique déductive, classement, attention visuelle et suites complexes.' },
      { title: 'Culture Générale & Institutions de la République', description: 'Symboles nationaux, organisation de la justice et actualités de sécurité.' },
      { title: 'Maîtrise de la Langue & Rédaction de Rapport', description: 'Grammaire, orthographe, vocabulaire et compte-rendu d’événement.' },
      { title: 'Notions Élémentaires de Droit Pénal', description: 'Infractions usuelles, libertés publiques et principes de procédure pénale.' },
      { title: 'Annales Corrigées des Sessions Antérieures', description: 'Examens résolus avec conseils méthodologiques d’anciens admis.' },
    ],
    highlights: [
      'Tests de jugement situationnel et psychologie pratique',
      'Banque de questions de culture générale mise à jour chaque session',
      'Assistance IA pour maîtriser les bases du droit pénal usuel',
    ],
  },
]

export function Pricing() {
  const [selectedPack, setSelectedPack] = useState<ConcoursPack | null>(null)
  const [activeFilter, setActiveFilter] = useState<'all' | 'education' | 'admin' | 'forces'>('all')

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPack) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedPack])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPack(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const filteredPacks = activeFilter === 'all'
    ? CONCOURS_PACKS
    : CONCOURS_PACKS.filter((p) => p.category === activeFilter)

  return (
    <section 
      id="tarifs" 
      className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] overflow-hidden isolate"
      aria-label="Dossiers et packs de préparation aux concours nationaux"
    >
      {/* ─── Architectural Dot Grid Texture ─── */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10 opacity-[0.3]"
        style={{
          backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 25%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 25%, transparent 85%)',
        }}
      />

      {/* ─── Subtle Brand Ambient Lighting ─── */}
      <div 
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none -z-10 blur-[140px] opacity-[0.25]"
        style={{ backgroundColor: '#60A5FA' }}
      />
      <div 
        className="absolute bottom-10 right-0 w-[600px] h-[600px] rounded-full pointer-events-none -z-10 blur-[150px] opacity-[0.25]"
        style={{ backgroundColor: '#14B09C' }}
      />

      {/* 1px Hairline Section Dividers */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Section Header — Unified TEKKIL Presentation Format */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs text-[#0D9488] text-xs font-bold uppercase tracking-wider mb-5"
          >
            <FolderOpen className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>Packs de Concours 2026</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050814] tracking-[-0.03em] leading-[1.12] mb-5"
          >
            Tous nos dossiers de préparation{' '}
            <span className="bg-gradient-to-r from-[#1A2356] via-[#27316F] to-[#0D9488] bg-clip-text text-transparent">
              disponibles.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Chaque dossier réunit le programme officiel, les QCM adaptatifs, les annales corrigées et un tuteur IA dédié. Clique sur un pack pour en consulter le détail complet.
          </motion.p>

          {/* Interactive Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-8"
          >
            {[
              { id: 'all', label: 'Tous les dossiers' },
              { id: 'education', label: 'Éducation (CREM, FASTEF)' },
              { id: 'admin', label: 'Administration (ENA)' },
              { id: 'forces', label: 'Sécurité & Douanes' },
            ].map((tab) => {
              const isActive = activeFilter === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? 'bg-[#050814] text-white shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/80'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </motion.div>
        </div>

        {/* ─── FOLDER CARDS GRID (Aesthetic from Image 1, Tight & Snug) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {filteredPacks.map((pack, index) => {
            const Icon = pack.icon

            return (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setSelectedPack(pack)}
                className="group relative cursor-pointer select-none"
              >
                {/* ─── Card Container (Strict Minimalist Folder Aesthetic from Image Reference) ─── */}
                <div className="relative rounded-[30px] sm:rounded-[34px] overflow-hidden bg-[#18191B] border-[2px] border-[#23252D] hover:border-[#353945] shadow-[0_12px_36px_-10px_rgba(0,0,0,0.22)] hover:shadow-[0_24px_50px_-10px_rgba(0,0,0,0.38)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-[265px] sm:h-[280px]">
                  
                  {/* ─── Vibrant Luminous Mesh Gradient (Top Back Area) ─── */}
                  <div 
                    className="absolute top-0 inset-x-0 h-32 sm:h-36 pointer-events-none transition-transform duration-500 group-hover:scale-105"
                    style={{ background: pack.meshGradient }}
                  >
                    {/* Silky Luminous Light Highlights */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/20 mix-blend-overlay" />
                    {/* Ambient Glow Orb */}
                    <div 
                      className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                      style={{ backgroundColor: pack.color }}
                    />
                  </div>

                  {/* ─── The Front Pocket (Matte Charcoal with Stepped Tab Cutout) ─── */}
                  <div className="relative z-10 flex-1 flex flex-col justify-between mt-12 sm:mt-14">
                    
                    {/* Stepped Tab SVG Header: Curves seamlessly down to open lower shelf */}
                    <div className="relative w-full h-[58px] shrink-0">
                      <svg 
                        viewBox="0 0 360 58" 
                        preserveAspectRatio="none" 
                        className="w-full h-full block text-[#18191B] fill-current drop-shadow-[0_-5px_12px_rgba(0,0,0,0.2)]"
                      >
                        <path d="M 0 20 Q 0 8 14 8 L 195 8 C 212 8, 218 36, 236 36 L 360 36 L 360 58 L 0 58 Z" />
                      </svg>

                      {/* Tab Content: Title & Category Label */}
                      <div className="absolute top-[10px] left-0 w-[58%] sm:w-[62%] pl-5 sm:pl-6 pr-2 pointer-events-none">
                        <h3 className="text-white font-bold text-xs sm:text-sm lg:text-[15px] tracking-tight truncate leading-tight">
                          {pack.name}
                        </h3>
                        <p className="text-white/55 text-[10px] sm:text-[11px] font-normal truncate mt-0.5 leading-tight">
                          {pack.categoryLabel}
                        </p>
                      </div>
                    </div>

                    {/* Main Pocket Body (Solid #18191B, Minimalist & Spacious) */}
                    <div className="flex-1 bg-[#18191B] px-5 sm:px-6 pb-4 sm:pb-5 pt-1 flex flex-col justify-between -mt-[1px]">
                      
                      {/* Middle Content: Icon + Crisp Full Name / Audience (Tags moved to modal) */}
                      <div className="flex items-center gap-3.5 my-auto">
                        <div 
                          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-2xs transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10"
                          style={{ color: pack.color }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-[13px] font-semibold text-slate-200 line-clamp-1 leading-snug">
                            {pack.fullName}
                          </p>
                          <p className="text-[11px] text-slate-400 font-normal line-clamp-1 mt-0.5">
                            {pack.targetAudience}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Meta Row (Image 1 style: "05 Modules" | "+1 800 QCM →") */}
                      <div className="pt-2.5 border-t border-white/[0.08] flex items-end justify-between">
                        {/* Left: Bold Number + Label */}
                        <div className="flex items-baseline gap-1.5">
                          <span 
                            className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none"
                            style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                          >
                            {String(pack.modulesCount).padStart(2, '0')}
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-white/60">
                            Modules
                          </span>
                        </div>

                        {/* Right: Quantity / QCM Count */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-semibold text-white/80 tracking-tight">
                            {pack.qcmCount}
                          </span>
                          <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-white text-white/70 group-hover:text-[#18191B] flex items-center justify-center transition-all duration-200 shadow-2xs">
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 sm:mt-18 max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0D9488] shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#0D9488]" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 leading-tight">
                Tous les packs sont mis à jour selon les arrêtés ministériels 2026
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Accès direct aux sujets officiels des concours nationaux du Sénégal.
              </p>
            </div>
          </div>
          <a
            href={LOGIN_URL}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#050814] hover:bg-[#1A2356] text-white text-xs font-bold transition-all shrink-0 shadow-xs"
          >
            <span>Créer un compte candidat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

      </div>

      {/* ─── MODAL POP-UP DETAILS (Mode Clair — Style Untitled UI / Lovable — DA TEKKIL) ─── */}
      <AnimatePresence>
        {selectedPack && (() => {
          const Icon = selectedPack.icon

          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none isolate">
              
              {/* Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedPack(null)}
                className="absolute inset-0 bg-[#050814]/50 backdrop-blur-sm cursor-pointer"
              />

              {/* Modal Dialog Card (Light Mode, DA TEKKIL) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10 }}
                transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-[480px] sm:max-w-[500px] max-h-[90vh] overflow-y-auto rounded-[28px] sm:rounded-[32px] bg-white border border-slate-200/90 shadow-[0_25px_65px_-12px_rgba(5,8,20,0.25)] p-6 sm:p-7 flex flex-col gap-5 isolate scrollbar-none"
              >
                {/* Subtle Dot Grid Texture in Top Background */}
                <div 
                  className="absolute top-0 inset-x-0 h-44 pointer-events-none -z-10 opacity-[0.35]"
                  style={{
                    backgroundImage: 'radial-gradient(#94A3B8 1px, transparent 1px)',
                    backgroundSize: '16px 16px',
                    maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
                  }}
                />

                {/* Close Button (Top-Right) */}
                <button
                  onClick={() => setSelectedPack(null)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100/80 hover:bg-slate-200/90 text-slate-400 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer shrink-0 border border-slate-200/60"
                  aria-label="Fermer les détails"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Top Connected App Icons ([TEKKIL Official Emblem] ⇄ [Pack Icon]) */}
                <div className="flex items-center justify-center gap-3 pt-1">
                  {/* TEKKIL Brand Square with Official Logo Mark */}
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs border border-slate-200/90 shrink-0 p-2">
                    <Image 
                      src="/logo-mark.png" 
                      alt="TEKKIL" 
                      width={32} 
                      height={32} 
                      className="w-full h-full object-contain" 
                    />
                  </div>

                  {/* Bidirectional Connector Arrow */}
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-slate-400">
                    <ArrowLeftRight className="w-3.5 h-3.5" />
                  </div>

                  {/* Concours Pack Square */}
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0"
                    style={{ background: selectedPack.meshGradient }}
                  >
                    <Icon className="w-6 h-6 drop-shadow-sm" />
                  </div>
                </div>

                {/* Centered Title & Subtitle with TEKKIL Fonts */}
                <div className="text-center">
                  <h3 
                    className="text-xl sm:text-2xl font-black text-[#050814] tracking-[-0.03em] leading-tight"
                    style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                  >
                    Rejoindre le {selectedPack.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed mt-1 max-w-sm mx-auto">
                    {selectedPack.fullName} • Session 2026
                  </p>

                  {/* Matières Clés & Épreuves du Pack (Transférées des cards) */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3">
                    {selectedPack.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Checklist Section (DA TEKKIL: Teal checkmark accents & typography) */}
                <div className="space-y-2.5">
                  <p 
                    className="text-xs font-bold text-[#050814] tracking-tight"
                    style={{ fontFamily: 'var(--font-roboto-condensed)' }}
                  >
                    Ce dossier comprend :
                  </p>
                  <div className="space-y-2">
                    {selectedPack.modules.slice(0, 4).map((mod, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-[#14B09C]/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#0D9488] stroke-[3]" />
                        </div>
                        <span className="font-medium leading-snug">{mod.title}</span>
                      </div>
                    ))}
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-[#14B09C]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#0D9488] stroke-[3]" />
                      </div>
                      <span className="font-medium leading-snug">
                        Tuteur IA disponible 24h/24 & examens blancs chronométrés
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-[#14B09C]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#0D9488] stroke-[3]" />
                      </div>
                      <span className="font-medium leading-snug">
                        Mode hors-ligne complet pour réviser sans connexion
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics / Pill Bar with TEKKIL Navy & Teal */}
                <div className="px-3.5 py-2.5 rounded-xl bg-slate-50/90 border border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-2 truncate">
                    <span 
                      className="w-2 h-2 rounded-full shrink-0 shadow-2xs" 
                      style={{ backgroundColor: selectedPack.color }} 
                    />
                    <span className="font-semibold text-slate-800 truncate">
                      {selectedPack.qcmCount} • {selectedPack.modulesCount} modules • {selectedPack.annalesYears}
                    </span>
                  </div>
                  <span 
                    className="text-[10px] font-bold text-[#1A2356] bg-white border border-slate-200/90 px-2 py-0.5 rounded-md shrink-0 shadow-2xs"
                    style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '0.04em' }}
                  >
                    {selectedPack.code}
                  </span>
                </div>

                {/* Footer Action: Single Full-Width Primary CTA (Closing handled by top-right X and backdrop) */}
                <div className="pt-1">
                  <a
                    href={REGISTER_URL}
                    className="group relative w-full inline-flex items-center justify-center gap-2.5 py-3 rounded-full text-white text-sm font-bold transition-all duration-300 shadow-[0_8px_24px_rgba(26,35,86,0.32)] hover:shadow-[0_10px_28px_rgba(13,148,136,0.4)] hover:scale-[1.01] active:scale-[0.99] overflow-hidden cursor-pointer"
                    style={{
                      background: 'linear-gradient(135deg, #1A2356 0%, #27316F 55%, #0D9488 100%)',
                      fontFamily: 'var(--font-roboto-condensed)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {/* Top specular chamfer */}
                    <span className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                    {/* Shimmer sweep on hover */}
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                    <span className="relative z-10">Rejoindre ce pack</span>
                    <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>

              </motion.div>
            </div>
          )
        })()}
      </AnimatePresence>

    </section>
  )
}
