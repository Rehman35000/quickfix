export function LogoMark({ className = 'h-10 w-10' }) {
  return (
    <span
      className={`relative grid shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 via-brand-600 to-accent-600 shadow-[0_10px_24px_-10px_rgb(37_99_235/0.8)] ${className}`}
    >
      <span className="absolute -top-6 -right-5 h-10 w-10 rounded-full bg-white/20 blur-md" />
      <svg
        viewBox="0 0 24 24"
        className="relative h-[1.15em] w-[1.15em] text-white"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13.6 2 5.4 12.9h4.3l-1.4 8.9L17.6 10.4h-4.5L13.6 2Z" />
      </svg>
    </span>
  )
}

export function Logo({ compact = false, className = '' }) {
  return (
    <a
      href="#home"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="Campus QuickFix — home"
    >
      <LogoMark className={`${compact ? 'h-9 w-9 rounded-xl' : 'h-10 w-10'}`} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.0625rem] font-extrabold tracking-tight text-ink-900 sm:text-lg">
          Campus<span className="text-gradient">QuickFix</span>
        </span>
        {!compact ? (
          <span className="mt-1 hidden text-[0.625rem] font-semibold tracking-[0.16em] text-ink-400 uppercase sm:block">
            Quick Campus Services
          </span>
        ) : null}
      </span>
    </a>
  )
}