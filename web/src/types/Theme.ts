// Theme enum for app theming
export enum Theme {
	Light = 'light',
	Dark = 'dark'
}

/**
 * Gets the "opposite" theme. If light, then dark. If dark, then light.
 */
export function getOppoesiteTheme(theme: Theme): Theme {
  return theme === Theme.Light ? Theme.Dark : Theme.Light;
}