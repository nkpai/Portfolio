import React, {  } from "react";
import { Navi } from "@/lib/Navi";
import { motion } from "framer-motion"


export default function Home() {
  return (
    <main className=" bg-black">
       <body className="bg-black">
        <div className="absolute top-0 right-0 mr-5">
          <Navi />
        </div>
        <div className="flex flex-col container bg-black items-center justify-center h-screen -my-80 mr-12 -ml-16">
              <h1 className="text-7xl  text-white tracking-wide font-medium"> Nathan Levine-Kpai. </h1>
              <p className=" -ml-60 mr-12 w-full md:w-1/2 lg:w-1/3 overflow-hidden text-white mt-7 text-xl">An Economics Student from Canada. My aim is to perform effectively in a variety of contexts using various languages. </p>
        </div>
       
        
     
     </body>
     
       
    </main>
  );
}
