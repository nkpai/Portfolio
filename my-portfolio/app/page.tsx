import React, {  } from "react";
import { Suspense } from 'react'
import { Navi } from "@/components/Navi";
import { motion } from "framer-motion"
import Hero from "@/lib/hero";
import About from "@/lib/about";
import Project from "@/lib/projects";



export default function Home() {
  return (
    <>
    <Suspense>
   
    </Suspense>
    <main>
      <Hero />
      <About />
      <Project />


    </main>

    </>
  );
}
