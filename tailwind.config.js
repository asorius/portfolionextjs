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
          },
          to: {
            strokeDashoffset: 0,
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 1s ease-out',
        'fade-in': 'fade-in  3s linear ',
        'fade-out': 'fade-out  1s linear ',
        'fade-in-long': 'fade-in 2s linear ',
        baller: 'baller 5s linear  infinite',
        liner: 'liner 1s linear forwards',
        slideright: 'slide-in-right 1s linear forwards',
      },
    },
  },
  plugins: [],
};
