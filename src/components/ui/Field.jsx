import { CircleAlert, CircleCheckBig, ChevronDown } from 'lucide-react'

const controlBase =
  'w-full rounded-2xl border bg-white px-4 text-[0.95rem] text-ink-900 shadow-sm transition-all duration-200 outline-none placeholder:text-ink-400'

function controlTone(hasError, focused) {
  if (hasError) return 'border-rose-300 bg-rose-50/40 focus:border-rose-400 focus:ring-4 focus:ring-rose-100'
  if (focused) return 'border-brand-400 ring-4 ring-brand-100'
  return 'border-ink-200 hover:border-ink-300 focus:border-brand-400 focus:ring-4 focus:ring-brand-100'
}

export function Field({ label, name, error, hint, children, className = '' }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label ? (
        <label
          htmlFor={name}
          className="mb-2 text-sm font-semibold tracking-tight text-ink-700"
        >
          {label}
        </label>
      ) : null}
      {children}
      {error ? (
        <p
          id={name ? `${name}-error` : undefined}
          className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600"
        >
          <CircleAlert className="h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-ink-400">{hint}</p>
      ) : null}
    </div>
  )
}

export function TextInput({ error, className = '', ...props }) {
  return (
    <input
      aria-invalid={Boolean(error)}
      className={`${controlBase} ${controlTone(error, false)} h-12 ${className}`}
      {...props}
    />
  )
}

export function TextArea({ error, className = '', ...props }) {
  return (
    <textarea
      aria-invalid={Boolean(error)}
      className={`${controlBase} ${controlTone(error, false)} resize-y py-3 leading-relaxed ${className}`}
      {...props}
    />
  )
}

export function Select({ error, className = '', children, ...props }) {
  return (
    <div className="relative">
      <select
        aria-invalid={Boolean(error)}
        className={`${controlBase} ${controlTone(error, false)} h-12 cursor-pointer appearance-none pr-11 font-medium ${
          props.value ? 'text-ink-900' : 'text-ink-400'
        } ${className}`}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-ink-400" />
    </div>
  )
}

export function FormSuccess({ children }) {
  return (
    <div className="flex items-start gap-2.5 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800 ring-1 ring-emerald-600/15">
      <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0" />
      {children}
    </div>
  )
}

export function FormNotice({ children }) {
  return (
    <p className="flex items-start gap-2 rounded-2xl bg-ink-50 px-4 py-3 text-xs leading-relaxed text-ink-500 ring-1 ring-ink-200">
      {children}
    </p>
  )
}