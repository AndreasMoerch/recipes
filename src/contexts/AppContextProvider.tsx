import React, { ReactNode } from 'react';

interface ProviderConfig {
  Provider: React.ComponentType<{ children: ReactNode }>;
}

interface AppContextProviderProps {
  providers: ProviderConfig[];
  children: ReactNode;
}

/**
 * Generic context provider that composes multiple context providers
 * This allows us to easily add/remove contexts without deeply nesting components
 */
export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  providers,
  children
}) => {
  return providers.reduceRight(
    (acc, { Provider }) => <Provider>{acc}</Provider>,
    children as React.ReactElement
  );
};

/**
 * Helper function to create provider configurations
 */
export const createProviderConfig = (
  Provider: React.ComponentType<{ children: ReactNode }>
): ProviderConfig => ({
  Provider
});