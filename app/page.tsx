import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/landing/Hero'
import { ExploreTekkil } from '@/components/sections/ExploreTekkil'
import { AboutUs } from '@/components/sections/AboutUs'
import { Stats } from '@/components/sections/Stats'
import { TextLoopBanner } from '@/components/sections/TextLoopBanner'
import { Features } from '@/components/sections/Features'
import { AppShowcase } from '@/components/sections/AppShowcase'
import { AIAssistant } from '@/components/sections/AIAssistant'
import { Leaderboard } from '@/components/sections/Leaderboard'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Download } from '@/components/sections/Download'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'
import { ScrollToTop } from '@/components/ui/ScrollToTop'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ExploreTekkil />
      <AboutUs />
      <Stats />
      <TextLoopBanner />
      {/* Ordre du parcours : comprendre → voir → preuve → offre → rassurer.
          NAV_LINKS (lib/constants.ts) suit cet ordre : le scrollspy de la
          Navbar en dépend. */}
      <HowItWorks />
      <Features />
      <AppShowcase />
      <Leaderboard />
      <AIAssistant />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Download />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
