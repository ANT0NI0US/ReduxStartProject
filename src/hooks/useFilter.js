import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function useFilter(data) {
  const [filteredData, setFilteredData] = useState(data);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilter = useCallback(
    (filterKey, filterValue) => {
      if (filterKey && filterValue) {
        const filtered = data?.filter((stage) =>
          stage[filterKey]?.toLowerCase().includes(filterValue.toLowerCase()),
        );
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set("page", 1);
        setSearchParams(newParams);

        setFilteredData(filtered);
      } else {
        setFilteredData(data);
      }
    },
    [data, searchParams, setSearchParams],
  );

  useEffect(() => {
    if (data.length) {
      setFilteredData(data);
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set("page", 1);
      setSearchParams(newParams);
    }
  }, [data]);

  return { filteredData, handleFilter };
}
