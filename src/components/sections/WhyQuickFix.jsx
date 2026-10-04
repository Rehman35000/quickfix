import { Check } from 'lucide-react'
import { whyFeatures } from '../../data/content'
import { iconMap } from '../../lib/icons'
import { Container, Section, SectionHeader } from '../ui/Section'
import { Reveal } from '../ui/Reveal'

const accents = [
  {
    tile: 'from-amber-400 to-amber-500',
    glow: 'group-hover:shadow-[0_28px_60px_-24px_rgb(245_158_11/0.5)]',
    chip: 'bg-amber-50 text-amber-700 ring-amber-100',
  },
  {
    tile: 'from-emerald-400 to-emerald-500',
    glow: 'group-hover:shadow-[0_28px_60px_-24px_rgb(16_185_129/0.5)]',
    chip: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  },
  {
    tile: 'from-brand-500 to-brand-600',
    glow: 'group-hover:shadow-[0_28px_60px_-24px_rgb(37_99_235/0.5)]',
    chip: 'bg-brand-50 text-brand-700 ring-brand-100',
  },
  {
    tile: 'from-accent-500 to-violet-600',
    glow: 'group-hover:shadow-[0_28px_60px_-24px_rgb(124_58_237/0.5)]',
    chip: 'bg-accent-50 text-accent-700 ring-accent-100',
  },
]

const bullets = {
  Fast: 'Under 3 min average match time',
  Affordable: 'No hidden charges, ever',
  Nearby: 'Only QuickFixers on your campus',
  'Student Powered': 'Campus-wide student network',
}

export function WhyQuickFix() {
  return (
    <Section id="about" className="relative bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Why QuickFix"
            title="Why Students Choose QuickFix"
            subtitle="Four reasons this becomes part of your everyday campus routine."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {whyFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            const accent = accents[index % accents.length]

            return (
              <Reveal key={feature.title} delay={index * 80} className="h-full">
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-200/80 bg-white p-6 shadow-soft transition-all duration-400 hover:-translate-y-2 hover:border-transparent ${accent.glow}`}
                >
                  <div
                    className={`pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-gradient-to-br ${accent.tile} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25`}
                  />

                  <span
                    className={`relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${accent.tile} text-white shadow-lg transition-transform duration-400 group-hover:scale-110 group-hover:-rotate-6`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>

                  <h3 className="relative mt-5 font-display text-lg font-bold text-ink-900">
                    {feature.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed font-medium text-ink-600">
                    {feature.description}
                  </p>
                  <p className="relative mt-3 text-xs leading-relaxed text-ink-400">{feature.detail}</p>

                  <span
                    className={`relative mt-5 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.6875rem] font-bold ring-1 ${accent.chip}`}
                  >
                    <Check className="h-3 w-3" />
                    {bullets[feature.title]}
                  </span>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}