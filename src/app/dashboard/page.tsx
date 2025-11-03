import { Suspense } from "react"
import { getTrainingSessions } from "@/server/training_session/actions"
import { AddSessionForm } from "./_components/AddSessionForm"
import { StatsOverview } from "./_components/StatsOverview"
import { TrainingSessionsList } from "./_components/training/TrainingSessionsList"
import { DashboardSkeleton } from "./_components/DashboardSkeleton"

export const dynamic = "force-dynamic";

export const Dashboard = async () => {
  const sessions = await getTrainingSessions()

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#fdfaf7] to-[#f7f6f3] dark:from-[#0d0d0d] dark:via-[#111] dark:to-[#161616]">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <Suspense fallback={<DashboardSkeleton />}>
          <div className="flex flex-col gap-10">
            <StatsOverview sessions={sessions} />
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <TrainingSessionsList />
              </div>
              <div className="flex flex-col">
                <AddSessionForm />
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </main>
  )
}

export default Dashboard;
