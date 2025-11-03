import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "./ui/button"
import { AuthButtons } from "./auth-buttons"
import { LogOut } from "lucide-react"

// OBS: não usamos "use client" aqui de propósito!
// O Clerk já faz este header ser client-only automaticamente.
// Adicionar "use client" causaria erro de hidratação no SSR.

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          py-3 sm:py-4
          flex flex-wrap items-center justify-between
          gap-2 sm:gap-4
        "
      >
        <div className="flex items-center gap-2 min-w-[140px]">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">🏃</span>
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent whitespace-nowrap">
              Beach Runner
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-3 text-sm sm:text-base">
          <SignedOut>
            <SignInButton mode="modal">
              <AuthButtons variant="compact" mode="login" />
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center gap-1.5 sm:gap-3">
              <SignOutButton>
                <Button
                  variant="ghost"
                  className="text-muted-foreground hover:text-orange-500 transition text-sm sm:text-base px-2 sm:px-3"
                >
                  <LogOut
                   className="w-4 h-4 mr-1" />
                  Sair
                </Button>
              </SignOutButton>
              <UserButton
                showName={true}
                appearance={{
                  elements: {
                    userButtonBox: "flex items-center gap-2",
                    userButtonOuterIdentifier:
                      "text-sm sm:text-base font-medium text-foreground",
                  },
                }}
              />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  )
}
