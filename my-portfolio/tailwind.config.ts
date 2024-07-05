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
      colors: {
        backgroundImage:{
          gradient:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(21,23,21,1) 39%, rgba(0,212,255,1) 89%, #6fba82)",
        }
       
      },
      animation: {
        opacity: "opacity 0.25s ease-in-out",
        appearFromRight: "appearFromRight 300ms ease-in-out",
        wiggle: "wiggle 1.5s ease-in-out infinite",
        popup: "popup 0.25s ease-in-out",
        shimmer: "shimmer 3s ease-out infinite alternate",

      }
    },
    screens:{
      sm:"640px",
      md:"768px",
      lg:"960px",
      xl:"1200px",
      
    }

    
  },
  plugins: [],
};


export default config;

