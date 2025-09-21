import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <ThemeToggle />
        <main className="App-content">
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;