"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Partículas espaciais
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    // Criar partículas
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        color: ["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981", "#F59E0B"][Math.floor(Math.random() * 5)],
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Atualizar posição
        particle.x += particle.vx
        particle.y += particle.vy

        // Verificar bordas
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Desenhar partícula
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()

        // Efeito de brilho
        ctx.shadowBlur = 10
        ctx.shadowColor = particle.color
        ctx.fill()
        ctx.shadowBlur = 0

        // Conectar partículas próximas
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.strokeStyle = particle.color
              ctx.globalAlpha = 0.1 * (1 - distance / 100)
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      {/* Canvas de partículas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Nebulosas de fundo */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse at 10% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 90% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)
            `,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 120,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Estrelas distantes */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </>
  )
}
