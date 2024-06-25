import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './recipe.css'; // Import the CSS file

const RecipeList = () => {
  const API_ID = "40b4321c";
  const API_KEY = "7a3671141098c6532c4350397e5d9f4c";

  const [recipes, setRecipes] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);
  const [query, setQuery] = useState(''); // Default search query
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      getRecipes();
    }
  }, [query]);

  const getRecipes = async () => {
    try {
      const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
      setRecipes(response.data.hits);
      console.log(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const showItem = (recipe) => {
    navigate('/recipeDetails', { state: { recipe } });
  };

  const addRecipe = (recipe) => {
    setUserRecipes([...userRecipes, { recipe }]);
  };

  return (
    <div className={query ? 'query' : 'recipe-container'}>
      <h1>Recipes</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for recipes..."
          className="search-input"
        />
        <button type="submit" className="btn btn-primary">Search</button>
        <button onClick={() => navigate('/addRecipe')} className="btn btn-secondary">Add Recipe</button>
      </form>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe">
            <h2>{recipe.recipe.label}</h2>
            <p>Calories: {Math.round(recipe.recipe.calories)}</p>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <button onClick={() => showItem(recipe)} className="btn btn-secondary">
              Show Ingredients
            </button>
          </div>
        ))}
        {userRecipes.map((recipe, index) => (
          <div key={index} className="recipe">
            <h2>{recipe.recipe.label}</h2>
            <p>Calories: {Math.round(recipe.recipe.calories)}</p>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <button onClick={() => showItem(recipe)} className="btn btn-secondary">
              Show Ingredients
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
