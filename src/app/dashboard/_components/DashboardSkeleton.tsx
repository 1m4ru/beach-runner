import { Skeleton } from "@/components/ui/skeleton"

export const DashboardSkeleton = () => (
  <div className="flex flex-col gap-10 animate-pulse">
    <div className="space-y-4">
      <Skeleton className="h-8 w-1/3 rounded-md" />
      <Skeleton className="h-[250px] w-full rounded-lg" />
    </div>

    <div className="grid gap-10 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-10 w-full rounded-md" />
        ))}
      </div>

      <div className="space-y-3">
        <Skeleton className="h-6 w-1/2 rounded-md" />
        <Skeleton className="h-[200px] w-full rounded-lg" />
      </div>
    </div>
  </div>
);
