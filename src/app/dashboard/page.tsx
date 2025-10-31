"use client"

import { AddSessionForm } from "./_components/AddSessionForm";
// import StatsOverview from "./_components/StatsOverview";
// import { TrainingSessionsList } from "./_components/TrainingSessionsList";

export const Dashboard = () => {
    return (
        <main className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-8">
            <div className="grid gap-8">
              {/* <StatsOverview /> */}
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  {/* <TrainingSessionsList /> */}
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