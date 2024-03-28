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
          typewriter: 'typewriter 2s steps(11) forwards',
          caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
        },
        keyframes: {
          tilt: {
            '0%, 50%, 100%': { transform: 'rotate(0deg)' },
            '25%': { transform: 'rotate(1.5deg)' },
            '75%': { transform: 'rotate(-1.5deg)' }
          },
          typewriter: {
            to: {
              left: "100%"
            }
          },
          blink: {
            '0%': {
              opacity: '0',
            },
            '0.1%': {
              opacity: '1',
            },
            '50%': {
              opacity: '1',
            },
            '50.1%': {
              opacity: '0',
            },
            '100%': {
              opacity: '0',
            },
          },
        },
      },
    },
    plugins: [],
  }