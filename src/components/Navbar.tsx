'use client';

import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-900">
          Pedro.dev
        </Link>
        <div className="hidden md:flex space-x-6 text-blue-900 font-medium">
          {[
            { name: "Sobre", href: "#sobre" },
            { name: "Projetos", href: "#projetos" },
            { name: "Skills", href: "#skills" },
            { name: "Contato", href: "#contato" },
          ].map(({ name, href }) => (
            <a
              key={href}
              href={href}
              className="hover:text-blue-700 transition-colors duration-200"
            >
              {name}
            </a>
          ))}
         
        </div>
         
      </div>
    </nav>
  );
}
