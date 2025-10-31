"use client"


import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { training_session } from "@/generated/prisma/client"
import { Decimal } from "@prisma/client/runtime/library"
import { createOrUpdateTrainingSession } from "@/server/training_session/actions"
import { DateTimePicker } from "@/components/ui/datetime-picker"

export function AddSessionForm() {
    const [date, setDate] = useState<Date | undefined>();

    const handleSubmit = async (formData: FormData) => {

        const date = formData.get("date")
        const distance = formData.get("distance_km")
        const duration = formData.get("duration_minutes")
        const calories = formData.get("calories_burned_kcal")
        const pace = formData.get("average_pace_km_per_min")

        const trainingSession: training_session = {
            id: BigInt(0),
            external_user_id: "",
            session_datetime: new Date(date as string),
            distance_km: parseFloat(distance as string) as unknown as Decimal,
            duration_minutes: parseInt(duration as string),
            calories_burned_kcal: parseInt(calories as string),
            average_pace_km_per_min: parseFloat(pace as string) as unknown as Decimal,
        }

        await createOrUpdateTrainingSession(trainingSession)


    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    Nova Corrida
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form action={handleSubmit} className="space-y-4">
                    <div>
                        <Label htmlFor="session_datetime" className="text-sm font-medium">
                            Data e hora
                        </Label>
                        <DateTimePicker
                            value={date}
                            onChange={(newDate) => setDate(newDate)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="distance_km" className="text-sm font-medium">
                            Distância (km)
                        </Label>
                        <Input
                            id="distance_km"
                            name="distance_km"
                            type="number"
                            step="0.01"
                            placeholder="5.50"
                            className="mt-1"
                        />
                    </div>

                    <div>
                        <Label htmlFor="duration_minutes" className="text-sm font-medium">
                            Duração (minutos)
                        </Label>
                        <Input
                            id="duration_minutes"
                            name="duration_minutes"
                            type="number"
                            placeholder="30"
                            className="mt-1"
                        />
                    </div>

                    <div>
                        <Label htmlFor="calories_burned_kcal" className="text-sm font-medium">
                            Calorias (kcal)
                        </Label>
                        <Input
                            id="calories_burned_kcal"
                            name="calories_burned_kcal"
                            type="number"
                            placeholder="300"
                            className="mt-1"
                        />
                    </div>

                    <div>
                        <Label htmlFor="average_pace_km_per_min" className="text-sm font-medium">
                            Ritmo Médio (km/min)
                        </Label>
                        <Input
                            id="average_pace_km_per_min"
                            name="average_pace_km_per_min"
                            type="number"
                            step="0.01"
                            placeholder="0.17"
                            className="mt-1"
                        />
                    </div>

                    <Button type="submit" className="w-full">
                        "Adicionar Corrida"
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
