import { useState } from 'react';

/**
 * Hook for managing UI selection state (which filters are active)
 */
export const useFilterSelection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedMaxPrepTime, setSelectedMaxPrepTime] = useState<number | null>(null);
  const [selectedSource, setSelectedSource] = useState<string | null>(null);

  // Toggle category selection
  const toggleCategory = (category: string | null) => {
    setSelectedCategory(prev => prev === category ? null : category);
  };

  // Toggle max prep time selection
  const toggleMaxPrepTime = (maxTime: number | null) => {
    setSelectedMaxPrepTime(prev => prev === maxTime ? null : maxTime);
  };

  // Toggle source selection
  const toggleSource = (source: string | null) => {
    setSelectedSource(prev => prev === source ? null : source);
  }

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategory(null);
    setSelectedMaxPrepTime(null);
    setSelectedSource(null);
  };

  return {
    selectedCategory,
    selectedMaxPrepTime,
    selectedSource,
    toggleCategory,
    toggleMaxPrepTime,
    toggleSource,
    clearAllFilters
  };
};