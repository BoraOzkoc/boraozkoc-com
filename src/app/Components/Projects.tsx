import React from "react";
import ProjectCard from "./ProjectCard";
function Projects() {
  return (
    <div className="flex flex-row gap-10 w-full h-fit justify-center items-center">
      <ProjectCard
        projectName="Card Game"
        projectDescription="A fun and interactive memory card game built with React, Next.js, TypeScript, and Tailwind CSS. Test your memory by matching pairs of dog images!"
        ProjectImage="https://github.com/BoraOzkoc/card-game/blob/main/Card-Game-SS.png?raw=true"
      />
      <ProjectCard
        projectName="Trivia Quiz"
        projectDescription="A modern, interactive trivia quiz game built with React, Javascript Next.js and Tailwind CSS. Challenge yourself with random quiz categories and test your knowledge in this engaging web application."
        ProjectImage="https://github.com/BoraOzkoc/React-Quiz/blob/main/TriviaQuizScreenshot.png?raw=true"
      />
    </div>
  );
}

export default Projects;
