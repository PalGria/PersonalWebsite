import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        // Overridable at runtime via the --brand CSS variable (set from Contentful on the home page)
        brand: 'var(--brand, #140453)',
        gray: {
          950: '#12131e',
          900: '#1a1b2a',
          800: '#252639',
          700: '#353650',
        },
      },
    },
  },
  plugins: [typography],
}
