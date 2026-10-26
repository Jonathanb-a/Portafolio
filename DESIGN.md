# DESIGN.md — Portafolio de Jonathan

Sistema de diseño para el portafolio de un desarrollador web junior. Tema oscuro, profesional, minimalista con un acento de color y animaciones fluidas.

Generado con la skill `ui-ux-pro-max` (estilo base: *Dark Mode OLED*, tipografía técnica) y adaptado a una identidad propia. Los tokens viven en `src/index.css`.

> No se ha construido ninguna sección. Este documento solo define las reglas.

---

## 1. Concepto

**"Ember on ink."** Un fondo casi negro con un matiz frío (tinta) y un único acento cálido, ámbar-naranja (brasa). Un segundo color frío (teal) aparece solo para código y enlaces. Evita el verde sobre pizarra y el degradado morado que se ven en la mayoría de portafolios de desarrolladores.

Principios:
1. **Un acento por pantalla.** La brasa marca lo importante (CTA, estado activo). Todo lo demás es neutro.
2. **Contenido primero.** Mucho aire, jerarquía clara, pocos adornos.
3. **Movimiento con intención.** La animación explica (aparece, entra, responde). No decora.
4. **Honesto para un junior.** Proyectos reales, texto claro y directo, sin inflar.

---

## 2. Color

Los valores están en `oklch` en `src/index.css`. Se usan como utilidades de Tailwind (`bg-background`, `text-primary`, etc.).

| Token | Tailwind | Valor aprox. | Uso |
|---|---|---|---|
| `--background` | `bg-background` | `#0B0B10` | Fondo base |
| `--ink` | `bg-ink` | `#06060A` | Capa más profunda (footer, overlays) |
| `--surface` | `bg-surface` | `#101017` | Secciones elevadas |
| `--card` | `bg-card` | `#14141C` | Tarjetas de proyecto |
| `--foreground` | `text-foreground` | `#F2EFE8` | Texto principal (blanco hueso) |
| `--muted-foreground` | `text-muted-foreground` | `#A3A3B3` | Texto secundario |
| `--primary` | `bg-primary`, `text-primary` | `#FF8A3D` | **Acento brasa**: CTA, foco, estado activo |
| `--signal` | `text-signal` | `#5FD9CC` | Acento teal: enlaces, código, etiquetas técnicas |
| `--border` | `border-border` | blanco 9 % | Bordes sutiles |
| `--destructive` | `text-destructive` | `#F0605A` | Errores de formulario |

Reglas:
- Contraste mínimo 4.5:1 en texto. `foreground` y `muted-foreground` sobre `background` lo cumplen con holgura. La brasa sobre `background` ronda 8:1.
- Texto sobre `bg-primary` siempre `text-primary-foreground` (tinta oscura), nunca blanco.
- Nunca usar hex en componentes: solo tokens.
- La brasa no se usa como fondo de áreas grandes. Máximo un botón primario visible por vista.
- El color nunca es la única señal (añadir icono o texto en estados y errores).

---

## 3. Tipografía

| Rol | Fuente | Tailwind | Uso |
|---|---|---|---|
| Títulos | **Space Grotesk** (variable) | `font-heading` | Display, H1–H3. Carácter geométrico y distintivo |
| Cuerpo | **Geist** (variable) | `font-sans` | Párrafos, UI, navegación |
| Técnico | **JetBrains Mono** (variable) | `font-mono` | Etiquetas, stack, fechas, código |

Las fuentes se cargan con `@fontsource-variable`, sin peticiones a Google Fonts.

Escala (fluida con `clamp`, definida en `@theme`):

| Clase | Tamaño | Notas |
|---|---|---|
| `text-display` | 44 → 96 px | Solo el titular del hero. Tracking −0.04em, interlineado 1 |
| `text-h1` | 36 → 64 px | Títulos de página |
| `text-h2` | 28 → 44 px | Títulos de sección |
| `text-h3` | 22 px | Títulos de tarjeta |
| `text-base` | 16 px | Cuerpo, interlineado 1.6 |
| `text-eyebrow` | 12 px | `font-mono uppercase`, tracking 0.14em, sobre los títulos |

Reglas:
- Cuerpo nunca por debajo de 16 px. Líneas de 60–75 caracteres (`max-w-prose`).
- Máximo dos pesos por pantalla: 400 y 500 en cuerpo; 600–700 en títulos.
- Usar `text-balance` en títulos y `text-pretty` en párrafos.

---

## 4. Estilo visual

- **Superficies planas con borde fino** (`border border-border`) en lugar de sombras pesadas. La profundidad viene del cambio de tono entre `background`, `surface` y `card`.
- **Radio:** `--radius: 0.75rem`. Tarjetas `rounded-xl`, botones y campos `rounded-lg`, etiquetas `rounded-full`.
- **Un solo efecto de brillo:** un resplandor radial tenue de brasa (opacidad ≤ 12 %) detrás del hero. No más de uno por vista.
- **Grano opcional:** textura de ruido a 3–4 % de opacidad sobre el fondo para evitar el negro plano.
- **Iconos:** solo SVG de `lucide-react`, trazo 1.5 px. Nunca emojis como iconos.
- **Foco visible:** anillo de 2 px en brasa con 3 px de separación (ya definido globalmente).
- **Sin glassmorphism, sin degradados morados, sin neón.**

