import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { github, linkedin } from '@/data/contact'
import { reveal, stagger, viewportOnce } from '@/lib/motion'

const links = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#contacto', label: 'Contacto' },
]

const social = [
  { href: github, label: 'GitHub', icon: FaGithub },
  { href: linkedin, label: 'LinkedIn', icon: FaLinkedin },
]

const linkClass =
  'inline-flex min-h-11 items-center rounded-full px-3 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground'

function backToTop() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  history.replaceState(null, '', window.location.pathname)
}

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-16 md:px-8 md:py-20">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-6xl"
      >
        <motion.div
          variants={reveal}
          className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:gap-6"
        >
          <a
            href="#inicio"
            className="inline-flex min-h-11 items-center rounded-md font-heading text-lg font-semibold tracking-tight md:flex-1"
          >
            Jonathan<span className="text-primary">.</span>
          </a>

          <nav aria-label="Pie de página">
            <ul className="flex flex-wrap items-center justify-center gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-center justify-center gap-1 md:flex-1 md:justify-end">
            {social.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  className="inline-flex size-11 items-center justify-center rounded-full text-muted-foreground transition-colors duration-150 hover:text-foreground"
                >
                  <Icon aria-hidden className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={reveal}
          className="mt-12 flex flex-col items-center gap-4 text-center md:mt-16 md:flex-row md:justify-between md:text-left"
        >
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Jonathan · Hecho con React, Tailwind y Framer Motion
          </p>
          <button
            type="button"
            onClick={backToTop}
            className="inline-flex min-h-11 cursor-pointer items-center rounded-full px-3 font-mono text-xs text-muted-foreground transition-colors duration-150 hover:text-foreground"
          >
            Volver arriba ↑
          </button>
        </motion.div>
      </motion.div>
    </footer>
  )
}
