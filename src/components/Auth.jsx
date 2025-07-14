import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './Auth.css';
import logo from '../assests/netflix_background.jpg'; // make sure this path is correct

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-page">
      <img className="auth-logo" src={logo} alt="Netflix" />
      <div className="auth-form">
        <h1>{isLogin ? 'Sign In' : 'Sign Up'}</h1>
        <form onSubmit={handleAuth}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isLogin ? 'Sign In' : 'Sign Up'}</button>
        </form>
        <p className="auth-toggle">
          {isLogin ? "New to Netflix?" : "Already have an account?"}{' '}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign up now.' : 'Sign in here.'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Auth;
