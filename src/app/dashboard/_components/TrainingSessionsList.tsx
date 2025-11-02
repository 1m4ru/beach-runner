import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate } from "@/lib/utils"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { useState } from "react"
import { getTrainingSessions } from "@/server/training_session/actions"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const TrainingSessionsList = async () => {
    // const { sessions, deleteSession, isLoading } = useTrainingSessions()
    //   const [isLoading, setIsloading] = useState();

    const trainingSessions = await getTrainingSessions();

    //   if (isLoading) {
    //     return (
    //       <Card>
    //         <CardHeader>
    //           <CardTitle>Minhas Corridas</CardTitle>
    //         </CardHeader>
    //         <CardContent>
    //           <p className="text-muted-foreground">Carregando...</p>
    //         </CardContent>
    //       </Card>
    //     )
    //   }

    return (
        <Card>
            <CardHeader className="text-lg font-bold text-foreground">
                <CardTitle>Histórico de Corridas 🏃‍♂️</CardTitle>
            </CardHeader>
            <CardContent>
                <Table className="rounded-xl border border-border shadow-sm">
                <TableHeader className="bg-muted/40">
                    <TableRow className="odd:bg-muted/30 even:bg-background hover:bg-muted/50 transition-colors">
                        <TableHead>Data</TableHead>
                        <TableHead>Distância</TableHead>
                        <TableHead>Duração</TableHead>
                        <TableHead>Calorias</TableHead>
                        <TableHead>Ritmo Médio</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                            {trainingSessions.map((session) => (
                                <TableRow key={session.id}>
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
                                </TableRow>
                            ))}

                    </TableBody>
                    </Table>
            </CardContent>
        </Card>
    )
}
