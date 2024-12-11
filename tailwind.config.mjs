/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0C312B",
        secondary: "#E45C06"
      },
      fontFamily: {
        samsara: ['Samsara'],
        ernestine: ['ErnestineOT'],
        cenzo: ['Cenzo Flare']
      },
    },
  },
  plugins: [],
};
