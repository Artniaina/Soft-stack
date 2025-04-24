/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pastel-pink': '#FFB6C1',
        'pastel-purple': '#DDA0DD',
        'pastel-blue': '#CCCCFF',
        'pastel-yellow': '#FFFFCC',
        'pastel-mint': '#C9FFED',
        'pastel-lavender': '#E0BBE4',
        'pastel-peach': '#FFDAB9',
        'pastel-background': '#FFF0F5',
      },
      fontFamily: {
        'cute': ['Quicksand', 'sans-serif'],
        'bro': ['Bro', 'sans-serif'],
        'cookie': ['Cookie', 'sans-serif'],
        'nabuya': ['Nabuya', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 2s infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      },
      boxShadow: {
        'pastel': '0 4px 10px rgba(221, 160, 221, 0.3)',
        'pastel-hover': '0 6px 15px rgba(221, 160, 221, 0.5)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}