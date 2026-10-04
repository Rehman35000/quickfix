export function InstagramIcon({ className = 'h-4.5 w-4.5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon({ className = 'h-4.5 w-4.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14.1 21.9v-8.2h2.8l.42-3.2H14.1V8.5c0-.93.26-1.56 1.59-1.56h1.7V4.13A23 23 0 0 0 14.92 4c-2.46 0-4.14 1.5-4.14 4.26v2.36H8.02v3.2h2.76v8.18h3.32Z" />
    </svg>
  )
}

export function LinkedinIcon({ className = 'h-4.5 w-4.5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 8.9v11.2H3.6V8.9h3.34Zm.32-3.63c0 1-.72 1.78-1.9 1.78h-.02c-1.13 0-1.86-.78-1.86-1.78 0-1.01.75-1.78 1.94-1.78 1.18 0 1.84.77 1.84 1.78Zm14.63 10.5v3.33h-3.33v-5.66c0-1.36-.49-2.28-1.7-2.28-.93 0-1.48.62-1.72 1.22-.09.22-.11.52-.11.83v5.89h-3.33V8.9h3.19v1.49h.05c.45-.84 1.23-1.73 2.54-1.73 1.85 0 3.41 1.2 3.41 3.78Z" />
    </svg>
  )
}