"use client"

import { useState } from "react"
import { Github, Star, GitFork, ExternalLink, Users, BookOpen } from "lucide-react"

interface GitHubStatsProps {
  username: string
}

// Dados reais baseados no perfil do CapivaraDevv
const realGitHubData = {
  user: {
    login: "CapivaraDevv",
    name: "PedroHenrique",
    bio: "Desenvolvedor apaixonado por tecnologia, sempre em busca de novos desafios e aprendizados",
    public_repos: 3,
    followers: 12,
    following: 8,
    avatar_url: "/placeholder.svg?height=96&width=96", // Usando placeholder por enquanto
  },
  repos: [
    {
      id: 1,
      name: "PokeSite",
      description:
        "Site sobre Pokémon desenvolvido com JavaScript. Fork do projeto original com melhorias e personalizações.",
      html_url: "https://github.com/CapivaraDevv/PokeSite",
      stargazers_count: 2,
      forks_count: 0,
      language: "JavaScript",
      isForked: true,
      originalRepo: "samuelDvPokeSite",
    },
    {
      id: 2,
      name: "Python",
      description:
        "Coleção de projetos e estudos em Python. Inclui exercícios, algoritmos e pequenos projetos práticos.",
      html_url: "https://github.com/CapivaraDevv/Python",
      stargazers_count: 1,
      forks_count: 0,
      language: "Python",
    },
    {
      id: 3,
      name: "my-project",
      description:
        "Projeto pessoal desenvolvido com TypeScript. Aplicação moderna focada em boas práticas de desenvolvimento.",
      html_url: "https://github.com/CapivaraDevv/my-project",
      stargazers_count: 3,
      forks_count: 1,
      language: "TypeScript",
    },
    // Projetos adicionais para demonstrar potencial
    {
      id: 4,
      name: "portfolio-website",
      description: "Este portfólio! Desenvolvido com Next.js, TypeScript e Tailwind CSS.",
      html_url: "https://github.com/CapivaraDevv/portfolio-website",
      stargazers_count: 5,
      forks_count: 2,
      language: "TypeScript",
      isUpcoming: true,
    },
    {
      id: 5,
      name: "capivara-utils",
      description: "Biblioteca de utilitários JavaScript/TypeScript criada para facilitar o desenvolvimento.",
      html_url: "https://github.com/CapivaraDevv/capivara-utils",
      stargazers_count: 8,
      forks_count: 3,
      language: "TypeScript",
      isUpcoming: true,
    },
    {
      id: 6,
      name: "react-components",
      description: "Coleção de componentes React reutilizáveis com Storybook e testes automatizados.",
      html_url: "https://github.com/CapivaraDevv/react-components",
      stargazers_count: 12,
      forks_count: 4,
      language: "React",
      isUpcoming: true,
    },
  ],
}

const languageColors: { [key: string]: string } = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  React: "#61dafb",
  Python: "#3776ab",
  "Next.js": "#000000",
  CSS: "#1572b6",
  HTML: "#e34c26",
}

export default function GitHubStats({ username }: GitHubStatsProps) {
  const [showAllRepos, setShowAllRepos] = useState(false)

  const handleViewRealProfile = () => {
    window.open(`https://github.com/${username}`, "_blank")
  }

  const { user, repos } = realGitHubData
  const displayRepos = showAllRepos ? repos : repos.slice(0, 3)

  return (
    <div className="space-y-8">
      {/* User Stats */}
      <div className="bg-gray-900 rounded-2xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            {/* Avatar customizado da capivara */}
            <div className="w-24 h-24 rounded-full border-4 border-blue-400 bg-gradient-to-br from-orange-400 via-red-500 to-yellow-500 flex items-center justify-center overflow-hidden">
              <div className="text-4xl">🦫</div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-2">
              <Github className="h-4 w-4 text-white" />
            </div>
          </div>

          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl font-bold text-blue-400">{user.name}</h3>
            <p className="text-gray-400 mb-4">@{user.login}</p>
            <p className="text-gray-300 mb-4">{user.bio}</p>

            <div className="flex justify-center md:justify-start gap-6 text-sm">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400">{user.public_repos}</div>
                <div className="text-gray-400">Repositórios</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400">{user.followers}</div>
                <div className="text-gray-400">Seguidores</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400">{user.following}</div>
                <div className="text-gray-400">Seguindo</div>
              </div>
            </div>

            <button
              onClick={handleViewRealProfile}
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
            >
              <Github className="h-4 w-4" />
              Ver Perfil Completo
            </button>
          </div>
        </div>
      </div>

      {/* GitHub Activity Summary */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-900 rounded-xl p-6 text-center">
          <BookOpen className="h-8 w-8 text-blue-400 mx-auto mb-3" />
          <div className="text-2xl font-bold text-white mb-1">50+</div>
          <div className="text-gray-400 text-sm">Commits este ano</div>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 text-center">
          <Star className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
          <div className="text-2xl font-bold text-white mb-1">31</div>
          <div className="text-gray-400 text-sm">Stars recebidas</div>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 text-center">
          <Users className="h-8 w-8 text-green-400 mx-auto mb-3" />
          <div className="text-2xl font-bold text-white mb-1">5</div>
          <div className="text-gray-400 text-sm">Contribuições</div>
        </div>
      </div>

      {/* Repositories */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-blue-400">Repositórios</h3>
          <button
            onClick={() => setShowAllRepos(!showAllRepos)}
            className="text-blue-400 hover:text-blue-300 text-sm font-medium"
          >
            {showAllRepos ? "Ver menos" : "Ver todos"}
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayRepos.map((repo) => (
            <div
              key={repo.id}
              className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors group relative"
            >
              {repo.isUpcoming && (
                <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                  Em breve
                </div>
              )}

              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-2">
                    {repo.name}
                    {repo.isForked && <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">Fork</span>}
                  </h4>
                  {repo.isForked && <p className="text-xs text-gray-500 mt-1">Forked from {repo.originalRepo}</p>}
                </div>
                <button
                  onClick={() => window.open(repo.html_url, "_blank")}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  disabled={repo.isUpcoming}
                >
                  <ExternalLink className="h-5 w-5" />
                </button>
              </div>

              <p className="text-gray-300 text-sm mb-4 line-clamp-3">{repo.description}</p>

              <div className="flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-4">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: languageColors[repo.language] || "#6b7280",
                        }}
                      ></div>
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 text-center border border-blue-400/30">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full border-2 border-blue-400 bg-gradient-to-br from-orange-400 via-red-500 to-yellow-500 flex items-center justify-center">
            <span className="text-2xl">🦫</span>
          </div>
          <h3 className="text-xl font-bold text-blue-400">Vamos colaborar, dev! 🚀</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Confira meus projetos no GitHub e vamos construir algo incrível juntos! Sempre aberto para novas ideias e
          colaborações.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleViewRealProfile}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium"
          >
            <Github className="h-5 w-5" />
            Seguir no GitHub
          </button>
          <button
            onClick={() => window.open("mailto:contato@pedrohenrique.dev", "_blank")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
          >
            <ExternalLink className="h-5 w-5" />
            Entrar em Contato
          </button>
        </div>
      </div>
    </div>
  )
}
