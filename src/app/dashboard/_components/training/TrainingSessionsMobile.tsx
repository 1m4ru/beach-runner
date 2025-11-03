"use client"

import { motion, AnimatePresence } from "framer-motion"
import { InfoCard } from "@/components/ui/info-card"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { usePagination } from "@/hooks/usePagination"
import { PaginationControls } from "./PaginationControls"
import { TrainingSession } from "@/types/training-session"

interface TrainingSessionsTableProps {
  sessions: TrainingSession[]
}

export const TrainingSessionsMobile = ({ sessions }:TrainingSessionsTableProps) => {
  const { currentPage, totalPages, paginatedData, nextPage, prevPage } = usePagination({
    data: sessions,
    itemsPerPage: 5,
  })
  return (
    <Card className="overflow-hidden">
      <CardHeader className="text-lg font-bold text-foreground">
        <CardTitle>Histórico de Corridas 🏃‍♂️</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        <AnimatePresence mode="wait">
          {paginatedData.length === 0 ? (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="text-center text-muted-foreground text-sm py-6"
            >
              Nenhuma corrida registrada ainda. 🏖️
            </motion.div>
          ) : (
            paginatedData.map((session) => (
              <motion.div
                key={`mobile-${session.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <InfoCard className="p-4">
                  <p className="text-sm font-medium">
                    <span className="text-muted-foreground">Data:</span>{" "}
                    {new Date(session.session_datetime).toLocaleString("pt-BR", {
                      dateStyle: "short",
                      timeStyle: "short",
                    })}
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Distância:</span>{" "}
                    {session.distance_km} km
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Duração:</span>{" "}
                    {session.duration_minutes} min
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Calorias:</span>{" "}
                    {session.calories_burned_kcal} kcal
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Ritmo:</span>{" "}
                    {session.average_pace_km_per_min}
                  </p>
                </InfoCard>
              </motion.div>
            ))
          )}
        </AnimatePresence>

        {totalPages > 1 && (
         <PaginationControls
         currentPage={currentPage}
         totalPages={totalPages}
         onNext={nextPage}
         onPrev={prevPage}
       />
        )}
      </CardContent>
    </Card>
  )
}

  

  
