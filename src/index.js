import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { FavoritesProvider } from './context/FavoritesContext'; // ✅ this is key

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavoritesProvider>  {/* ✅ wraps App */}
      <App />
    </FavoritesProvider>
  </React.StrictMode>
);
