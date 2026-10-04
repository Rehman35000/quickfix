import { Mail, MapPin, Phone } from 'lucide-react'
import { footerLinks, footerServiceLinks } from '../../data/content'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../../lib/brandIcons'
import { Button } from '../ui/Button'
import { useDialogs } from '../ui/dialogStore'
import { Container } from '../ui/Section'
import { Logo } from './Logo'

const socials = [
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://instagram.com' },
  { label: 'Facebook', Icon: FacebookIcon, href: 'https://facebook.com' },
  { label: 'LinkedIn', Icon: LinkedinIcon, href: 'https://linkedin.com' },
]

export function Footer() {
  const { openDialog } = useDialogs()

  return (
    <footer className="relative overflow-hidden bg-ink-950 pt-16 pb-8 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgb(37_99_235/0.22),transparent_50%),radial-gradient(circle_at_85%_10%,rgb(124_58_237/0.2),transparent_50%)]" />
        <div className="surface-grid absolute inset-0 opacity-[0.08]" />
      </div>

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* brand */}
          <div>
            <div className="inline-flex rounded-2xl bg-white px-3 py-2.5">
              <Logo />
            </div>
            <p className="mt-5 font-display text-lg font-bold text-white">
              Your Campus. Your Needs. Fixed Fast.
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
              The on-campus delivery and quick-service platform built by students, for students.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.07] text-white/70 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-brand-700 hover:ring-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* nav links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-display text-sm font-bold tracking-wide text-white">Explore</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-brand-400 transition-all duration-300 group-hover:w-3.5" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* service links */}
          <nav aria-label="Footer services">
            <h3 className="font-display text-sm font-bold tracking-wide text-white">Services</h3>
            <ul className="mt-5 space-y-3">
              {footerServiceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-accent-400 transition-all duration-300 group-hover:w-3.5" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact + newsletter */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-wide text-white">
              Get campus updates
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Occasional updates on new services, campus launches and QuickFixer rewards.
            </p>

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email address"
                className="h-11 w-full rounded-xl border border-white/12 bg-white/[0.06] px-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-brand-400 focus:bg-white/10"
              />
              <Button size="sm" className="shrink-0" onClick={() => openDialog('subscribe')}>
                Subscribe
              </Button>
            </div>

            <ul className="mt-7 space-y-3">
              <li>
                <a
                  href="mailto:hello@campusquickfix.app"
                  className="inline-flex items-center gap-2.5 text-sm text-white/55 transition hover:text-white"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.07] ring-1 ring-white/10">
                    <Mail className="h-4 w-4" />
                  </span>
                  hello@campusquickfix.app
                </a>
              </li>
              <li>
                <a
                  href="tel:+92000000000"
                  className="inline-flex items-center gap-2.5 text-sm text-white/55 transition hover:text-white"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.07] ring-1 ring-white/10">
                    <Phone className="h-4 w-4" />
                  </span>
                  +92 300 0000000
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/55">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/[0.07] ring-1 ring-white/10">
                  <MapPin className="h-4 w-4" />
                </span>
                Student Affairs Block, Northfield University
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-white/40">
            Â© 2026 Campus QuickFix. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <button
              type="button"
              onClick={() => openDialog('legal')}
              className="transition hover:text-white/80"
            >
              Privacy
            </button>
            <button
              type="button"
              onClick={() => openDialog('legal')}
              className="transition hover:text-white/80"
            >
              Terms
            </button>
            <span className="hidden sm:inline">Made with care for students</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}