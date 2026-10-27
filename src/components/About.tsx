import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion'
import { cardHover, duration, ease, reveal, spring, stagger, viewportOnce } from '@/lib/motion'
import { stack } from '@/data/stack'
import { aiItems } from '@/data/ai'

// La foto va en src/assets/jonathan.jpg. Si aún no existe se muestra un placeholder.
const photos = import.meta.glob('../assets/jonathan.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>
const photo = Object.values(photos)[0]

const paragraphs = [
  'Soy Jonathan, estudiante de Ingeniería en Gestión de Software en la UTCGG, en Guerrero (egreso en abril de 2027).',
  'Durante casi dos años trabajé como mesero y room service en un hotel. Ahí aprendí algo que no enseñan en clase: cómo se usa un sistema cuando hay prisa, mucha gente y nadie tiene tiempo de leer instrucciones. Hoy trabajo en ese mismo hotel, pero desde el otro lado: desarrollo el sistema con el que reservan sus actividades.',
  'Además he construido proyectos para clientes reales: una app de citas para un consultorio dental y una plataforma de comercio en línea donde dos tiendas con marca propia comparten un solo backend. Y como quería salir de la web, hice Gastito, una app en React Native que corre en Android, iPhone y navegador con el mismo código.',
  'Busco mi primera oportunidad remota o freelance como desarrollador front-end.',
]

// Los bordes negros de la foto se funden con el fondo de la página.
const fade =
  'linear-gradient(to bottom, transparent, #000 14%, #000 80%, transparent), linear-gradient(to right, transparent, #000 14%, #000 86%, transparent)'

function Portrait() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [28, -28])

  return (
    <motion.div
      ref={ref}
      variants={reveal}
      className="relative mx-auto w-full max-w-sm lg:max-w-none"
    >
      <motion.div style={{ y }} className="relative -rotate-2">
        {/* Brillo ámbar suave detrás */}
        <div
          aria-hidden
          className="absolute -inset-10 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(closest-side, oklch(0.75 0.17 50 / 22%), transparent)',
          }}
        />

        <div className="relative aspect-[2/3] w-full">
          {/* Anillo fino ámbar alrededor del círculo de luz */}
          <div
            aria-hidden
            className="absolute left-1/2 top-[42%] aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40"
          />
          {photo ? (
            <img
              src={photo}
              alt="Retrato de Jonathan en blanco y negro"
              loading="lazy"
              className="relative size-full object-cover"
              style={{
                maskImage: fade,
                WebkitMaskImage: fade,
                maskComposite: 'intersect',
                WebkitMaskComposite: 'source-in',
              }}
            />
          ) : (
            <div className="relative flex size-full items-center justify-center rounded-xl border border-border bg-muted font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Foto próximamente
            </div>
          )}
        </div>

        <p className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card/90 px-4 py-2 font-mono text-xs text-foreground backdrop-blur-sm">
          <span aria-hidden className="size-1.5 rounded-full bg-primary" />
          disponible · remoto / freelance
        </p>
      </motion.div>
    </motion.div>
  )
}

type Tok = [cls: string, text: string]

const key = 'text-signal'
const str = 'text-primary'
const punct = 'text-muted-foreground'
const kw = 'text-chart-3'

const codeLines: Tok[][] = [
  [[kw, 'const'], ['', ' jonathan '], [punct, '= {']],
  [['', '  '], [key, 'rol'], [punct, ': '], [str, '"Desarrollador web junior"'], [punct, ',']],
  [['', '  '], [key, 'base'], [punct, ': '], [str, '"Guerrero, México"'], [punct, ',']],
  [
    ['', '  '], [key, 'idiomas'], [punct, ': ['],
    [str, '"Español"'], [punct, ', '], [str, '"Inglés técnico"'], [punct, '],'],
  ],
  [
    ['', '  '], [key, 'aprendiendo'], [punct, ': ['],
    [str, '"React Native"'], [punct, '],'],
  ],
  [
    ['', '  '], [key, 'ia'], [punct, ': ['],
    [str, '"Claude"'], [punct, ', '], [str, '"Gemini"'], [punct, ', '],
    [str, '"ChatGPT"'], [punct, ', '], [str, '"APIs"'], [punct, ', '],
    [str, '"Skills"'], [punct, '],'],
  ],
  [['', '  '], [key, 'disponible'], [punct, ': '], [kw, 'true'], [punct, ',']],
  [[punct, '};']],
]

const lineVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.base, ease: ease.out },
  },
}

function CodeCard() {
  const reduce = useReducedMotion()

  return (
    <motion.div
      variants={reveal}
      className="overflow-hidden rounded-xl border border-border bg-card"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span aria-hidden className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span aria-hidden className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span aria-hidden className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">jonathan.ts</span>
      </div>
      <motion.pre
        variants={stagger}
        initial={reduce ? false : 'hidden'}
        whileInView="visible"
        viewport={viewportOnce}
        className="overflow-x-auto p-5 font-mono text-sm leading-7"
        aria-label="const jonathan: rol Desarrollador web junior, base Guerrero México, idiomas Español e Inglés técnico, aprendiendo React Native, ia Claude Gemini ChatGPT APIs Skills, disponible true"
      >
        <code>
          {codeLines.map((line, i) => (
            <motion.span key={i} variants={lineVariants} className="block" aria-hidden>
              {line.map(([cls, text], j) => (
                <span key={j} className={cls}>
                  {text}
                </span>
              ))}
            </motion.span>
          ))}
        </code>
      </motion.pre>
    </motion.div>
  )
}

const techItem: Variants = {
  ...reveal,
  hover: { y: -4, transition: spring.soft },
}

const techIcon: Variants = {
  hidden: { filter: 'brightness(1)' },
  visible: { filter: 'brightness(1)' },
  hover: { filter: 'brightness(1.4)', transition: { duration: duration.micro } },
}

const techGrid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

function TechStack() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mt-12"
    >
      <motion.h3
        variants={reveal}
        className="flex items-center gap-3 font-mono text-sm text-foreground"
      >
        <span aria-hidden className="text-primary">
          {'</>'}
        </span>
        Tech Stack
      </motion.h3>

      <motion.ul
        variants={techGrid}
        className="mt-8 grid grid-cols-3 gap-x-4 gap-y-10 sm:grid-cols-4 lg:grid-cols-6"
      >
        {stack.map(({ name, icon: Icon, color, note }) => (
          <motion.li
            key={name}
            variants={techItem}
            whileHover="hover"
            className="flex flex-col items-center gap-3 text-center"
          >
            <motion.span variants={techIcon} className="inline-flex" style={{ color }}>
              <Icon aria-hidden className="size-9" />
            </motion.span>
            <span className="flex flex-col gap-0.5 text-xs text-muted-foreground">
              {name}
              {note && <span className="font-mono text-[0.7rem] text-primary">{note}</span>}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

function AppliedAI() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mt-16"
    >
      <motion.p
        variants={reveal}
        className="mb-4 font-mono text-eyebrow uppercase text-primary"
      >
        IA aplicada
      </motion.p>
      <motion.h3
        variants={reveal}
        className="text-balance font-heading text-h3 font-semibold"
      >
        No solo uso IA, la integro.
      </motion.h3>

      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {aiItems.map(({ title, description }) => (
          <motion.li
            key={title}
            variants={reveal}
            {...cardHover}
            className="rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40"
          >
            <h4 className="font-heading text-base font-semibold">{title}</h4>
            <p className="mt-2 text-pretty text-sm text-muted-foreground">{description}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export function About() {
  return (
    <section id="sobre-mi" className="overflow-x-clip px-5 py-24 md:px-8 md:py-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20"
      >
        <Portrait />

        <div>
          <motion.p
            variants={reveal}
            className="mb-4 font-mono text-eyebrow uppercase text-primary"
          >
            Sobre mí
          </motion.p>
          <motion.h2
            variants={reveal}
            className="text-balance font-heading text-h2 font-semibold"
          >
            De servir mesas a construir sistemas.
          </motion.h2>
          <div className="mt-6 space-y-4 text-pretty text-muted-foreground">
            {paragraphs.map((text) => (
              <motion.p key={text} variants={reveal}>
                {text}
              </motion.p>
            ))}
          </div>
          <div className="mt-10">
            <CodeCard />
          </div>
          <TechStack />
          <AppliedAI />
        </div>
      </motion.div>
    </section>
  )
}
