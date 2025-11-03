import { useState, useMemo } from "react"

interface UsePaginationOptions<T> {
  data?: T[]
  itemsPerPage?: number
  onPageChange?: (page: number) => void
}

export function usePagination<T>({
  data = [],
  itemsPerPage = 5,
  onPageChange,
}: UsePaginationOptions<T>) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data.length / itemsPerPage)

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return data.slice(start, start + itemsPerPage)
  }, [data, currentPage, itemsPerPage])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    onPageChange?.(page)
  }

  const nextPage = () => handlePageChange(Math.min(currentPage + 1, totalPages))
  const prevPage = () => handlePageChange(Math.max(currentPage - 1, 1))
  const resetPage = () => setCurrentPage(1)

  return {
    currentPage,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
    handlePageChange,
    resetPage,
    isFirstPage: currentPage === 1,
    isLastPage: currentPage === totalPages,
  }
}
