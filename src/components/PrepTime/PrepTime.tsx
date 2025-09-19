import React from 'react';
import { PrepTime as PrepTimeType } from '../../types/Recipe';
import './PrepTime.css';

interface PrepTimeProps {
  /** The prep time object containing amount and unit */
  prepTime: PrepTimeType;
}

/**
 * Reusable component for displaying recipe preparation time
 */
const PrepTime: React.FC<PrepTimeProps> = ({ prepTime }) => {
  return (
    <div className={`prep-time`}>
      <span className="prep-time-icon">⏱️</span>
      <span className="prep-time-text">
        {prepTime.amount} {prepTime.unit}
      </span>
    </div>
  );
};

export default PrepTime;