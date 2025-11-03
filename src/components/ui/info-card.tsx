"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface InfoCardProps {
  icon?: React.ReactNode
  title?: string
  description?: string
  children?: React.ReactNode
  index?: number
  className?: string
  animate?: boolean
}

export function InfoCard({
  icon,
  title,
  description,
  children,
  index = 0,
  className,
  animate = true,
}: InfoCardProps) {
  const MotionWrapper = animate ? motion.div : "div"

  return (
    <MotionWrapper
      key={index}
      initial={animate ? { opacity: 0, y: 40 } : {}}
      whileInView={animate ? { opacity: 1, y: 0 } : {}}
      viewport={animate ? { once: true } : {}}
      transition={animate ? { duration: 0.5, delay: index * 0.1 } : {}}
    >
      <Card
        className={cn(
          "p-6 sm:p-8 h-full border border-border hover:border-orange-400/50 hover:shadow-lg transition-all duration-300 group bg-white/95 backdrop-blur-sm",
          className
        )}
      >
        <CardContent className="space-y-3">
          {icon && (
            <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          )}
          {title && (
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </CardContent>
      </Card>
    </MotionWrapper>
  )
}
