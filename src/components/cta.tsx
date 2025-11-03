"use client"

import { AuthButtons } from "./auth-buttons"

export function CTA() {
  return (
    <section id="cta" className="py-8 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Pronto para Transformar Seus Treinos?
          </h2>
          <p className="text-xl text-foreground/70 text-balance">
            Junte-se a milhares de corredores que já estão evoluindo com o Beach Runner
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <AuthButtons mode="signup" />
        </div>
        <p className="text-sm text-foreground/60">✨ Sem cartão de crédito necessário. Comece em segundos.</p>
      </div>
    </section>
  )
}
