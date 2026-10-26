export type AiItem = {
  title: string
  description: string
}

// Edita aquí lo que muestra el bloque "IA aplicada" de Sobre mí.
export const aiItems: AiItem[] = [
  {
    title: 'Integración de APIs de IA',
    description:
      'Conecto modelos de Claude, Gemini y OpenAI a aplicaciones web (prompts, respuestas estructuradas, manejo de errores).',
  },
  {
    title: 'Desarrollo asistido por IA',
    description:
      'Uso Claude Code para construir por fases, con una tarea por prompt y validando cada resultado.',
  },
  {
    title: 'Skills y flujos reutilizables',
    description:
      'Armo skills y plantillas de prompts para repetir procesos y ahorrar tiempo.',
  },
  {
    title: 'Automatización',
    description:
      'Conecto servicios con bots y flujos automáticos para avisos y tareas repetitivas.',
  },
]
