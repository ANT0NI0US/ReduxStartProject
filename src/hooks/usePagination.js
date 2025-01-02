import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "@/utils/constants";

export function usePagination(data) {
  const [searchParams] = useSearchParams();

  // Get the current page from URL (default to 1)
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const currentPage = page;

  // Calculate total pages
  const totalPages = Math.ceil(data?.length / PAGE_SIZE);

  const count = data?.length;

  // Compute paginated data
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return data?.slice(startIndex, endIndex);
  }, [currentPage, data]);

  return {
    paginatedData,
    count,
    totalPages,
  };
}
