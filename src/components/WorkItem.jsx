import React from 'react';

const WorkItem = ({year, months, position, company}) => {
  return (
    <div className="flex w-full gap-5 my-5">
      <div className="basis-1/4 flex flex-col items-end">
        <div className="text-gray-500 text-xs text-center md:text-base md:text-left">{year}</div>
        <div className="text-gray-500 text-[0.5rem] md:text-sm">{months}</div>
      </div>
      <div className="basis-3/4 flex flex-col items-start">
        <div className="text-neutral font-bold text-sm md:text-base">{position}</div>
        <div className="info-content text-sm">{company}</div>
      </div>
    </div>
  )
}

export default WorkItem;