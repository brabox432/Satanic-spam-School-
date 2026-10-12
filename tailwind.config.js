/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', '"Cascadia Code"', 'monospace'],
        display: ['"Orbitron"', '"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cyber: {
          bg: '#0a0a0f',
          panel: '#0f0f1a',
          border: '#1a1a2e',
          green: '#00ff9f',
          'green-dim': '#00cc7f',
          red: '#ff003c',
          'red-dim': '#cc0030',
          yellow: '#ffd700',
          gray: '#3a3a4e',
        },
      },
      animation: {
        'glitch-shift': 'glitch-shift 0.3s infinite',
        'flicker': 'flicker 3s linear infinite',
        'scan-line': 'scan-line 8s linear infinite',
        'fade-in': 'fade-in 0.4s ease-out',
        'slide-up': 'slide-up 0.4s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'blink': 'blink 1s steps(2) infinite',
      },
      keyframes: {
        'glitch-shift': {
          '0%': { transform: 'translate(0)', filter: 'hue-rotate(0deg)' },
          '20%': { transform: 'translate(-2px, 1px)' },
          '40%': { transform: 'translate(2px, -1px)', filter: 'hue-rotate(90deg)' },
          '60%': { transform: 'translate(-1px, -1px)' },
          '80%': { transform: 'translate(1px, 1px)', filter: 'hue-rotate(-90deg)' },
          '100%': { transform: 'translate(0)', filter: 'hue-rotate(0deg)' },
        },
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 22%, 24%, 55%': { opacity: '0.4' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 8px rgba(0,255,159,0.3)' },
          '50%': { boxShadow: '0 0 24px rgba(0,255,159,0.6)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
