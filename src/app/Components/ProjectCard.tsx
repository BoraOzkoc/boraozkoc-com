import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  projectName: string;
  projectDescription: string;
  ProjectImage: string;
}
function ProjectCard({
  projectName,
  projectDescription,
  ProjectImage,
}: ProjectCardProps) {
  return (
    <div className="w-[320px] p-[6px] rounded-2xl">
      <div className="flex flex-col w-full h-[full] justify-start items-center text-center rounded-2xl bg-gradient-to-t from-black  to-gray-800">
        <div className="w-[90%] h-[50%] flex justify-center items-center m-3 rounded-2xl">
          <Image
            className="w-full h-[200px] rounded-3xl"
            src={ProjectImage}
            alt="Project Image"
            width={300}
            height={300}
          />
        </div>
        <div className="underline">
          <h1>{projectName}</h1>
        </div>
        <div className="w-[90%] h-[100px] flex justify-center items-center text-xs p-3">
          <p>{projectDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
