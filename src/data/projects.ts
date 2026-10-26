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
}

export const projects: Project[] = [
  {
    title: 'Dentissa',
    description:
      'Aplicación web para gestionar citas en consultorios dentales: agenda, pacientes y recordatorios.',
    tags: ['Laravel 12', 'Tailwind CSS', 'Alpine.js', 'MySQL', 'Railway'],
    image: '',
    demo: '',
    repo: 'https://github.com/Jonathanb-a',
  },
  {
    title: 'SystemInventario',
    description:
      'Sistema de gestión de inventarios con control de productos, entradas y salidas.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    image: '',
    demo: '',
    repo: 'https://github.com/Jonathanb-a',
  },
  {
    title: 'Sistema de actividades recreativas',
    description:
      'Plataforma web para gestionar las actividades recreativas de un hotel. Proyecto real en producción.',
    tags: ['Laravel', 'MySQL'],
    image: '',
    demo: '',
    repo: '',
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
