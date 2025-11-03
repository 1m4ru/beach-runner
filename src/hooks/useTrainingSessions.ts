import { useQuery } from "@tanstack/react-query"
import { getTrainingSessions } from "@/server/training_session/actions"

export function useTrainingSessions() {
  const {
    data: trainingSessions = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["training-sessions"],
    queryFn: getTrainingSessions,
    staleTime: 1000 * 60 * 2, 
  })

  return {
    trainingSessions,
    isLoading,
    isError,
    error,
    refetch,
  }
}
