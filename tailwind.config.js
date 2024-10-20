/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF", // Teal Blue
        secondary: "#D3D3D3", // Light Gray
        accent: "#FFA500", // Orange
      },
    },
  },
  plugins: [require("daisyui")],
};
