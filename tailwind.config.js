/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Very-Dark-grey": "hsl(0, 0%, 17%)",
        "Dark-grey": "hsl(0, 0%, 59%)"
      },
      backgroundImage: {
        "location": "url(./assets/images/pattern-bg-desktop.png)",
        "location-sm": "url(./assets/images/pattern-bg-mobile.png)"
      }
    },
  },
  plugins: [],
}