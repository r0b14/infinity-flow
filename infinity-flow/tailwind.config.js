/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7C3AED',  // roxo claro
          DEFAULT: '#6D28D9', // roxo principal
          dark: '#5B21B6',   // roxo escuro
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Exemplo de fonte
      },
    },
  },
  plugins: [],
}
