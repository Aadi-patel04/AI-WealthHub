/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        // Matches common arbitrary pixel values used in the UI
        "12.5": "3.125rem", // 50px
        "32.5": "8.125rem", // 130px
      },
    },
  },
  plugins: [],
};
