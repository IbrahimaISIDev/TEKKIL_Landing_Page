import { Smartphone } from 'lucide-react'
import { INSTALL_URL } from '@/lib/urls'

/**
 * Bouton permanent « Installer TEKKIL sur mon appareil » (ajustements
 * techniques du 12/11/2026, point 1) : visible quelle que soit la position
 * de défilement. Ouvre la page /installer de l'application — une
 * application web ne s'installe que depuis son propre domaine ; cette page
 * propose l'invite native (Android, Chrome, Edge) ou la marche à suivre
 * (iPhone : Safari → Partager → Sur l'écran d'accueil), sans jamais
 * promettre une installation directe impossible.
 *
 * Téléphone : large pastille en bas (à gauche du bouton « Retour en haut »
 * sur l'accueil) ; l'espace réservé en fin de page évite qu'elle masque le
 * pied de page. Tablette et ordinateur : bouton « Installer TEKKIL » de la
 * barre de navigation fixe (Navbar), qui ne recouvre aucun contenu. Lien simple, sans animation
 * d'entrée : visible dès le HTML, même si le JavaScript ne charge pas.
 */
export function InstallCta({ besideScrollTop = false }: { besideScrollTop?: boolean }) {
  return (
    <>
      <div aria-hidden className="h-24 md:hidden" />
      <a
        href={INSTALL_URL}
        className={`fixed bottom-6 left-4 ${besideScrollTop ? 'right-[5.5rem]' : 'right-4'} z-50 flex md:hidden items-center justify-center gap-2.5 rounded-full bg-[#2b326f] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2b326f]/30 outline-none transition-[filter] hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[#25b09d] focus-visible:ring-offset-2`}
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#25b09d]">
          <Smartphone size={16} strokeWidth={2.5} aria-hidden />
        </span>
        <span className="truncate">Installer TEKKIL sur mon appareil</span>
      </a>
    </>
  )
}
