import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame, Globe, Zap, Bookmark, Mic, SkipBack, Play, SkipForward } from 'lucide-react';
import './HomeScreen.css';

function HomeScreen() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const languages = [
    { code: 'eng', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'hl', label: 'Hinglish', native: 'Hinglish' },
    { code: 'pa', label: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
    { code: 'ne', label: 'Nepali', native: 'नेपाली' },
  ];

  const quickAccess = [
    { label: 'Top Words', subtitle: 'Trending Now', icon: 'fire', color: 'var(--neon-red)' },
    { label: 'Multi-Lingual', subtitle: 'All Languages', icon: 'globe', color: 'var(--neon-blue)' },
    { label: 'Punchlines', subtitle: 'Barz Generator', icon: 'bolt', color: 'var(--neon-red)' },
    { label: 'Saved Words', subtitle: 'Your Collection', icon: 'bookmark', color: 'var(--neon-red)' },
  ];

  const handleSearch = () => {
    const query = search.trim() || 'freedom';
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="home-container">
      <div className="home-content">
        {/* Header */}
        <div className="home-header">
          <h1 className="home-title">RAPPER</h1>
          <div className="pro-badge">
            <span className="pro-text">PRO</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search any word..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button className="microphone-btn" onClick={handleSearch}>
            <Mic size={24} color="var(--neon-red)" />
          </button>
        </div>

        {/* Explore Rhymes in Languages */}
        <div className="explore-section">
          <h3 className="explore-title">EXPLORE RHYMES IN</h3>
          <div className="language-scroll">
            {languages.map(({ code, native }) => (
              <button key={code} className="language-tag">
                <span className="language-tag-text">{native}</span>
              </button>
            ))}
            <button className="language-tag more-tag">
              <span className="language-tag-text more-text">More...</span>
            </button>
          </div>
        </div>

        {/* Quick Access */}
        <div className="quick-access-container">
          {quickAccess.map(({ label, subtitle, icon, color }) => (
            <button key={label} className="quick-access-card" style={{ '--card-color': color }}>
              {icon === 'fire' && <Flame size={34} style={{ color }} />}
              {icon === 'globe' && <Globe size={30} style={{ color }} />}
              {icon === 'bolt' && <Zap size={34} style={{ color }} />}
              {icon === 'bookmark' && <Bookmark size={34} style={{ color }} />}
              <span className="quick-access-label" style={{ color }}>{label}</span>
              <span className="quick-access-sub">{subtitle}</span>
            </button>
          ))}
        </div>

        {/* Unlock Pro Section */}
        <div className="unlock-pro-card">
          <div>
            <h3 className="unlock-pro-title">Unlock RAPPER PRO</h3>
            <p className="unlock-pro-subtitle">Unlimited rhymes, Unlimited languages.</p>
          </div>
          <button className="pro-btn">
            <span className="pro-btn-text">Get PRO</span>
          </button>
        </div>
      </div>

      {/* Beats Mode Player */}
      <div className="beats-player">
        <button><SkipBack size={28} color="var(--neon-red)" /></button>
        <button className="play-btn"><Play size={36} color="var(--white)" /></button>
        <button><SkipForward size={28} color="var(--neon-red)" /></button>
        <span className="beats-text">Lo-Fi Trap Beat</span>
      </div>
    </div>
  );
}

export default HomeScreen;
