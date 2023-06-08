/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      // typography: {
      //   DEFAULT: {
      //     css: {
      //       maxWidth: '100ch',
      //       marginBottom: '0',
      //       marginTop: '0'
      //     }
      //   }
      // }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["cupcake"]
  },
}

