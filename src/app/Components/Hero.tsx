import React from "react";
import IconButton from "./IconButton";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Hero() {
  return (
    <div className="flex flex-col xl:justify-center justify-start xl:items-center items-start p-3 sm:p-12">
      <h3 className="text-2xl sm:text-4xl font-bold">
        {`Hi, I'm Bora!.`}
      </h3>
      <h5 className="text-lg sm:text-xl">
        {`A passionate Full Stack software engineer with game development background`}
      </h5>
      <div className="flex flex-row gap-4 justify-center items-center pt-5">
        <IconButton
          link="https://www.linkedin.com/in/bora-ozkoc/"
          icon={FaLinkedin}
        />
        <IconButton link="https://github.com/BoraOzkoc" icon={FaGithub} />
      </div>
    </div>
  );
}

export default Hero;
