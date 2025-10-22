"use client"

import { Card } from "@/components/ui/card"

const stats = [
  { value: "2.500+", label: "Corredores Ativos" },
  { value: "150K+", label: "Treinos Registrados" },
  { value: "98%", label: "Taxa de Satisfação" },
  { value: "24/7", label: "Suporte Disponível" },
]

export function Stats() {
  return (
    <section id="stats" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center border border-border bg-gradient-to-br from-primary/5 to-accent/5"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-foreground/70 font-medium">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
