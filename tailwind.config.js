/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        popins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: { sm: "300px" },
    },
  },
  plugins: [],
};
