const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'HTML/CSS' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python' },
      { name: 'Flask' },
      { name: 'REST APIs' },
      { name: 'JWT Auth' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'SQLAlchemy' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub' },
      { name: 'Postman' },
      { name: 'Vercel' },
      { name: 'Render' },
      { name: 'Cloudinary' },
      { name: 'Stripe' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="text-muted max-w-2xl mx-auto">
            Technologies I work with to build modern web applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-card-hover transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
