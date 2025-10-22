"use client"

import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { useAuth } from "@clerk/nextjs"
import Link from "next/link"

export function Header() {
  const { signOut } = useAuth()

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">🏃</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Beach Runner
            </span>
          </Link>
        </div>



        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center justify-end gap-8">
            <Link href="#feLinktures" className="text-foreground/70 hover:text-foreground transition">
              Funcionalidades
            </Link>
            <Link href="#stats" className="text-foreground/70 hover:text-foreground transition">
              Resultados
            </Link>
            <Link href="#cta" className="text-foreground/70 hover:text-foreground transition">
              Sobre
            </Link>
          </nav>
          <SignedOut>
            <Button variant="ghost" className="text-foreground">
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            <Button onClick={() => signOut()} >
              Logout
            </Button>
          </SignedIn>
          <UserButton />
        </div>
      </div>
    </header>
  )
}
