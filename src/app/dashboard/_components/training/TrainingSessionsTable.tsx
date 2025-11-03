"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { usePagination } from "@/hooks/usePagination"
import { PaginationControls } from "./PaginationControls"
import type { TrainingSession } from "@/types/training-session"

interface TrainingSessionsTableProps {
  sessions: TrainingSession[]
}

export const TrainingSessionsTable = ({ sessions }:TrainingSessionsTableProps ) => {
  const { currentPage, totalPages, paginatedData, nextPage, prevPage } = usePagination({
    data: sessions,
    itemsPerPage: 5,
  })

  const hasData = paginatedData && paginatedData.length > 0

  return (
    <Card className="overflow-hidden">
      <CardHeader className="text-lg font-bold text-foreground">
        <CardTitle>Histórico de Corridas 🏃‍♂️</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto rounded-lg border border-border mt-2">
          {hasData ? (
            <Table className="min-w-full text-sm">
              <TableHeader className="bg-muted/40">
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Distância</TableHead>
                  <TableHead>Duração</TableHead>
                  <TableHead>Calorias</TableHead>
                  <TableHead>Ritmo Médio</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <AnimatePresence mode="wait">
                  {paginatedData.map((session) => (
                    <motion.tr
                      key={`table-${session.id}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="hover:bg-muted/30 transition"
                    >
                      <TableCell>
                        {new Date(session.session_datetime).toLocaleString("pt-BR", {
                          dateStyle: "short",
                          timeStyle: "short",
                        })}
                      </TableCell>
                      <TableCell>{Number(session.distance_km)} km</TableCell>
                      <TableCell>{session.duration_minutes} min</TableCell>
                      <TableCell>{session.calories_burned_kcal} kcal</TableCell>
                      <TableCell>{Number(session.average_pace_km_per_min)}</TableCell>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </TableBody>
            </Table>
          ) : (
            <motion.div
              key="empty-table"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="text-center text-muted-foreground text-sm py-8"
            >
              Nenhuma corrida registrada ainda. 🏃‍♀️
            </motion.div>
          )}
        </div>

        {totalPages > 1 && hasData && (
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
