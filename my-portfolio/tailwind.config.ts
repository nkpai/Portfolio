import type { Config } from "tailwindcss";
import { DEFAULT_CIPHERS } from "tls";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/globals.css",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
           "0%": {
              opacity: "0",
           },
           "100%": {
              opacity: "1",
           },
        },
        appearFromRight: {
          '0%': { opacity: '0', transform: 'translateX(10%)' },
          '100%': { opacity: '0.7', transform: 'translateX(0)' },
        },

          fadeDown: {
            '0%': { opacity: '0', transform: 'translateY(10%)' },
            '100%': { opacity: '0.7', transform: 'translateY(0)' },
           }
        

      },
      backgroundImage:{
        'main' : " url('/flat-mountains.svg')",
      },
      colors: {
        'gunmetal' : '#121420',
        'gunmetal2' : '#1d223e',
        'charcoal' : '#34495B',
        'afblue' : '#7681D6',
        'linepink' : '#BA4C83',
       
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        appearFromRight: "appearFromRight 1s ease-in-out",
        wiggle: "wiggle 1.5s ease-in-out infinite",
        popup: "popup 0.25s ease-in-out",
        shimmer: "shimmer 3s ease-out infinite alternate",
        fadeDown: "fadeDown 1s ease-in-out"

      },

      animationDelay: {
        '1s': '1s',
        '1.5s': '1.5s',
        '2s': '2s',
        // add more delay times if needed
      },
      
    },
    screens:{
      sm:"640px",
      md:"768px",
      lg:"960px",
      xl:"1200px",
      
    }

   
    
  },
  plugins: [ require("tailwindcss-animation-delay"),],
};


export default config;

