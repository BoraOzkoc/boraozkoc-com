'use client';

import React from 'react';
import Image from 'next/image';

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
	projectLink
}: ProjectCardProps) {
	return (
		<a
			href={projectLink}
			target="_blank"
			rel="noopener noreferrer"
			className="w-[280px] rounded-2xl p-[6px] transition-transform hover:scale-110 hover:cursor-pointer"
		>
			<div className="flex h-96 w-full flex-col items-center justify-start rounded-2xl border border-[#b7b7b753] bg-gradient-to-t from-[#22272f97] to-[#22272f97] text-center">
				<div className="flex h-[50%] w-full items-center justify-center rounded-2xl p-3">
					<Image
						className="h-[150px] w-full rounded-3xl object-contain"
						src={projectImage}
						alt="Project Image"
						width={300}
						height={300}
					/>
				</div>
				<div className="flex w-full flex-row items-center justify-between px-6">
					<div className="flex w-full flex-row items-center justify-between">
						<div className="flex flex-row">
							<h1 className="text-left text-xl font-semibold">{projectName}</h1>
						</div>
						<div className="flex flex-row gap-2">
							{projectIcons.map((icon, index) => (
								<div key={index}>{icon}</div>
							))}
						</div>
					</div>
				</div>
				<div className="flex w-full flex-row items-start justify-start px-6 text-start">
					<span className="text-xs">{projectType}</span>
				</div>
				<div className="flex h-48 w-full items-start justify-center px-6 pt-2 text-left text-sm">
					<p>{projectDescription}</p>
				</div>
			</div>
		</a>
	);
}

export default ProjectCard;
