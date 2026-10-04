import { CircleCheckBig, LoaderCircle, MapPin, Search, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { campusLocations, serviceOptions, timeSlots } from '../../data/services'
import { Button } from '../ui/Button'
import { Field, FormNotice, Select, TextArea, TextInput } from '../ui/Field'
import { Container, Section } from '../ui/Section'
import { Reveal } from '../ui/Reveal'
import { useDialogs } from '../ui/dialogStore'

const emptyForm = {
  service: '',
  name: '',
  location: '',
  description: '',
  time: '',
}

function validate(form) {
  const errors = {}

  if (!form.service) errors.service = 'Choose the service you need.'
  if (!form.name.trim()) {
    errors.name = 'Enter your name so the QuickFixer can reach you.'
  } else if (form.name.trim().length < 3) {
    errors.name = 'Name should be at least 3 characters.'
  }
  if (!form.location) {
    errors.location = 'Add a pickup or delivery location.'
  }
  if (!form.description.trim()) {
    errors.description = 'Tell us briefly what needs fixing.'
  } else if (form.description.trim().length < 10) {
    errors.description = 'Add a little more detail (at least 10 characters).'
  }
  if (!form.time) errors.time = 'Choose your preferred time.'

  return errors
}

export function QuickOrder() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const { openDialog } = useDialogs()

  const update = (key) => (event) => {
    const value = event.target.value
    setForm((current) => ({ ...current, [key]: value }))
    setErrors((current) => (current[key] ? { ...current, [key]: undefined } : current))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0]
      document.getElementById(`order-${firstKey}`)?.focus()
      return
    }

    setStatus('matching')
    window.setTimeout(() => {
      setStatus('idle')
      setForm(emptyForm)
      openDialog('order-success', form)
    }, 1500)
  }

  return (
    <Section id="order" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent" />
        <div className="absolute top-24 -left-24 h-80 w-80 rounded-full bg-accent-100/60 blur-3xl" />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* left copy */}
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-accent-700 uppercase ring-1 ring-accent-100">
                <Sparkles className="h-3.5 w-3.5" />
                Quick Order
              </span>
              <h2 className="mt-5 text-3xl leading-[1.12] font-extrabold sm:text-4xl lg:text-[2.75rem]">
                Need Something <span className="text-gradient">Quickly?</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-500">
                Tell us what you need and where you are. We&apos;ll find the closest available
                QuickFixer on campus.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  { title: 'Average response under 3 minutes', hint: 'Matched with a nearby student worker' },
                  { title: 'Transparent service fee upfront', hint: 'Know the price before the task starts' },
                  { title: 'Pay online or in cash', hint: 'Whatever is easiest for you on campus' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <div>
                      <p className="text-sm font-semibold text-ink-800">{item.title}</p>
                      <p className="mt-0.5 text-xs text-ink-400">{item.hint}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 hidden items-center gap-3 rounded-2xl bg-ink-50 p-4 ring-1 ring-ink-200 lg:flex">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand-600 shadow-sm">
                  <MapPin className="h-5 w-5" />
                </span>
                <p className="text-xs leading-relaxed font-medium text-ink-500">
                  Currently serving <span className="font-bold text-ink-800">Northfield University</span>{' '}
                  campus with 18 active QuickFixers.
                </p>
              </div>
            </Reveal>
          </div>

          {/* form card */}
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl border border-ink-200/80 bg-white p-6 shadow-card sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 via-accent-500 to-brand-500" />

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div>
                  <h3 className="font-display text-xl font-bold text-ink-900">
                    Place your QuickFix request
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-500">
                    Takes less than a minute. No account needed.
                  </p>
                </div>

                <Field label="Service" name="order-service" error={errors.service}>
                  <Select id="order-service" value={form.service} onChange={update('service')} error={errors.service}>
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Student Name" name="order-name" error={errors.name}>
                    <TextInput
                      id="order-name"
                      placeholder="e.g. Sara Khan"
                      value={form.name}
                      onChange={update('name')}
                      error={errors.name}
                      autoComplete="name"
                    />
                  </Field>

                  <Field label="Pickup / Delivery Location" name="order-location" error={errors.location}>
                    <Select
                      id="order-location"
                      value={form.location}
                      onChange={update('location')}
                      error={errors.location}
                    >
                      <option value="">Select a location</option>
                      {campusLocations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </Select>
                  </Field>
                </div>

                <Field
                  label="Description"
                  name="order-description"
                  error={errors.description}
                  hint="Pages, quantity, deadline or anything the QuickFixer should know."
                >
                  <TextArea
                    id="order-description"
                    rows={4}
                    placeholder="e.g. Print 40 pages single-sided and spiral bind 2 copies before my 2 PM class."
                    value={form.description}
                    onChange={update('description')}
                    error={errors.description}
                  />
                </Field>

                <Field label="Preferred Time" name="order-time" error={errors.time}>
                  <Select id="order-time" value={form.time} onChange={update('time')} error={errors.time}>
                    <option value="">Select a time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </Select>
                </Field>

                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  disabled={status === 'matching'}
                  leftIcon={status === 'matching' ? undefined : Search}
                >
                  {status === 'matching' ? (
                    <span className="inline-flex items-center gap-2">
                      <LoaderCircle className="h-4 w-4 animate-spin" /> Finding a nearby QuickFixerâ€¦
                    </span>
                  ) : (
                    'Find a QuickFixer'
                  )}
                </Button>

                <FormNotice>
                  <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-500" />
                  <span>
                    This is a frontend demo. No request is sent, no payment is taken and no data is
                    stored.
                  </span>
                </FormNotice>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}