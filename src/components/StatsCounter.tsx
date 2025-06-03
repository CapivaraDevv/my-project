"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Code, Users, Coffee, Award } from "lucide-react"

interface Stat {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
}

const stats: Stat[] = [
  {
    icon: <Code className="h-8 w-8" />,
    value: 5,
    label: "Projetos Concluídos",
    suffix: "+",
  },
  {
    icon: <Users className="h-8 w-8" />,
    value: 20,
    label: "Clientes Satisfeitos",
    suffix: "+",
  },
  {
    icon: <Coffee className="h-8 w-8" />,
    value: 1000,
    label: "Xícaras de Café",
    suffix: "+",
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: 1,
    label: "Anos de Experiência",
    suffix: "+",
  },
]

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return { count, ref }
}

export default function StatsCounter() {
  const statCounters = stats.map((stat, index) => {
    const { count, ref } = useCountUp(stat.value)

    return (
      <div key={index} ref={ref} className="text-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
        <div className="text-blue-400 mb-4 flex justify-center">{stat.icon}</div>
        <div className="text-3xl font-bold text-white mb-2">
          {count}
          {stat.suffix}
        </div>
        <div className="text-gray-400 text-sm">{stat.label}</div>
      </div>
    )
  })

  return (
    <div className="bg-gray-900 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-blue-400 mb-8 text-center">Estatísticas</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">{statCounters}</div>
    </div>
  )
}
