"use client"

import { useState } from "react"

interface Technology {
  name: string
  icon: string
  level: number
  category: string
  description: string
}

const technologies: Technology[] = [
  {
    name: "JavaScript",
    icon: "🟨",
    level: 90,
    category: "Frontend",
    description: "Linguagem principal para desenvolvimento web",
  },
  {
    name: "TypeScript",
    icon: "🔷",
    level: 85,
    category: "Frontend",
    description: "JavaScript com tipagem estática",
  },
  {
    name: "React",
    icon: "⚛️",
    level: 88,
    category: "Frontend",
    description: "Biblioteca para interfaces de usuário",
  },
  {
    name: "Next.js",
    icon: "▲",
    level: 82,
    category: "Frontend",
    description: "Framework React para produção",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    level: 90,
    category: "Frontend",
    description: "Framework CSS utility-first",
  },
  {
    name: "Node.js",
    icon: "🟢",
    level: 75,
    category: "Backend",
    description: "Runtime JavaScript para servidor",
  },
  {
    name: "Vue",
    icon: "🔵",
    level: 40,
    category: "Frontend",
    description: "Desenvolvimento de interfaces de usuário e aplicativos de página única",
  },
  {
    name: "Git",
    icon: "📚",
    level: 85,
    category: "Tools",
    description: "Controle de versão distribuído",
  },
]

const categories = ["Todos", "Frontend", "Backend", "Tools"]

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const filteredTechnologies =
    selectedCategory === "Todos" ? technologies : technologies.filter((tech) => tech.category === selectedCategory)

  return (
    <div className="bg-gray-900 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Stack Tecnológico</h3>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Technologies Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredTechnologies.map((tech) => (
          <div
            key={tech.name}
            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl">{tech.icon}</span>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-blue-400">{tech.name}</h4>
                <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">{tech.category}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-300">{tech.level}%</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: hoveredTech === tech.name ? `${tech.level}%` : "0%",
                }}
              />
            </div>

            <p className="text-sm text-gray-400">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
