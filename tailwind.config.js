module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        primary: "#6F3E97",
        secondary: "#57A8DA",
        gray: "#F2F2F2",
        purple: "#5D268A",
      },
      textColor: {
        primary: "#6F3E97",
        secondary: "#57A8DA",
      },
      lineHeight: {
        12: "3rem",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
      },
      height: {
        "screen/85": "85vh",
        "screen/75": "75vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [require("tailwindcss-ripple")()],
};
