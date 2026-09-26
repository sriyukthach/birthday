/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        warm: {
          ivory: '#FAF7F2',
          cream: '#F5EFEB',
          beige: '#EFE8DE',
          sand: '#E3D8CA',
          peach: '#F8E6DA',
          peachDim: '#F2D7C5',
          gold: '#C99E38',
          goldLight: '#E8C56D',
          terracotta: '#C66B4E',
          terracottaDark: '#A85237',
          sage: '#7E8F7A',
          sageDark: '#566652',
          brown: '#4A3728',
          charcoal: '#2C221E',
          muted: '#8C7A6B',
        },
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['monospace'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -1px rgba(74, 55, 40, 0.08), 0 1px 4px -1px rgba(74, 55, 40, 0.04)',
        'warm-md': '0 8px 24px -4px rgba(74, 55, 40, 0.12), 0 4px 12px -2px rgba(74, 55, 40, 0.08)',
        'warm-lg': '0 20px 40px -8px rgba(74, 55, 40, 0.16), 0 8px 16px -4px rgba(74, 55, 40, 0.08)',
        'warm-inner': 'inset 0 2px 4px 0 rgba(74, 55, 40, 0.06)',
      },
    },
  },
  plugins: [],
}
