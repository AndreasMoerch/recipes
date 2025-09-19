import { useState, useEffect } from 'react';

const FAVORITES_STORAGE_KEY = 'recipe-favorites';

/**
 * Custom hook for managing recipe favorites with localStorage persistence
 */
export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (stored) {
        const parsedFavorites = JSON.parse(stored);
        if (Array.isArray(parsedFavorites)) {
          setFavorites(parsedFavorites);
        }
      }
    } catch (error) {
      console.warn('Could not load favorites from localStorage:', error);
      setFavorites([]);
    }
  }, []);

  // Listen for favorites changes from other components
  useEffect(() => {
    const handleFavoritesChange = (event: CustomEvent) => {
      setFavorites(event.detail);
    };

    window.addEventListener('favoritesChanged', handleFavoritesChange as EventListener);
    
    return () => {
      window.removeEventListener('favoritesChanged', handleFavoritesChange as EventListener);
    };
  }, []);

  // Save favorites to localStorage whenever favorites change
  const saveFavorites = (newFavorites: string[]) => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(newFavorites));
      setFavorites(newFavorites);
      
      // Dispatch custom event to sync with other hook instances
      window.dispatchEvent(new CustomEvent('favoritesChanged', {
        detail: newFavorites
      }));
    } catch (error) {
      console.warn('Could not save favorites to localStorage:', error);
    }
  };

  // Toggle favorite status for a recipe
  const toggleFavorite = (recipeId: string) => {
    const newFavorites = favorites.includes(recipeId)
      ? favorites.filter(id => id !== recipeId)
      : [...favorites, recipeId];
    
    saveFavorites(newFavorites);
  };

  // Check if a recipe is favorited
  const isFavorite = (recipeId: string): boolean => {
    return favorites.includes(recipeId);
  };

  // Clear all favorites
  const clearAllFavorites = () => {
    saveFavorites([]);
  };

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    clearAllFavorites,
    favoriteCount: favorites.length
  };
};