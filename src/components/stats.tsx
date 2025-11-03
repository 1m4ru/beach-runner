"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const stats = [
  { value: "2.500+", label: "Corredores Ativos" },
  { value: "150K+", label: "Treinos Registrados" },
  { value: "98%", label: "Taxa de Satisfação" },
  { value: "24/7", label: "Suporte Disponível" },
]

export function Stats() {
  return (
    <section id="stats" className="py-6 md:py-10 bg-gradient-to-b from-orange-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent mb-2">
            Nossa Comunidade em Números
          </h2>
          <p className="text-lg text-muted-foreground">
            O Beach Runner já está ajudando milhares de corredores a evoluírem todos os dias.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-8 text-center border border-border bg-white/95 backdrop-blur-sm hover:shadow-lg hover:border-orange-400/50 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">
                  {stat.value}
                </div>
                <p className="text-foreground/70 font-medium">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
