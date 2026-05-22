import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, Volume2, Heart, Copy, Filter } from 'lucide-react';
import './SearchResultsScreen.css';

function SearchResultsScreen() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [wordSearch, setWordSearch] = useState(searchParams.get('q') || 'freedom');
  const [activeLang, setActiveLang] = useState('eng');
  const [activeRhymeType, setActiveRhymeType] = useState('Perfect');

  const languages = [
    { code: 'eng', label: 'ENG', count: 2826 },
    { code: 'hi', label: 'हिंदी', count: 1897 },
    { code: 'pa', label: 'ਪੰਜਾਬੀ', count: 1524 },
    { code: 'ne', label: 'नेपाली', count: 1320 },
    { code: 'all', label: 'All', count: 7970 },
  ];

  const rhymeTypes = ['Perfect', 'Near', 'Assonance', 'Consonance'];

  const allRhymes = [
    { word: 'freedom', type: 'noun', lang: 'eng' },
    { word: 'kingdom', type: 'noun', lang: 'eng' },
    { word: 'wisdom', type: 'noun', lang: 'eng' },
    { word: 'random', type: 'adjective', lang: 'eng' },
    { word: 'phantom', type: 'noun', lang: 'eng' },
    { word: 'zoom', type: 'verb', lang: 'eng' },
    { word: 'bloom', type: 'noun', lang: 'eng' },
    { word: 'room', type: 'noun', lang: 'eng' },
  ];

  const filteredRhymes = allRhymes.filter(r => activeLang === 'all' ? true : r.lang === activeLang);

  const handleCopy = (word) => {
    navigator.clipboard.writeText(word);
    alert(`Copied "${word}"`);
  };

  return (
    <div className="search-results-container">
      {/* Search Header */}
      <div className="search-results-header">
        <button className="back-btn" onClick={() => navigate('/home')}>
          <ChevronLeft size={28} color="var(--neon-blue)" />
        </button>
        <input
          type="text"
          className="search-input-results"
          value={wordSearch}
          onChange={(e) => setWordSearch(e.target.value)}
          placeholder="Search any word..."
          autoFocus
        />
      </div>

      {/* Languages Tabs */}
      <div className="languages-tabs">
        {languages.map(({ code, label, count }) => (
          <button
            key={code}
            className={`lang-tab ${activeLang === code ? 'lang-tab-active' : ''}`}
            onClick={() => setActiveLang(code)}
          >
            <span className="lang-tab-text">
              {label} <span className="lang-count">{count}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Rhyme Type Tabs */}
      <div className="rhyme-type-tabs">
        {rhymeTypes.map((type) => (
          <button
            key={type}
            className={`rhyme-type-tab ${activeRhymeType === type ? 'rhyme-type-active' : ''}`}
            onClick={() => setActiveRhymeType(type)}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Rhymes List */}
      <div className="rhymes-list">
        {filteredRhymes.length > 0 ? (
          filteredRhymes.map((item) => (
            <div key={item.word} className="rhyme-item">
              <div className="rhyme-info">
                <div className="rhyme-word">{item.word}</div>
                <div className="rhyme-pos">{item.type}</div>
              </div>
              <div className="rhyme-actions">
                <button className="action-btn">
                  <Volume2 size={22} color="var(--neon-red)" />
                </button>
                <button className="action-btn">
                  <Heart size={24} color="var(--neon-red)" />
                </button>
                <button className="action-btn" onClick={() => handleCopy(item.word)}>
                  <Copy size={24} color="var(--neon-blue)" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No rhymes found.</p>
        )}
      </div>

      {/* Advanced Filters */}
      <button className="advanced-filters-btn">
        <Filter size={26} color="var(--neon-blue)" />
        <span>ADVANCED FILTERS</span>
      </button>
    </div>
  );
}

export default SearchResultsScreen;
