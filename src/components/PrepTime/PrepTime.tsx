import React from 'react';
import { PrepTime as PrepTimeType } from '../../types/Recipe';
import './PrepTime.css';

interface PrepTimeProps {
  /** The prep time object containing amount and unit */
  prepTime: PrepTimeType;
  /** Custom CSS class name for additional styling */
  className?: string;
}

/**
 * Reusable component for displaying recipe preparation time
 * Used in both RecipeList and RecipeDetail components
 */
const PrepTime: React.FC<PrepTimeProps> = ({ prepTime, className = '' }) => {
  return (
    <div className={`prep-time ${className}`}>
      <span className="prep-time-icon">⏱️</span>
      <span className="prep-time-text">
        {prepTime.amount} {prepTime.unit}
      </span>
    </div>
  );
};

export default PrepTime;