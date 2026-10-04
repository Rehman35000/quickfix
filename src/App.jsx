import { ArrowRight } from 'lucide-react'
import { Footer } from './components/layout/Footer'
import { Marquee } from './components/layout/Marquee'
import { Navbar } from './components/layout/Navbar'
import { BusinessValue } from './components/sections/BusinessValue'
import { CallToAction } from './components/sections/CallToAction'
import { DashboardPreview } from './components/sections/DashboardPreview'
import { Hero } from './components/sections/Hero'
import { HowItWorks } from './components/sections/HowItWorks'
import { QuickFixer } from './components/sections/QuickFixer'
import { QuickOrder } from './components/sections/QuickOrder'
import { Services } from './components/sections/Services'
import { Testimonials } from './components/sections/Testimonials'
import { WhyQuickFix } from './components/sections/WhyQuickFix'
import { DialogProvider } from './components/ui/DialogProvider'
import { Dialogs } from './components/ui/Dialogs'

function TopBar() {
  return (
    <div className="hidden bg-ink-900 py-2 text-white/70 lg:block">
      <div className="container-page flex items-center justify-between text-xs font-medium">
        <p>Small problem? QuickFix it. â€” Now live at Northfield University</p>
        <a href="#order" className="inline-flex items-center gap-1.5 font-bold text-white transition hover:text-brand-300">
          Order now <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <DialogProvider>
      <div className="min-h-dvh bg-white">
        <TopBar />
        <Navbar />

        <main>
          <Hero />
          <Marquee />
          <Services />
          <HowItWorks />
          <QuickOrder />
          <DashboardPreview />
          <QuickFixer />
          <BusinessValue />
          <WhyQuickFix />
          <Testimonials />
          <CallToAction />
        </main>

        <Footer />
        <Dialogs />
      </div>
    </DialogProvider>
  )
}