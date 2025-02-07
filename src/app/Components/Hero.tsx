import React from "react";
import IconButton from "./IconButton";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

import TechStack from "./TechStack";

function Hero() {
  return (
    <div className="flex flex-col xl:justify-center justify-center xl:items-center items-start px-6 sm:px-12 h-screen w-screen">
      <div className="flex flex-col xl:justify-center justify-start xl:items-center w-3/4 h-full px-6">
        <h3 className="text-[clamp(2rem,7vw,3rem)] font-medium leading-[1.05] tracking-tight">{`Hi, I'm Bora!`}</h3>
        <h5 className="mb-8 max-w-xl leading-relaxed text-white max-sm:text-sm text-center">
          {`A software engineer with a passion for full-stack development and a background in game development.`}
        </h5>
        <div className="flex flex-row gap-4 xl:justify-center items-center pt-5">
          <IconButton
            link="https://www.linkedin.com/in/bora-ozkoc/"
            icon={FaLinkedin}
          />
          <IconButton link="https://github.com/BoraOzkoc" icon={FaGithub} />
          <IconButton
            link="https://apps.apple.com/developer/bora-ozkoc/id1742469862"
            icon={IoLogoAppleAppstore}
          />
          <IconButton link="mailto:bora.ozkoc@hotmail.com" icon={IoMail} />
        </div>
      </div>
      <div id="techstack" className="flex justify-center items-center">
        <TechStack />
      </div>
    </div>
  );
}

export default Hero;
