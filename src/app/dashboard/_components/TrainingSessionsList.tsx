// "use client"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { formatDate } from "@/lib/utils"
// import { Trash2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { useState } from "react"

// export function TrainingSessionsList() {
//   // const { sessions, deleteSession, isLoading } = useTrainingSessions()
//   const [isLoading, setIsloading] = useState();

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

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Histórico de Corridas</CardTitle>
//       </CardHeader>
//       <CardContent>
//         {sessions.length === 0 ? (
//           <p className="text-center text-muted-foreground py-8">
//             Nenhuma corrida registrada ainda. Comece adicionando uma!
//           </p>
//         ) : (
//           <div className="space-y-4">
//             {sessions.map((session) => (
//               <div
//                 key={session.id}
//                 className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
//               >
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2 mb-2">
//                     <p className="font-semibold text-foreground">{session.distance_km} km</p>
//                     <Badge variant="secondary">{session.duration_minutes} min</Badge>
//                   </div>
//                   <p className="text-sm text-muted-foreground">{formatDate(session.session_datetime)}</p>
//                   <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
//                     <span>⚡ {session.calories_burned_kcal} kcal</span>
//                     <span>🏃 {session.average_pace_km_per_min} km/min</span>
//                   </div>
//                 </div>
//                 {/* <Button
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => deleteSession(session.id)}
//                   className="text-destructive hover:text-destructive"
//                 >
//                   <Trash2 className="h-4 w-4" />
//                 </Button> */}
//               </div>
//             ))}
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   )
// }
