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
    fontSize: {
      'xl': '1rem',
      'link': '1.5rem',
      '3xl': '3rem',
      '4xl': '4rem',
      '2xl': '2.5rem',
      '5xl': '5rem',
      '6xl': '6.25rem',
      '8xl': '8.125rem',

      '15xl': '15rem'
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
