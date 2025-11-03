"use client"

import { Button } from "@/components/ui/button"

interface PaginationControlsProps {
  currentPage: number
  totalPages: number
  onNext: () => void
  onPrev: () => void
}

export function PaginationControls({
  currentPage,
  totalPages,
  onNext,
  onPrev,
}: PaginationControlsProps) {
  if (totalPages <= 1) return null 

  return (
    <div className="flex justify-center items-center gap-3 mt-4">
      <Button
        onClick={onPrev}
        disabled={currentPage === 1}
        variant="sunset"
        size="sm"
      >
        Anterior
      </Button>

      <span className="text-sm font-semibold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent tracking-wide">
        Página {currentPage} de {totalPages}
      </span>

      <Button
        onClick={onNext}
        disabled={currentPage === totalPages}
        variant="sunset"
        size="sm"
      >
        Próxima
      </Button>
    </div>
  )
}
