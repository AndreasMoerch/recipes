import React from 'react';
import { FilterProps } from '../FilterProp';
import './SourceFilter.css';

/**
 * Source filter component for filtering recipes by source.
 * Primarily intended to get rid toggle AI recipes on/off.
 */
const SourceFilter: React.FC<FilterProps<string>> = ({ options, selected, onToggle }) => {
  return (
    <div className="category-filter-section">
      <h2>Source</h2>
      <div className="category-filter-list">
        {options.map((source) => (
          <button
            key={source}
            className={`source-filter-button ${selected === source ? 'active' : ''}`}
            onClick={() => onToggle(selected === source ? null : source )}
          >
            {source}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SourceFilter;