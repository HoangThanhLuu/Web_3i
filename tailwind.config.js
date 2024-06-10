/** @type {import('tailwindcss').Config} */
const { url } = require("inspector");
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      tc: "#16181a",
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#090E34",
      dark: "#1D2144",
      primary: "#4A6CF7",
      yellow: "#FBB040",
      orange: "#f39f1e",
      blue: "DodgerBlue",
      "body-color": "#959CB1",
    },
    screens: {
      0: "0px",
      xs: "450px",
      // => @media (min-width: 450px) { ... }
      sm_p1: "480px",
      sm: "575px",
      // => @media (min-width: 576px) { ... }
      sm_p1: "620px",
      md: "768px",
      // => @media (min-width: 768px) { ... }
      md_p1: "805px",
      md_p2: "920px",
      lg: "992px",
      lg_p1: "1040px",
      // => @media (min-width: 992px) { ... }
      1100: "1100px",
      xl: "1200px",
      xl_p1: "1201px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1519px",
      "3xl": "1700px",
      "4xl": "2080px",
      "5xl": "2380px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        amber: colors.amber,
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        stone: colors.stone,
        sky: colors.sky,
        neutral: colors.neutral,
        gray: colors.gray,
        slate: colors.slate,
        lime: colors.lime,
        rose: colors.rose,
        pink: colors.pink,
        purple: colors.urple,
        fuchsia: colors.fuchsia,
        violet: colors.violet,
        blue: colors.blue,
        teal: colors.teal,
        green: colors.green,
        teal: colors.teal,
        orange: colors.orange,
        red: colors.red,
      },
      textShadow: {
        // Define your custom text shadow classes here
        red1: "2px 2px red",
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "4px 4px 6px rgba(0, 0, 0, 0.5)",
      },
      boxShadow: {
        "shadow-chat": "0 4px 20px 0 rgba(28,28,51,.16)",
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "hero-pattern2":
          "url('https://cv-git-main-sunharry198.vercel.app/static/media/background-1.12aaebc65911a3fe7a2a.webp')",
        "nav-mobile": "url('/images/menu/map_menu.jpg')",
        "cta-mobile": "url('/image/HomeSlides/cta-mobile.jpg')",
        map: "url('/images/map/map.png')",
      },
      keyframes: {
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -100%, 0)",
          },
          to: {
            opacity: "1",
            transform: "translateZ(0)",
          },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 1s ease-in-out",
      },
      fontFamily: {
        sans: ["Arial", "Roboto", "Helvetica", "sans-serif"],
        serif: ["Arial", "ui-serif", "Georgia", "Cambria"],
      },
    },
  },
  mode: "jit",
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
