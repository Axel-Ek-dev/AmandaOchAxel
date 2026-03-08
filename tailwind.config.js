/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // ── Primary palette ──────────────────────────────────────────
        ivory:  '#E8E6DF',   // main background
        beige:  '#C9BBB0',   // section backgrounds / borders
        taupe:  '#A79A8B',   // muted text / accents / dividers
        olive:  '#7A7750',   // secondary buttons / links
        forest: {
          DEFAULT: '#4F4F33', // primary text / primary buttons
          600:     '#3e3e28', // darker hover shade
        },
        // ── Backward-compat aliases ───────────────────────────────────
        cream:        '#E8E6DF',
        'near-black': '#4F4F33',
        muted:        '#A79A8B',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans:  ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
