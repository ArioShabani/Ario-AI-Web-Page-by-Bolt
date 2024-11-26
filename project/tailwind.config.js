/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          900: '#1A103C',
          800: '#2D1B4E',
          700: '#4B2C85',
          600: '#6938B7',
          500: '#8B4FE3',
          400: '#AB6FFF',
          300: '#C49BFF',
          200: '#DCC2FF',
          100: '#F0E4FF',
        },
      },
    },
  },
  plugins: [],
};