import { useEffect, useRef, useState } from 'react'
import { ChartLine } from 'lucide-react'
import { businessStats } from '../../data/content'
import { iconMap } from '../../lib/icons'
import { Container, Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'

const growth = [18, 26, 31, 45, 52, 58, 64, 71, 79, 86, 92, 100]
const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

function GrowthChart() {
  const [progress, setProgress] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        window.setTimeout(() => setProgress(1), 120)
        observer.disconnect()
      },
      { threshold: 0.3 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const width = 560
  const height = 190
  const points = growth.map((value, index) => {
    const x = (index / (growth.length - 1)) * width
    const y = height - (value / 100) * (height - 26) - 8
    return [x, y]
  })

  const line = points
    .map(([x, y], index) => `${index === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(' ')
  const area = `${line} L${width},${height} L0,${height} Z`

  return (
    <div ref={ref} className="rounded-3xl border border-ink-200/80 bg-white p-6 shadow-card sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[0.6875rem] font-bold tracking-[0.14em] text-brand-600 uppercase">
            Revenue Trajectory
          </p>
          <p className="mt-1.5 font-display text-2xl font-extrabold text-ink-900">
            Rs. 150K+ <span className="text-sm font-semibold text-ink-400">/ month potential</span>
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-600/20">
          <ChartLine className="h-3.5 w-3.5" /> Year 1 projection
        </span>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="mt-7 w-full" role="img" aria-label="Projected monthly revenue growth chart">
        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>

        {[0.25, 0.5, 0.75, 1].map((ratio) => (
          <line
            key={ratio}
            x1="0"
            x2={width}
            y1={height * ratio}
            y2={height * ratio}
            stroke="#e2e8f0"
            strokeDasharray="4 6"
          />
        ))}

        <path d={area} fill="url(#areaFill)" opacity={progress} style={{ transition: 'opacity 1s ease 0.4s' }} />
        <path
          d={line}
          fill="none"
          stroke="url(#lineStroke)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - progress}
          style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1)' }}
        />

        {points.map(([x, y], index) => (
          <circle
            key={index}
            cx={x}
            cy={y}
            r={index === points.length - 1 ? 5 : 3}
            fill="#fff"
            stroke="#4f46e5"
            strokeWidth="2.5"
            opacity={progress}
            style={{ transition: `opacity 400ms ease ${600 + index * 70}ms` }}
          />
        ))}
      </svg>

      <div className="mt-2 flex justify-between text-[0.5625rem] font-semibold text-ink-400">
        {months.map((month, index) => (
          <span key={`${month}-${index}`}>{month}</span>
        ))}
      </div>
    </div>
  )
}

function StatBlock({ stat, index }) {
  const Icon = iconMap[stat.icon]
  const tone = [
    'from-brand-500 to-brand-600',
    'from-accent-500 to-accent-600',
    'from-emerald-500 to-emerald-600',
    'from-amber-500 to-amber-600',
  ][index % 4]

  return (
    <Reveal delay={index * 80} className="h-full">
      <div className="group relative h-full overflow-hidden rounded-3xl border border-ink-200/80 bg-white p-6 shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:shadow-card sm:p-7">
        <span
          className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${tone} opacity-0 transition-opacity duration-400 group-hover:opacity-100`}
        />
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-display text-3xl leading-none font-extrabold text-ink-900 sm:text-[2.25rem]">
              {stat.value}
            </p>
            <p className="mt-2.5 text-sm font-bold text-ink-800">{stat.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-ink-400">{stat.note}</p>
          </div>
          <span
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${tone} text-white opacity-90 shadow-lg transition-transform duration-400 group-hover:scale-110`}
          >
            <Icon className="h-5 w-5" />
          </span>
        </div>
      </div>
    </Reveal>
  )
}

export function BusinessValue() {
  return (
    <Section id="business" className="relative overflow-hidden bg-ink-900 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgb(37_99_235/0.28),transparent_55%),radial-gradient(circle_at_80%_30%,rgb(79_70_229/0.26),transparent_55%),radial-gradient(circle_at_50%_100%,rgb(124_58_237/0.2),transparent_60%)]" />
        <div className="surface-grid absolute inset-0 opacity-[0.12]" />
      </div>

      <Container>
        <div className="flex flex-col items-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-white/80 uppercase ring-1 ring-white/15 backdrop-blur">
              Business Value
            </span>
            <h2 className="mt-5 text-center text-3xl leading-[1.12] font-extrabold text-white sm:text-4xl lg:text-[2.75rem]">
              Built to Scale From a Single Campus
            </h2>
            <p className="mt-4 max-w-2xl text-center text-base leading-relaxed text-white/60">
              A focused model with recurring student demand, low infrastructure cost and clear
              unit economics.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {businessStats.map((stat, index) => (
            <StatBlock key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-white/12 bg-white/[0.06] p-7 backdrop-blur-sm">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Multiple Revenue Streams
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Campus QuickFix can generate revenue through service charges, delivery fees,
                  partner commissions and student memberships.
                </p>
              </div>
              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {[
                  'Service charges per task',
                  'Campus delivery fees',
                  'Partner shop commissions',
                  'Student membership plans',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 rounded-xl bg-white/[0.07] px-3.5 py-2.5 text-xs font-semibold text-white/80 ring-1 ring-white/10"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand-400 to-accent-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <GrowthChart />
          </Reveal>
        </div>

        <p className="mt-8 text-center text-xs text-white/35">
          Figures shown are illustrative planning estimates for a single-campus pilot.
        </p>
      </Container>
    </Section>
  )
}