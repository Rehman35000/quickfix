import { ArrowRight, Clock, LayoutGrid } from 'lucide-react'
import { Button } from '../ui/Button'
import { useDialogs } from '../ui/dialogStore'
import { Container, Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'

export function CallToAction() {
  const { openDialog } = useDialogs()

  return (
    <Section id="contact" className="relative bg-white py-20 sm:py-24">
      <Container>
        <Reveal y={26}>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink-900 via-brand-900 to-accent-900 px-6 py-14 shadow-lift sm:px-12 sm:py-20">
            {/* decor */}
            <div className="pointer-events-none absolute inset-0">
              <div className="surface-grid absolute inset-0 opacity-[0.1]" />
              <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl" />
              <div className="absolute -right-16 -bottom-24 h-72 w-72 rounded-full bg-accent-500/25 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-white/80 uppercase ring-1 ring-white/15 backdrop-blur">
                Ready when you are
              </span>

              <h2 className="mt-6 text-3xl leading-[1.1] font-extrabold text-white sm:text-5xl lg:text-[3.5rem]">
                Got a Small
                <br className="hidden sm:block" /> Campus Problem?
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-pretty text-white/65 sm:text-lg">
                Don&apos;t waste your time. Let QuickFix handle it.
              </p>

              <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Button
                  size="lg"
                  variant="white"
                  onClick={() => openDialog('get-started')}
                  rightIcon={ArrowRight}
                >
                  Get Started
                </Button>
                <Button
                  as="a"
                  href="#services"
                  size="lg"
                  variant="outline"
                  leftIcon={LayoutGrid}
                  className="border-white/25 text-white hover:bg-white hover:text-brand-700 hover:ring-white"
                >
                  View Services
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-white/55">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-300" />
                  24/7 request availability
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  18 QuickFixers online now
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                  No signup needed to order
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}