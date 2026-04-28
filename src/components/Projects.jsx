const projects = [
  {
    title: 'Helping Souls',
    description:
      'A full-stack web application that connects volunteers with community events. Users can register, browse events, and apply, while organizers manage participants and event logistics.',
    tech: ['React', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'REST API'],
    live: 'https://helping-souls.onrender.com',
    github: 'https://github.com/bruyi22/helping-souls',
  },
  {
    title: 'FinTrack',
    description:
      'A personal finance tracking application that allows users to monitor expenses, visualize financial data, and improve budgeting habits through interactive charts.',
    tech: ['React', 'Tailwind CSS', 'Context API', 'Recharts'],
    live: 'https://portfolio-bryan-iota.vercel.app/',
    github: 'https://github.com/bruyi22/fintrack',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="text-muted max-w-2xl mx-auto">
            Real-world applications I have built to solve problems and learn new technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary/50">{project.title.charAt(0)}</span>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
