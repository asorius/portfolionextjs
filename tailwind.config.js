const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'text-primary': colors.neutral[700],
        'text-primary-dark': colors.neutral[50],
        accent: colors.teal[700],
        'accent-dark': colors.teal[600],
        'accent-dark-btn': colors.teal[400],
        'accent-pink': colors.rose[600],
        'bg-light': colors.neutral[50],
        'bg-dark': colors.neutral[700],
        container: colors.neutral[100],
        'container-dark': colors.neutral[400],
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        baller: {
          from: {
            offsetDistance: '0%',
          },
          to: {
            offsetDistance: '100%',
          },
        },
        liner: {
          from: {
            strokeDashoffset: 162,
            opacity: 0,
          },
          to: {
            strokeDashoffset: 0,
            opacity: 1,
          },
        },
      },
      animation: {
        'fade-in-down': '3s fade-in-down 3s ease-out forwards',
        'fade-in-down-nav': '1s fade-in-down 2s ease-out forwards',
        'fade-in': 'fade-in  2s linear forwards',
        'fade-out': 'fade-out  1s linear forwards',
        'fade-in-long': '3s fade-in 2s linear forwards',
        ASletters: 'fade-in-down 3s ease-out forwards',
        'firstname-fade': '1s fade-in  3s linear forwards',
        'lastname-fade': '3s fade-in  3s linear forwards',
        liner: '1.6s liner 1s linear forwards',
        baller: 'baller 5s linear  infinite',
        slideright: 'slide-in-right 1s linear forwards',
      },
    },
  },
  plugins: [],
};
