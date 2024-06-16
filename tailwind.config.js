/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'avenir' : ['avenir-lt-35', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

