"use server";

import { training_session } from "@/generated/prisma/client";
import { currentUser } from "@clerk/nextjs/server";
import { Decimal } from "@prisma/client/runtime/library";
import { PrismaClient }  from "@prisma/client";

const prisma = new PrismaClient();

export async function createOrUpdateTrainingSession(trainingSession: training_session) {
      const user = await currentUser();
      if (!user) throw new Error("User not found when creating training session");

      trainingSession.external_user_id = user?.id;
  
       await prisma.training_session.upsert({
        where: { id: trainingSession.id  },
        update: {
          external_user_id: user.id,
          session_datetime: trainingSession.session_datetime,
          distance_km: trainingSession.distance_km,
          duration_minutes: trainingSession.duration_minutes,
          calories_burned_kcal: trainingSession.calories_burned_kcal,
          average_pace_km_per_min: trainingSession.average_pace_km_per_min,
        },
        create: {
          ...trainingSession,
          id: undefined,
         
        },
      });
  
  }

export async function getTrainingSessions() {
    const user = await currentUser();
    
    if (!user) throw new Error("User not found");

  return prisma.training_session.findMany({
    where: { external_user_id: user.id },
    orderBy: { session_datetime: "desc" },
  });
}


export async function getTrainingAvgPace() {
  const user = await currentUser();
  if (!user) throw new Error("User not found");

  const result = await prisma.$queryRaw<{ avg: Decimal }[]>`
    SELECT AVG(average_pace_km_per_min) as avg 
    FROM training_session 
    WHERE external_user_id = ${user.id}
  `;

  // Converte Decimal para number
  return result[0]?.avg?.toNumber() ?? 0;
}
