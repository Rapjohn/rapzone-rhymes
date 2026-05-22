import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import HomeScreen from './pages/HomeScreen';
import SearchResultsScreen from './pages/SearchResultsScreen';
import WordDetailScreen from './pages/WordDetailScreen';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/search" element={<SearchResultsScreen />} />
        <Route path="/word/:word" element={<WordDetailScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
