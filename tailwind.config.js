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
        'text-dark': colors.neutral[700],
        'text-light': colors.neutral[50],
        accent: '#005f73',
        'accent-darkmode': '#94d2bd',
        'button-primary': '#e63946',
        'accent-secondary': '#ee9b00',
        'accent-secondary-darkmode': '#e9d8a6',
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
        'hover-animation': {
          '100%': {
            transform: 'scale(0)',
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
        waving: {
          '0%': {
            transform: 'translate(-5px)',
          },
          '25%': {
            transform: 'translate(5px,2px )',
          },
          '50%': {
            transform: 'translate(-5px)',
          },
          '75%': {
            transform: 'translate(5px,-2px)',
          },
          '100%': {
            transform: 'translate(-5px)',
          },
        },
      },
      animation: {
        'fade-in-down': '3s fade-in-down 3s ease-out forwards',
        fader: 'fade-in-down 1s ease-out forwards',
        'fade-in-down-nav': '1s fade-in-down 2s ease-out forwards',
        'fade-in': 'fade-in  2s linear forwards',
        'fade-in-fast': 'fade-in  .5s linear forwards',
        'fade-out': 'fade-out  1s linear forwards',
        'fade-in-long': '3s fade-in 2s linear forwards',
        ASletters: 'fade-in-down 3s ease-out forwards',
        'firstname-fade': '1s fade-in  3s linear forwards',
        'lastname-fade': '3s fade-in  3s linear forwards',
        liner: '1.6s liner 1s linear forwards',
        baller: 'baller 5s linear  infinite',
        slideright: 'slide-in-right 1s linear forwards',
        hoverer: 'hover-animation .2s linear forwards',
        wave1: ' waving 4s ease-in-out   infinite',
        wave2: ' waving 5.3s ease-in-out   infinite',
      },
    },
  },
  plugins: [],
};
