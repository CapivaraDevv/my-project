"use client"

import { useState } from "react"

interface Skill {
  name: string
  level: number
  category: string
}

const skills: Skill[] = [
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "Python", level: 75, category: "Backend" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "CSS/Tailwind", level: 90, category: "Frontend" },
]

export default function SkillsRadar() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  // Configurações do radar
  const centerX = 150
  const centerY = 150
  const maxRadius = 120 // Raio máximo ajustado
  const gridLevels = [20, 40, 60, 80, 100] // Níveis do grid (0-100%)

  return (
    <div className="bg-gray-900 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-blue-400 mb-8 text-center">Radar de Habilidades</h3>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Radar Chart Visual */}
        <div className="relative flex justify-center">
          <div className="w-80 h-80 mx-auto relative">
            {/* SVG corrigido com proporções adequadas */}
            <svg className="w-full h-full" viewBox="0 0 300 300">
              {/* Grid circles - corrigido */}
              {gridLevels.map((level) => (
                <circle
                  key={level}
                  cx={centerX}
                  cy={centerY}
                  r={(level / 100) * maxRadius}
                  fill="none"
                  stroke="rgb(75, 85, 99)"
                  strokeWidth="1"
                  opacity="0.3"
                />
              ))}

              {/* Grid lines - 8 linhas para 8 skills */}
              {Array.from({ length: 8 }).map((_, index) => {
                const angle = (index * 45 - 90) * (Math.PI / 180)
                const x2 = centerX + maxRadius * Math.cos(angle)
                const y2 = centerY + maxRadius * Math.sin(angle)

                return (
                  <line
                    key={index}
                    x1={centerX}
                    y1={centerY}
                    x2={x2}
                    y2={y2}
                    stroke="rgb(75, 85, 99)"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                )
              })}

              {/* Labels dos níveis */}
              {gridLevels.map((level) => (
                <text
                  key={`label-${level}`}
                  x={centerX + 5}
                  y={centerY - (level / 100) * maxRadius + 5}
                  className="text-xs fill-gray-400"
                  fontSize="10"
                >
                  {level}%
                </text>
              ))}

              {/* Skill points e labels */}
              {skills.map((skill, index) => {
                const angle = (index * 45 - 90) * (Math.PI / 180)
                const radius = (skill.level / 100) * maxRadius
                const x = centerX + radius * Math.cos(angle)
                const y = centerY + radius * Math.sin(angle)

                // Posição do label (um pouco mais afastado)
                const labelRadius = maxRadius + 25
                const labelX = centerX + labelRadius * Math.cos(angle)
                const labelY = centerY + labelRadius * Math.sin(angle)

                return (
                  <g key={skill.name}>
                    {/* Ponto da skill */}
                    <circle
                      cx={x}
                      cy={y}
                      r={hoveredSkill === skill.name ? "6" : "4"}
                      fill={hoveredSkill === skill.name ? "rgb(96, 165, 250)" : "rgb(59, 130, 246)"}
                      className="cursor-pointer transition-all duration-200"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{
                        filter: hoveredSkill === skill.name ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))" : "none",
                      }}
                    />

                    {/* Label da skill */}
                    <text
                      x={labelX}
                      y={labelY}
                      textAnchor="middle"
                      className={`text-xs transition-all duration-200 ${
                        hoveredSkill === skill.name ? "fill-blue-300 font-semibold" : "fill-gray-300"
                      }`}
                      dominantBaseline="middle"
                      fontSize="11"
                    >
                      {skill.name}
                    </text>
                  </g>
                )
              })}

              {/* Área preenchida conectando os pontos */}
              <polygon
                points={skills
                  .map((skill, index) => {
                    const angle = (index * 45 - 90) * (Math.PI / 180)
                    const radius = (skill.level / 100) * maxRadius
                    const x = centerX + radius * Math.cos(angle)
                    const y = centerY + radius * Math.sin(angle)
                    return `${x},${y}`
                  })
                  .join(" ")}
                fill="rgba(59, 130, 246, 0.1)"
                stroke="rgb(59, 130, 246)"
                strokeWidth="2"
                className="transition-all duration-300"
                style={{
                  filter: hoveredSkill ? "drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))" : "none",
                }}
              />
            </svg>
          </div>
        </div>

        {/* Skills List */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-blue-400 mb-4">Detalhes das Habilidades</h4>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                hoveredSkill === skill.name
                  ? "bg-blue-600/20 border border-blue-400 transform scale-105"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between items-center mb-2">
                <span
                  className={`font-medium transition-colors ${
                    hoveredSkill === skill.name ? "text-blue-300" : "text-blue-400"
                  }`}
                >
                  {skill.name}
                </span>
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div
                  className={`h-2 rounded-full transition-all duration-1000 ${
                    hoveredSkill === skill.name
                      ? "bg-gradient-to-r from-blue-400 to-blue-300"
                      : "bg-gradient-to-r from-blue-500 to-blue-400"
                  }`}
                  style={{
                    width: `${skill.level}%`,
                    boxShadow: hoveredSkill === skill.name ? "0 0 10px rgba(59, 130, 246, 0.5)" : "none",
                  }}
                />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{skill.category}</span>
                {hoveredSkill === skill.name && (
                  <span className="text-xs text-blue-300 font-medium">
                    {skill.level >= 85 ? "Avançado" : skill.level >= 70 ? "Intermediário" : "Básico"}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legenda */}
      <div className="mt-8 text-center">
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Nível de Proficiência</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded"></div>
            <span>Progresso</span>
          </div>
        </div>
      </div>
    </div>
  )
}
