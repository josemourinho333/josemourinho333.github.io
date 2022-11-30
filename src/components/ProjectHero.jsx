import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';

const ProjectHero = () => {
  return (
    <div className="flex flex-col px-10 py-5 bg-base-200 md:w-[85%] lg:w-[65%] xl:w-[55%] 2xl:w-[45%] m-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold">
      My Projects.
      </h1>
      <div className="pt-2 text-3xl md:text-4xl font-semibold text-gray-500">
        List of all my work so far.
      </div>
      <div className="flex mt-5 gap-5">
        <div className="avatar items-center">
          <div className="w-5 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
            <SiGithub className="w-5 h-5"/>
          </div>
          <a href="https://github.com/josemourinho333" target="_blank" rel="noopener noreferrer" className="pl-2 underline">josemourinho333</a>
        </div>
        <div className="avatar items-center">
          <div className="w-5 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
            <SiLinkedin className="w-5 h-5"/>
          </div>
          <a href="https://www.linkedin.com/in/philyoo333/" target="_blank" rel="noopener noreferrer" className="pl-2 underline">philyoo333</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectHero;