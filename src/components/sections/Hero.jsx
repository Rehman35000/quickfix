import { ArrowRight, CirclePlay, Sparkles, Star } from 'lucide-react'
import { heroTrust } from '../../data/content'
import { iconMap } from '../../lib/icons'
import { Button } from '../ui/Button'
import { Container } from '../ui/Section'
import { HeroVisual } from './HeroVisual'

const avatars = [
  { initials: 'AH', tone: 'from-brand-500 to-brand-700' },
  { initials: 'SA', tone: 'from-accent-500 to-accent-700' },
  { initials: 'HA', tone: 'from-emerald-500 to-emerald-700' },
  { initials: 'ZU', tone: 'from-amber-500 to-amber-600' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      {/* background decor */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/70 via-white to-white" />
        <div className="surface-grid absolute inset-x-0 top-0 h-[42rem] opacity-70 mask-fade-b" />
        <div className="absolute -top-24 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-300/25 via-accent-300/25 to-brand-300/25 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-white/80 py-1.5 pr-4 pl-1.5 text-xs font-semibold text-ink-600 shadow-soft backdrop-blur">
              <span className="rounded-full bg-gradient-to-r from-brand-600 to-accent-600 px-2.5 py-1 text-[0.625rem] font-bold tracking-[0.14em] text-white uppercase">
                New
              </span>
              Quick service, now live across your campus
            </div>

            <h1 className="mt-6 text-[2.5rem] leading-[1.06] font-extrabold text-balance sm:text-6xl lg:text-[4.25rem] lg:leading-[1.02]">
              Small Problem?{' '}
              <span className="relative inline-block">
                <span className="text-gradient">QuickFix It.</span>
                <svg
                  viewBox="0 0 240 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-3 w-full text-accent-400/50 sm:-bottom-2 sm:h-4"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9.5c46-6 96-8 234-3"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-pretty text-ink-500 sm:text-lg lg:mx-0">
              Get everyday campus tasks done quickly by nearby student workers and trusted campus
              partners.
            </p>

            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
              <Button as="a" href="#order" size="lg" rightIcon={ArrowRight} className="sm:w-auto">
                Order a Service
              </Button>
              <Button
                as="a"
                href="#services"
                size="lg"
                variant="secondary"
                leftIcon={CirclePlay}
                className="sm:w-auto"
              >
                Explore Services
              </Button>
            </div>

            {/* social proof */}
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <div className="flex -space-x-2.5">
                {avatars.map(({ initials, tone }) => (
                  <span
                    key={initials}
                    className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${tone} text-[0.625rem] font-bold text-white ring-2 ring-white`}
                  >
                    {initials}
                  </span>
                ))}
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-900 text-[0.625rem] font-bold text-white ring-2 ring-white">
                  +1.2k
                </span>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center gap-1 sm:justify-start">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-sm font-bold text-ink-900">4.9</span>
                </div>
                <p className="mt-0.5 text-xs font-medium text-ink-500">
                  Trusted by 1,200+ students this semester
                </p>
              </div>
            </div>

            {/* trust indicators */}
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
              {heroTrust.map(({ label, icon }) => {
                const Icon = iconMap[icon]
                return (
                  <li
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink-600 shadow-soft ring-1 ring-ink-200/70 transition hover:-translate-y-0.5 hover:ring-brand-200 hover:text-brand-700"
                  >
                    <Icon className="h-3.5 w-3.5 text-brand-600" />
                    {label}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* visual */}
          <div className="relative">
            <HeroVisual />

            <div className="mt-10 flex items-center justify-center gap-2 text-xs font-semibold text-ink-400 lg:mt-8">
              <Sparkles className="h-3.5 w-3.5 text-accent-500" />
              Small problem? QuickFix it.
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}