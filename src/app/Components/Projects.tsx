import React from "react";
import ProjectCard from "./ProjectCard";
import { IoLogoReact } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

function Projects() {
  return (
    <div className="flex flex-col gap-10 w-full h-screen justify-center items-center">
      <h1 className="text-4xl font-bold ">Projects</h1>
      <div className="flex flex-col gap-10 justify-center items-center md:flex-row">
        <ProjectCard
          projectName="Card Game"
          projectDescription="A fun and interactive memory card game built with React, Next.js, TypeScript, and Tailwind CSS. Test your memory by matching pairs of dog images!"
          projectImage="https://github.com/BoraOzkoc/card-game/blob/main/Card-Game-SS.png?raw=true"
          projectIcons={[
            <IoLogoReact key="react" size={16} />,
            <SiNextdotjs key="next" size={16} />,
            <SiTypescript key="typescript" size={16} />,
            <SiTailwindcss key="tailwind" size={16} />,
          ]}
          projectType="Web Application"
        />
        <ProjectCard
          projectName="Trivia Quiz"
          projectDescription="A modern, interactive trivia quiz game built with React, Javascript Next.js and Tailwind CSS. Challenge yourself with random quiz categories and test your knowledge in this engaging web application."
          projectImage="https://github.com/BoraOzkoc/React-Quiz/blob/main/TriviaQuizScreenshot.png?raw=true"
          projectIcons={[
            <IoLogoReact key="react" size={16} />,
            <SiJavascript key="javascript" size={16} />,
            <SiNextdotjs key="next" size={16} />,
            <SiTailwindcss key="tailwind" size={16} />,
          ]}
          projectType="Web Application"
        />
      </div>
    </div>
  );
}

export default Projects;
