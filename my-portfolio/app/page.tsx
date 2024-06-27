import React, {  } from "react";
import { Navi } from "@/lib/Navi";
import { motion } from "framer-motion"


export default function Home() {
  return (
    <main className=" bg-black">
       <body className="bg-black">
        <div className="absolute top-0 right-0 z-0">
          <Navi />
        </div>
        <div className="flex items-center justify-center h-screen">
          <div className="">
              <h1 className="text-5xl  text-white"> Nathan Levine-Kpai </h1>
          </div>
        </div>
     </body>
     
       
    </main>
  );
}
