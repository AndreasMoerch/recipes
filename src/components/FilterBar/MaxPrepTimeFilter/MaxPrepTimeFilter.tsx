import React from 'react';
import { FilterProps } from '../FilterProp';
import './MaxPrepTimeFilter.css';

/**
 * Filter for recipes with prep time less than or equal to selected value
 */
const PrepTimeFilter: React.FC<FilterProps<number>> = ({ 
  options,
  selected, 
  onToggle 
}) => {
  return (
    <div className="prep-time-filter-section">
      <h2>Max Prep Time</h2>
      <div className="prep-time-filter-list">
        {options.map((time) => (
          <button
            key={time}
            className={`prep-time-filter-button ${selected === time ? 'active' : ''}`}
            onClick={() => onToggle(selected === time ? null : time)}
          >
            ≤ {time} min
          </button>
        ))}
      </div>
    </div>
  );
};

export default PrepTimeFilter;