import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <main className="App-content">
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/category/:category" element={<RecipeList />} />
            <Route path="/category/:category/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;