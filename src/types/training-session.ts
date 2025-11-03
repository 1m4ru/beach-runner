import type { training_session as PrismaTrainingSession } from "@prisma/client"

export type TrainingSession = {
  id: PrismaTrainingSession["id"]
  external_user_id: PrismaTrainingSession["external_user_id"]
  session_datetime: string
  distance_km: number
  duration_minutes: number
  calories_burned_kcal: number
  average_pace_km_per_min: number
}
