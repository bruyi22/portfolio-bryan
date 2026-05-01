const experiences = [
  {
    title: 'Full Stack Software Engineer (Projects)',
    company: 'Independent Projects',
    date: 'Nov 2025 - Present',
    description:
      'Design and develop full-stack web applications focused on solving real-world problems.',
    highlights: [
      'Built a personal finance dashboard to track and visualize expenses through interactive data charts.',
      'Developed a volunteer platform with authentication and role-based access control.',
      'Created RESTful APIs using Python and Flask to manage application logic and data flow.',
      'Designed responsive user interfaces using React and Tailwind CSS.',
      'Deployed production-ready applications using Vercel and Render.',
      'Focused on clean architecture, scalability, and user experience.',
    ],
    type: 'featured',
  },
  {
    title: 'Maintenance Technician II',
    company: 'VSP Vision Care',
    description:
      'Maintain and troubleshoot automated optical equipment, ensuring operational efficiency. Recognized for strong problem-solving skills and reliability.',
    type: 'current',
  },
  {
    title: 'Technical Experience',
    company: 'Baxter & Jabil',
    description:
      'Worked with medical devices and automated systems, including training new employees and improving operational processes.',
    type: 'previous',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 rounded-full border-4 border-background ${
                    exp.type === 'featured'
                      ? 'w-5 h-5 bg-primary shadow-[0_0_0_6px_rgba(59,130,246,0.12)]'
                      : 'w-4 h-4 bg-primary'
                  }`}
                ></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                  <div
                    className={`rounded-2xl p-6 transition-all duration-300 ${
                      exp.type === 'featured'
                        ? 'bg-card border border-primary/30 shadow-lg shadow-primary/5 hover:border-primary/60'
                        : 'bg-card border border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {exp.type === 'featured' && (
                        <span className="px-2 py-1 text-xs font-medium bg-primary text-white rounded-full">
                          Featured
                        </span>
                      )}
                      {exp.type === 'current' && (
                        <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          Current
                        </span>
                      )}
                      {exp.date && (
                        <span className="text-sm text-muted-foreground">{exp.date}</span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <p className="text-muted leading-relaxed">{exp.description}</p>
                    {exp.highlights && (
                      <ul className="mt-4 space-y-3 text-muted">
                        {exp.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-3 leading-relaxed">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
