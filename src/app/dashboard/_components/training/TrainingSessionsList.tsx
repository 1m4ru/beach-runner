"use client"

import { useMediaQuery } from "@/hooks/useMediaQuery"
import { useTrainingSessions } from "@/hooks/useTrainingSessions"
import { TrainingSessionsMobile } from "./TrainingSessionsMobile"
import { TrainingSessionsTable } from "./TrainingSessionsTable"

export const TrainingSessionsList = () => {
  const { trainingSessions, isLoading, isError } = useTrainingSessions()
  const isMobile = useMediaQuery("(max-width: 768px)")

  if (isLoading) {
    return (
      <p className="text-muted-foreground text-center py-4 animate-pulse">
        Carregando...
      </p>
    )
  }

  if (isError) {
    return (
      <p className="text-destructive text-center py-4">
        Ocorreu um erro ao carregar as corridas. Tente novamente.
      </p>
    )
  }

  if (trainingSessions.length === 0) {
    return (
      <p className="text-muted-foreground text-center py-4">
        Nenhuma corrida registrada ainda.
      </p>
    )
  }

  return isMobile ? (
    <TrainingSessionsMobile sessions={trainingSessions} />
  ) : (
    <TrainingSessionsTable sessions={trainingSessions} />
  )
}
