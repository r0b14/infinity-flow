// src/App.jsx
import React from 'react';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="font-sans text-gray-800 min-h-screen">
      <NavBar />
      <HeroSection />
      {/* Conteúdo principal */}
      <Home />
    </div>
  );
}

export default App;
