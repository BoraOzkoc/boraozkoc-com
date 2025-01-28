"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { RiNextjsLine, RiReactjsLine } from "react-icons/ri";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiUnity,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const techStackItems = [
  {
    quote: "React",
    icon: <RiReactjsLine className="w-full h-full p-3" />,
  },
  {
    quote: "TypeScript",
    icon: <SiTypescript className="w-full h-full p-3" />,
  },
  {
    quote: "Next.js",
    icon: <RiNextjsLine className="w-full h-full p-3" />,
  },
  {
    quote: "Tailwind CSS",
    icon: <SiTailwindcss className="w-full h-full p-3" />,
  },
  {
    quote: "JavaScript",
    icon: <SiJavascript className="w-full h-full p-3" />,
  },
  {
    quote: "Unity",
    icon: <SiUnity className="w-full h-full p-3" />,
  },
  {
    quote: "C#",
    icon: <TbBrandCSharp className="w-full h-full p-3" />,
  },
];

function TechStack() {
  return (
    <div className=" p-px h-[40rem] rounded-md flex flex-col antialiased bg-background dark:bg-background items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={techStackItems}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

export default TechStack;
