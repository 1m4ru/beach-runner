"use client"

import { motion } from "framer-motion"
import { FEATURES } from "@/constants/features"
import { InfoCard } from "./ui/info-card"

export function Features() {
  return (
    <section
      id="features"
      className="pt-8 pb-2 md:pt-12 md:pb-4 bg-gradient-to-b from-white to-orange-50/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,180,90,0.1),_transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent mb-2">
            Funcionalidades Poderosas
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para dominar seus treinos e alcançar seus objetivos.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
          <InfoCard
          key={index}
          index={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
          ))}
        </div>
      </div>
    </section>
  )
}
