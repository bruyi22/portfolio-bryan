const experiences = [
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
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                  <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      {exp.type === 'current' && (
                        <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <p className="text-muted leading-relaxed">{exp.description}</p>
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
