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
    image: '/projects/actividades-azul.png',
    demo: '',
    repo: '',
    note: 'Demo bajo solicitud',
  },
  {
    title: 'Plataforma Coppers',
    description:
      'E-commerce de ropa y calzado de marcas originales, desarrollado para un cliente. Comparte backend, inventario y panel con G5 Sports en una sola plataforma multitienda.',
    tags: ['Laravel 12', 'React 19', 'TypeScript', 'Inertia', 'Filament', 'Tailwind CSS', 'MySQL'],
    image: '/projects/coppers.png',
    demo: 'https://coopers.beauty',
    repo: 'https://github.com/Jonathanb-a/CoopersAndG5Sports',
  },
  {
    title: 'Plataforma G5 Sports',
    description:
      'E-commerce de ropa y calzado deportivo, desarrollado para un cliente. Comparte backend, inventario y panel con Coppers en una sola plataforma multitienda.',
    tags: ['Laravel 12', 'React 19', 'TypeScript', 'Inertia', 'Filament', 'Tailwind CSS', 'MySQL'],
    image: '/projects/g5sports.png',
    demo: 'https://g5sports-production.up.railway.app',
    repo: 'https://github.com/Jonathanb-a/CoopersAndG5Sports',
  },
  {
    title: 'App de control de gastos',
    description:
      'App móvil hecha con React Native y Expo que corre en Android, iPhone y web con el mismo código. Registro de gastos con validación, gráfica por categoría, historial con filtros, tema claro/oscuro y animaciones.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Expo Router', 'NativeWind', 'Reanimated'],
    image: '/projects/gastos-app.png',
    demo: 'https://gastito.jonathanba0803.workers.dev',
    repo: 'https://github.com/Jonathanb-a/gastos-app',
  },
]
