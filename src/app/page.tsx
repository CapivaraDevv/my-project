import Navbar from "../components/Navbar"
import Footer from "@/components/Footer"
import GitHubStats from "@/components/GitHubStats"
import ContactForm from "@/components/ContactForm"
import TechStack from "@/components/TechStack"
import Timeline from "@/components/Timeline"
import ThemeToggle from "@/components/ThemeToggle"
import ScrollToTop from "@/components/ScrollToTop"
import StatsCounter from "@/components/StatsCounter"
import SkillsRadar from "@/components/SkillsRadar"
import InteractiveBackground from "@/components/InteractiveBackground"
import ProjectShowcase from "@/components/ProjectShowcase"
import EasterEggs from "@/components/EasterEggs"
import AnimatedHero from "@/components/AnimatedHero"
import AnimatedSkills from "@/components/AnimatedSkills"
import { FadeInUp, SlideInLeft, SlideInRight } from "@/components/FramerAnimations"

export const metadata = {
  title: "Pedro - Desenvolvedor Web",
  description:
    "Portfólio de Pedro - Desenvolvedor focado em criar soluções digitais modernas, acessíveis e impactantes.",
}

export default function Home() {
  return (
    <div className="bg-black text-gray-100 min-h-screen transition-colors duration-300">
      <InteractiveBackground />
      <EasterEggs />
      <ThemeToggle />
      <ScrollToTop />
      <Navbar />

      <main className="min-h-screen px-6 md:px-16">
        {/* Hero Section Animado */}
        <AnimatedHero />

        <FadeInUp>
          <section className="py-20" id="stats">
            <StatsCounter />
          </section>
        </FadeInUp>

        {/* Sobre Mim */}
        <SlideInLeft>
          <section className="py-20 max-w-4xl mx-auto" id="sobre">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Sobre Mim</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Sou um desenvolvedor apaixonado por tecnologia e inovação. Trabalho com JavaScript, TypeScript, React,
              Next.js e Python, sempre buscando aprender novas tecnologias e construir projetos que façam a diferença.
            </p>
          </section>
        </SlideInLeft>

        {/* GitHub Stats */}
        <FadeInUp>
          <section className="py-20" id="github">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">GitHub</h2>
            <GitHubStats username="CapivaraDevv" />
          </section>
        </FadeInUp>

        {/* Skills Radar */}
        <SlideInRight>
          <section className="py-20" id="skills-radar">
            <SkillsRadar />
          </section>
        </SlideInRight>

        {/* Tech Stack */}
        <FadeInUp>
          <section className="py-20" id="tech-stack">
            <TechStack />
          </section>
        </FadeInUp>

        {/* Timeline */}
        <SlideInLeft>
          <section className="py-20" id="experiencia">
            <Timeline />
          </section>
        </SlideInLeft>

        {/* Projetos showcase*/}
        <FadeInUp>
          <section className="py-20" id="projetos">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-400 no-animation">Projetos em Destaque</h2>
            <ProjectShowcase />
          </section>
        </FadeInUp>





        {/* Skills */}
        <AnimatedSkills />

        {/* Contact Form */}
        <FadeInUp>
          <section className="py-20" id="contato">
            <ContactForm />
          </section>
        </FadeInUp>
      </main>
      <Footer />
    </div>
  )
}
