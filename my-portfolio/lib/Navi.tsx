"use client";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";

export const Navi = () => {
  return (
    <div className="bg-black py-5">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-black p-1"
    >
      <Tab setPosition={setPosition}>About</Tab>
      <Tab setPosition={setPosition}>Projects</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>
      <Tab setPosition={setPosition}><FaGithub className="text-2xl" /></Tab>
      <Tab setPosition={setPosition}><FaLinkedin className="text-2xl" />
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 tracking-wide text-white mix-blend-difference md:px-5 md:py-1 md:text-lg font-normal transition duration-1000 ease-in-out"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white md:h-10"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};