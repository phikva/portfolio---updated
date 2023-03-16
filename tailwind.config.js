const { theme } = require('@sanity/demo/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    
  ],
  theme: {
    ...theme,
    // Overriding fontFamily to use @next/font loaded families
    colors: {
      'white': '#f3f3f3',
    },
    fontFamily: {
      mono: 'var(--font-mono)',
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
      neueRegular: ['neue-haas-unica', 'sans-serif'],
      neueHeavy: ['neue-haas-unica', 'sans-serif'], 
      neueThin: ['neue-haas-unica', 'sans-serif'],
    },
    
  },
  plugins: [require('@tailwindcss/typography')],
}
