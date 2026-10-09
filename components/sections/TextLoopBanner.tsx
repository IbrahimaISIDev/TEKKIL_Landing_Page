'use client'

import TextLoop from '@/components/ui/TextLoop'

export function TextLoopBanner() {
  return (
    <section className="bg-white py-8 md:py-12 w-full overflow-hidden select-none">
      <div className="w-full">
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
        />
      </div>
    </section>
  )
}
