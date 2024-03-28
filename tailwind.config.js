/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'backg': '#0C111F',
          'grad-start': '#fc00ff',
          'grad-end': '#04C3CC',
          // 'grad-end': '#00dbde',
        },
      },
    },
    plugins: [],
  }