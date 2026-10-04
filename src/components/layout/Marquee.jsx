import { Bike, BookOpen, Coffee, FileCheck, Pencil, Printer, BatteryCharging } from 'lucide-react'

const items = [
  { label: 'Printing & Photocopying', Icon: Printer },
  { label: 'Assignment Binding', Icon: BookOpen },
  { label: 'Emergency Stationery', Icon: Pencil },
  { label: 'Charging Assistance', Icon: BatteryCharging },
  { label: 'Document Submission', Icon: FileCheck },
  { label: 'Snacks & Essentials', Icon: Coffee },
  { label: 'Campus Deliveries', Icon: Bike },
]

export function Marquee() {
  const loop = [...items, ...items]

  return (
    <div className="relative border-y border-ink-200/70 bg-white py-4">
      <div className="mask-fade-x flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {loop.map(({ label, Icon }, index) => (
            <span
              key={`${label}-${index}`}
              className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-sm font-semibold text-ink-500"
            >
              <Icon className="h-4 w-4 text-brand-500" />
              {label}
              <span className="ml-8 h-1.5 w-1.5 rounded-full bg-accent-300" />
            </span>
          ))}
        </div>
        <div aria-hidden="true" className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {loop.map(({ label, Icon }, index) => (
            <span
              key={`dup-${label}-${index}`}
              className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-sm font-semibold text-ink-500"
            >
              <Icon className="h-4 w-4 text-brand-500" />
              {label}
              <span className="ml-8 h-1.5 w-1.5 rounded-full bg-accent-300" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}