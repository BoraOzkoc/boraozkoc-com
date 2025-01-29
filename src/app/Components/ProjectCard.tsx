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
    <div className="flex flex-col w-[300px] h-[full] border justify-start items-center text-center rounded-2xl">
      <div className="border w-[90%] h-[50%] flex justify-center items-center m-3 rounded-2xl">
        <Image
          className="w-fit h-[200px]"
          src={ProjectImage}
          alt="Project Image"
          width={300}
          height={300}
        />
      </div>
      <div className="">
        <h1>{projectName}</h1>
      </div>
      <div className="w-[90%] h-[100px] flex justify-center items-center">
        <p>{projectDescription}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
