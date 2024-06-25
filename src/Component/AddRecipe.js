import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddRecipe.css';

const AddRecipe = ({ addRecipe }) => {
  const [recipe, setRecipe] = useState({
    label: '',
    image: '',
    calories: '',
    ingredients: ['']
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (index, e) => {
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = e.target.value;
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const addIngredientField = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ''] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(recipe);
    navigate('/');  // Redirect to home or recipe list after submission
  };

  return (
    <div className="add-recipe-container">
      <h1>Add Your Recipe</h1>
      <form onSubmit={handleSubmit} className="add-recipe-form">
        <input
          type="text"
          name="label"
          value={recipe.label}
          onChange={handleChange}
          placeholder="Recipe Name"
          required
        />
        <input
          type="text"
          name="image"
          value={recipe.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <input
          type="number"
          name="calories"
          value={recipe.calories}
          onChange={handleChange}
          placeholder="Calories"
          required
        />
        <h3>Ingredients:</h3>
        {recipe.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            value={ingredient}
            onChange={(e) => handleIngredientChange(index, e)}
            placeholder="Ingredient"
            required
          />
        ))}
        <button type="button" onClick={addIngredientField}>Add Ingredient</button>
        <button type="submit" className="btn btn-primary">Submit Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
