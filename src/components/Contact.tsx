import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Check, Copy, Download } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { buttonVariants } from '@/components/ui/button'
import { email, github, linkedin, cvUrl } from '@/data/contact'
import { buttonPress, cardHover, reveal, stagger, viewportOnce } from '@/lib/motion'
import { cn } from '@/lib/utils'

const btn = 'h-12 w-full rounded-lg px-6 text-sm sm:w-auto'

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Respaldo para contextos sin Clipboard API (p. ej. http o navegadores antiguos).
    const area = document.createElement('textarea')
    area.value = text
    area.setAttribute('readonly', '')
    area.style.position = 'fixed'
    area.style.opacity = '0'
    document.body.appendChild(area)
    area.select()
    const ok = document.execCommand('copy')
    area.remove()
    return ok
  }
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const handleCopy = async () => {
    if (!(await copyText(email))) return
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={handleCopy}
        {...buttonPress}
        className={cn(buttonVariants({ variant: 'default' }), btn, 'cursor-pointer')}
      >
        {copied ? (
          <Check aria-hidden className="size-4" />
        ) : (
          <Copy aria-hidden className="size-4" />
        )}
        <span>{copied ? '¡Copiado!' : email}</span>
      </motion.button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? 'Correo copiado al portapapeles' : ''}
      </span>
    </>
  )
}

function ResponseBadge() {
  const reduce = useReducedMotion()
  return (
    <p className="inline-flex items-center gap-2.5 font-mono text-xs text-muted-foreground">
      <motion.span
        aria-hidden
        className="size-2 rounded-full bg-primary"
        animate={reduce ? undefined : { opacity: [1, 0.35, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      respondo en menos de 24 h
    </p>
  )
}

const linkCard =
  'flex min-h-14 items-center gap-3 rounded-xl border border-border bg-background/60 px-5 py-3 text-sm font-medium transition-colors duration-300 hover:border-primary/40'

export function Contact() {
  return (
    <section id="contacto" className="px-5 pb-24 pt-8 md:px-8 md:pb-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-card px-6 py-14 text-center md:px-14 md:py-20"
      >
        {/* Brillo ámbar sutil de fondo */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] max-w-full -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(closest-side, oklch(0.75 0.17 50 / 16%), transparent)',
          }}
        />

        <div className="relative">
          <motion.p
            variants={reveal}
            className="mb-4 font-mono text-eyebrow uppercase text-primary"
          >
            Contacto
          </motion.p>
          <motion.h2
            variants={reveal}
            className="text-balance font-heading text-h1 font-semibold"
          >
            ¿Construimos algo juntos?
          </motion.h2>
          <motion.p
            variants={reveal}
            className="mx-auto mt-5 max-w-prose text-pretty text-lg text-muted-foreground"
          >
            Busco mi primera oportunidad remota o freelance como desarrollador junior. Escríbeme.
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <CopyEmailButton />
            <motion.a
              href={`mailto:${email}`}
              {...buttonPress}
              className={cn(buttonVariants({ variant: 'outline' }), btn)}
            >
              Enviar correo
            </motion.a>
          </motion.div>

          <motion.div
            variants={reveal}
            className="mx-auto mt-6 grid max-w-xl gap-3 sm:grid-cols-3"
          >
            <motion.a
              href={github}
              target="_blank"
              rel="noopener"
              {...cardHover}
              className={linkCard}
            >
              <FaGithub aria-hidden className="size-5" />
              GitHub
            </motion.a>
            <motion.a
              href={linkedin}
              target="_blank"
              rel="noopener"
              {...cardHover}
              className={linkCard}
            >
              <FaLinkedin aria-hidden className="size-5" />
              LinkedIn
            </motion.a>
            <motion.a
              href={cvUrl}
              download
              {...cardHover}
              className={linkCard}
            >
              <Download aria-hidden className="size-5" />
              Descargar CV
            </motion.a>
          </motion.div>

          <motion.div variants={reveal} className="mt-10">
            <ResponseBadge />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
