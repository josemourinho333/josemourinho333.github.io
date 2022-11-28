import React from 'react';
import HomeIntroCard from './HomeIntroCard';

const HomeIntro = () => {
  return (
    <div className="min-h-[50vh] bg-neutral text-neutral-content flex flex-col justify-center items-center">
      <h2 className="text-2xl md:text-3xl text-neutral-content font-bold mb-5">
        Skills. <span className="text-gray-500">A tip of the iceberg</span>
      </h2>
      <div className="carousel carousel-center max-w-sm md:max-w-screen-md lg:max-w-screen-lg p-4 space-x-3 bg-neutral rounded-box">
        <HomeIntroCard skill="Full Stack"/>
        <HomeIntroCard skill="Frontend Developer"/>
        <HomeIntroCard skill="Backend Developer"/>
        <HomeIntroCard skill="Digital Marketing"/>
        <HomeIntroCard skill="Graphic Design"/>
      </div>
    </div>
  )
}

export default HomeIntro;