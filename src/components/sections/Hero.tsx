import { motion } from 'framer-motion'
import { buttonVariants } from '@/components/ui/button'
import { buttonPress, ease, heroContainer, heroWord, stagger, reveal } from '@/lib/motion'
import { ShaderMetal } from '@/components/ui/shader-metal'
import { cn } from '@/lib/utils'

const lines = [
  'Hola, soy Jonathan.',
  'Construyo sistemas web que se usan de verdad.',
]

const btn = 'h-11 rounded-lg px-5 text-sm'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center overflow-hidden px-5 pb-20 pt-32 md:px-8"
    >
      {/* Cintas de metal (WebGL): a la derecha en escritorio, de fondo tenue en móvil */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: ease.out, delay: 0.2 }}
        className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[48%] [mask-image:linear-gradient(to_right,transparent,#000_40%)]"
      >
        {/* La opacidad va en un div interno: la animación de entrada fija opacity inline en el padre. */}
        <div className="absolute inset-0 opacity-20 lg:opacity-100">
          <ShaderMetal
            metal="copper"
            theme="dark"
            ribbons={3}
            speed={0.3}
            iridescence={0.25}
          />
        </div>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-6xl"
      >
        <motion.p
          variants={reveal}
          className="mb-6 font-mono text-eyebrow uppercase text-primary"
        >
          Desarrollador web junior
        </motion.p>

        <motion.h1
          variants={heroContainer}
          className="max-w-2xl text-balance font-heading text-h1 font-semibold lg:max-w-[52%]"
        >
          {lines.map((line, i) => (
            <span key={line} className={cn('block', i === 1 && 'text-muted-foreground')}>
              {line.split(' ').map((word, j) => (
                <span key={j} className="inline-block overflow-hidden pb-[0.1em] align-bottom">
                  <motion.span variants={heroWord} className="inline-block">
                    {word}
                  </motion.span>
                  {'\u00A0'}
                </span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          variants={reveal}
          className="mt-8 max-w-prose text-pretty text-lg text-muted-foreground"
        >
          Estudio Ingeniería en Gestión de Software y ya desarrollo sistemas para clientes
          reales: gestión de citas, inventarios, tiendas en línea y más.
        </motion.p>

        <motion.div variants={reveal} className="mt-8 flex flex-wrap gap-3">
          <motion.a
            href="#proyectos"
            {...buttonPress}
            className={cn(buttonVariants({ variant: 'default' }), btn)}
          >
            Ver proyectos
          </motion.a>
          <motion.a
            href="https://github.com/Jonathanb-a"
            target="_blank"
            rel="noopener"
            {...buttonPress}
            className={cn(buttonVariants({ variant: 'outline' }), btn)}
          >
            GitHub
          </motion.a>
          <motion.a
            href="cv.pdf"
            download
            {...buttonPress}
            className={cn(buttonVariants({ variant: 'outline' }), btn)}
          >
            Descargar CV
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
