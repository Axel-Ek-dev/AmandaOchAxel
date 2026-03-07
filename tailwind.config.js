/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F6F3EC',
        beige: '#DDD0C5',
        taupe: '#B8A99D',
        sage: '#9BAA8B',
        olive: {
          DEFAULT: '#5E5A41',
          600: '#4E4A34'
        },
        charcoal: '#2C2B29',
        muted: '#6A665F'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
