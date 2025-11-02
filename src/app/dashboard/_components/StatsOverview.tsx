"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { training_session } from "@prisma/client"

export const description = "A line chart with dots"

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

type DashboardLineProps = {
    sessions: training_session[]
}

export const StatsOverview = ({ sessions }: DashboardLineProps) => {
    return (
        <Card className="h-[250px] sm:h-[300px] md:h-[350px]">
            <CardHeader>
                <CardTitle>KM Corridods por Dia</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent className="h-[250px] w-full overflow-hidden">
                <ChartContainer config={chartConfig} className="w-full h-full">
                    <LineChart
                        width={500}
                        height={250}
                        data={sessions}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 10,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="session_datetime"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) =>
                                new Date(value).toLocaleDateString("pt-BR", {
                                    day: "2-digit",
                                    month: "short",
                                })
                            }
                        />

                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Line
                            dataKey="distance_km"
                            type="monotone"
                            stroke="var(--color-desktop)"
                            strokeWidth={2}
                            dot={{ fill: "var(--color-desktop)" }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default StatsOverview;