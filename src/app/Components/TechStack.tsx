"use client";

import React from "react";
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
    <div className="relative overflow-hidden flex w-[300px]">
      <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-black to-transparent z-10"></div>

      <div className="overflow-hidden flex w-[300px]">
        <div className="flex animate-infinite-scroll hover:pause">
          <ul className="flex flex-row justify-center items-center shrink-0">
            {[...techStackItems].map((item, idx) => (
              <li
                className="rounded-3xl p-px hover:p-1 hover:pb-6 transition-all duration-300 bg-gradient-to-b from-sky-300 via-purple-300 to-red-300 w-[70px] h-[70px] hover:w-[100px] max-w-full relative group"
                key={`first-${idx}`}
              >
                <div className="rounded-3xl w-full h-full bg-gray-800 flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center w-full h-full">
                    {item.icon}
                  </div>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none text-black rounded-lg w-full text-center bottom-1 text-xs">
                    {item.quote}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ul className="flex flex-row justify-center items-center shrink-0">
            {[...techStackItems].map((item, idx) => (
              <li
                className="rounded-3xl p-px hover:p-1 hover:pb-6 transition-all duration-300 bg-gradient-to-b from-sky-300 via-purple-300 to-red-300 w-[70px] h-[70px] hover:w-[100px] max-w-full relative group"
                key={`second-${idx}`}
              >
                <div className="rounded-3xl w-full h-full bg-gray-800 flex flex-col items-center justify-center">
                  <div className="flex flex-row items-center justify-center w-full h-full">
                    {item.icon}
                  </div>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none text-black rounded-lg w-full text-center bottom-1 text-xs">
                    {item.quote}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
    </div>
  );
}

export default TechStack;
