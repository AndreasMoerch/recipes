import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode, useCallback } from 'react';

const FAVORITES_STORAGE_KEY = 'recipe-favorites';

interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (recipeId: string) => void;
  isFavorite: (recipeId: string) => boolean;
  clearAllFavorites: () => void;
  favoriteCount: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// Helper function to safely load favorites from localStorage
const loadFavoritesFromStorage = (): string[] => {
  try {
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch (error) {
    console.warn('Failed to load favorites from localStorage:', error);
  }
  return [];
};

// Helper function to safely save favorites to localStorage
const saveFavoritesToStorage = (favorites: string[]): void => {
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.warn('Failed to save favorites to localStorage:', error);
  }
};

interface FavoritesProviderProps {
  children: ReactNode;
}

/**
 * Provider component that manages favorites state with localStorage persistence
 */
export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>(loadFavoritesFromStorage);

  // Save to localStorage whenever favorites change
  useEffect(() => {
    saveFavoritesToStorage(favorites);
  }, [favorites]);

  const toggleFavorite = useCallback((recipeId: string) => {
    setFavorites(prev => 
      prev.includes(recipeId)
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  }, []);

  const isFavorite = useCallback((recipeId: string): boolean => {
    return favorites.includes(recipeId);
  }, [favorites]);

  const clearAllFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  const value = useMemo((): FavoritesContextType => ({
    favorites,
    toggleFavorite,
    isFavorite,
    clearAllFavorites,
    favoriteCount: favorites.length
  }), [favorites, toggleFavorite, isFavorite, clearAllFavorites]);

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

/**
 * Custom hook for accessing favorites context
 * Must be used within a FavoritesProvider
 */
export const useFavoritesContext = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavoritesContext must be used within a FavoritesProvider');
  }
  return context;
};