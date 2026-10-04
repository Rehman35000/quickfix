import { Quote, Star } from 'lucide-react'
import { testimonials } from '../../data/content'
import { Container, Section, SectionHeader } from '../ui/Section'
import { Reveal } from '../ui/Reveal'

const avatarTones = [
  'from-brand-500 to-accent-600',
  'from-emerald-500 to-teal-600',
  'from-amber-500 to-orange-500',
]

export function Testimonials() {
  return (
    <Section id="testimonials" className="relative bg-ink-50/70 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Testimonials"
            title="What Students Say"
            subtitle="Real campus problems, fixed between classes."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 100} className="h-full">
              <figure className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-200/80 bg-white p-7 shadow-soft transition-all duration-400 hover:-translate-y-2 hover:shadow-card">
                <span
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${avatarTones[index % avatarTones.length]} opacity-0 transition-opacity duration-400 group-hover:opacity-100`}
                />
                <Quote className="h-8 w-8 shrink-0 rotate-180 text-brand-100 transition-colors duration-400 group-hover:text-accent-100" />

                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-relaxed font-medium text-pretty text-ink-700">
                  “{item.quote}”
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br ${
                      avatarTones[index % avatarTones.length]
                    } text-sm font-bold text-white shadow-md`}
                  >
                    {item.initials}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink-900">{item.name}</p>
                    <p className="text-xs text-ink-400">{item.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}