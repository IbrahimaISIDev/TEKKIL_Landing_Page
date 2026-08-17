'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'

const testimonials = [
  {
    id: 1,
    name: 'Aminata Diallo',
    role: 'Candidate au CREM',
    avatar: 'AD',
    location: 'Dakar',
    rating: 5,
    text: 'Grâce à TEKKIL, j\'ai pu réviser le Droit Administratif de manière structurée. Les QCM chronométrés m\'ont vraiment préparé aux conditions réelles du concours. J\'ai gagné 20 points en 2 mois !',
    highlight: 'gagné 20 points en 2 mois',
  },
  {
    id: 2,
    name: 'Moussa Sow',
    role: 'Admis à l\'ENA 2025',
    avatar: 'MS',
    location: 'Saint-Louis',
    rating: 5,
    text: 'L\'assistant IA est incroyable. Il m\'a expliqué des concepts complexes comme la décentralisation avec des exemples concrets sénégalais. C\'est comme avoir un tuteur personnel 24h/24.',
    highlight: 'tuteur personnel 24h/24',
  },
  {
    id: 3,
    name: 'Fatou Ndiaye',
    role: 'Candidate au CREM',
    avatar: 'FN',
    location: 'Thiès',
    rating: 5,
    text: 'Les flashcards sont parfaites pour réviser dans le transport. J\'utilise TEKKIL chaque jour pendant mes trajets. La progression est vraiment motivante, je vois mes statistiques s\'améliorer.',
    highlight: 'progression vraiment motivante',
  },
  {
    id: 4,
    name: 'Ibrahima Fall',
    role: 'Candidat à l\'ENA',
    avatar: 'IF',
    location: 'Ziguinchor',
    rating: 5,
    text: 'Les annales corrigées m\'ont permis de comprendre exactement le niveau attendu au concours. Je m\'entraîne sur les sujets des sessions précédentes avec la correction complète, un vrai plus.',
    highlight: 'annales corrigées',
  },
  {
    id: 5,
    name: 'Oumar Ba',
    role: 'Admis à un concours national 2025',
    avatar: 'OB',
    location: 'Kaolack',
    rating: 5,
    text: 'J\'ai essayé plusieurs applis mais TEKKIL est la seule adaptée au programme sénégalais. Les contenus sont précis et conformes aux exigences des concours nationaux. Je recommande à 100%.',
    highlight: 'adaptée au programme sénégalais',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const current = testimonials[currentIndex]

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  return (
    <section id="temoignages" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-50 blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gold-100 blur-3xl opacity-50" style={{ background: 'rgba(249, 198, 35, 0.1)' }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel className="mb-4">Témoignages</SectionLabel>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-roboto-condensed)', letterSpacing: '-0.03em' }}
          >
            Ils ont réussi avec TEKKIL
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Découvre les retours de nos utilisateurs qui préparent ou ont réussi les concours nationaux
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {/* Quote icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #F9C623, #FBD354)' }}
            >
              <Quote className="w-5 h-5 text-blue-900" />
            </div>
          </div>

          {/* Card Container */}
          <div className="relative bg-gradient-to-br from-blue-900 to-blue-950 rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-900/30 overflow-hidden min-h-[320px]">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-blue-800/30 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-gold-500/10 blur-2xl" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-gold-500" 
                      style={{ color: '#F9C623', fill: '#F9C623' }} 
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-white text-lg md:text-xl text-center leading-relaxed mb-8">
                  &ldquo;{current.text.split(current.highlight).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span 
                          className="font-semibold"
                          style={{ color: '#F9C623' }}
                        >
                          {current.highlight}
                        </span>
                      )}
                    </span>
                  ))}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ 
                      background: 'linear-gradient(135deg, #2B52EE, #5478F5)',
                      color: 'white'
                    }}
                  >
                    {current.avatar}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">{current.name}</p>
                    <p className="text-blue-200 text-sm">{current.role} - {current.location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-blue-300 hover:text-blue-500 transition-colors shadow-sm"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:border-blue-300 hover:text-blue-500 transition-colors shadow-sm"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mt-16 text-center"
        >
          <div>
            <p className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-roboto-condensed)' }}>4.9/5</p>
            <p className="text-sm text-gray-500">Note moyenne</p>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden sm:block" />
          <div>
            <p className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-roboto-condensed)' }}>1200+</p>
            <p className="text-sm text-gray-500">Utilisateurs actifs</p>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden sm:block" />
          <div>
            <p className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-roboto-condensed)' }}>89%</p>
            <p className="text-sm text-gray-500">Taux de satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
