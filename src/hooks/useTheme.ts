import { getOppoesiteTheme, Theme } from '../types/Theme';
import { useState, useEffect } from 'react';

const themeStornageKey: string = 'theme';

export const useTheme = () => {

  // Get initial theme from localStorage or default to Theme.Light
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem(themeStornageKey);
    return savedTheme === Theme.Light ? Theme.Light : Theme.Dark;
  });

  // Update localStorage and CSS custom property when theme changes
  useEffect(() => {
    localStorage.setItem(themeStornageKey, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme: Theme) => getOppoesiteTheme(prevTheme));
  };

  return { theme, toggleTheme };
};