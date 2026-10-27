export type Project = {
  title: string
  description: string
  tags: string[]
  /** Ruta a una captura (ej. "/img/dentissa.png"). Vacío = placeholder. */
  image: string
  /** URL de la demo en vivo. Vacío = sin enlace. */
  demo: string
  /** URL del repositorio. Vacío = sin enlace. */
  repo: string
  /** Texto opcional (p. ej. "Demo bajo solicitud"). Se muestra si no hay enlaces. */
  note?: string
}

export const projects: Project[] = [
  {
    title: 'Dentissa',
    description:
      'Aplicación web para gestionar citas en consultorios dentales: agenda, pacientes y recordatorios.',
    tags: ['Laravel 12', 'Tailwind CSS', 'Alpine.js', 'MySQL', 'Railway'],
    image: "/projects/dentissa.png",
    demo: 'https://citas-dentista-production.up.railway.app',
    repo: 'https://github.com/Jonathanb-a',
  },
  {
    title: 'Game-Trip',
    description:
      'lading page sobre viajar ah punto reales basados en video juegos, con un diseño atractivo y moderno.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap 5'],
    image: '/projects/gametrip.png',
    demo: 'https://jonathanb-a.github.io/GameTrip/act2/index.html',
    repo: 'https://github.com/Jonathanb-a',
  },
  {
    title: 'Sistema de actividades recreativas',
    description:
      'Plataforma web para gestionar las actividades recreativas de un hotel. Proyecto real en producción.',
    tags: ['Laravel', 'MySQL', 'Blade', 'React'],
    image: '',
    demo: '',
    repo: '',
    note: 'Demo bajo solicitud',
  },
  {
    title: 'Plataforma multitienda',
    description:
      'E-commerce multitienda para ropa y calzado deportivo, desarrollado para un cliente.',
    tags: [], // TODO: stack
    image: '',
    demo: '',
    repo: '',
  },
]
