"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function EasterEggs() {
  const [konamiCode, setKonamiCode] = useState<string[]>([])
  const [showCapivara, setShowCapivara] = useState(false)
  const [showMatrix, setShowMatrix] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [showSecret, setShowSecret] = useState(false)
  const [capivaraPosition, setCapivaraPosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{ id: number; left: string; top: string }>>([])
  const [mounted, setMounted] = useState(false)

  // Konami Code: ↑↑↓↓←→←→BA
  const konamiSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ]

  // Gerar partículas apenas no cliente para evitar erro de hidratação
  useEffect(() => {
    setMounted(true)
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }))
    setParticles(newParticles)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newCode = [...konamiCode, event.code]

      if (newCode.length > konamiSequence.length) {
        newCode.shift()
      }

      setKonamiCode(newCode)

      // Verifica se o código Konami foi digitado
      if (newCode.length === konamiSequence.length && newCode.every((key, index) => key === konamiSequence[index])) {
        setShowMatrix(true)
        setTimeout(() => setShowMatrix(false), 5000)
        setKonamiCode([])
      }

      // Easter egg: digite "capivara"
      const typedWord = newCode.slice(-8).join("").toLowerCase()
      if (typedWord.includes("capivara")) {
        setShowCapivara(true)
        setTimeout(() => setShowCapivara(false), 3000)
        setKonamiCode([])
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [konamiCode])

  // Easter egg: cliques no logo
  const handleLogoClick = () => {
    setClickCount((prev) => prev + 1)
    if (clickCount >= 9) {
      setShowSecret(true)
      setTimeout(() => setShowSecret(false), 4000)
      setClickCount(0)
    }
  }

  // Capivara que segue o mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (showCapivara) {
        setCapivaraPosition({ x: e.clientX, y: e.clientY })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [showCapivara])

  // Não renderizar até estar montado para evitar hidratação mismatch
  if (!mounted) {
    return (
      <div
        onClick={handleLogoClick}
        className="fixed top-4 left-4 z-[60] cursor-pointer select-none"
        title="Clique 10 vezes... 🤫"
      >
        <div className="text-2xl">🦫</div>
      </div>
    )
  }

  return (
    <>
      {/* Logo clicável para easter egg - Z-INDEX CORRIGIDO */}
      <div
        onClick={handleLogoClick}
        className="fixed top-4 left-4 z-[60] cursor-pointer select-none"
        title="Clique 10 vezes... 🤫"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl"
          animate={clickCount > 5 ? { rotate: [0, 10, -10, 0] } : {}}
          transition={{ duration: 0.3 }}
        >
          🦫
        </motion.div>
      </div>

      {/* Capivara que segue o mouse */}
      <AnimatePresence>
        {showCapivara && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={{
              position: "fixed",
              left: capivaraPosition.x - 25,
              top: capivaraPosition.y - 25,
              pointerEvents: "none",
              zIndex: 9999,
            }}
            className="text-4xl"
          >
            🦫
          </motion.div>
        )}
      </AnimatePresence>

      {/* Efeito Matrix */}
      <AnimatePresence>
        {showMatrix && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(0, 255, 0, 0.1))",
              fontFamily: "monospace",
            }}
          >
            <div className="matrix-rain">
              {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: -100 }}
                  animate={{ y: typeof window !== "undefined" ? window.innerHeight + 100 : 1000 }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                  className="absolute text-green-400 text-sm opacity-70"
                  style={{
                    left: `${Math.random() * 100}%`,
                  }}
                >
                  {Array.from({ length: 20 })
                    .map(() => String.fromCharCode(0x30a0 + Math.random() * 96))
                    .join("")}
                </motion.div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-green-400 text-4xl font-mono font-bold text-center"
              >
                <div>KONAMI CODE ATIVADO!</div>
                <div className="text-xl mt-2">🦫 CAPIVARA HACKER MODE 🦫</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mensagem secreta */}
      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            className="fixed inset-0 z-[9997] flex items-center justify-center pointer-events-none"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl text-center shadow-2xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="text-6xl mb-4"
              >
                🦫
              </motion.div>
              <h2 className="text-2xl font-bold mb-2">PARABÉNS!</h2>
              <p className="text-lg">Você encontrou o easter egg secreto!</p>
              <p className="text-sm mt-2 opacity-80">A capivara aprova sua curiosidade! 🎉</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Partículas flutuantes aleatórias - CORRIGIDO PARA EVITAR HIDRATAÇÃO MISMATCH */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}
      </div>

      {/* Dica sutil para os easter eggs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 5 }}
        className="fixed bottom-2 left-2 text-xs text-gray-500 pointer-events-none z-40"
      >
        💡 Dica: Tente o código Konami ou digite "capivara"...
      </motion.div>
    </>
  )
}
