/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./app/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5EBD9",
        linen: "#EFE4D4",
        navy: "#1A365D",
        gold: "#C49A45",
        ink: "#3A342E",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
