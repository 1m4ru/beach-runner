
import { getTrainingSessions } from "@/server/training_session/actions";
import { AddSessionForm } from "./_components/AddSessionForm";
import { StatsOverview } from "./_components/StatsOverview";
import { TrainingSessionsList } from "./_components/TrainingSessionsList";

export const Dashboard = async() => {

  const sessions = await getTrainingSessions()
    return (
        <main className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-8">
            <div className="space-y-8">
              <StatsOverview sessions={sessions} />
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <TrainingSessionsList />
                </div>
                <div>
                  <AddSessionForm />
                </div>
              </div>
            </div>
          </div>
        </main>
    )
}

export default Dashboard;