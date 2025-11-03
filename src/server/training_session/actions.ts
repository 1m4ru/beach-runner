"use server";

import { currentUser } from "@clerk/nextjs/server";
import { Decimal } from "@prisma/client/runtime/library";
import { PrismaClient, Prisma } from "@prisma/client";
import { TrainingSession } from "@/types/training-session";

const prisma = new PrismaClient();

export async function createOrUpdateTrainingSession(trainingSession: any) {
  const user = await currentUser()
  if (!user) throw new Error("User not found")

  await prisma.training_session.upsert({
    where: { id: trainingSession.id },
    update: {
      external_user_id: user.id,
      session_datetime: trainingSession.session_datetime,
      distance_km: new Decimal(trainingSession.distance_km), 
      duration_minutes: trainingSession.duration_minutes,
      calories_burned_kcal: trainingSession.calories_burned_kcal,
      average_pace_km_per_min: new Decimal(trainingSession.average_pace_km_per_min), 
    },
    create: {
      external_user_id: user.id,
      session_datetime: trainingSession.session_datetime,
      distance_km: new Decimal(trainingSession.distance_km),
      duration_minutes: trainingSession.duration_minutes,
      calories_burned_kcal: trainingSession.calories_burned_kcal,
      average_pace_km_per_min: new Decimal(trainingSession.average_pace_km_per_min),
    },
  })
}

export async function getTrainingSessions(): Promise<TrainingSession[]> {
  const user = await currentUser()
  if (!user) throw new Error("User not found")

  const sessions = await prisma.training_session.findMany({
    where: { external_user_id: user.id },
    orderBy: { session_datetime: "asc" },
  })

  const plainSessions: TrainingSession[] = sessions.map(
    (s: Prisma.training_sessionGetPayload<{}>): TrainingSession => ({
      id: s.id,
      external_user_id: s.external_user_id,
      session_datetime: s.session_datetime.toISOString(),
      distance_km: Number(s.distance_km),
      duration_minutes: s.duration_minutes,
      calories_burned_kcal: Number(s.calories_burned_kcal),
      average_pace_km_per_min: Number(s.average_pace_km_per_min),
    })
  );
  return plainSessions;

}

export async function getTrainingAvgPace() {
  const user = await currentUser();
  if (!user) throw new Error("User not found");

  const result = await prisma.$queryRaw<{ avg: Decimal }[]>`
    SELECT AVG(average_pace_km_per_min) as avg 
    FROM training_session 
    WHERE external_user_id = ${user.id}
  `;

  return result[0]?.avg?.toNumber() ?? 0;
}
