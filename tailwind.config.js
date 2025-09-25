/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        Dark: "#E10913",
        primaryRed: "#E10913",
        buttonSurface: "#3D393A",
        midGrey: "#282824",
        surfaceSecondary: "#161616",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
}