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
          terra: '#FFD1D1',
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
      },
    },
  },
  plugins: [],
}
export default config
