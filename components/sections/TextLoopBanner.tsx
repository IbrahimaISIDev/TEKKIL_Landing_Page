'use client'

import TextLoop from '@/components/ui/TextLoop'

export function TextLoopBanner() {
  return (
    <section className="bg-white pb-8 md:pb-12 lg:pb-16 w-full overflow-hidden select-none">
      <div className="w-full h-[120px] sm:h-[140px] md:h-[180px]">
        <TextLoop
          text="Concours ✦ Réussite ✦ Sénégal ✦ Excellence"
          shape="wave"
          speed={75}
          direction="forward"
          separator="✦"
          curviness={22}
          fontSize={20}
          fontWeight={750}
          letterSpacing={2}
          uppercase
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
