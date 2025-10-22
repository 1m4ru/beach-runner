"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Dados do formulário:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Entre em Contato</h2>
          <p className="text-xl text-foreground/70 text-balance">
            Tem dúvidas? Quer saber mais sobre o Beach Runner? Envie-nos uma mensagem!
          </p>
        </div>

        <Card className="p-8 md:p-12 border border-border">
          {submitted ? (
            <div className="text-center space-y-4">
              <div className="text-5xl">✓</div>
              <h3 className="text-2xl font-bold text-foreground">Mensagem Enviada!</h3>
              <p className="text-foreground/70">Obrigado por entrar em contato. Responderemos em breve!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu.email@exemplo.com"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(11) 99999-9999"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-colors"
              >
                Enviar Mensagem
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  )
}
