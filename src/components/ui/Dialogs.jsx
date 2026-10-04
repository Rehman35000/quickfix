import { ArrowRight, CircleCheckBig, Info, Lock, LoaderCircle, Rocket, Search } from 'lucide-react'
import { useState } from 'react'
import { services } from '../../data/services'
import { Button } from './Button'
import { useDialogs } from './dialogStore'
import { Field, FormNotice, Select, TextArea, TextInput } from './Field'
import { Modal } from './Modal'

function DialogShell({ name, children, maxWidth = 'max-w-md' }) {
  const { isOpen, closeDialog } = useDialogs()
  return (
    <Modal open={isOpen(name)} onClose={closeDialog} maxWidth={maxWidth}>
      {children}
    </Modal>
  )
}

function DialogHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="border-b border-ink-100 bg-gradient-to-br from-brand-50/70 to-accent-50/50 px-6 py-6 sm:px-7">
      {eyebrow ? (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[0.625rem] font-bold tracking-[0.14em] text-brand-700 uppercase ring-1 ring-brand-100">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-3 font-display text-xl leading-snug font-extrabold text-ink-900">
        {title}
      </h2>
      {subtitle ? <p className="mt-1.5 text-sm text-ink-500">{subtitle}</p> : null}
    </div>
  )
}

function useSubmitState() {
  const [state, setState] = useState('idle')
  const [errors, setErrors] = useState({})

  const validate = (fields) => {
    const next = {}
    Object.entries(fields).forEach(([key, rule]) => {
      const message = rule()
      if (message) next[key] = message
    })
    return next
  }

  const submit = (fields, onDone) => (event) => {
    event.preventDefault()
    const next = validate(fields)
    setErrors(next)
    if (Object.keys(next).length) return
    setState('done')
    window.setTimeout(() => {
      setState('idle')
      onDone?.()
    }, 1600)
  }

  return { state, errors, setErrors, submit }
}

/* ---------------- Order placed success ---------------- */

