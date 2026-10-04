import { ArrowUpRight, Clock, ShieldCheck } from 'lucide-react'
import { services } from '../../data/services'
import { useDialogs } from '../ui/dialogStore'
import { Reveal } from '../ui/Reveal'
import { Container, Section, SectionHeader } from '../ui/Section'

const accents = {
  blue: {
    tile: 'from-brand-500 to-brand-600',
    soft: 'bg-brand-50 text-brand-700 ring-brand-100',
    hover: 'group-hover:shadow-[0_28px_60px_-24px_rgb(37_99_235/0.45)]',
  },
  indigo: {
    tile: 'from-accent-500 to-accent-600',
    soft: 'bg-accent-50 text-accent-700 ring-accent-100',
    hover: 'group-hover:shadow-[0_28px_60px_-24px_rgb(79_70_229/0.45)]',
  },
  amber: {
    tile: 'from-amber-500 to-amber-600',
    soft: 'bg-amber-50 text-amber-700 ring-amber-100',
    hover: 'group-hover:shadow-[0_28px_60px_-24px_rgb(245_158_11/0.45)]',
  },
  emerald: {
    tile: 'from-emerald-500 to-emerald-600',
    soft: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    hover: 'group-hover:shadow-[0_28px_60px_-24px_rgb(16_185_129/0.42)]',
  },
  violet: {
    tile: 'from-violet-500 to-violet-600',
    soft: 'bg-violet-50 text-violet-700 ring-violet-100',
    hover: 'group-hover:shadow-[0_28px_60px_-24px_rgb(139_92_246/0.45)]',
  },
  rose: {
    tile: 'from-rose-500 to-rose-600',
    soft: 'bg-rose-50 text-rose-700 ring-rose-100',
    hover: 'group-hover:shadow-[0_28px_60px_-24px_rgb(244_63_94/0.42)]',
  },
  cyan: {
    tile: 'from-cyan-500 to-cyan-600',
    soft: 'bg-cyan-50 text-cyan-700 ring-cyan-100',
    hover: 'group-hover:shadow-[0_28px_60px_-24px_rgb(6_182_212/0.42)]',
  },
}

function ServiceCard({ service, index, onOrder }) {
  const { icon: Icon, name, description, price, eta, accent } = service
  const tone = accents[accent] ?? accents.blue

  return (
    <Reveal delay={index * 70} className="h-full">
      <article
        className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-200/80 bg-white p-6 shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:border-transparent ${tone.hover}`}
      >
        {/* hover wash */}
        <div
          className={`pointer-events-none absolute inset-x-0 -top-16 h-32 bg-gradient-to-b ${tone.tile} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[0.14]`}
        />

        <div className="relative flex items-start justify-between gap-3">
          <span
            className={`grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${tone.tile} text-white shadow-lg shadow-ink-900/10 transition-transform duration-400 group-hover:scale-110 group-hover:rotate-3`}
          >
            <Icon className="h-6 w-6" strokeWidth={2} />
          </span>
          <span className={`rounded-full px-2.5 py-1 text-[0.6875rem] font-bold ring-1 ${tone.soft}`}>
            {price}
          </span>
        </div>

        <h3 className="relative mt-5 font-display text-lg leading-snug font-bold text-ink-900">
          {name}
        </h3>
        <p className="relative mt-2 flex-1 text-sm leading-relaxed text-ink-500">{description}</p>

        <div className="relative mt-4 flex items-center gap-3 text-[0.6875rem] font-semibold text-ink-400">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" /> {eta}
          </span>
          <span className="h-1 w-1 rounded-full bg-ink-300" />
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="h-3 w-3" /> Verified partner
          </span>
        </div>

        <button
          type="button"
          onClick={() => onOrder(service)}
          className="relative mt-6 inline-flex w-full items-center justify-between rounded-2xl bg-ink-50 px-4 py-3 text-sm font-bold text-ink-800 ring-1 ring-ink-200/80 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-accent-600 group-hover:text-white group-hover:ring-transparent"
        >
          QuickFix Now
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </article>
    </Reveal>
  )
}

export function Services() {
  const { openDialog } = useDialogs()

  return (
    <Section id="services" className="relative bg-ink-50/70 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Our Services"
            title="Everything You Need, Right on Campus"
            subtitle="Quick solutions for those small problems that slow you down."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onOrder={openDialog}
            />
          ))}

          {/* CTA tile */}
          <Reveal delay={7 * 70} className="h-full">
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 via-brand-900 to-accent-900 p-6 text-white shadow-lift">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.6875rem] font-bold tracking-wide uppercase ring-1 ring-white/15">
                  Need something else?
                </span>
                <h3 className="mt-5 font-display text-xl leading-snug font-bold text-white">
                  Don&apos;t see it listed? Just ask.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Send a custom request and we&apos;ll match you with a QuickFixer who can handle it.
                </p>
              </div>
              <button
                type="button"
                onClick={() => openDialog('order', { service: 'custom' })}
                className="mt-6 inline-flex w-full items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-bold text-ink-900 transition hover:bg-brand-50"
              >
                Request a custom task
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}