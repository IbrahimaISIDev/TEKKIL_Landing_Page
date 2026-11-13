'use client'

import { useEffect, useState } from 'react'
import { Smartphone, X } from 'lucide-react'
import { INSTALL_URL } from '@/lib/urls'

/** Bulles d'incitation, affichées tour à tour au-dessus du bouton. */
const NUDGES = [
  '📲 Révise en un geste, depuis ton écran d’accueil',
  '⚡ S’ouvre comme une appli, sans Play Store',
  '🔥 Garde ta série de révision chaque jour',
  '🪶 Très léger : presque aucune place sur ton téléphone',
  '🎯 Installe TEKKIL en quelques secondes, c’est gratuit',
]
const FIRST_DELAY_MS = 3_000
const SHOW_MS = 6_000
const HIDE_MS = 8_000
/** Bulles fermées : elles reviennent après ce délai. */
const SNOOZE_MS = 60_000

/**
 * Bouton permanent « Installer TEKKIL sur mon appareil » (ajustements
 * techniques du 12/11/2026, point 1 ; même bouton sur tous les écrans depuis
 * le 13/11) : visible quelle que soit la position de défilement, sur
 * téléphone comme sur ordinateur. Ouvre la page /installer de l'application
 * — une application web ne s'installe que depuis son propre domaine ; cette
 * page propose l'invite native (Android, Chrome, Edge) ou la marche à suivre
 * (iPhone : Safari → Partager → Sur l'écran d'accueil), sans jamais promettre
 * une installation directe impossible.
 *
 * Pour inciter en continu : point de notification et halo pulsants, brève
 * secousse toutes les 7 s, et bulles d'incitation qui reviennent en boucle
 * (fermables, de retour une minute plus tard). Animations neutralisées par
 * « réduire les animations » (globals.css).
 *
 * Le bouton est dans le HTML dès le serveur (visible même sans JavaScript) ;
 * les bulles n'apparaissent qu'ensuite. Téléphone : large pastille en bas, à
 * gauche du « Retour en haut » sur l'accueil ; espace réservé en fin de page
 * pour ne pas masquer le pied de page. Ordinateur : pastille en bas à gauche.
 */
export function InstallCta({ besideScrollTop = false }: { besideScrollTop?: boolean }) {
  const [nudge, setNudge] = useState<number | null>(null)
  const [snoozedAt, setSnoozedAt] = useState<number | null>(null)

  useEffect(() => {
    let index = 0
    let timer: ReturnType<typeof setTimeout>
    const show = () => {
      setNudge(index)
      index = (index + 1) % NUDGES.length
      timer = setTimeout(hide, SHOW_MS)
    }
    const hide = () => {
      setNudge(null)
      timer = setTimeout(show, HIDE_MS)
    }
    timer = setTimeout(show, snoozedAt ? SNOOZE_MS : FIRST_DELAY_MS)
    return () => clearTimeout(timer)
  }, [snoozedAt])

  return (
    <>
      <div aria-hidden className="h-24 md:h-20" />
      <div
        className={`fixed bottom-6 left-4 ${besideScrollTop ? 'right-[5.5rem]' : 'right-4'} z-50 flex flex-col items-start gap-2 md:bottom-8 md:left-8 md:right-auto`}
      >
        {nudge !== null && (
          <div
            key={nudge}
            className="install-bubble-in relative flex max-w-full items-center gap-2 rounded-2xl bg-white py-2 pl-3.5 pr-2 text-[13px] font-semibold text-[#27316F] shadow-[0_8px_24px_rgba(39,49,111,0.18)] ring-1 ring-[#27316F]/10 md:max-w-xs"
          >
            <a href={INSTALL_URL} className="min-w-0 outline-none hover:underline">
              {NUDGES[nudge]}
            </a>
            <button
              type="button"
              onClick={() => {
                setNudge(null)
                setSnoozedAt(Date.now())
              }}
              aria-label="Masquer ce message"
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#27316F]/60 hover:bg-[#27316F]/5 hover:text-[#27316F]"
            >
              <X size={14} strokeWidth={2.5} aria-hidden />
            </button>
            {/* Pointe de la bulle, vers le bouton */}
            <span aria-hidden className="absolute -bottom-1.5 left-7 h-3 w-3 rotate-45 bg-white" />
          </div>
        )}

        <a
          href={INSTALL_URL}
          className="install-nudge relative flex w-full items-center justify-center gap-2.5 rounded-full bg-[#2b326f] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2b326f]/30 outline-none transition-[filter] hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[#25b09d] focus-visible:ring-offset-2 md:w-auto md:px-5"
          style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
        >
          {/* Halo pulsant autour de l'icône */}
          <span className="relative flex h-7 w-7 shrink-0 items-center justify-center">
            <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-[#25b09d] opacity-60" />
            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#25b09d]">
              <Smartphone size={16} strokeWidth={2.5} aria-hidden />
            </span>
          </span>
          <span className="truncate">Installer TEKKIL sur mon appareil</span>
          {/* Point de notification */}
          <span aria-hidden className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-[#F9C623] opacity-75" />
            <span className="relative h-3.5 w-3.5 rounded-full border-2 border-white bg-[#F9C623]" />
          </span>
        </a>
      </div>
    </>
  )
}
