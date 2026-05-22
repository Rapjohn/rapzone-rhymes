import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Heart, Volume2, Save } from 'lucide-react';
import './WordDetailScreen.css';

function WordDetailScreen() {
  const { word = 'freedom' } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const data = {
    word: 'freedom',
    phonetic: '/ˈfriːdəm/',
    meaning: 'The power or right to act, speak, or think as one wants.',
    rhymes: {
      English: ['kingdom', 'wisdom', "freedom's", 'random', 'phantom', 'bloom', 'room', 'zoom', 'doom'],
      Hindi: ['आजादी', 'बरख़ास्ती', 'समझदारी', 'कमज़ोरी', 'तवारी', 'जवाबदारी'],
      Hinglish: ['free-dom', 'bee-dom', 'dream', 'extreme', 'team', 'scheme', 'supreme'],
      Punjabi: ['ਅਜ਼ਾਦੀ', 'ਫ਼ਿਰਕਾ', 'ਭਰਮੂਰੀ', 'ਨਕਸੀਰਤੀ', 'ਤਸਦਕੀ', 'ਮੁਸਲਸਲ'],
      Nepali: ['स्वतन्त्रता', 'अवकाश', 'समझदारी', 'कमजोरी', 'देवरी'],
    }
  };

  return (
    <div className="word-detail-container">
      {/* Header */}
      <div className="detail-header">
        <button className="detail-back-btn" onClick={() => navigate(-1)}>
          <ChevronLeft size={28} color="var(--neon-blue)" />
        </button>
        <h1 className="detail-word">{data.word}</h1>
        <button 
          className="detail-favorite-btn"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart 
            size={28} 
            color="var(--neon-red)"
            fill={isFavorite ? "var(--neon-red)" : "none"}
          />
        </button>
      </div>

      {/* Pronunciation */}
      <div className="pronunciation-row">
        <span className="pronunciation-text">{data.phonetic}</span>
        <button className="sound-btn">
          <Volume2 size={28} color="var(--neon-blue)" />
        </button>
      </div>

      {/* Meaning */}
      <p className="meaning-text">{data.meaning}</p>

      {/* Rhymes Sections */}
      <div className="rhymes-container">
        {Object.entries(data.rhymes).map(([lang, words]) => (
          <div key={lang} className="rhymes-section">
            <h3 className="rhymes-section-title">Rhymes ({lang})</h3>
            <div className="rhymes-chips-container">
              {words.map(w => (
                <button
                  key={w}
                  className="rhyme-chip"
                  onClick={() => alert(w)}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="detail-buttons-row">
        <button className="detail-btn detail-btn-red">
          <Save size={20} />
          <span>SAVE WORD</span>
        </button>
        <button className="detail-btn detail-btn-blue">
          <span>VIEW ALL RHYMES</span>
        </button>
      </div>
    </div>
  );
}

export default WordDetailScreen;
