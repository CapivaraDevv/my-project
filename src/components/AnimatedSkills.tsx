"use client"

import { motion } from "framer-motion"
import { StaggerContainer, StaggerItem } from "./FramerAnimations"

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Python", "Git"]

export default function AnimatedSkills() {
  return (
    <section className="py-20 p-10 rounded-2xl bg-gray-900" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-12 text-blue-400"
      >
        Skills
      </motion.h2>

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-blue-400 font-semibold">
        {skills.map((skill, i) => (
          <StaggerItem key={skill}>
            <motion.div
              className="bg-gray-800 py-4 px-6 rounded-xl shadow cursor-pointer"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgb(55, 65, 81)",
                boxShadow: "0 8px 20px -5px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                },
              }}
            >
              <motion.span
                className="block"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.5,
                }}
              >
                {skill}
              </motion.span>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