---

## 5. Espaciado y layout

Base de 4 px (la escala por defecto de Tailwind). Densidad espaciosa.

| Uso | Valor |
|---|---|
| Padding de sección (vertical) | `py-24` móvil, `py-32` desde `md` |
| Separación entre bloques dentro de una sección | `gap-12` / `gap-16` |
| Padding interno de tarjeta | `p-6` (`p-8` desde `md`) |
| Separación en grids de tarjetas | `gap-6` |
| Separación entre texto y CTA | `mt-8` |
| Gutter horizontal | `px-5` móvil, `px-8` desde `md` |

Layout:
- Contenedor máximo `max-w-6xl` centrado; texto largo `max-w-prose`.
- Mobile-first. Breakpoints de prueba: 375, 768, 1024 y 1440 px.
- Sin scroll horizontal en ningún ancho.
- Objetivos táctiles de al menos 44 × 44 px, con 8 px de separación.
- Reservar espacio para imágenes (`aspect-*`) y evitar saltos de layout.

---

## 6. Animación (Framer Motion)

Tokens de movimiento (definidos en CSS: `--ease-out-expo`, `--ease-in-out-soft`):

```ts
// src/lib/motion.ts (pendiente de crear al construir secciones)
export const ease = {
  out: [0.16, 1, 0.3, 1],      // entradas
  inOut: [0.65, 0, 0.35, 1],   // transiciones de estado
} as const

export const duration = {
  micro: 0.15,   // hover, press, foco
  base: 0.35,    // cambios de estado, menús
  enter: 0.6,    // entrada de bloques al hacer scroll
  page: 0.8,     // hero y transiciones grandes
} as const

export const spring = {
  soft: { type: 'spring', stiffness: 220, damping: 26, mass: 0.9 },
  snappy: { type: 'spring', stiffness: 400, damping: 30 },
} as const
```

Patrones estándar:

| Patrón | Valores |
|---|---|
| **Reveal al hacer scroll** | `initial={{ opacity: 0, y: 24 }}` → `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: '-80px' }}`, `duration.enter`, `ease.out` |
| **Stagger de listas** | Variants padre con `staggerChildren: 0.08`, `delayChildren: 0.1`. Máximo 8 elementos escalonados |
| **Hover de tarjeta** | `whileHover={{ y: -4 }}` con `spring.soft`; el borde pasa de `border` a brasa al 40 % |
| **Botón** | `whileHover={{ scale: 1.02 }}`, `whileTap={{ scale: 0.97 }}`, `spring.snappy` |
| **Hero** | Titular palabra por palabra, `y: 40 → 0`, stagger 0.06, `duration.page` |
| **Cambio de página/sección** | `AnimatePresence mode="wait"`, fundido + `y: 8`, `duration.base` |
| **Menú móvil** | Entrada `spring.snappy`; la salida es más rápida que la entrada (~70 %) |

Reglas:
1. **Solo animar `transform` y `opacity`.** Nunca `width`, `height`, `top` o `left`. Para cambios de tamaño usar `layout`.
2. **Duración por contexto:** micro-interacciones 150 ms, estados 350 ms, entradas 600 ms. No usar una sola duración para todo.
3. **Salir más rápido que entrar.** Las salidas duran ~70 % de la entrada.
4. **Una vez por carga.** Los reveals usan `once: true`; no se repiten al volver a hacer scroll.
5. **`prefers-reduced-motion` es obligatorio.** Envolver la app en `<MotionConfig reducedMotion="user">`: se desactivan los desplazamientos y quedan solo fundidos.
6. **Interrumpibles.** Ninguna animación bloquea la interacción ni retrasa un clic.
7. **Sin movimiento infinito** salvo un indicador de carga. Nada parpadea ni rebota sin motivo.
8. **Máximo un elemento con animación llamativa por vista**; el resto, sutil.
9. Importar desde `framer-motion` y usar `LazyMotion` + `m` si el peso del bundle empieza a importar.

---

## 7. Accesibilidad (mínimos)

- Navegación completa por teclado, orden de tabulación lógico, foco siempre visible.
- Un `h1` por página; jerarquía de encabezados sin saltos.
- `alt` en imágenes de contenido; `aria-hidden` en iconos decorativos; `aria-label` en botones solo-icono.
- Enlace "Saltar al contenido" al inicio.
- Formularios con etiqueta visible (no solo placeholder) y error junto al campo.
- `lang="es"` en el documento.

---

## 8. Checklist antes de dar una sección por terminada

- [ ] Solo tokens de color, sin hex sueltos
- [ ] Contraste ≥ 4.5:1 en todo el texto
- [ ] Un único CTA primario por vista
- [ ] Hover y foco definidos, con `cursor-pointer` en lo clicable
- [ ] Animaciones solo con `transform`/`opacity`, probadas con reduced motion activo
- [ ] Revisado a 375, 768, 1024 y 1440 px sin scroll horizontal
- [ ] Iconos SVG (lucide), sin emojis
