'use client'

import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  projectName: string;
  projectDescription: string;
  projectImage: string;
  projectIcons: React.ReactNode[];
  projectType: string;
  projectLink: string;
}
function ProjectCard({
  projectName,
  projectDescription,
  projectImage,
  projectIcons,
  projectType,
  projectLink,
}: ProjectCardProps) {
  return (
    <a href={projectLink} target="_blank" rel="noopener noreferrer" 
      className="w-[320px] p-[6px] rounded-2xl hover:cursor-pointer hover:scale-105 transition-transform" 
    >
      <div className="flex flex-col w-full h-[full] justify-start items-center text-center rounded-2xl bg-gradient-to-t from-black  to-gray-800">
        <div className="w-full h-[50%] flex justify-center items-center p-3 rounded-2xl">
          <Image
            className="w-full h-[200px] object-contain rounded-3xl"
            src={projectImage}
            alt="Project Image"
            width={300}
            height={300}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className="flex w-full flex-row justify-between items-center px-6 ">
          <div className="flex w-full flex-row justify-between items-center">
            <div className="flex flex-row">
              <h1 className="font-semibold text-left text-xl">{projectName}</h1>
            </div>
            <div className="flex flex-row gap-2">
              {projectIcons.map((icon, index) => (
                <div key={index}>{icon}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full px-6 justify-start items-start text-start">
          <span className="text-xs">{projectType}</span>
        </div>
        <div className="w-full h-48 flex justify-center items-start text-left text-sm px-6 pt-2">
          <p>{projectDescription}</p>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
