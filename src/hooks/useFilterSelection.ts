import { useState } from 'react';

/**
 * Hook for managing UI selection state (which filters are active)
 */
export const useCategoryFilterSelection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategory(prev => prev === category ? null : category);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategory(null);
  };

  return {
    selectedCategory,
    toggleCategory,
    clearAllFilters
  };
};