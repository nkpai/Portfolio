import React, {  } from "react";
import { Suspense } from 'react'
import { Navi } from "@/components/Navi";
import { motion } from "framer-motion"
import Hero from "@/lib/hero";
import About from "@/lib/about";



export default function Home() {
  return (
    <>
    <Suspense>
      <Navi />
    </Suspense>
    <main>
      <Hero />
      <About />

    </main>

    </>
  );
}
