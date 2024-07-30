/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      height: {
        'calc-100vh-minus-78px': 'calc(100vh - 78px)',
      },
      container: {
        center: true,

        screens: {
          sm: "600px",
          md: "700px",
          lg: "900px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
