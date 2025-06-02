import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <Link href="/" className="text-blue-400 font-bold text-xl">
              Pedro.dev
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              Desenvolvedor focado em criar soluções digitais modernas, acessíveis e impactantes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Links Rápidos</h3>
            <div className="mt-4 space-y-2">
              {["Sobre", "Projetos", "Skills", "Contato"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm text-gray-400 hover:text-blue-400"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Redes Sociais</h3>
            <div className="mt-4 flex space-x-6">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="mailto:seuemail@email.com" className="text-gray-400 hover:text-blue-400">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Pedro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
