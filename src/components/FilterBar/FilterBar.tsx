import React from 'react';
import { useFilterSelection } from '../../hooks/useFilterSelection';
import { useFilteredRecipes } from '../../hooks/useFilterRecipes';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import PrepTimeFilter from './MaxPrepTimeFilter/MaxPrepTimeFilter';
import { Recipe } from '../../types/Recipe';
import './FilterBar.css';
import { allCategories } from '../../data/allRecipes';

interface FilterBarProps {
  recipes: Recipe[];
  onFilteredRecipesChange: (filteredRecipes: Recipe[]) => void;
}

/**
 * Self-contained filter bar that manages all filtering state and logic
 */
const FilterBar: React.FC<FilterBarProps> = ({ recipes, onFilteredRecipesChange }) => {
  const { selectedCategory, selectedMaxPrepTime, toggleCategory, toggleMaxPrepTime } = useFilterSelection();
  const { filteredRecipes } = useFilteredRecipes({
    recipes,
    selectedCategory,
    selectedMaxPrepTime
  });

  // Notify parent component when filtered recipes change
  React.useEffect(() => {
    onFilteredRecipesChange(filteredRecipes);
  }, [filteredRecipes, onFilteredRecipesChange]);

  return (
    <div className="filter-bar">
      <CategoryFilter
        options={allCategories}
        selected={selectedCategory}
        onToggle={toggleCategory}
      />
      <PrepTimeFilter
        options={[15, 30, 45, 60]}
        selected={selectedMaxPrepTime}
        onToggle={toggleMaxPrepTime}
      />
    </div>
  );
};

export default FilterBar;