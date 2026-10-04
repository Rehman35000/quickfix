const sizes = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[0.95rem]',
  lg: 'h-14 px-7 text-base',
}

const base =
  'group/btn relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight whitespace-nowrap transition-all duration-300 outline-none select-none disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary:
    'bg-gradient-to-br from-brand-600 to-accent-600 text-white shadow-[0_10px_28px_-10px_rgb(37_99_235/0.7)] hover:from-brand-500 hover:to-accent-500 hover:shadow-[0_18px_40px_-12px_rgb(79_70_229/0.55)] active:scale-[0.97]',
  secondary:
    'bg-white text-ink-800 ring-1 ring-ink-200 shadow-soft hover:ring-brand-300 hover:text-brand-700 hover:shadow-card active:scale-[0.97]',
  soft: 'bg-brand-50 text-brand-700 ring-1 ring-brand-100 hover:bg-brand-100 hover:ring-brand-200 active:scale-[0.97]',
  outline:
    'bg-transparent text-ink-700 ring-1 ring-ink-300 hover:bg-ink-900 hover:text-white hover:ring-ink-900 active:scale-[0.97]',
  ghost: 'bg-transparent text-ink-600 hover:bg-ink-100 hover:text-ink-900 active:scale-[0.97]',
  white:
    'bg-white text-brand-700 shadow-[0_12px_30px_-12px_rgb(2_6_23/0.5)] hover:bg-brand-50 active:scale-[0.97]',
  dark: 'bg-ink-900 text-white hover:bg-ink-800 shadow-lift active:scale-[0.97]',
}

const iconSizes = {
  sm: 'h-4 w-4',
  md: 'h-4.5 w-4.5',
  lg: 'h-5 w-5',
}

export function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className = '',
  children,
  ...props
}) {
  return (
    <Tag
      className={`${base} ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {LeftIcon ? <LeftIcon className={`${iconSizes[size]} transition-transform duration-300`} /> : null}
      <span>{children}</span>
      {RightIcon ? (
        <RightIcon
          className={`${iconSizes[size]} transition-transform duration-300 group-hover/btn:translate-x-0.5`}
        />
      ) : null}
    </Tag>
  )
}
