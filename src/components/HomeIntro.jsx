import React from 'react';
import HomeIntroCard from './HomeIntroCard';
import { ImStack, ImTarget } from 'react-icons/im';
import { MdOutlineWeb, MdBackspace, MdLocalGroceryStore } from 'react-icons/md';

const HomeIntro = () => {
  return (
    <div className="min-h-[50vh] bg-neutral text-neutral-content flex flex-col justify-center items-center">
      <h2 className="text-2xl md:text-3xl text-neutral-content font-bold mb-5">
        Skills. <span className="text-gray-500">A tip of the iceberg</span>
      </h2>
      <div className="carousel carousel-center max-w-sm md:max-w-screen-md lg:max-w-screen-lg p-4 space-x-3 bg-neutral rounded-box">
        <HomeIntroCard>
          <ImStack className="bg-inherit w-8 h-8 text-success"/>
          <h2 className="card-title bg-inherit text-inherit inline">
            <span className="text-success">Full stack </span>
            development primarily using React/Next, Express and Postgres.
          </h2>
        </HomeIntroCard>
        <HomeIntroCard>
          <MdOutlineWeb className="bg-inherit w-8 h-8 text-info"/>
          <h2 className="card-title bg-inherit text-inherit inline">
            Creating beautiful and reusable components
            for 
            <span className="text-info"> frontend </span>
            development.
          </h2>
        </HomeIntroCard>
        <HomeIntroCard>
          <MdBackspace className="bg-inherit w-8 h-8 text-warning"/>
          <h2 className="card-title bg-inherit text-inherit inline">
            <span className="text-warning">Backend </span>
            development with NodeJS/Express and Ruby on Rails.
          </h2>
        </HomeIntroCard>
        <HomeIntroCard skill="Digital Marketing">
          <MdLocalGroceryStore className="bg-inherit w-8 h-8 text-purple-500"/>
          <h2 className="card-title bg-inherit text-inherit inline"> 
            <span className="text-purple-500"> Digital marketing </span>
            and
            <span className="text-purple-500"> graphic design </span>
            experience with the latest tools and programs from Adobe suite. 
          </h2>
        </HomeIntroCard>
        <HomeIntroCard skill="Graphic Design">
          <ImTarget className="bg-inherit w-8 h-8 text-success"/>
          <h2 className="card-title bg-inherit text-inherit inline"> 
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-success via-info to-purple-500">Constantly learning </span>
            and adding to my 
            <span className="bg-gradient-to-r bg-clip-text text-transparent from-success via-info to-purple-500"> stack </span>
            to improve as a developer.
          </h2>
        </HomeIntroCard>
      </div>
    </div>
  )
}

export default HomeIntro;