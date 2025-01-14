// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          // xs: "1.5rem",
          sm: "2rem",
          // md: "3rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        protest: ['"Protest Guerrilla"', "sans-serif"],
        alexandria: ['"Alexandria"', "sans-serif"],
      },
      height: {
        screen: "100dvh",
      },
      colors: {
        primary: "#202020",
        secondary: "#2D404E",
        lightPrimary: "#D2FBFA",
        darkPrimary: "#167C88",
        textColor: "#353535",

        error: "#EE4B2B",
        disabled: "#d1dae6",
        info: "#f2f9fd",
      },

      // screens: {
      //   xs: "480px",
      //   sm: "768px",
      //   md: "1060px",
      //   lg: "1280px",
      //   xl: "1536px",
      //   "2xl": "2400px",
      // },
    },
  },
  plugins: [],
};
