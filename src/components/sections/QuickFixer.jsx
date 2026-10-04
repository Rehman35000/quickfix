import { ArrowRight, BadgeCheck, Bike, GraduationCap, TrendingUp, Wallet } from 'lucide-react'
import { quickFixerBenefits } from '../../data/content'
import { iconMap } from '../../lib/icons'
import { Button } from '../ui/Button'
import { useDialogs } from '../ui/dialogStore'
import { Container, Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'

const earnings = [
  { day: 'Mon', value: 620 },
  { day: 'Tue', value: 940 },
  { day: 'Wed', value: 480 },
  { day: 'Thu', value: 860 },
  { day: 'Fri', value: 1120 },
  { day: 'Sat', value: 540 },
  { day: 'Sun', value: 300 },
]

function StudentWorkerVisual() {
  const max = Math.max(...earnings.map((item) => item.value))

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -top-8 -left-6 h-64 w-64 rounded-full bg-accent-300/25 blur-3xl" />
      <div className="absolute -right-8 -bottom-6 h-64 w-64 rounded-full bg-brand-300/25 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-ink-200/80 bg-white p-6 shadow-card">
        {/* illustration */}
        <div className="relative mx-auto h-52 w-52">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-100 to-accent-100" />
          <svg viewBox="0 0 200 200" className="relative h-full w-full" aria-hidden="true">
            <defs>
              <linearGradient id="shirt" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="62" r="26" fill="#fde3c8" />
            <path
              d="M74 58a26 26 0 0 1 52 0v-4a26 26 0 0 0-52 0Z"
              fill="#2f2a45"
            />
            <path
              d="M74 52c0-14 12-24 26-24s26 10 26 24c0 3-6 1-13-2-8-3-13-8-13-8s-6 8-16 10c-6 2-10 0-10 0Z"
              fill="#2f2a45"
            />
            <path
              d="M60 140c0-24 18-40 40-40s40 16 40 40v22H60v-22Z"
              fill="url(#shirt)"
            />
            <path d="M100 100v62" stroke="#ffffff" strokeOpacity=".25" strokeWidth="2" />
            <rect x="86" y="112" width="28" height="22" rx="4" fill="#ffffff" fillOpacity=".9" />
            <path
              d="M92 120h16M92 126h10"
              stroke="#4f46e5"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M56 132c-8 4-14 12-16 22" stroke="#3b82f6" strokeWidth="10" strokeLinecap="round" />
            <path d="M144 132c8 4 14 12 16 22" stroke="#4f46e5" strokeWidth="10" strokeLinecap="round" />
            <rect x="128" y="146" width="34" height="26" rx="6" fill="#ffffff" stroke="#cbd5e1" />
            <path d="M128 152h34" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="40" cy="52" r="9" fill="#fff" />
            <path
              d="M40 47.5 42 51h3.5l-2.8 2.1 1 3.4L40 54.4 36.3 56.5l1-3.4L34.5 51H38Z"
              fill="#f59e0b"
            />
          </svg>

          <span className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-ink-900 px-3 py-1.5 text-[0.6875rem] font-bold whitespace-nowrap text-white shadow-lg">
            <BadgeCheck className="h-3.5 w-3.5 text-emerald-400" />
            Verified QuickFixer
          </span>
        </div>

        {/* earnings card */}
        <div className="mt-7 rounded-2xl border border-ink-200/80 bg-ink-50/70 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[0.6875rem] font-semibold text-ink-400">This week</p>
              <p className="font-display text-xl font-extrabold text-ink-900">Rs. 4,860</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[0.625rem] font-bold text-emerald-700">
              <TrendingUp className="h-3 w-3" /> +18%
            </span>
          </div>

          <div className="mt-4 flex h-20 items-end gap-1.5">
            {earnings.map((item, index) => (
              <div key={item.day} className="group flex flex-1 flex-col items-center gap-1.5">
                <div className="relative flex w-full flex-1 items-end">
                  <div
                    className={`w-full rounded-t-md transition-all duration-500 ${
                      index === earnings.length - 1
                        ? 'bg-gradient-to-t from-brand-600 to-accent-500'
                        : 'bg-brand-200 group-hover:bg-brand-300'
                    }`}
                    style={{ height: `${(item.value / max) * 100}%`, transitionDelay: `${index * 60}ms` }}
                  />
                </div>
                <span className="text-[0.5625rem] font-semibold text-ink-400">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2.5 rounded-2xl bg-white p-3 ring-1 ring-ink-200">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <Wallet className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[0.625rem] font-semibold text-ink-400">Avg. per task</p>
              <p className="text-sm font-bold text-ink-900">Rs. 105</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 rounded-2xl bg-white p-3 ring-1 ring-ink-200">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-accent-50 text-accent-600">
              <Bike className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[0.625rem] font-semibold text-ink-400">Tasks done</p>
              <p className="text-sm font-bold text-ink-900">46</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function QuickFixer() {
  const { openDialog } = useDialogs()

  return (
    <Section id="quickfixer" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-50/60 via-white to-white" />
        <div className="surface-grid absolute inset-x-0 top-0 h-full opacity-50 mask-fade-b" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-accent-700 uppercase ring-1 ring-accent-100">
              <GraduationCap className="h-3.5 w-3.5" />
              For Students
            </span>

            <h2 className="mt-5 text-3xl leading-[1.12] font-extrabold sm:text-4xl lg:text-[2.75rem]">
              Earn While <span className="text-gradient">You Study</span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-500">
              Become a QuickFixer and help fellow students while earning money around your class
              schedule.
            </p>

            <ul className="mt-9 grid gap-4 sm:grid-cols-2">
              {quickFixerBenefits.map((benefit, index) => {
                const Icon = iconMap[benefit.icon]
                return (
                  <li key={benefit.title} className="h-full">
                    <Reveal delay={index * 70} className="h-full">
                      <div className="group h-full rounded-2xl border border-ink-200/80 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-card">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-lg shadow-accent-500/25 transition-transform duration-300 group-hover:scale-110">
                          <Icon className="h-5 w-5" />
                        </span>
                        <p className="mt-4 font-display text-[0.9375rem] font-bold text-ink-900">
                          {benefit.title}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                          {benefit.description}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                )
              })}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" rightIcon={ArrowRight} onClick={() => openDialog('quickfixer')}>
                Become a QuickFixer
              </Button>
              <a
                href="#how-it-works"
                className="text-center text-sm font-semibold text-ink-500 underline-offset-4 transition hover:text-accent-700 hover:underline"
              >
                See how matching works
              </a>
            </div>
          </Reveal>

          <Reveal delay={140} y={30}>
            <StudentWorkerVisual />
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}