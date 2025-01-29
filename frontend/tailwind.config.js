/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, #671296 -1.23%, #9E1F83 100.62%)",
          "color1": "#CC2D4A",
        "color2": "#BC1A6E",
        "color3": "#DE3151",
        "color4": "#D93B30",
      },
      
    },
  },
  plugins: [],
};
