/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        spacemono: ['SpaceMono', 'monospace'],
        machina: ['NeueMachina', 'monospace']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#96DF15',
        'secondary': '#0f172a',
        'tertiary': '#18181b'
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },
      animation: {
        tilt: 'tilt 3s infinite linear',
        blink: 'blink 5s infinite',
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
        spin_right: 'spin_right 3s linear infinite',
        spin_right_fast: 'spin_right 2s linear infinite',
        spin_right_slow: 'spin_right 6s linear infinite',
        spin_left: 'spin_left 3s linear infinite',
        go_right: 'go_right 0.5s linear',
        go_left: 'go_left 0.5s linear',
        expand_right: 'expand_right 1s linear',
        expand_left: 'expand_left 1s linear',
        bg_spin: 'bg_spin 0.5s linear infinite'
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1.5deg)' },
          '75%': { transform: 'rotate(-1.5deg)' }
        },
        blink: {
          '0%': { opacity: 0 },
          '15%': { opacity: 1 },
          '20%': { opacity: 0 },
          '30%': { opacity: 1 },
          '35%': { opacity: 0 },
          '45%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        spin_right: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spin_left: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(-180deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        go_right: {
          '0%': { width: '1%', transform: 'translateX(0%)' },
          '100%': { width: '100%', transform: 'translateX(100%)' },
        },
        go_left: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        expand_right: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%', marginLeft: '100%' },
        },
        expand_left: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%', marginRight: '100%' },
        },
        bg_spin: {
          '0%': { backgroundPosition: '0% 50%', backgroundSize: '200% 200%' },
          '25%': { backgroundPosition: '50% 50%', backgroundSize: '200% 200%' },
          '50%': { backgroundPosition: '100% 50%', backgroundSize: '200% 200%' },
          '75%': { backgroundPosition: '50% 50%', backgroundSize: '200% 200%' },
          '100%': { backgroundPosition: '0% 50%', backgroundSize: '200% 200%' },
        }
      },
    },
  },
  plugins: [],
}