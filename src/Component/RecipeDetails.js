import React from 'react';
import { useLocation } from 'react-router-dom';
import './RecipeDetails.css';

const RecipeDetails = () => {
    const location = useLocation();
    const { recipe } = location.state;
    console.log('recipe',recipe);

  return (
    <div className="recipe-details-container">
      <h1>Recipe Details</h1>
      { 
        <div className="recipe-details">
          <h2>{recipe.recipe.label}</h2>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} className="recipe-image" />
          <div className="ingredients-list">
            <h3>Ingredients:</h3>
            <ul>
              {recipe.recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
            </ul>
          </div>
        </div>
      }
    </div>
  );
};

export default RecipeDetails;
