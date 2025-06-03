"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  category: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "PokeSite",
    description: "Site interativo sobre Pokémon com JavaScript",
    longDescription:
      "Aplicação web completa que consome a PokéAPI para exibir informações detalhadas sobre Pokémon. Inclui sistema de busca, filtros por tipo e geração, e interface responsiva.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["JavaScript", "HTML", "CSS", "PokéAPI"],
    githubUrl: "https://github.com/CapivaraDevv/PokeSite",
    liveUrl: "https://pokesite-demo.vercel.app",
    category: "Web",
    featured: true,
  },
  {
    id: 2,
    title: "Python Studies",
    description: "Coleção de projetos e algoritmos em Python",
    longDescription:
      "Repositório com diversos projetos em Python, incluindo algoritmos de ordenação, estruturas de dados, automação de tarefas e projetos de análise de dados.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/CapivaraDevv/Python",
    category: "Backend",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Este portfólio desenvolvido com Next.js",
    longDescription:
      "Portfólio pessoal moderno e responsivo, desenvolvido com as mais recentes tecnologias web. Inclui animações, tema claro/escuro e integração com GitHub.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/CapivaraDevv/portfolio",
    liveUrl: "https://pedrohenrique.dev",
    category: "Web",
    featured: true,
  },
]

const categories = ["Todos", "Web", "Mobile", "Backend", "Desktop"]

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    selectedCategory === "Todos" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {project.featured && (
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                ⭐ Destaque
              </div>
            )}

            <div className="relative overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 transition-colors">
                  <Github className="h-4 w-4 text-white" />
                </button>
                {project.liveUrl && (
                  <button className="p-2 bg-green-600 rounded-full hover:bg-green-500 transition-colors">
                    <ExternalLink className="h-4 w-4 text-white" />
                  </button>
                )}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded border border-blue-600/30"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs text-gray-400">+{project.technologies.length - 3}</span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">{project.category}</span>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">Ver detalhes →</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-blue-400 mb-4">{selectedProject.title}</h2>
              <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  Ver Código
                </a>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Ver Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
