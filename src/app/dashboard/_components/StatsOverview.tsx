"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useFormattedSessions } from "@/hooks/useFormattedSession"
import { getTrainingSessions } from "@/server/training_session/actions"


const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

type SessionsClient = Awaited<ReturnType<typeof getTrainingSessions>>

type DashboardLineProps = {
    sessions: SessionsClient
}

export const StatsOverview = ({ sessions }: DashboardLineProps) => {

    const formattedSessions = useFormattedSessions(sessions)

    return (
        <Card className="h-[250px] sm:h-[300px] md:h-[350px]">
            <CardHeader>
                <CardTitle>KM Corridos por Dia</CardTitle>
            </CardHeader>
            <CardContent className="h-[250px] w-full overflow-hidden">
                <ChartContainer config={chartConfig} className="w-full h-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={formattedSessions}
                            margin={{ top: 10, right: 40, left: 40, bottom: 40 }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="session_datetime"
                                tickLine={false}
                                axisLine={false}
                                tick={{ fontSize: 12, fill: '#666' }}
                                angle={window.innerWidth < 640 ? -45 : 0}
                                textAnchor={window.innerWidth < 640 ? "end" : "middle"}
                                tickFormatter={(value) =>
                                    new Date(value).toLocaleDateString("pt-BR", {
                                        day: "2-digit",
                                        month: "short",
                                    })
                                }
                            />
                            <YAxis hide domain={["auto", "auto"]} />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Line
                                dataKey="distance_km"
                                type="monotone"
                                stroke="var(--color-desktop)"
                                strokeWidth={2}
                                dot={{ fill: "var(--color-desktop)", r: 4 }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>

        </Card>
    )
}

export default StatsOverview
