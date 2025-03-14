// src/components/NavBar.jsx
import React from 'react';

export default function NavBar() {
  return (
    <header className="relative">
      {/* Wave background */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-r from-primary to-purple-600">
        {/* Você pode usar um SVG wave aqui */}
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,101.3C160,139,320,213,480,240C640,267,800,245,960,224C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>

      <nav className="container mx-auto p-4 flex items-center justify-between text-white">
        <h1 className="text-2xl font-bold">Infinity Flow</h1>
        <ul className="flex items-center gap-6">
          <li className="cursor-pointer hover:opacity-80 transition-opacity">
            Home
          </li>
          <li className="cursor-pointer hover:opacity-80 transition-opacity">
            Sobre
          </li>
          <li className="cursor-pointer hover:opacity-80 transition-opacity">
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
}
