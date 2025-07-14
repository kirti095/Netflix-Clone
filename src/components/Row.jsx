import React, { useEffect, useState } from 'react';
import axios from '../axios';
import './Row.css';
import FavoriteButton from './FavoriteButton';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

    const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <div key={movie.id} className="row_posterWrapper">
            <img
              className="row_poster"
              src={`${base_url}${movie.poster_path || movie.backdrop_path}`}
              alt={movie.title || movie.name}
            />
            <div className="row_hoverOverlay">
              <button className="play-button">▶ Play</button>
              <FavoriteButton movie={movie} />
            </div>
            <p className="row_title">{movie.title || movie.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
