import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  // Get initial theme from localStorage or default to 'light'
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    return savedTheme || 'light';
  });

  // Update localStorage and CSS custom property when theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};