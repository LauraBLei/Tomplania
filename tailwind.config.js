/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        world: "url('./public/assets/bg-images/GameWorld.png')",
      },
      fontFamily: {
        uncial: ['"Uncial Antiqua"', "system-ui"],
        Courier: ['"Courier Prime"', "system-ui"],
      },
      colors: {
        beige: "#D7CDC6",
        blue: "#253644",
      },
    },
  },
  plugins: [],
};
