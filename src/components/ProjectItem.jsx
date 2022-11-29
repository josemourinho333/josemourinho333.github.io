import React from 'react';

const ProjectItem = ({bg, base, name, oneLiner, desc, repo, demo, img}) => {
  return (
    <div className="carousel-item cursor-pointer">
      <div className={`card h-[30rem] ${base ? "bg-transparent shadow-none w-0 md:w-[4rem] lg:w-[12rem] xl:w-[20rem] 2xl:w-[28rem]" : `${bg} shadow-lg w-[22rem] md:w-[26rem] lg:w-[30rem]`} rounded-2xl`}>
        {
          base
            ? <div className="card-body"></div>
            : <>
                <div className={`card-body ${bg === "bg-base-100" ? "" : 'text-neutral-content'}`}>
                  <h3 className={`uppercase font-bold text-sm ${bg === "bg-base-100" ? 'text-gray-500' : ''}`}>{name}</h3>
                  <h2 className="card-title font-black text-2xl">{oneLiner}</h2>
                  <p className="">{desc.substring(0, 100)}...</p>
                </div>
                <figure className="px-10 pb-10 rounded-md"><img src={img} alt={name} className="rounded-md drop-shadow-lg" /></figure>
              </>
        }
      </div>
    </div>
  )
}

export default ProjectItem;