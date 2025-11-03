"use client"

import { useRef } from "react"
import { useMutation, useQueryClient  } from "@tanstack/react-query"
import { toast } from "sonner"
import { createOrUpdateTrainingSession } from "@/server/training_session/actions"

type Options = {
  onSuccessCallback?: () => void
}

export function useTrainingSessionMutation(options?: Options) {
    const queryClient = useQueryClient()
    const formRef = useRef<HTMLFormElement | null>(null)
  
    const mutation = useMutation({
      mutationFn: createOrUpdateTrainingSession,
      onSuccess: () => {
        toast.success("Corrida adicionada com sucesso!", { duration: 2500 })
        formRef.current?.reset()
  
        queryClient.invalidateQueries({ queryKey: ["training-sessions"] })
  
        if (options?.onSuccessCallback) options.onSuccessCallback()
      },
      onError: () => {
        toast.error("Não foi possível adicionar a corrida")
      },
    })
  
    return { mutation, formRef }
  }
