"use client"

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion" 

type AuthButtonsProps = {
  variant?: "default" | "compact"
  mode?: "signup" | "login" | "cta"
  className?: string
}

export function AuthButtons({
  variant = "default",
  mode = "cta",
  className,
}: AuthButtonsProps) {
  const isCompact = variant === "compact"

  return (
    <motion.div
      className={cn(
        "flex items-center justify-center gap-3",
        !isCompact && "flex-col sm:flex-row gap-4",
        className
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <SignedOut>
        <div className="flex gap-3">
          {(mode === "signup" || mode === "cta") && (
            <SignInButton mode="modal" forceRedirectUrl="/dashboard">
              <Button variant="sunset">
                Começar agora
              </Button>
            </SignInButton>
          )}

          {(mode === "login" || mode === "cta") && (
            <SignInButton mode="modal" forceRedirectUrl="/dashboard">
              <Button
                variant="outline"
                className="border-orange-400 text-orange-600 font-semibold hover:bg-orange-50"
              >
                Entrar
              </Button>
            </SignInButton>
          )}
        </div>
      </SignedOut>
      <SignedIn>
        <Link href="/dashboard">
          <Button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold shadow hover:opacity-90 hover:scale-[1.02] transition-transform">
            Dashboard
          </Button>
        </Link>
      </SignedIn>
    </motion.div>
  )
}
