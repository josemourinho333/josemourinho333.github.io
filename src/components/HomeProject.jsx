import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

const HomeProject = ({bg, fullWidth, img, name, oneLiner, repo, demo}) => {
  return (
    <div className={`text-inherit ${bg} ${fullWidth ? 'basis-full' : 'basis-1/2'} rounded-box flex flex-col justify-center`}>
      <div className="flex flex-col basis-1/4 justify-center">
        <h1 className={`bg-inherit text-center text-xl md:text-4xl font-extrabold ${bg === "bg-neutral" ? "text-neutral-content" : ""}`}>
          {name}
        </h1>
        <p className={`bg-inherit text-base md:text-lg mt-2 text-center ${bg === "bg-neutral" ? "text-neutral-content" : ""}`}>{oneLiner}</p>
        <div className="flex flex-row justify-center items-center text-base md:text-lg bg-inherit md:flex-row">
          {
            !demo
              ? <></>
              : <a href={demo} className="bg-inherit text-[#06c] flex items-center m-2">Demo<HiChevronRight className="bg-inherit pt-0.5 w-5 h-5"/></a>
          }
          <a href={repo} className="bg-inherit text-[#06c] flex items-center m-2">Code<HiChevronRight className="bg-inherit pt-0.5 w-5 h-5"/></a>
        </div>
      </div>
      <div className="basis-2/4 bg-inherit overflow-clip flex w-11/12 md:w-4/5 self-center">
        <img src={img} alt="card" className="w-full rounded-box z-10 drop-shadow-lg object-contain"/>
      </div>
    </div>
  )
}

export default HomeProject;