/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        ping3 : {
          from : {
          
            
          }, to : {
            transform: 'scale(1.5)',
            
          }},
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
        ping2 :  'ping3 20s 1500ms  ease infinite ',
        slidein300: "slidein 4s ease 100ms forwards  ",
        slidein500: "slidein 5s ease 200ms forwards ",
        slidein700: "slidein 6s ease 300ms forwards ",
      },
    },
  },
  plugins: [],
};
