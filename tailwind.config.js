/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      'all-sides': '0 0 40px 0 rgba(0, 0, 0, 0.5)',
      'small-shadow': '0 0 8px 0 rgba(0, 0, 0, 0.5)',
    },
  },
  plugins: [],
}

