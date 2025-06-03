"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme) {
      setIsDark(savedTheme === "dark")
    } else {
      setIsDark(prefersDark)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      if (isDark) {
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
      }
    }
  }, [isDark, mounted])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  // Evita hidratação mismatch
  if (!mounted) {
    return (
      <div className="fixed bottom-8 left-8 z-[9999] p-3 bg-gray-800 rounded-full w-12 h-12 animate-pulse shadow-lg" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 left-8 z-[9999] p-3 bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700 dark:bg-gray-800/90 dark:hover:bg-gray-700 light:bg-white/90 light:hover:bg-gray-100 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 border border-gray-600 dark:border-gray-600 light:border-gray-300 group"
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      <div className="relative">
        {isDark ? (
          <Sun className="h-5 w-5 text-yellow-400 group-hover:rotate-180 transition-transform duration-300" />
        ) : (
          <Moon className="h-5 w-5 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
        )}
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        {isDark ? "Modo claro" : "Modo escuro"}
      </div>
    </button>
  )
}
