import { useState } from "react";

export function useSort(initialKey = null, initialDirection = "asc") {
  const [sortConfig, setSortConfig] = useState({
    key: initialKey,
    direction: initialDirection,
  });

  // Function to sort data based on sortConfig
  const sortedData = (data) => {
    if (!sortConfig.key) return data;

    // Create a new array to avoid mutating the original data
    return [...data]?.sort((a, b) => {
      const aValue = a[sortConfig.key] || ""; // Fallback to empty string if undefined
      const bValue = b[sortConfig.key] || ""; // Fallback to empty string if undefined

      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  // Function to change the sorting configuration
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return { sortedData, handleSort, sortConfig };
}
