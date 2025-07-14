import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import './Favorites.css';

const base_url = 'https://image.tmdb.org/t/p/w300';

function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="favorites-page">
      <h2>Your Favorites</h2>
      <div className="favorites-grid">
        {favorites.map((movie) => (
          <div className="favorite-card" key={movie.id}>
            <img src={`${base_url}${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
            <button onClick={() => removeFavorite(movie.id)}>Remove ❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
