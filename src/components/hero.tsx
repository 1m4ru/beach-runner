"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Highlight } from "./ui/Highlight"
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import Link from "next/link"
export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 ">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-accent/20 rounded-full">
                <span className="text-sm color-black font-semibold text-black">🌊 Bem-vindo ao Beach Runner</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Rastreie Seus Treinos, Domine Seu Desempenho, com <Highlight>Beach Runner</Highlight>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed text-balance">
                A plataforma completa para corredores que querem acompanhar sua evolução, otimizar seu ritmo e alcançar
                seus objetivos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SignedOut>
                <SignInButton>
                  <div className="flex gap-4">
                    <Button>Crie Sua Conta</Button>
                    <Button>Entrar</Button>
                  </div>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard">
                  <Button>Dashboard</Button>
                </Link>
              </SignedIn>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold border-2 border-background"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-foreground/70">
                <span className="font-semibold text-foreground">+2.500</span> corredores já estão evoluindo
              </p>
            </div>
          </div>

          <div className="relative w-full h-64 sm:h-80 md:h-[500px]">
            <Image
              src="/beach-runner-hero.jpg"
              alt="Corredor na praia"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
