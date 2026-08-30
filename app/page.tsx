import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { AboutUs } from '@/components/sections/AboutUs'
import { Stats } from '@/components/sections/Stats'
import { Features } from '@/components/sections/Features'
import { AppShowcase } from '@/components/sections/AppShowcase'
import { AIAssistant } from '@/components/sections/AIAssistant'
import { Leaderboard } from '@/components/sections/Leaderboard'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Download } from '@/components/sections/Download'
import { FAQ } from '@/components/sections/FAQ'
import { Privacy } from '@/components/sections/Privacy'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <Stats />
      <Features />
      <AppShowcase />
      <AIAssistant />
      <Leaderboard />
      <Testimonials />
      <Pricing />
      <HowItWorks />
      <Download />
      <FAQ />
      <Privacy />
      <Contact />
      <Footer />
    </main>
  )
}
