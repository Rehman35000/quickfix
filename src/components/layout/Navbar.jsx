import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '../../data/nav'
import { Button } from '../ui/Button'
import { Logo } from './Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-200/70 glass shadow-[0_8px_30px_-18px_rgb(15_23_42/0.35)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Main"
        className="container-page flex h-[4.5rem] items-center justify-between gap-4 lg:h-20"
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-[0.9375rem] font-semibold transition-colors duration-300 ${
                    isActive ? 'text-brand-700' : 'text-ink-600 hover:text-ink-900'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-brand-600 to-accent-500 transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-2.5 lg:flex">
          <Button as="a" href="#order" variant="ghost" size="sm">
            Login
          </Button>
          <Button as="a" href="#order" size="sm" rightIcon={ArrowRight}>
            Get Started
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-xl bg-ink-100 text-ink-800 ring-1 ring-ink-200 transition hover:bg-ink-200 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink-900/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`glass absolute inset-x-0 top-[4.5rem] origin-top rounded-b-3xl border-b border-ink-200/70 px-5 pt-2 pb-7 shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <ul className="flex flex-col">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${index * 45}ms` : '0ms' }}
                  className={`flex items-center justify-between border-b border-ink-100 py-4 font-display text-lg font-bold text-ink-800 transition-all duration-300 hover:text-brand-700 ${
                    open ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0'
                  }`}
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 text-ink-300" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button
              as="a"
              href="#order"
              variant="secondary"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              Login
            </Button>
            <Button
              as="a"
              href="#order"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              rightIcon={ArrowRight}
            >
              Get Started
            </Button>
          </div>

          <p className="mt-5 text-center text-xs font-medium text-ink-400">
            Your Campus. Your Needs. Fixed Fast.
          </p>
        </div>
      </div>
    </header>
  )
}