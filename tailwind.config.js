/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bangla-green': {
          50: '#e6f0e6',
          100: '#c0d9c0',
          200: '#97c197',
          300: '#6ba96d',
          400: '#489a4a',
          500: '#298a2b',
          600: '#217a23',
          700: '#17671a',
          800: '#0e5512',
          900: '#046307',
        },
        'bangla-red': {
          50: '#fce9e9',
          100: '#f8c8c8',
          200: '#f2a3a3',
          300: '#ec7e7e',
          400: '#e75f5f',
          500: '#e14141',
          600: '#d63c3c',
          700: '#c93434',
          800: '#bc2d2d',
          900: '#DA291C',
        },
        'bangla-gold': {
          50: '#fcf7e9',
          100: '#f7eac7',
          200: '#f1dca2',
          300: '#ebcd7c',
          400: '#e7c261',
          500: '#e4b74a',
          600: '#e0ab45',
          700: '#dc9c3d',
          800: '#d88e36',
          900: '#E4B04A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};