function OrderSuccessDialog() {
  const { dialog, closeDialog } = useDialogs()
  const service = services.find((item) => item.id === dialog?.payload?.service)
  const data = dialog?.payload ?? {}

  const label = service?.shortName ?? (data.service === 'custom' ? 'Custom request' : 'Campus service')

  return (
    <DialogShell name="order-success" maxWidth="max-w-md">
      <div className="px-6 pt-10 pb-8 text-center sm:px-8">
        <div className="relative mx-auto grid h-20 w-20 place-items-center">
          <span className="absolute inset-0 rounded-full bg-emerald-400/25 animate-pulse-ring" />
          <span className="relative grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/30">
            <CircleCheckBig className="h-10 w-10" />
          </span>
        </div>

        <h2 className="mt-6 font-display text-2xl leading-tight font-extrabold text-ink-900">
          Your QuickFix request has been placed!
        </h2>

        <p className="mt-2 text-sm font-medium text-ink-500">
          Finding a nearby QuickFixerâ€¦
        </p>

        <div className="mt-7 space-y-2.5 rounded-2xl border border-ink-200 bg-ink-50/70 p-4 text-left">
          {[
            { label: 'Service', value: label },
            { label: 'Student', value: data.name || 'â€”' },
            { label: 'Location', value: data.location || 'â€”' },
            { label: 'Preferred time', value: data.time || 'â€”' },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between gap-4 text-xs">
              <span className="shrink-0 text-ink-400">{row.label}</span>
              <span className="truncate text-right font-bold text-ink-800">{row.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-brand-50 px-4 py-3 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
          <LoaderCircle className="h-3.5 w-3.5 animate-spin" />
          Usually matched in under 3 minutes
        </div>

        <Button fullWidth size="lg" className="mt-6" onClick={closeDialog} rightIcon={ArrowRight}>
          Done
        </Button>
      </div>
    </DialogShell>
  )
}

/* ---------------- Service quick order ---------------- */

function ServiceOrderDialog() {
  const { dialog, closeDialog } = useDialogs()
  const service = services.find((item) => item.id === dialog?.payload?.service)
  const isCustom = !service && dialog?.payload?.service === 'custom'

  const [form, setForm] = useState({ location: '', description: '', time: '' })
  const { state, errors, submit } = useSubmitState()

  const update = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }))
  }

  const onDone = () => {
    closeDialog()
    setForm({ location: '', description: '', time: '' })
  }

  const Icon = service?.icon ?? Search

  return (
    <DialogShell name="service" maxWidth="max-w-md">
      {service ? (
        <>
          <div className="flex items-start gap-4 border-b border-ink-100 bg-gradient-to-br from-brand-50/70 to-accent-50/50 px-6 py-6 sm:px-7">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-600 text-white shadow-lg">
              <Icon className="h-6 w-6" />
            </span>
            <div>
              <h2 className="font-display text-lg leading-snug font-extrabold text-ink-900">
                {service.name}
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-ink-500">{service.detail}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="rounded-full bg-white px-2.5 py-0.5 text-[0.6875rem] font-bold text-brand-700 ring-1 ring-brand-100">
                  {service.price}
                </span>
                <span className="rounded-full bg-white px-2.5 py-0.5 text-[0.6875rem] font-bold text-ink-600 ring-1 ring-ink-200">
                  {service.eta}
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={submit(
              {
                location: () => (form.location ? undefined : 'Add a campus location.'),
                description: () =>
                  form.description.trim().length < 5
                    ? 'Add a short description (5+ characters).'
                    : undefined,
              },
              onDone,
            )}
            noValidate
            className="flex flex-col gap-4 px-6 py-6 sm:px-7"
          >
            <Field label="Pickup / Delivery Location" name="svc-location" error={errors.location}>
              <TextInput
                id="svc-location"
                placeholder="e.g. Main Library, 2nd floor"
                value={form.location}
                onChange={update('location')}
                error={errors.location}
              />
            </Field>

            <Field label="Details" name="svc-description" error={errors.description}>
              <TextArea
                id="svc-description"
                rows={3}
                placeholder="Quantity, pages, deadline or anything else."
                value={form.description}
                onChange={update('description')}
                error={errors.description}
              />
            </Field>

            <Button
              type="submit"
              size="lg"
              fullWidth
              disabled={state === 'done'}
              leftIcon={state === 'done' ? undefined : Rocket}
            >
              {state === 'done' ? (
                <span className="inline-flex items-center gap-2">
                  <LoaderCircle className="h-4 w-4 animate-spin" /> Placing requestâ€¦
                </span>
              ) : (
                'QuickFix Now'
              )}
            </Button>
          </form>
        </>
      ) : null}

      {isCustom ? (
        <>
          <DialogHeader
            eyebrow="Custom Request"
            title="Request a Custom Campus Task"
            subtitle="Describe it and we'll match you with the right QuickFixer."
          />
          <form
            onSubmit={submit(
              {
                location: () => (form.location ? undefined : 'Add a campus location.'),
                description: () =>
                  form.description.trim().length < 10
                    ? 'Describe the task in at least 10 characters.'
                    : undefined,
              },
              onDone,
            )}
            noValidate
            className="flex flex-col gap-4 px-6 py-6 sm:px-7"
          >
            <Field label="Pickup / Delivery Location" name="custom-location" error={errors.location}>
              <TextInput
                id="custom-location"
                placeholder="e.g. Engineering Block, Lab 3"
                value={form.location}
                onChange={update('location')}
                error={errors.location}
              />
            </Field>
            <Field label="What needs doing?" name="custom-description" error={errors.description}>
              <TextArea
                id="custom-description"
                rows={4}
                placeholder="Pick up my lab coat from Block C and drop it at the sports office."
                value={form.description}
                onChange={update('description')}
                error={errors.description}
              />
            </Field>
            <Button
              type="submit"
              size="lg"
              fullWidth
              disabled={state === 'done'}
              leftIcon={state === 'done' ? undefined : Rocket}
            >
              {state === 'done' ? (
                <span className="inline-flex items-center gap-2">
                  <LoaderCircle className="h-4 w-4 animate-spin" /> Sendingâ€¦
                </span>
              ) : (
                'Send Custom Request'
              )}
            </Button>
          </form>
        </>
      ) : null}
    </DialogShell>
  )
}

