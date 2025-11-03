import type { Prisma } from "@prisma/client";

export type TrainingSession = {
  id: number;
  external_user_id: string;
  session_datetime: string; // formato ISO
  distance_km: number;
  duration_minutes: number;
  calories_burned_kcal: number;
  average_pace_km_per_min: number;
};