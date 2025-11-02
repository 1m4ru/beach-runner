"use client"
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "./ui/button"

export function Header() {

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur  border-b border-border">
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
          <SignedOut>
            <SignInButton>
              <Button>Entrar</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
           <SignOutButton>Sair</SignOutButton>
          <UserButton showName={true} />
          </SignedIn>
        </div>
      </div>
    </header>
  )
}
