import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export function Modal({ open, onClose, labelledBy, children, maxWidth = 'max-w-lg' }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose?.()
    }

    const previousOverflow = document.body.style.overflow
    const previousActive = document.activeElement

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    const focusTimer = window.setTimeout(() => {
      panelRef.current?.focus()
    }, 40)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      window.clearTimeout(focusTimer)
      if (previousActive instanceof HTMLElement) previousActive.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink-900/55 backdrop-blur-sm motion-safe:animate-[fadeIn_0.25s_ease-out]"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className={`relative z-10 w-full ${maxWidth} max-h-[92dvh] overflow-y-auto rounded-t-3xl bg-white shadow-2xl outline-none sm:rounded-3xl motion-safe:animate-[modalIn_0.35s_cubic-bezier(0.16,1,0.3,1)]`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-20 grid h-9 w-9 place-items-center rounded-full bg-ink-100 text-ink-500 transition hover:bg-ink-200 hover:text-ink-800"
        >
          <X className="h-4 w-4" />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  )
}