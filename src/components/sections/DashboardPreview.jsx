import { ArrowUpRight, Bell, ChevronRight, Ellipsis, TrendingUp } from 'lucide-react'
import { dashboardStats, recentOrders } from '../../data/content'
import { iconMap } from '../../lib/icons'
import { StatusBadge } from '../ui/Badge'
import { Container, Section, SectionHeader } from '../ui/Section'
import { Reveal } from '../ui/Reveal'

const statTones = [
  { ring: 'ring-brand-100', tile: 'bg-brand-50 text-brand-600', bar: 'bg-brand-500' },
  { ring: 'ring-emerald-100', tile: 'bg-emerald-50 text-emerald-600', bar: 'bg-emerald-500' },
  { ring: 'ring-accent-100', tile: 'bg-accent-50 text-accent-600', bar: 'bg-accent-500' },
  { ring: 'ring-amber-100', tile: 'bg-amber-50 text-amber-600', bar: 'bg-amber-500' },
]

function StatCard({ stat, index }) {
  const Icon = iconMap[stat.icon]
  const tone = statTones[index % statTones.length]

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-ink-200/80 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <span className={`absolute inset-x-0 top-0 h-1 ${tone.bar} opacity-70`} />
      <div className="flex items-center justify-between">
        <span className={`grid h-8 w-8 place-items-center rounded-xl ${tone.tile}`}>
          <Icon className="h-4 w-4" />
        </span>
        <span className="text-[0.625rem] font-bold tracking-wide text-emerald-600 uppercase">
          {stat.trend}
        </span>
      </div>
      <p className="mt-3 font-display text-xl leading-none font-extrabold text-ink-900">
        {stat.value}
      </p>
      <p className="mt-1.5 text-xs font-semibold text-ink-600">{stat.label}</p>
      <p className="mt-0.5 text-[0.6875rem] text-ink-400">{stat.note}</p>
    </div>
  )
}

function OrderRow({ order }) {
  const Icon = iconMap[order.icon]

  return (
    <li className="flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-ink-50/80 sm:px-5">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink-100 text-ink-600">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <p className="truncate text-sm font-bold text-ink-900">{order.service}</p>
          <StatusBadge status={order.status} />
        </div>
        <p className="mt-0.5 truncate text-xs text-ink-400">
          {order.id} Â· {order.detail} Â· {order.when}
        </p>
      </div>
      <span className="shrink-0 text-sm font-bold text-ink-800">{order.amount}</span>
      <ChevronRight className="hidden h-4 w-4 shrink-0 text-ink-300 sm:block" />
    </li>
  )
}

export function DashboardPreview() {
  return (
    <Section id="dashboard" className="relative overflow-hidden bg-ink-50/70 py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Student Dashboard"
            title="Your Campus Tasks, All in One Place"
            subtitle="Track every request, see what you saved and manage your QuickFix activity."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-14 lg:mt-16">
            <div className="pointer-events-none absolute -top-8 left-1/2 h-64 w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-200/40 to-accent-200/40 blur-3xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-ink-200/80 bg-white shadow-card sm:rounded-[2rem]">
              {/* window chrome */}
              <div className="flex items-center gap-3 border-b border-ink-100 bg-ink-50/70 px-4 py-3 sm:px-6">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="hidden flex-1 truncate rounded-lg bg-white px-3 py-1 text-[0.6875rem] font-medium text-ink-400 ring-1 ring-ink-200 sm:block">
                  campusquickfix.app/dashboard
                </span>
                <div className="ml-auto flex items-center gap-2">
                  <span className="relative grid h-7 w-7 place-items-center rounded-lg bg-white text-ink-500 ring-1 ring-ink-200">
                    <Bell className="h-3.5 w-3.5" />
                    <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-rose-500" />
                  </span>
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-600 text-[0.55rem] font-bold text-white">
                    SK
                  </span>
                </div>
              </div>

              <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[1fr_0.62fr]">
                {/* main column */}
                <div className="flex flex-col gap-5">
                  {/* welcome bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-bold text-ink-900">
                        Welcome back, Sara
                      </h3>
                      <p className="text-xs text-ink-400">Semester 5 Â· Computer Science</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 ring-1 ring-emerald-600/20">
                      <TrendingUp className="h-3.5 w-3.5" />
                      18% saved this month
                    </span>
                  </div>

                  {/* stats */}
                  <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {dashboardStats.map((stat, index) => (
                      <StatCard key={stat.label} stat={stat} index={index} />
                    ))}
                  </div>

                  {/* orders table */}
                  <div className="overflow-hidden rounded-2xl border border-ink-200/80 bg-white">
                    <div className="flex items-center justify-between border-b border-ink-100 px-4 py-3.5 sm:px-5">
                      <h4 className="font-display text-sm font-bold text-ink-900">Recent Orders</h4>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 transition hover:text-brand-700"
                      >
                        View all <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <ul className="divide-y divide-ink-100">
                      {recentOrders.map((order) => (
                        <OrderRow key={order.id} order={order} />
                      ))}
                    </ul>
                  </div>
                </div>

                {/* side column */}
                <div className="flex flex-col gap-5">
                  {/* points card */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ink-900 via-brand-900 to-accent-900 p-5 text-white">
                    <span className="absolute -top-10 -right-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <p className="text-[0.6875rem] font-bold tracking-[0.14em] text-white/60 uppercase">
                          QuickFix Points
                        </p>
                        <Ellipsis className="h-4 w-4 text-white/40" />
                      </div>
                      <p className="mt-2 font-display text-3xl font-extrabold">860</p>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/15">
                        <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-brand-400 to-accent-400" />
                      </div>
                      <p className="mt-2 text-[0.6875rem] text-white/70">
                        140 points to a free printing voucher
                      </p>
                    </div>
                  </div>

                  {/* active request */}
                  <div className="rounded-2xl border border-ink-200/80 bg-white p-5 shadow-soft">
                    <div className="flex items-center justify-between">
                      <h4 className="font-display text-sm font-bold text-ink-900">Active Request</h4>
                      <span className="flex items-center gap-1.5 text-[0.625rem] font-bold text-amber-600">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                        LIVE
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-600 text-xs font-bold text-white">
                        AH
                        <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-ink-900">Ahmed R.</p>
                        <p className="text-[0.6875rem] text-ink-400">QuickFixer Â· â˜… 4.9</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2.5">
                      {[
                        { label: 'Assignment Binding', value: 'In Progress' },
                        { label: 'Library pickup', value: 'Main Library' },
                        { label: 'Estimated finish', value: '12:25 PM' },
                      ].map((row) => (
                        <div
                          key={row.label}
                          className="flex items-center justify-between text-xs last:mb-0"
                        >
                          <span className="text-ink-400">{row.label}</span>
                          <span className="font-bold text-ink-800">{row.value}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="mt-4 w-full rounded-xl bg-ink-900 py-2.5 text-xs font-bold text-white transition hover:bg-ink-800"
                    >
                      Track QuickFixer
                    </button>
                  </div>

                  {/* reward strip */}
                  <div className="rounded-2xl border border-dashed border-brand-200 bg-brand-50/60 p-4">
                    <p className="text-xs leading-relaxed font-medium text-brand-800">
                      <span className="font-bold">Refer a classmate</span> and you both get 100 QuickFix
                      points when their first order is completed.
                    </p>
                  </div>
                </div>
              </div>

              {/* preview note */}
              <p className="border-t border-ink-100 bg-ink-50/60 px-5 py-3 text-center text-[0.6875rem] font-medium text-ink-400">
                Frontend preview only â€” sample data, no live orders.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}