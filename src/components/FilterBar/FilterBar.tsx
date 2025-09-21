import React from 'react';
import { useFilterSelection } from '../../hooks/useFilterSelection';
import { useFilteredRecipes } from '../../hooks/useFilterRecipes';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import PrepTimeFilter from './MaxPrepTimeFilter/MaxPrepTimeFilter';
import { Recipe } from '../../types/Recipe';
import './FilterBar.css';
import { allCategories } from '../../data/allRecipes';
import SourceFilter from './SourceFilter/SourceFilter';

interface FilterBarProps {
  recipes: Recipe[];
  onFilteredRecipesChange: (filteredRecipes: Recipe[]) => void;
}

/**
 * Self-contained filter bar that manages all filtering state and logic
 */
const FilterBar: React.FC<FilterBarProps> = ({ recipes, onFilteredRecipesChange }) => {
  const { selectedCategory, selectedMaxPrepTime, selectedSource, toggleCategory, toggleMaxPrepTime, toggleSource: toggleSourceFilter } = useFilterSelection();
  const { filteredRecipes } = useFilteredRecipes({
    recipes,
    selectedCategory,
    selectedMaxPrepTime,
    selectedSource,
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
      <SourceFilter
        options={["AI", "Non-AI"]}
        selected={selectedSource}
        onToggle={toggleSourceFilter}
      />
    </div>
  );
};

export default FilterBar;