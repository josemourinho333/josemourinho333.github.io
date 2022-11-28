import React from 'react';
import { Link } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import { useProjectData } from "../ProjectContext";


const Latest = () => {
  // current tarot card reader
  const data = useProjectData();
  const latestProject = [[...data][0]];

  const latest = latestProject.map((project, index) => {
    return (
      <div key={index} className="min-h-screen bg-neutral-content text-neutral flex flex-col justify-center items-center">
        <div className="badge badge-error rounded-full">
          new
        </div>
        <h1 className="bg-neutral-content text-center text-3xl md:text-4xl font-extrabold">
          {project.name}
        </h1>
        <p className="bg-neutral-content text-lg mt-2 text-center">{project.oneLiner}</p>
        <div className="flex flex-col justify-center items-center text-lg bg-neutral-content md:flex-row">
          {
            !project.demo
              ? <></>
              : <a href={project.demo} className="bg-neutral-content text-[#06c] flex items-center m-2">Demo<HiChevronRight className="bg-neutral-content pt-0.5 w-5 h-5"/></a>
          }
          <a href={project.repo} className="bg-neutral-content text-[#06c] flex items-center m-2">Code<HiChevronRight className="bg-neutral-content pt-0.5 w-5 h-5"/></a>
        </div>
        <div className="bg-neutral-content overflow-clip h-[300px] md:h-[500px] flex mt-10 w-full">
          <img src={project.thumbnail ? project.thumbnail : project.images[0]} alt="card" className="h-[90%] rounded-box m-auto z-10 rotate-12 shadow-md"/>
        </div>
      </div>
    )
  });

  return (
    <>
      {latest}
    </>
  )
}

export default Latest;