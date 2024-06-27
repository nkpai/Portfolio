import type { Config } from "tailwindcss";
import { DEFAULT_CIPHERS } from "tls";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black:{
          DEFAULT : '#000',
          100: '#000319'
        }
       
      },
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

