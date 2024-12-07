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
  safelist: [
    // Text Colors
    'text-white',
    'text-black',
    'text-blue-400',
    'text-blue-600',
    'text-blue-700',
    'text-pink-500',
    'text-purple-500',
    'text-purple-600',
    'text-red-500',
    'text-red-600',
    'text-green-500',
    'text-green-600',
    'text-orange-500',
    'text-yellow-500',
    'text-sky-400',
    'text-sky-500',
    'text-indigo-500',
    'text-indigo-600',

    // Background Colors
    'bg-gray-800',
    'bg-blue-400',
    'bg-blue-600',
    'bg-blue-700',
    'bg-pink-500',
    'bg-red-500',
    'bg-red-600',
    'bg-black',
    'bg-green-500',
    'bg-green-600',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-purple-600',
    'bg-sky-400',
    'bg-sky-500',
    'bg-indigo-500',
    'bg-indigo-600',

    // Gradient Backgrounds
    'bg-gradient-to-r',
    'from-yellow-400',
    'via-pink-500',
    'to-purple-600',

    // Ocean Blue
    'from-blue-900',
    'via-blue-800',
    'to-blue-700',

    // Purple Night
    'from-gray-900',
    'via-purple-900',
    'to-violet-900',

    // Forest Green
    'from-green-900',
    'via-green-800',
    'to-emerald-700',

    // Sunset Orange
    'from-orange-900',
    'via-red-800',
    'to-rose-700',

    // Dark Theme
    'from-gray-900',
    'via-gray-900',
    'to-gray-900',

    // Ocean Breeze
    'from-blue-500',
    'via-teal-400',
    'to-cyan-300',

    // Sunset Vibes
    'from-orange-500',
    'via-pink-500',
    'to-purple-500',

    // Forest Dream
    'from-green-500',
    'via-emerald-400',
    'to-lime-300',

    // Night Sky
    'from-indigo-600',
    'via-purple-500',
    'to-violet-400',

    // Desert Sand
    'from-yellow-500',
    'via-orange-400',
    'to-red-300',

    // Aurora Borealis
    'from-teal-800',
    'via-green-600',
    'to-emerald-400',

    // Royal Gold
    'from-yellow-800',
    'via-amber-600',
    'to-orange-500',

    // Midnight Glow
    'from-gray-800',
    'via-indigo-800',
    'to-purple-700',

    // Blazing Fire
    'from-red-800',
    'via-orange-700',
    'to-yellow-600',

    // Cool Mist
    'from-teal-300',
    'via-cyan-200',
    'to-blue-200',

    // Tropical Sunset
    'from-rose-600',
    'via-orange-500',
    'to-yellow-300',

    // Emerald Water
    'from-emerald-900',
    'via-teal-800',
    'to-cyan-700',

    // Lavender Fields
    'from-purple-300',
    'via-indigo-200',
    'to-violet-100',

    // Fiery Sunrise
    'from-red-600',
    'via-rose-500',
    'to-orange-400',

    // Arctic Chill
    'from-blue-900',
    'via-teal-600',
    'to-cyan-500',

    // Additional gradients
    'from-black',
    'via-black',
    'to-black'
  ]
}
