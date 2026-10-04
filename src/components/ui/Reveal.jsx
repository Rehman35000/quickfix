import { useInView } from '../../hooks/useInView'

export function Reveal({
  children,
  delay = 0,
  y = 22,
  x = 0,
  scale = 1,
  className = '',
  as: Tag = 'div',
}) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`transition-[opacity,transform] duration-[750ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
        inView ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : 'opacity-0'
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transform: inView ? undefined : `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
      }}
    >
      {children}
    </Tag>
  )
}