/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        espresso: "#0F1416",
        espressoSoft: "#1C1F22",
        bean: "#4B3527",
        latte: "#E6D2B5",
        muted: "#A9B0B3",
      },
    },
  },
  plugins: [],
}
