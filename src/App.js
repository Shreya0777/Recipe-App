import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import HeroSection from './Component/HeroSection';
import Recipe from './Component/Recipe';
import RecipeDetails from './Component/RecipeDetails'; 
import AddRecipe from './Component/AddRecipe';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/Home" element={<HeroSection></HeroSection>}></Route>
          <Route exact path="/" element={<HeroSection />} />
          <Route exact path="/recipes" element={<Recipe />} />
          <Route path="/recipeDetails" element={<RecipeDetails />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
