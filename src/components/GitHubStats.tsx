"use client"

import { useState, useEffect } from "react"
import { Github, Star, GitFork } from "lucide-react"

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
  language: string
  updated_at: string
}

interface GitHubUser {
  login: string
  name: string
  bio: string
  public_repos: number
  followers: number
  following: number
  avatar_url: string
}

interface GitHubStatsProps {
  username: string
}

export default function GitHubStats({ username }: GitHubStatsProps) {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true)

        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`)
        if (!userResponse.ok) throw new Error("Usuário não encontrado")
        const userData = await userResponse.json()
        setUser(userData)

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        if (!reposResponse.ok) throw new Error("Erro ao buscar repositórios")
        const reposData = await reposResponse.json()
        setRepos(reposData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido")
      } finally {
        setLoading(false)
      }
    }

    if (username) {
      fetchGitHubData()
    }
  }, [username])

  if (loading) {
    return (
      <div className="bg-gray-900 rounded-2xl p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto"></div>
        <p className="text-gray-400 mt-4">Carregando dados do GitHub...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-gray-900 rounded-2xl p-8 text-center">
        <Github className="h-12 w-12 text-gray-600 mx-auto mb-4" />
        <p className="text-red-400">Erro: {error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* User Stats */}
      {user && (
        <div className="bg-gray-900 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={user.avatar_url || "/placeholder.svg"}
              alt={`Avatar de ${user.name}`}
              className="w-24 h-24 rounded-full border-4 border-blue-400"
            />
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold text-blue-400">{user.name}</h3>
              <p className="text-gray-400 mb-4">@{user.login}</p>
              {user.bio && <p className="text-gray-300 mb-4">{user.bio}</p>}

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
            </div>
          </div>
        </div>
      )}

      {/* Recent Repositories */}
      <div>
        <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Repositórios Recentes</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div key={repo.id} className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-lg font-semibold text-blue-400 truncate">{repo.name}</h4>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>

              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {repo.description || "Sem descrição disponível"}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-4">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-blue-400"></div>
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
    </div>
  )
}
