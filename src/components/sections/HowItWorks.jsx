import { ArrowRight, CircleCheckBig } from 'lucide-react'
import { steps } from '../../data/content'
import { iconMap } from '../../lib/icons'
import { Container, Section, SectionHeader } from '../ui/Section'
import { Reveal } from '../ui/Reveal'

function StepCard({ step, index }) {
  const Icon = iconMap[step.icon]

  return (
    <li className="group relative h-full">
      {/* connector line (horizontal on lg) */}
      {index < steps.length - 1 ? (
        <>
          <span
            aria-hidden="true"
            className="absolute top-[4.25rem] left-[calc(50%+2.75rem)] hidden h-0.5 w-[calc(100%-5.5rem)] bg-gradient-to-r from-brand-200 via-accent-200 to-brand-200 lg:block"
          />
          <span
            aria-hidden="true"
            className="absolute top-[4.5rem] left-[calc(50%+2.25rem)] hidden -translate-x-1/2 text-brand-400 transition-transform duration-500 group-hover:translate-x-1 lg:block"
          >
            <ArrowRight className="h-4 w-4" />
          </span>

          {/* connector line (vertical on mobile/tablet) */}
          <span
            aria-hidden="true"
            className="absolute top-[calc(4.25rem+1rem)] left-1/2 h-[calc(100%-3rem)] w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-200 via-accent-200 to-transparent lg:hidden"
          />
        </>
      ) : null}
    <Reveal delay={index * 90} className="h-full">
      <div className="h-full">
        <div className="flex h-full flex-col items-center px-2 pb-12 text-center lg:pb-0">
          <div className="relative">
            <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-brand-500/15 to-accent-500/15 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
            <span className="grid h-[4.25rem] w-[4.25rem] place-items-center rounded-full border border-ink-200 bg-white shadow-soft transition-all duration-400 group-hover:-translate-y-1 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-brand-600 group-hover:to-accent-600 group-hover:shadow-lift">
              <Icon className="h-6 w-6 text-brand-600 transition-colors duration-400 group-hover:text-white" />
            </span>
            <span className="absolute -top-1 -right-1 grid h-6 w-6 place-items-center rounded-full bg-ink-900 font-display text-[0.625rem] font-extrabold text-white ring-2 ring-white">
              {index + 1}
            </span>
          </div>

          <span className="mt-5 font-display text-sm font-extrabold tracking-[0.18em] text-brand-600 uppercase">
            {step.number}
          </span>
          <h3 className="mt-1.5 font-display text-lg font-bold text-ink-900">{step.title}</h3>
          <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-ink-500">
            {step.description}
          </p>
        </div>
      </div>
    </Reveal>
    </li>
  )
}

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 h-96 w-96 rounded-full bg-brand-100/50 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-accent-100/50 blur-3xl" />
      </div>

      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="How It Works"
            title="How Campus QuickFix Works"
            subtitle="Six simple steps between your problem and a fixed campus day."
          />
        </Reveal>

        <ol className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-6 lg:gap-0">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </ol>

        <Reveal delay={200}>
          <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center gap-5 rounded-3xl border border-ink-200/80 bg-gradient-to-r from-brand-50 to-accent-50 px-6 py-7 text-center shadow-soft sm:mt-16 lg:flex-row lg:justify-between lg:text-left">
            <div className="flex items-start gap-3">
              <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
              <div>
                <p className="font-display text-base font-bold text-ink-900">
                  Average match time: under 3 minutes
                </p>
                <p className="mt-1 text-sm text-ink-500">
                  Most campus tasks are completed before your next class starts.
                </p>
              </div>
            </div>
            <a
              href="#order"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-ink-800"
            >
              Place an order <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}