export function Badge({ tone = 'brand', dot = false, className = '', children }) {
  const tones = {
    brand: 'bg-brand-50 text-brand-700 ring-brand-600/15',
    accent: 'bg-accent-50 text-accent-700 ring-accent-600/15',
    emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-600/15',
    amber: 'bg-amber-50 text-amber-700 ring-amber-600/15',
    slate: 'bg-slate-100 text-slate-600 ring-slate-500/15',
    white: 'bg-white/90 text-ink-700 ring-ink-200 backdrop-blur',
  }

  const dots = {
    brand: 'bg-brand-500',
    accent: 'bg-accent-500',
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
    slate: 'bg-slate-400',
    white: 'bg-brand-500',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${tones[tone]} ${className}`}
    >
      {dot ? <span className={`h-1.5 w-1.5 rounded-full ${dots[tone]}`} /> : null}
      {children}
    </span>
  )
}

export function StatusBadge({ status, className = '' }) {
  const map = {
    Completed: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
    Delivered: 'bg-brand-50 text-brand-700 ring-brand-600/20',
    'In Progress': 'bg-amber-50 text-amber-700 ring-amber-600/20',
    Pending: 'bg-slate-100 text-slate-600 ring-slate-500/20',
  }

  const dots = {
    Completed: 'bg-emerald-500',
    Delivered: 'bg-brand-500',
    'In Progress': 'bg-amber-500',
    Pending: 'bg-slate-400',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${
        map[status] ?? map.Pending
      } ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dots[status] ?? dots.Pending}`} />
      {status}
    </span>
  )
}