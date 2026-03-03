import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          violet: '#00ADB5',
          rose: '#FFE3E1',
          blue: '#bfdbfe',
          green: '#a7f3d0',
          yellow: '#fde68a',
          terra: '#FFD1D1',
        },
        accent: {
          violet: '#00ADB5',
          rose: '#FF9494',
          blue: '#3b82f6',
          green: '#10b981',
        },
        terra: {
          50:  '#fff7f7',
          100: '#FFE3E1',
          200: '#FFD1D1',
          300: '#FFB0B0',
          400: '#FFA0A0',
          500: '#FF9494',
          600: '#e87070',
          700: '#cc5050',
          800: '#a03333',
          900: '#7a2222',
        },
        ink: {
          DEFAULT: '#1e1b4b',
          secondary: '#6b7280',
          muted: '#9ca3af',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cal)', 'var(--font-inter)', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
