# RAPPER Web - Setup Guide

## Overview
RAPPER is an advanced multilingual rhyming dictionary web application. This is the web version built with React, Vite, and React Router.

## Features
✨ **Multi-Language Support** - English, Hindi, Hinglish, Punjabi, Nepali
🔍 **Advanced Search** - Find perfect rhymes instantly
🎵 **Audio Playback** - Listen to pronunciations
❤️ **Save Favorites** - Build your personal rhyme collection
🎨 **Modern Dark UI** - Neon-themed, eye-catching interface
📱 **Responsive Design** - Works on desktop, tablet, mobile

## Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Steps
1. **Clone the repository**
   ```bash
   git clone https://github.com/Rapjohn/rapzone-rhymes.git
   cd rapzone-rhymes/web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure
```
web/
├── src/
│   ├── pages/
│   │   ├── SplashScreen.jsx        # Initial splash/landing page
│   │   ├── HomeScreen.jsx          # Main dashboard
│   │   ├── SearchResultsScreen.jsx # Search results & rhymes list
│   │   ├── WordDetailScreen.jsx    # Detailed word view
│   │   └── [*.css]                 # Component styles
│   ├── App.jsx                     # Main app router
│   ├── App.css                     # Global styles
│   ├── index.css                   # Root styles
│   └── main.jsx                    # React entry point
├── index.html                      # HTML entry point
├── vite.config.js                  # Vite configuration
├── package.json                    # Dependencies
└── README.md                       # Documentation
```

## Tech Stack
- **React 18** - UI Framework
- **React Router 6** - Client-side routing
- **Vite** - Build tool & dev server
- **Lucide React** - Icon library
- **CSS3** - Styling with neon theme

## Color Scheme
- **Dark Background** - `#000000`
- **Neon Red** - `#FF073A`
- **Neon Blue** - `#00F0FF`
- **Gray Dark** - `#222222`

## Routes
- `/` - Splash/Landing Screen
- `/home` - Home/Dashboard
- `/search` - Search Results
- `/word/:word` - Word Detail Page

## Available Scripts

### Development
```bash
npm run dev      # Start dev server with hot reload
```

### Production
```bash
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## Features Implementation

### Search Functionality
- Enter any word in the search bar
- Supports multiple languages
- Filters by rhyme type (Perfect, Near, Assonance, Consonance)
- Sort by language

### Word Details
- Pronunciation with audio playback
- Multiple definitions
- Organized rhymes by language
- Save to favorites
- Copy rhyme words

### Navigation
- Smooth page transitions
- Back button support
- Deep linking support

## Future Enhancements
- 🔌 Connect to real rhyming dictionary API
- 🎤 Voice input/speech recognition
- 🎵 Spotify/music integration
- 📊 Usage analytics
- 💾 Cloud sync for saved rhymes
- 🌙 Dark/Light mode toggle

## Contributing
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## License
MIT License - see LICENSE file for details

## Support
For issues and questions, please visit: https://github.com/Rapjohn/rapzone-rhymes/issues

---

**Happy Rhyming! 🎤🔥**
