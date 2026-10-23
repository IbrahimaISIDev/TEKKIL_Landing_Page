'use client'

import TextLoop from '@/components/ui/TextLoop'

export function TextLoopBanner() {
  return (
    <section className="bg-white pb-8 md:pb-12 lg:pb-16 w-full overflow-hidden select-none">
      {/* Mobile : bandeau plus haut = texte plus grand (le SVG se met à
          l'échelle de la hauteur, preserveAspectRatio « slice »). */}
      <div className="w-full h-[150px] sm:h-[150px] md:h-[180px]">
        <TextLoop
          text="TEKKIL ne vous promet pas la réussite au concours. TEKKIL vous donne les moyens d’y parvenir : des contenus pédagogiques de qualité, une méthode efficace et un entraînement intensif."
          shape="wave"
          speed={75}
          direction="reverse"
          separator="✦"
          curviness={22}
          fontSize={20}
          fontWeight={750}
          letterSpacing={2}
          uppercase={false}
          color="#ffffffff"
          ribbon
          ribbonColor="#25b09d"
          ribbonWidth={50}
          preserveAspectRatio="xMidYMid slice"
        />
      </div>

      {/* Carte rouge sous le bandeau : positionnement de TEKKIL (texte validé). */}
      <div className="mx-auto mt-6 max-w-5xl px-5 md:mt-8 md:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-[#DC2626] px-6 py-8 text-center text-white shadow-[0_20px_50px_-20px_rgba(220,38,38,0.55)] md:rounded-[36px] md:px-14 md:py-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-black/10 blur-2xl" />
          <p
            className="relative text-2xl font-black leading-tight tracking-[-0.02em] md:text-4xl"
            style={{ fontFamily: 'var(--font-roboto-condensed)' }}
          >
            TEKKIL n’est pas une bibliothèque de PDF.
          </p>
          <p className="relative mx-auto mt-4 max-w-3xl text-[15px] leading-relaxed text-white md:text-lg">
            C’est une véritable plateforme de préparation active et interactive aux examens et concours, conçue par des professionnels.
          </p>
          <p className="relative mt-5 text-base font-bold md:text-xl">
            Avec TEKKIL, moins de lecture passive, plus d’apprentissage actif !
          </p>
        </div>
      </div>
    </section>
  )
}
