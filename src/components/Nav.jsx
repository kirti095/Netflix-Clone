// src/components/Nav.jsx
import React, { useState } from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { FaHeart } from 'react-icons/fa';

function Nav() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const user = auth.currentUser;
  const [showDropdown, setShowDropdown] = useState(false);

const handleLogout = async () => {
  try {
    await auth.signOut();
    console.log('User signed out');
    navigate('/'); // ✅ Back to login page
  } catch (error) {
    console.error('Logout failed:', error.message);
  }
};



  const getAvatarPosition = (email) => {
    if (!email) return 0;
    const charCode = email.charCodeAt(0);
    return charCode % 4;
  };

  const avatarIndex = getAvatarPosition(user?.email);
  const avatarStyle = {
    width: '32px',
    height: '32px',
    borderRadius: '4px',
    backgroundImage: 'url("https://i.imgur.com/w9Avnk1.png")',
    backgroundSize: '128px 32px',
    backgroundPosition: `-${avatarIndex * 32}px 0`,
    cursor: 'pointer'
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  return (
    <div className="nav">
      <div className="nav-left">
        <img
          className="nav-logo"
          src="/images/netflix-bg.jpg"
          alt="Netflix"
          onClick={() => navigate('/')}
        />
      </div>

      <form className="search-form" onSubmit={handleSearch}>
        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>

      <div className="nav-right">
        <button className="nav-btn" onClick={() => navigate('/favorites')}>
          <FaHeart style={{ color: 'white', fontSize: '20px' }} />
        </button>
        <div className="nav-user">
           <div style={avatarStyle} onClick={() => setShowDropdown(!showDropdown)} />
  
          {showDropdown && (
           <div className="user-dropdown">
              <p>{user?.email}</p>
             <button onClick={handleLogout}>Logout</button>
        </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Nav;
