interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
  technologies: string[]
}

const timelineData: TimelineItem[] = [ 
  {
    year: "2023-2026",
    title: "Estudante",
    company: "Fundação Herminio Ometto - FHO",
    description: "Início dos estudos em programação. Foco em fundamentos de programação e desenvolvimento web.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
]

export default function Timeline() {
  return (
    <div className="bg-gray-900 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-blue-400 mb-8 text-center">Trajetória Profissional</h3>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-transparent"></div>

        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex items-start gap-6">
              {/* Timeline Dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900"></div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-blue-400">{item.title}</h4>
                    <p className="text-gray-300 font-medium">{item.company}</p>
                  </div>
                  <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                    {item.year}
                  </span>
                </div>

                <p className="text-gray-300 mb-4">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
