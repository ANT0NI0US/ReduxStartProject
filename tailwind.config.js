// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "5px",
          xs: "5px",
          sm: "10px",
          md: "15px",
          lg: "20px",
          xl: "25px",
          "2xl": "30px",
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

      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
        lg: "1280px",
        xl: "1536px",
        "2xl": "2400px",
      },
    },
  },
  plugins: [],
};
