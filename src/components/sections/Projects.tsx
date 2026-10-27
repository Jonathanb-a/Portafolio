import { motion } from 'framer-motion'
import { projects, type Project } from '@/data/projects'
import { cardHover, reveal, stagger, viewportOnce } from '@/lib/motion'

function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags, image, demo, repo, note } = project

  return (
    <motion.article
      variants={reveal}
      {...cardHover}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors duration-300 hover:border-primary/40"
    >
      {image ? (
        <img
          src={image}
          alt={`Captura de ${title}`}
          loading="lazy"
          className="aspect-video w-full object-cover"
        />
      ) : (
        <div className="flex aspect-video w-full items-center justify-center border-b border-border bg-muted font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Captura próximamente
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="font-heading text-h3 font-semibold">{title}</h3>
        <p className="mt-3 text-pretty text-muted-foreground">{description}</p>

        {tags.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologías">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border px-3 py-1 font-mono text-xs text-signal"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {!demo && !repo && note && (
          <p className="mt-auto pt-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground">
              <span aria-hidden className="size-1.5 rounded-full bg-primary" />
              {note}
            </span>
          </p>
        )}

        {(demo || repo) && (
          <div className="mt-auto flex flex-wrap gap-x-5 pt-6">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-11 items-center text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Demo en vivo ↗
              </a>
            )}
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-11 items-center text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                Código ↗
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="proyectos" className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12 md:mb-16"
        >
          <motion.p
            variants={reveal}
            className="mb-4 font-mono text-eyebrow uppercase text-primary"
          >
            Mi trabajo
          </motion.p>
          <motion.h2
            variants={reveal}
            className="text-balance font-heading text-h2 font-semibold"
          >
            Proyectos
          </motion.h2>
          <motion.p variants={reveal} className="mt-4 max-w-prose text-muted-foreground">
            Con demo en vivo y código cuando es posible.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