/* ---------------- Login ---------------- */

function LoginDialog() {
  const { closeDialog } = useDialogs()
  const [form, setForm] = useState({ identifier: '', password: '' })
  const { state, errors, submit } = useSubmitState()

  const update = (key) => (event) => setForm((c) => ({ ...c, [key]: event.target.value }))

  return (
    <DialogShell name="login">
      <DialogHeader
        eyebrow="Welcome back"
        title="Log in to Campus QuickFix"
        subtitle="Track orders, earn points and manage your QuickFixer profile."
      />
      <form
        onSubmit={submit(
          {
            identifier: () =>
              form.identifier.trim().length < 4
                ? 'Enter a valid email or campus ID.'
                : undefined,
            password: () => (form.password.length < 6 ? 'Password must be 6+ characters.' : undefined),
          },
          closeDialog,
        )}
        noValidate
        className="flex flex-col gap-4 px-6 py-6 sm:px-7"
      >
        <Field label="Email or Campus ID" name="login-identifier" error={errors.identifier}>
          <TextInput
            id="login-identifier"
            placeholder="you@university.edu"
            value={form.identifier}
            onChange={update('identifier')}
            error={errors.identifier}
            autoComplete="username"
          />
        </Field>

        <Field label="Password" name="login-password" error={errors.password}>
          <TextInput
            id="login-password"
            type="password"
            placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
            value={form.password}
            onChange={update('password')}
            error={errors.password}
            autoComplete="current-password"
          />
        </Field>

        <div className="flex items-center justify-between text-xs">
          <label className="inline-flex cursor-pointer items-center gap-2 font-medium text-ink-500">
            <input type="checkbox" className="h-4 w-4 rounded border-ink-300 accent-brand-600" />
            Keep me signed in
          </label>
          <button type="button" className="font-bold text-brand-600 hover:text-brand-700">
            Forgot password?
          </button>
        </div>

        <Button
          type="submit"
          size="lg"
          fullWidth
          disabled={state === 'done'}
          leftIcon={state === 'done' ? undefined : Lock}
        >
          {state === 'done' ? (
            <span className="inline-flex items-center gap-2">
              <LoaderCircle className="h-4 w-4 animate-spin" /> Signing inâ€¦
            </span>
          ) : (
            'Log In'
          )}
        </Button>

        <FormNotice>
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <span>
            Demo interface â€” no authentication logic, accounts or sessions exist in this frontend
            build.
          </span>
        </FormNotice>

        <p className="text-center text-xs text-ink-500">
          New to QuickFix?{' '}
          <span className="font-bold text-brand-600">Create a student account</span>
        </p>
      </form>
    </DialogShell>
  )
}

/* ---------------- Get started ---------------- */

