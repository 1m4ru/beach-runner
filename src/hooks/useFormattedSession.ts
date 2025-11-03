import { getTrainingSessions } from "@/server/training_session/actions"

type SessionsClient = Awaited<ReturnType<typeof getTrainingSessions>>

export function useFormattedSessions(sessions: SessionsClient) {
  return [...sessions]
    .filter(s => !!s.session_datetime && !!s.distance_km)
    .map(s => ({
      ...s,
      timestamp: new Date(s.session_datetime).getTime(),
      session_label: new Date(s.session_datetime).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
      }),
      distance_km: Number(s.distance_km),
    }))
    .sort((a, b) => a.timestamp - b.timestamp)
}
