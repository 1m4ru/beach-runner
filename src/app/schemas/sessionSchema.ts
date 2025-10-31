import { z } from "zod";

export type SessionFormData = z.infer<typeof sessionSchema>

export const sessionSchema = z.object({
    session_datetime: z.date({
        required_error: "A data e hora da corrida são obrigatórias"
      }),
    distance_km: z.string()
    .nonempty("A distância é obrigatória")
    .transform(val => parseFloat(val))
    .refine(val => val > 0, "A distância precisa ser positiva"),
  
  duration_minutes: z.string()
    .nonempty("A duração é obrigatória")
    .transform(val => parseFloat(val))
    .refine(val => val > 0, "A duração precisa ser positiva"),
  
  calories_burned_kcal: z.string()
    .nonempty("As calorias são obrigatórias")
    .transform(val => parseFloat(val))
    .refine(val => val > 0, "As calorias precisam ser positivas"),
  
  average_pace_km_per_min: z.string()
    .nonempty("O ritmo é obrigatório")
    .transform(val => parseFloat(val))
    .refine(val => val > 0, "O ritmo precisa ser positivo"),
    external_user_id: z.string().optional(),
})