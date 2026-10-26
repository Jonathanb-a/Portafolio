import type { Transition, Variants } from 'framer-motion'

// Tokens de movimiento de DESIGN.md §6.
// Solo se anima transform y opacity. Con <MotionConfig reducedMotion="user">
// se desactivan los desplazamientos y quedan los fundidos.

type Bezier = [number, number, number, number]

export const ease = {
  out: [0.16, 1, 0.3, 1] as Bezier, // entradas
  inOut: [0.65, 0, 0.35, 1] as Bezier, // transiciones de estado
}

export const duration = {
  micro: 0.15, // hover, press, foco
  base: 0.35, // cambios de estado, menús
  enter: 0.6, // entrada de bloques al hacer scroll
  page: 0.8, // hero y transiciones grandes
}

// Las salidas duran ~70 % de la entrada.
export const exitDuration = (enter: number) => enter * 0.7

export const spring = {
  soft: { type: 'spring', stiffness: 220, damping: 26, mass: 0.9 },
  snappy: { type: 'spring', stiffness: 400, damping: 30 },
} satisfies Record<string, Transition>

// Reveal al hacer scroll: una vez por carga.
export const viewportOnce = { once: true, margin: '-80px' } as const

export const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.enter, ease: ease.out },
  },
}

// Stagger de listas (máximo 8 elementos escalonados).
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

// Hero: titular palabra por palabra.
export const heroContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

export const heroWord: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.page, ease: ease.out },
  },
}

// Cambio de página/sección con AnimatePresence mode="wait".
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.out },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: { duration: exitDuration(duration.base), ease: ease.inOut },
  },
}

// Menú móvil: entrada con spring, salida más rápida.
export const mobileMenu: Variants = {
  closed: {
    opacity: 0,
    y: -12,
    transition: { duration: exitDuration(duration.base), ease: ease.inOut },
  },
  open: { opacity: 1, y: 0, transition: spring.snappy },
}

// Props de interacción para spread sobre <motion.* />.
export const cardHover = {
  whileHover: { y: -4 },
  transition: spring.soft,
}

export const buttonPress = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.97 },
  transition: spring.snappy,
}