function GetStartedDialog() {
  const { closeDialog, openDialog } = useDialogs()
  const [form, setForm] = useState({ name: '', email: '', campus: '', role: 'student' })
  const { state, errors, submit } = useSubmitState()

  const update = (key) => (event) => setForm((c) => ({ ...c, [key]: event.target.value }))

  return (
    <DialogShell name="get-started" maxWidth="max-w-md">
      <DialogHeader
        eyebrow="Get Started"
        title="Create your QuickFix account"
        subtitle="Order services, track progress and collect QuickFix Points."
      />
      <form
        onSubmit={submit(
          {
            name: () => (form.name.trim().length < 3 ? 'Enter your full name.' : undefined),
            email: () =>
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? undefined : 'Enter a valid email.',
            campus: () => (form.campus ? undefined : 'Choose your campus.'),
          },
          closeDialog,
        )}
        noValidate
        className="flex flex-col gap-4 px-6 py-6 sm:px-7"
      >
        <Field label="Full Name" name="gs-name" error={errors.name}>
          <TextInput
            id="gs-name"
            placeholder="e.g. Sara Khan"
            value={form.name}
            onChange={update('name')}
            error={errors.name}
          />
        </Field>

        <Field label="Campus Email" name="gs-email" error={errors.email}>
          <TextInput
            id="gs-email"
            type="email"
            placeholder="you@university.edu"
            value={form.email}
            onChange={update('email')}
            error={errors.email}
          />
        </Field>

        <Field label="Campus" name="gs-campus" error={errors.campus}>
          <Select
            id="gs-campus"
            value={form.campus}
            onChange={update('campus')}
            error={errors.campus}
          >
            <option value="">Select your campus</option>
            <option value="northfield">Northfield University</option>
            <option value="riverside">Riverside Institute of Technology</option>
            <option value="other">Other campus</option>
          </Select>
        </Field>

        <Field label="I want to" name="gs-role">
          <Select id="gs-role" value={form.role} onChange={update('role')}>
            <option value="student">Order campus services</option>
            <option value="quickfixer">Earn as a QuickFixer</option>
            <option value="partner">Partner as a campus business</option>
          </Select>
        </Field>

        <Button
          type="submit"
          size="lg"
          fullWidth
          disabled={state === 'done'}
          rightIcon={state === 'done' ? undefined : ArrowRight}
        >
          {state === 'done' ? (
            <span className="inline-flex items-center gap-2">
              <LoaderCircle className="h-4 w-4 animate-spin" /> Creating accountâ€¦
            </span>
          ) : (
            'Create Account'
          )}
        </Button>

        <FormNotice>
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <span>
            Frontend-only demo. Nothing is submitted, stored or verified.{' '}
            <button
              type="button"
              onClick={() => openDialog('quickfixer')}
              className="font-bold text-brand-600 underline underline-offset-2"
            >
              Apply as a QuickFixer
            </button>
          </span>
        </FormNotice>
      </form>
    </DialogShell>
  )
}

/* ---------------- Become a QuickFixer ---------------- */

function QuickFixerApplyDialog() {
  const { closeDialog } = useDialogs()
  const [form, setForm] = useState({ name: '', id: '', skills: '', hours: '' })
  const { state, errors, submit } = useSubmitState()

  const update = (key) => (event) => setForm((c) => ({ ...c, [key]: event.target.value }))

  const perks = [
    'Set your own availability windows',
    'Choose the services you want to handle',
    'Paid weekly, directly on campus',
  ]

  return (
    <DialogShell name="quickfixer" maxWidth="max-w-lg">
      <DialogHeader
        eyebrow="QuickFixer Program"
        title="Become a QuickFixer"
        subtitle="Earn between classes by handling small campus tasks for fellow students."
      />
      <form
        onSubmit={submit(
          {
            name: () => (form.name.trim().length < 3 ? 'Enter your full name.' : undefined),
            id: () => (form.id.trim().length < 4 ? 'Enter your campus ID.' : undefined),
            skills: () => (form.skills ? undefined : 'Choose a primary skill.'),
            hours: () => (form.hours ? undefined : 'Choose when you are available.'),
          },
          closeDialog,
        )}
        noValidate
        className="flex flex-col gap-4 px-6 py-6 sm:px-7"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full Name" name="qf-name" error={errors.name}>
            <TextInput
              id="qf-name"
              placeholder="e.g. Hamza Ali"
              value={form.name}
              onChange={update('name')}
              error={errors.name}
            />
          </Field>
          <Field label="Campus ID" name="qf-id" error={errors.id}>
            <TextInput
              id="qf-id"
              placeholder="e.g. NU-2021-4471"
              value={form.id}
              onChange={update('id')}
              error={errors.id}
            />
          </Field>
        </div>

        <Field label="Primary Skill" name="qf-skills" error={errors.skills}>
          <Select id="qf-skills" value={form.skills} onChange={update('skills')} error={errors.skills}>
            <option value="">Select a skill</option>
            <option value="printing">Printing & photocopying</option>
            <option value="delivery">Campus delivery / errand runner</option>
            <option value="stationery">Stationery & essentials</option>
            <option value="documents">Document submission</option>
            <option value="snacks">Snacks & cafÃ© runs</option>
          </Select>
        </Field>

        <Field label="Available Hours" name="qf-hours" error={errors.hours}>
          <Select id="qf-hours" value={form.hours} onChange={update('hours')} error={errors.hours}>
            <option value="">Select availability</option>
            <option value="morning">Morning (8 AM â€“ 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM â€“ 5 PM)</option>
            <option value="evening">Evening (5 PM â€“ 9 PM)</option>
            <option value="flexible">Fully flexible</option>
          </Select>
        </Field>

        <ul className="grid gap-2 sm:grid-cols-3">
          {perks.map((perk) => (
            <li
              key={perk}
              className="flex items-start gap-2 rounded-xl bg-ink-50 px-3 py-2.5 text-[0.6875rem] leading-snug font-semibold text-ink-600 ring-1 ring-ink-200"
            >
              <CircleCheckBig className="mt-px h-3.5 w-3.5 shrink-0 text-emerald-500" />
              {perk}
            </li>
          ))}
        </ul>

        <Button
          type="submit"
          size="lg"
          fullWidth
          disabled={state === 'done'}
          leftIcon={state === 'done' ? undefined : Rocket}
        >
          {state === 'done' ? (
            <span className="inline-flex items-center gap-2">
              <LoaderCircle className="h-4 w-4 animate-spin" /> Submittingâ€¦
            </span>
          ) : (
            'Apply as a QuickFixer'
          )}
        </Button>

        <FormNotice>
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <span>Demo form with frontend validation only. No application is submitted.</span>
        </FormNotice>
      </form>
    </DialogShell>
  )
}

