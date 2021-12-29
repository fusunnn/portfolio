const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      cream: "#fff9f2",
      royal: "#1e107a",
      zinc: colors.zinc,
      black: colors.black,
    },
  },
  plugins: [],
};
