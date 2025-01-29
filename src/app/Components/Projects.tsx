import React from 'react'
import ProjectCard from './ProjectCard'
function Projects() {
  return (
    <div className='flex flex-col w-full h-fit justify-center items-center'>
        <ProjectCard projectName='Project Name' projectDescription='Project Description' ProjectImage='/favicon.ico'/>
    </div>
  )
}

export default Projects