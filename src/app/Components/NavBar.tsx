"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";

function NavBar() {
  return (
    <div className="fixed top-0 right-10 flex justify-end items-end w-full h-16 text-white">
      <div className="flex justify-end items-end gap-4 w-full h-full">
        <ScrollLink
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer border rounded-full p-2 hover:bg-orange-400 transition-colors"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="techstack"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer border rounded-full p-2 hover:bg-orange-400 transition-colors"
        >
          TechStack
        </ScrollLink>
        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer border rounded-full p-2 hover:bg-orange-400 transition-colors"
        >
          Projects
        </ScrollLink>
      </div>
    </div>
  );
}

export default NavBar;
