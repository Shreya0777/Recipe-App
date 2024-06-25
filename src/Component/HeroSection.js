import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/recipes');
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Recipe Haven</h1>
        <p>Discover, Cook, and Share Delicious Recipes</p>
        <button onClick={handleExploreClick} className="btn btn-primary">Explore Recipes</button>
      </div>
    </section>
  );
};

export default HeroSection;
