"use client"

import { Card } from "@/components/ui/card"

const features = [
  {
    icon: "📊",
    title: "Registro Detalhado",
    description: "Registre data, hora, distância, duração, calorias e ritmo médio de cada treino com facilidade.",
  },
  {
    icon: "📈",
    title: "Evolução Gráfica",
    description: "Visualize sua progressão ao longo do tempo com gráficos intuitivos e análises detalhadas.",
  },
  {
    icon: "🔐",
    title: "Autenticação Segura",
    description: "Crie sua conta com segurança e acesse seus dados de qualquer lugar, a qualquer momento.",
  },
  {
    icon: "⚡",
    title: "Performance em Tempo Real",
    description: "Acompanhe seu ritmo médio e performance em cada sessão de treino.",
  },
  {
    icon: "📱",
    title: "Interface Intuitiva",
    description: "Design moderno e fácil de usar, otimizado para desktop e mobile.",
  },
  {
    icon: "🎯",
    title: "Histórico Completo",
    description: "Acesse facilmente todos os seus registros anteriores e acompanhe sua consistência.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Funcionalidades Poderosas</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
            Tudo que você precisa para dominar seus treinos e alcançar seus objetivos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 border border-border hover:border-primary/50 transition-colors group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
