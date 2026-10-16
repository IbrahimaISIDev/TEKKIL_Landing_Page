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
    </section>
  )
}
