import Navbar from "../components/Navbar"
import Footer from "@/components/Footer"
import GitHubStats from "@/components/GitHubStats"
import ContactForm from "@/components/ContactForm"
import TechStack from "@/components/TechStack"
import Timeline from "@/components/Timeline"
import ThemeToggle from "@/components/ThemeToggle"
import ScrollToTop from "@/components/ScrollToTop"
import StatsCounter from "@/components/StatsCounter"

export const metadata = {
  title: "Pedro - Desenvolvedor Web",
  description:
    "Portfólio de Pedro - Desenvolvedor focado em criar soluções digitais modernas, acessíveis e impactantes.",
}

export default function Home() {
  return (
    <div className="bg-black text-gray-100 min-h-screen transition-colors duration-300">
      <ThemeToggle />
      <ScrollToTop />
      <Navbar />

      <main className="min-h-screen px-6 md:px-16">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-24 gap-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-blue-400 no-animation">Olá, eu sou o Pedro</h1>
          <p className="text-xl max-w-2xl text-gray-300 no-animation">
            Desenvolvedor focado em criar soluções digitais modernas, acessíveis e impactantes.
          </p>
          <a
            href="#projetos"
            className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-full pulseSlow hover:bg-blue-500 hoverLift"
            style={{ animationDelay: "0.5s" }}
            aria-label="Navegar para seção de projetos"
          >
            Ver Projetos
          </a>
        </section>

        <section className="py-20" id="stats">
          <StatsCounter />
        </section>

        {/* Sobre Mim */}
        <section className="py-20 max-w-4xl mx-auto" id="sobre">
          <h2 className="text-3xl font-bold mb-4 text-blue-400 no-animation">Sobre Mim</h2>
          <p className="text-gray-300 text-lg leading-relaxed fadeInUp" style={{ animationDelay: "0.7s" }}>
            Sou um desenvolvedor apaixonado por tecnologia e inovação. Trabalho com JavaScript, TypeScript, React,
            Next.js e tenho experiência em construir projetos modernos com foco em usabilidade e performance.
          </p>
        </section>

        {/* GitHub Stats */}
        <section className="py-20" id="github">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400 no-animation">GitHub</h2>
          <GitHubStats username="CapivaraDevv" />
        </section>

        {/* Tech Stack */}
        <section className="py-20" id="tech-stack">
          <TechStack />
        </section>

        {/* Timeline */}
        <section className="py-20" id="experiencia">
          <Timeline />
        </section>

        {/* Projetos */}
        <section className="py-20" id="projetos">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400 no-animation">Projetos em Destaque</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {["EcoSol", "Portfólio"].map((projeto, i) => (
              <div
                key={projeto}
                className="bg-gray-900 rounded-2xl shadow-lg p-6 hover:scale-[1.05] hover:shadow-blue-600 transition transform cursor-pointer fadeInUp hoverLift"
                style={{ animationDelay: `${0.9 + i * 0.15}s` }}
              >
                <h3 className="text-xl font-semibold text-blue-400">{projeto}</h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Uma breve descrição do projeto {projeto}. Veja mais detalhes clicando abaixo.
                </p>
                <a
                  href={`/projetos/${projeto.toLowerCase()}`}
                  className="inline-block mt-4 text-blue-400 font-medium hover:text-blue-300"
                >
                  Ver Projeto →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="py-20 p-10 rounded-2xl bg-gray-900" id="skills">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400 no-animation">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-blue-400 font-semibold">
            {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "C#"].map((skill, i) => (
              <div
                key={skill}
                className="bg-gray-800 py-4 px-6 rounded-xl shadow skillCard scaleIn"
                style={{ animationDelay: `${1.4 + i * 0.1}s` }}
              >
                <span className="block bounceMini" style={{ animationDelay: `${2 + i * 0.1}s` }}>
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20" id="contato">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}
