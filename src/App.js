// src/App.js
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';

import Nav from './components/Nav';
import Row from './components/Row';
import Banner from './components/Banner';
import Favorites from './components/Favorites';
import Search from './components/Search';
import Login from './components/Login';

import requests from './requests';
import { auth } from './firebase';
import './App.css';

// ✅ This is the component that uses useNavigate — and it's inside <Router>
function AppContent() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      setUser(userAuth);
      setLoading(false);
      if (!userAuth) {
        navigate('/login');
      }
    });

    return unsubscribe;
  }, [navigate]);

  if (loading) return null;

  return (
    <div className="app">
      {user && <Nav />}
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <>
                <Banner />
                <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
                <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
                <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
                <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
                <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
                <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/favorites" element={user ? <Favorites /> : <Navigate to="/login" />} />
        <Route path="/search" element={user ? <Search /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

// ✅ Wrap AppContent inside Router here
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
