
import React from 'react';
import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';
import { useTheme } from '../../hooks/useTheme';
import { getOppoesiteTheme, Theme } from '../../types/Theme';
import './ThemeToggle.css';

/**
 * ThemeToggle component
 *
 * A button that toggles between light and dark themes for the app.
 * Uses the useTheme hook to get and set the current theme.
 */
const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const nextTheme = getOppoesiteTheme(theme);

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      {theme === Theme.Light ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;