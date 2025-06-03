"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { FloatingElement, PulseElement } from "./FramerAnimations"

export default function AnimatedHero() {
  const [mounted, setMounted] = useState(false)
  const [heroParticles, setHeroParticles] = useState<Array<{ id: number; left: string; delay: number }>>([])

  useEffect(() => {
    setMounted(true)
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
    }))
    setHeroParticles(newParticles)
  }, [])

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  return (
    <section className="flex flex-col items-center justify-center text-center py-24 gap-6 relative overflow-hidden">
      {/* Elementos decorativos flutuantes */}
      <FloatingElement className="absolute top-10 left-10">
        <div className="text-4xl opacity-20">💻</div>
      </FloatingElement>
      <FloatingElement className="absolute top-20 right-20">
        <div className="text-3xl opacity-20">⚡</div>
      </FloatingElement>
      <FloatingElement className="absolute bottom-20 left-20">
        <div className="text-3xl opacity-20">🚀</div>
      </FloatingElement>

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10">
        <motion.h1 variants={textVariants} className="text-5xl font-extrabold tracking-tight text-blue-400 relative">
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto]"
          >
            Olá, eu sou o PedroHenrique
          </motion.span>
          <motion.span
            animate={{
              rotate: [0, 14, -8, 14, -4, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 3,
            }}
            className="inline-block ml-2"
          >
            👋
          </motion.span>
        </motion.h1>

        <motion.p variants={textVariants} className="text-xl max-w-2xl text-gray-300 relative">
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Desenvolvedor apaixonado por tecnologia, sempre em busca de novos desafios e aprendizados.
          </motion.span>
        </motion.p>

        <motion.div variants={textVariants}>
          <PulseElement>
            <motion.a
              href="#projetos"
              className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition-colors inline-block"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Navegar para seção de projetos"
            >
              <motion.span
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                Ver Projetos →
              </motion.span>
            </motion.a>
          </PulseElement>
        </motion.div>
      </motion.div>

      {/* Efeito de partículas no fundo - CORRIGIDO */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {heroParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: particle.delay,
              }}
              style={{
                left: particle.left,
                bottom: 0,
              }}
            />
          ))}
        </div>
      )}
    </section>
  )
}
