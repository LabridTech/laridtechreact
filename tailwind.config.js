/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein300: "slidein 5s ease 1000ms forwards infinite ",
        slidein500: "slidein 5s ease 1200ms forwards infinite",
        slidein700: "slidein 5s ease 1500ms forwards infinite",
      },
    },
  },
  plugins: [],
};
