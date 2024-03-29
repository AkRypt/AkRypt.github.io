/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'backg': '#0C111F',
          'borderg': '#415BA5',
          'grad-start': '#fc00ff',
          'grad-end': '#04C3CC',
        },
        animation: {
          tilt: 'tilt 3s infinite linear',
          blink: 'blink 1s infinite',
          marquee: 'marquee 15s linear infinite',
          marquee2: 'marquee2 15s linear infinite',
          rectangle: 'rectangle 3s linear infinite'
        },
        keyframes: {
          tilt: {
            '0%, 50%, 100%': { transform: 'rotate(0deg)' },
            '25%': { transform: 'rotate(1.5deg)' },
            '75%': { transform: 'rotate(-1.5deg)' }
          },
          blink: {
            '0%, 100%': { color: 'transparent' },
            '50%': { color: 'white' },
          },
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
          marquee2: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0%)' },
          },
          rectangle: {
            '0%': { transform: 'rotate(0deg)' },
            '50%': { transform: 'rotate(180deg)' },
            '100%': { transform: 'rotate(360deg)' },
          }
        },
      },
    },
    plugins: [],
  }