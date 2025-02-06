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
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-full h-[100px] rounded-3xl my-6 justify-center items-center">
        <div className="relative flex w-[500px] overflow-hidden">
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
          <div className="flex w-full gap-2">
            <ul className="flex flex-row justify-center animate-infinite-scroll items-center shrink-0 gap-2">
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
            <ul className="flex flex-row animate-infinite-scroll justify-center items-center shrink-0 gap-2">
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
      </div>
    </div>
  );
}

export default TechStack;
