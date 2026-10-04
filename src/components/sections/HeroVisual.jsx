import {
  BatteryCharging,
  Bike,
  BookOpen,
  Check,
  Coffee,
  FileCheck,
  MapPin,
  Navigation,
  Pencil,
  Printer,
  Star,
} from 'lucide-react'

const screenServices = [
  { label: 'Printing', price: 'Rs. 50', Icon: Printer, tone: 'from-brand-500 to-brand-600' },
  { label: 'Binding', price: 'Rs. 80', Icon: BookOpen, tone: 'from-accent-500 to-accent-600' },
  { label: 'Stationery', price: 'Rs. 40', Icon: Pencil, tone: 'from-amber-500 to-amber-600' },
  { label: 'Charging', price: 'Rs. 50', Icon: BatteryCharging, tone: 'from-emerald-500 to-emerald-600' },
  { label: 'Submit docs', price: 'Rs. 70', Icon: FileCheck, tone: 'from-violet-500 to-violet-600' },
  { label: 'Snacks', price: 'Rs. 60', Icon: Coffee, tone: 'from-rose-500 to-rose-600' },
  { label: 'Deliveries', price: 'Rs. 90', Icon: Bike, tone: 'from-cyan-500 to-cyan-600' },
]

function PhoneScreen() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-ink-50 via-white to-brand-50 px-4 pt-5 pb-6">
      {/* status bar */}
      <div className="flex items-center justify-between px-1">
        <span className="text-[0.6rem] font-bold tracking-wide text-ink-500">9:41</span>
        <div className="flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-ink-300" />
          <span className="h-1 w-1 rounded-full bg-ink-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </div>
      </div>

      {/* app header */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-600">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-white" fill="currentColor">
              <path d="M13.6 2 5.4 12.9h4.3l-1.4 8.9L17.6 10.4h-4.5L13.6 2Z" />
            </svg>
          </span>
          <span className="font-display text-xs font-extrabold text-ink-900">QuickFix</span>
        </div>
        <span className="grid h-6 w-6 place-items-center rounded-full bg-ink-100 text-[0.55rem] font-bold text-ink-500">
          SK
        </span>
      </div>

      {/* greeting */}
      <p className="mt-4 font-display text-[0.95rem] leading-tight font-extrabold text-ink-900">
        Hi Sarah, what needs
        <br />
        fixing today?
      </p>

      {/* live request card */}
      <div className="mt-3 rounded-2xl bg-gradient-to-br from-brand-600 to-accent-600 p-3 text-white shadow-lg shadow-brand-600/25">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[0.55rem] font-bold tracking-wide uppercase">
            Live request
          </span>
          <span className="flex items-center gap-1 text-[0.55rem] font-semibold text-white/90">
            <Navigation className="h-2.5 w-2.5" /> 2 min away
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/15">
            <Printer className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[0.7rem] font-bold">40 pages printing</p>
            <p className="text-[0.55rem] text-white/80">Block A Library · Ahmed</p>
          </div>
        </div>
        <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/25">
          <div className="h-full w-[72%] rounded-full bg-white" />
        </div>
      </div>

      {/* service grid */}
      <p className="mt-4 text-[0.6rem] font-bold tracking-[0.14em] text-ink-400 uppercase">
        Quick services
      </p>
      <div className="mt-2.5 grid grid-cols-3 gap-2">
        {screenServices.map(({ label, price, Icon, tone }) => (
          <div
            key={label}
            className="rounded-xl border border-ink-100 bg-white p-2 shadow-[0_2px_8px_-4px_rgb(15_23_42/0.2)] transition hover:-translate-y-0.5"
          >
            <span
              className={`grid h-6 w-6 place-items-center rounded-lg bg-gradient-to-br ${tone} text-white`}
            >
              <Icon className="h-3 w-3" />
            </span>
            <p className="mt-1.5 truncate text-[0.6rem] font-bold text-ink-800">{label}</p>
            <p className="text-[0.5rem] font-semibold text-ink-400">{price}</p>
          </div>
        ))}
      </div>

      {/* order button */}
      <div className="absolute inset-x-4 bottom-5 rounded-xl bg-ink-900 py-2.5 text-center text-[0.65rem] font-bold text-white shadow-lg">
        Order a Service
      </div>
    </div>
  )
}

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
      {/* decorative glow */}
      <div className="absolute -top-10 -right-8 h-72 w-72 rounded-full bg-accent-400/25 blur-3xl" />
      <div className="absolute -bottom-12 -left-10 h-72 w-72 rounded-full bg-brand-400/25 blur-3xl" />
      <div className="surface-grid absolute inset-0 -z-10 rounded-[3rem] opacity-60 mask-fade-b" />

      {/* phone */}
      <div className="relative animate-float-slow">
        <div className="relative rounded-[2.75rem] bg-gradient-to-b from-ink-800 to-ink-900 p-2.5 shadow-[0_40px_80px_-28px_rgb(15_23_42/0.55)]">
          <div className="absolute top-5 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink-900" />
          <div className="h-[32rem] w-full sm:h-[34rem]">
            <PhoneScreen />
          </div>
        </div>
      </div>

      {/* floating card: matched */}
      <div className="absolute -top-4 -left-4 w-44 rounded-2xl border border-ink-100 bg-white/95 p-3 shadow-card backdrop-blur sm:-left-10">
        <div className="flex items-center gap-2">
          <span className="relative grid h-8 w-8 place-items-center rounded-full bg-emerald-50 text-emerald-600">
            <Check className="h-4 w-4" />
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-emerald-400/40" />
          </span>
          <div>
            <p className="text-[0.7rem] font-bold text-ink-900">QuickFixer matched</p>
            <p className="text-[0.6rem] font-medium text-ink-400">Ahmed · Block A</p>
          </div>
        </div>
      </div>

      {/* floating card: rating */}
      <div className="absolute top-1/3 -right-3 rounded-2xl border border-ink-100 bg-white/95 px-3.5 py-3 shadow-card backdrop-blur sm:-right-8">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-3 w-3 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="mt-1 text-[0.6rem] font-semibold text-ink-500">4.9 · 1,200+ students</p>
      </div>

      {/* floating card: location */}
      <div className="absolute -bottom-6 right-2 rounded-2xl border border-ink-100 bg-white/95 px-3.5 py-2.5 shadow-card backdrop-blur sm:right-8">
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-brand-600" />
          <div>
            <p className="text-[0.65rem] font-bold text-ink-900">Nearest QuickFixer</p>
            <p className="text-[0.55rem] font-medium text-ink-400">120 m away</p>
          </div>
        </div>
      </div>
    </div>
  )
}