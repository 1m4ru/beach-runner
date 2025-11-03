"use client"

import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 py-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-lg font-semibold">🏃‍♂️</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Beach Runner
            </span>
          </div>
          <span className="text-sm text-muted-foreground hidden sm:inline-block">
            — Rastreie seus treinos e domine seu desempenho.
          </span>
        </div>
        <Separator className="my-4 sm:hidden" />
        <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:w-auto gap-3">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © 2025 Beach Runner. Este é um projeto de portfólio desenvolvido por{" "}
            <span className="font-medium text-foreground">Maruan Moussa</span>.
          </p>

          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/maruan-moussa/"
              target="_blank"
              className="hover:text-orange-500 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://github.com/1m4ru"
              target="_blank"
              className="hover:text-orange-500 transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
