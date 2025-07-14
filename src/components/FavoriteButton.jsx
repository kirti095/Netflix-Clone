import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

const FavoriteButton = ({ movie }) => {
  const favoritesContext = useFavorites();

  if (!favoritesContext) {
    return null; // prevent crash if context is unavailable
  }

  const { addFavorite } = favoritesContext;

  const handleClick = () => {
    addFavorite(movie);
    alert('Added to Favorites!');
  };

  return (
    <button onClick={handleClick} style={{ color: 'red', background: 'transparent', border: 'none' }}>
      ❤️
    </button>
  );
};

export default FavoriteButton;
