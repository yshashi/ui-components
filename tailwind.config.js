/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  content: [
    "./src/**/*.{html,ts}",
    "./projects/ui-lib/**/*.{html,ts,scss}",
    "./dist/ui-lib/**/*.{html,ts,js,mjs}",
    "./node_modules/ui-lib/**/*.{html,ts,js,mjs}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0074D9",
        secondary: "#FF4136",
        accent: "#7FDBFF",
        transparent: "transparent",
        white: "#ffffff",
        black: "#000000",
        "blue-gray": {
          50: "#eceff1",
          100: "#cfd8dc",
          200: "#b0bec5",
          300: "#90a4ae",
          400: "#78909c",
          500: "#607d8b",
          600: "#546e7a",
          700: "#455a64",
          800: "#37474f",
          900: "#263238",
        },
        gray: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        blue: {
          50: "#e3f2fd",
          100: "#bbdefb",
          200: "#90caf9",
          300: "#64b5f6",
          400: "#42a5f5",
          500: "#2196f3",
          600: "#1e88e5",
          700: "#1976d2",
          800: "#1565c0",
          900: "#0d47a1",
        },
        red: {
          50: "#ffebee",
          100: "#ffcdd2",
          200: "#ef9a9a",
          300: "#e57373",
          400: "#ef5350",
          500: "#f44336",
          600: "#e53935",
          700: "#d32f2f",
          800: "#c62828",
          900: "#b71c1c",
        }
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Roboto Slab", "serif"],
        body: ["Roboto", "sans-serif"],
      },
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        "lg-max": { max: "960px" },
        xl: "1140px",
        "2xl": "1320px",
      }
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],

}
