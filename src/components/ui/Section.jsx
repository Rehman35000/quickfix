export function Container({ className = '', children }) {
  return <div className={`container-page ${className}`}>{children}</div>
}

const alignments = {
  center: 'items-center text-center',
  left: 'items-start text-left',
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  return (
    <div className={`flex flex-col ${alignments[align]} ${className}`}>
      {eyebrow ? (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-brand-700 uppercase ring-1 ring-brand-100">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl leading-[1.12] font-extrabold text-balance sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-pretty text-ink-500 sm:text-[1.0625rem]">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      {children}
    </section>
  )
}