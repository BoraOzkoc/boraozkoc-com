import React from "react";
import IconButton from "./IconButton";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import TechStack from "./TechStack";

function Hero() {
  return (
    <div className="flex flex-col xl:justify-center justify-center xl:items-center items-start px-6 sm:px-12 h-screen w-screen">
      <div className="flex flex-col xl:justify-center justify-start xl:items-center w-3/4 px-6">
        <h3 className="text-[clamp(2rem,7vw,3rem)] font-medium leading-[1.05] tracking-tight">{`Hi, I'm Bora!`}</h3>
        <h5 className="mb-8 max-w-xl leading-relaxed text-white max-sm:text-sm">
          {`A passionate Full Stack software engineer with game development background`}
        </h5>
        <div className="flex flex-row gap-4 xl:justify-center items-center pt-5">
          <IconButton
            link="https://www.linkedin.com/in/bora-ozkoc/"
            icon={FaLinkedin}
          />
          <IconButton link="https://github.com/BoraOzkoc" icon={FaGithub} />
        </div>
      </div>
      <div className="absolute bottom-0">
        <TechStack />
      </div>
    </div>
  );
}

export default Hero;
