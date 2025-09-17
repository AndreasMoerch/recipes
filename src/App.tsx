import React from 'react';
import './App.css';
import RecipeList from './components/RecipeList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipes</h1>
        <RecipeList />
      </header>
    </div>
  );
};

export default App;