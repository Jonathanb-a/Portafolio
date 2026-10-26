import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { duration, ease, mobileMenu } from '@/lib/motion'
import { cn } from '@/lib/utils'

const links = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#contacto', label: 'Contacto' },
]

function scrollToHash(hash: string) {
  const target = hash === '#inicio' ? document.body : document.querySelector(hash)
  if (!target) return false
  const top = hash === '#inicio' ? 0 : target.getBoundingClientRect().top + window.scrollY
  window.scrollTo({ top, behavior: 'smooth' })
  history.replaceState(null, '', hash)
  return true
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Marca como activa la sección que cruza el tercio superior de la pantalla.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null)
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Menú móvil: Escape lo cierra (devolviendo el foco al botón) y un toque fuera también.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (scrollToHash(hash)) e.preventDefault()
    setOpen(false)
  }

  const linkClass = (href: string) =>
    cn(
      'inline-flex min-h-11 items-center rounded-full transition-colors duration-150',
      active === href ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
    )

  return (
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration.enter, ease: ease.out }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled || open
          ? 'border-border bg-background/90 backdrop-blur-md'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a
          href="#inicio"
          onClick={(e) => handleClick(e, '#inicio')}
          className="inline-flex min-h-11 items-center font-heading text-lg font-semibold tracking-tight"
        >
          Jonathan<span className="text-primary">.</span>
        </a>

        {/* Escritorio / tablet */}
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  aria-current={active === link.href ? 'true' : undefined}
                  className={cn(linkClass(link.href), 'px-4 text-sm')}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Móvil */}
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-foreground md:hidden"
        >
          {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-movil"
            aria-label="Principal"
            variants={mobileMenu}
            initial="closed"
            animate="open"
            exit="closed"
            className="border-t border-border px-5 pb-4 pt-2 md:hidden"
          >
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    aria-current={active === link.href ? 'true' : undefined}
                    className={cn(linkClass(link.href), 'min-h-12 w-full text-base')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
