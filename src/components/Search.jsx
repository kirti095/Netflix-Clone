// src/components/Search.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../axios';
import './Search.css';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const Search = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    if (query) {
      axios
        .get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`)
        .then((res) => setResults(res.data.results));
    }
  }, [query]);

  return (
    <div className="search-page">
      <h2>Search Results for: {query}</h2>
      <div className="search-results">
        {results.length === 0 ? (
          <p>No results found.</p>
        ) : (
          results.map((movie) => (
            <div key={movie.id} className="search-card">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
              <h4>{movie.title}</h4>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
