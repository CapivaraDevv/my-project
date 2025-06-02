export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <span>&copy; {new Date().getFullYear()} Pedro.dev. Todos os direitos reservados.</span>
        <div className="flex space-x-4">
          <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">
            GitHub
          </a>
          <a href="https://linkedin.com/in/seulinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/pedrohenriqkkkkkj/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-900">
            Instagram
          </a>
          {/* Adicione mais se quiser: Twitter, Instagram, etc */}
        </div>
      </div>
    </footer>
  );
}
