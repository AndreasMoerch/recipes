import React from 'react';
import { useFavoritesContext } from '../../contexts/FavoritesContext';
import { HeartIcon } from '../Icons';
import './FavoriteButton.css';

interface FavoriteButtonProps {
  recipeId: string;
  className?: string;
}

/**
 * Heart-shaped favorite button that toggles between filled and empty states
 * Manages favorites state internally using the favorites context
 */
const FavoriteButton: React.FC<FavoriteButtonProps> = ({ 
  recipeId
}) => {
  const { toggleFavorite, isFavorite } = useFavoritesContext();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when button is inside a Link
    e.stopPropagation(); // Prevent event bubbling
    toggleFavorite(recipeId);
  };

  const isCurrentlyFavorite = isFavorite(recipeId);

  return (
    <button
      className={`favorite-button`}
      onClick={handleClick}
      aria-label={isCurrentlyFavorite ? 'Remove from favorites' : 'Add to favorites'}
      title={isCurrentlyFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <span className={`heart-icon ${isCurrentlyFavorite ? 'favorited' : 'not-favorited'}`}>
        <HeartIcon
          filled={isCurrentlyFavorite}
          size={24}
          className="heart-svg"
        />
      </span>
    </button>
  );
};

export default FavoriteButton;