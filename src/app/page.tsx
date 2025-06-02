import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-gray-100 min-h-screen">
      <Navbar />

      <main className="min-h-screen px-6 md:px-16">

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-24 gap-6">
          <h1
            className="text-5xl font-extrabold tracking-tight text-blue-400 fadeInUp glowBlue"
            style={{ animationDelay: '0.1s' }}
          >
            Olá, eu sou o Pedro 👋
          </h1>
          <p
            className="text-xl max-w-2xl text-gray-300 fadeInUp"
            style={{ animationDelay: '0.3s' }}
          >
            Desenvolvedor focado em criar soluções digitais modernas, acessíveis e impactantes.
          </p>
          <a
            href="#projetos"
            className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-full pulseSlow hover:bg-blue-500 hoverLift"
            style={{ animationDelay: '0.5s' }}
          >
            Ver Projetos
          </a>
        </section>

        {/* Sobre Mim */}
        <section className="py-20 max-w-4xl mx-auto" id="sobre">
          <h2 className="text-3xl font-bold mb-4 text-blue-400 fadeInUp glowBlue" style={{ animationDelay: '0.6s' }}>
            Sobre Mim
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed fadeInUp" style={{ animationDelay: '0.7s' }}>
            Sou um desenvolvedor apaixonado por tecnologia e inovação. Trabalho com JavaScript, TypeScript, React, Next.js e tenho experiência em construir projetos modernos com foco em usabilidade e performance.
          </p>
        </section>

        {/* Projetos */}
        <section className="py-20" id="projetos">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400 fadeInUp glowBlue" style={{ animationDelay: '0.8s' }}>
            Projetos em Destaque
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["EcoSol", "Portfólio", "Dashboard Admin"].map((projeto, i) => (
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
                  href="#"
                  className="inline-block mt-4 text-blue-400 font-medium  hover:text-blue-300"
                >
                  Ver Projeto →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="py-20 p-10 rounded-2xl bg-gray-900" id="skills">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400 fadeInUp glowBlue" style={{ animationDelay: '1.3s' }}>
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-blue-400 font-semibold">
            {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "C#"].map((skill, i) => (
              <div
                key={skill}
                className="bg-gray-800 py-4 px-6 rounded-xl shadow cursor-default bounceMini fadeInUp hoverLift"
                style={{ animationDelay: `${1.4 + i * 0.1}s` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Contato */}
        <section className="py-20 text-center" id="contato">
          <h2 className="text-3xl font-bold mb-6 text-blue-400 fadeInUp glowBlue" style={{ animationDelay: '2s' }}>
            Vamos trabalhar juntos?
          </h2>
          <p className="text-gray-300 text-lg mb-4 fadeInUp" style={{ animationDelay: '2.1s' }}>
            Entre em contato para discutirmos ideias ou projetos!
          </p>
          <a
            href="mailto:seuemail@email.com"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition pulseSlow hoverLift"
            style={{ animationDelay: '2.2s' }}
          >
            Fale comigo
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
