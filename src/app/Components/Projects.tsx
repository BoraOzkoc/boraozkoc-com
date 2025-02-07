'use client'
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      projectName: "Card Game",
      projectDescription: "A fun and interactive memory card game built with React, Next.js, TypeScript, and Tailwind CSS. Test your memory by matching pairs of dog images!",
      projectImage: "https://github.com/BoraOzkoc/card-game/blob/main/Card-Game-SS.png?raw=true",
      projectIcons: [
        <FaReact key="react" size={16} />,
        <SiTypescript key="typescript" size={16} />,
        <SiNextdotjs key="next" size={16} />,
        <SiTailwindcss key="tailwind" size={16} />,
      ],
      projectType: "Web Application",
      projectLink: "https://card-game-eosin.vercel.app"
    },
    {
      projectName: "Trivia Quiz",
      projectDescription: "A modern, interactive trivia quiz game built with React, Javascript Next.js and Tailwind CSS. Challenge yourself with random quiz categories and test your knowledge in this engaging web application.",
      projectImage: "https://github.com/BoraOzkoc/React-Quiz/blob/main/TriviaQuizScreenshot.png?raw=true",
      projectIcons: [
        <FaReact key="react" size={16} />,
        <SiJavascript key="javascript" size={16} />,
        <SiNextdotjs key="next" size={16} />,
        <SiTailwindcss key="tailwind" size={16} />,
      ],
      projectType: "Web Application",
      projectLink: "https://trivia-quiz-pearl.vercel.app"
    },
    // Adding two more projects as prototypes
    {
      projectName: "Card Game (Prototype)",
      projectDescription: "A fun and interactive memory card game built with React, Next.js, TypeScript, and Tailwind CSS. Test your memory by matching pairs of dog images!",
      projectImage: "https://github.com/BoraOzkoc/card-game/blob/main/Card-Game-SS.png?raw=true",
      projectIcons: [
        <FaReact key="react" size={16} />,
        <SiTypescript key="typescript" size={16} />,
        <SiNextdotjs key="next" size={16} />,
        <SiTailwindcss key="tailwind" size={16} />,
      ],
      projectType: "Web Application",
      projectLink: "https://card-game-eosin.vercel.app"
    },
    {
      projectName: "Trivia Quiz (Prototype)",
      projectDescription: "A modern, interactive trivia quiz game built with React, Javascript Next.js and Tailwind CSS. Challenge yourself with random quiz categories and test your knowledge in this engaging web application.",
      projectImage: "https://github.com/BoraOzkoc/React-Quiz/blob/main/TriviaQuizScreenshot.png?raw=true",
      projectIcons: [
        <FaReact key="react" size={16} />,
        <SiJavascript key="javascript" size={16} />,
        <SiNextdotjs key="next" size={16} />,
        <SiTailwindcss key="tailwind" size={16} />,
      ],
      projectType: "Web Application",
      projectLink: "https://trivia-quiz-pearl.vercel.app"
    },
  ];

  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 2);

  return (
    <div className="flex flex-col gap-10 w-full min-h-screen justify-center items-center">
      <h1 className="text-4xl font-bold">Recent Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.projectName}
            projectDescription={project.projectDescription}
            projectImage={project.projectImage}
            projectIcons={project.projectIcons}
            projectType={project.projectType}
            projectLink={project.projectLink}
          />
        ))}
      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        className="text-blue-500 hover:text-blue-700 transition-colors text-right w-full px-4"
      >
        {showAll ? "See Less" : "See More"}
      </button>
    </div>
  );
}

export default Projects;
