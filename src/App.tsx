import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { AppContextProvider, createProviderConfig } from './contexts/AppContextProvider';

// Configuration for all contexts needed by recipe-related routes
const recipeContextProviders = [
  createProviderConfig(FavoritesProvider),
  // Easy to add more contexts here as needed:
  // createProviderConfig(ThemeContext),
  // ...
];

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <main className="App-content">
          <AppContextProvider providers={recipeContextProviders}>
            <Routes>
              <Route path="/" element={<RecipeList />} />
              <Route path="/recipe/:id" element={<RecipeDetail />} />
            </Routes>
          </AppContextProvider>
        </main>
      </div>
    </Router>
  );
};

export default App;