/* ---------------- Subscribe ---------------- */

function SubscribeDialog() {
  const { closeDialog } = useDialogs()
  const [email, setEmail] = useState('')
  const { state, errors, submit } = useSubmitState()

  return (
    <DialogShell name="subscribe" maxWidth="max-w-sm">
      <DialogHeader
        eyebrow="Stay Updated"
        title="Get campus QuickFix updates"
        subtitle="New services, campus launches and student rewards."
      />
      <form
        onSubmit={submit(
          {
            email: () =>
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? undefined : 'Enter a valid email address.',
          },
          closeDialog,
        )}
        noValidate
        className="flex flex-col gap-4 px-6 py-6 sm:px-7"
      >
        <Field label="Email Address" name="sub-email" error={errors.email}>
          <TextInput
            id="sub-email"
            type="email"
            placeholder="you@university.edu"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={errors.email}
          />
        </Field>
        <Button type="submit" size="lg" fullWidth disabled={state === 'done'}>
          {state === 'done' ? (
            <span className="inline-flex items-center gap-2">
              <LoaderCircle className="h-4 w-4 animate-spin" /> Subscribingâ€¦
            </span>
          ) : (
            'Subscribe'
          )}
        </Button>
      </form>
    </DialogShell>
  )
}

/* ---------------- Legal / placeholder ---------------- */

function LegalDialog() {
  const { closeDialog } = useDialogs()

  return (
    <DialogShell name="legal" maxWidth="max-w-md">
      <DialogHeader
        eyebrow="Legal"
        title="Privacy & Terms"
        subtitle="Placeholder content for this frontend demo."
      />
      <div className="space-y-4 px-6 py-6 text-sm leading-relaxed text-ink-600 sm:px-7">
        <p>
          Campus QuickFix is a demonstration interface built to show a campus quick-service
          product concept. No personal data is collected, transmitted or stored, and no real
          services are provided through this build.
        </p>
        <p>
          All names, statistics, testimonials and order records shown on this page are sample data
          created for illustration purposes.
        </p>
        <Button fullWidth size="lg" onClick={closeDialog}>
          Close
        </Button>
      </div>
    </DialogShell>
  )
}

export function Dialogs() {
  return (
    <>
      <OrderSuccessDialog />
      <ServiceOrderDialog />
      <LoginDialog />
      <GetStartedDialog />
      <QuickFixerApplyDialog />
      <SubscribeDialog />
      <LegalDialog />
    </>
  )
}