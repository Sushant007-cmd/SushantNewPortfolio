/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-bg': '#fff7ed', // Orange-50
        'warm-text': '#431407', // Orange-950
        'warm-accent': '#ea580c', // Orange-600
        'warrior-bg': '#0a0a0a',
        'warrior-red': '#ef4444', // Red-500
        'warrior-dark-red': '#7f1d1d', // Red-900
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
