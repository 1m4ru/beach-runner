"use client"

import Link from "next/link"

export function Footer() {

  const footerLinks =[
    {
      title: "Produto",
      items: [
        {label: "Funcionalidades", href: "#features"},
        {label: "Preços", href: "#pricing"},
        {label: "Segurança", href: "#security"},
      ]
    },
    {
      title: "Empresa",
      items: [
        {label: "Sobre", href: "#about"},
        {label: "Blog", href: "#blog"},
        {label: "Contato", href: "#contact"},
      ]
    }
  ]
  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">🏃</span>
              </div>
              <span className="font-bold text-foreground">Beach Runner</span>
            </div>
            <p className="text-sm text-foreground/70">Rastreie seus treinos, domine seu desempenho.</p>
          </div>

          <div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-foreground transition">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Termos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-foreground/60">© 2025 Beach Runner. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-foreground/60 hover:text-foreground transition">
              Twitter
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition">
              Instagram
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
