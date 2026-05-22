import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css';

function SplashScreen() {
  const navigate = useNavigate();

  const handleUnleash = () => {
    navigate('/home');
  };

  return (
    <div className="splash-container">
      <div className="splash-content">
        <div className="logo-container">
          <div className="glowing-circle">
            <span className="logo-letter">R</span>
          </div>
        </div>

        <h1 className="tagline-line-1">EVERY WORD. EVERY RHYME.</h1>
        <h2 className="tagline-line-2">IN EVERY LANGUAGE.</h2>

        <div className="waveform-placeholder"></div>

        <button className="unleash-btn" onClick={handleUnleash}>
          UNLEASH YOUR LYRICS
        </button>

        <p className="splash-subtitle">
          THE WORLD'S MOST ADVANCED RHYMING DICTIONARY
        </p>
      </div>
    </div>
  );
}

export default SplashScreen;
