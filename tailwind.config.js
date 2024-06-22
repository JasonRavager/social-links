/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        Green: "hsl(75, 94%, 57%)",
        Grey: "hsl(0, 0%, 20%)",
        DarkGrey: "hsl(0, 0%, 12%)",
        OffBlack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
