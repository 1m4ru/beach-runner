// "use client"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Activity, Flame, Zap, Clock } from "lucide-react"

// // export const StatsOverview = () => {

//   const stats = {
//     totalSessions: sessions.length,
//     totalDistance: sessions.reduce((sum, s) => sum + Number(s.distance_km), 0),
//     totalCalories: sessions.reduce((sum, s) => sum + s.calories_burned_kcal, 0),
//     totalTime: sessions.reduce((sum, s) => sum + s.duration_minutes, 0),
//   }

//   const averagePace = stats.totalTime > 0 ? (stats.totalDistance / stats.totalTime).toFixed(2) : "0.00"

//   return (
//     <div className="grid gap-4 md:grid-cols-4">
//       <Card>
//         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//           <CardTitle className="text-sm font-medium">Total de Corridas</CardTitle>
//           <Activity className="h-4 w-4 text-muted-foreground" />
//         </CardHeader>
//         <CardContent>
//           <div className="text-2xl font-bold">{stats.totalSessions}</div>
//           <p className="text-xs text-muted-foreground">sessões de treino</p>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//           <CardTitle className="text-sm font-medium">Distância Total</CardTitle>
//           <Zap className="h-4 w-4 text-muted-foreground" />
//         </CardHeader>
//         <CardContent>
//           <div className="text-2xl font-bold">{stats.totalDistance.toFixed(1)}</div>
//           <p className="text-xs text-muted-foreground">km percorridos</p>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//           <CardTitle className="text-sm font-medium">Calorias Queimadas</CardTitle>
//           <Flame className="h-4 w-4 text-muted-foreground" />
//         </CardHeader>
//         <CardContent>
//           <div className="text-2xl font-bold">{stats.totalCalories}</div>
//           <p className="text-xs text-muted-foreground">kcal totais</p>
//         </CardContent>
//       </Card>

//       <Card>
//         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//           <CardTitle className="text-sm font-medium">Ritmo Médio</CardTitle>
//           <Clock className="h-4 w-4 text-muted-foreground" />
//         </CardHeader>
//         <CardContent>
//           <div className="text-2xl font-bold">{averagePace}</div>
//           <p className="text-xs text-muted-foreground">km/min</p>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// export default StatsOverview;