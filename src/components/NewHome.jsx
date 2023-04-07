import React from 'react';
import Nav from '../components/Nav';
import Carousel from './Carousel';
import NewIntro from './NewIntro.jsx';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Animation from './Animation.jsx';

const NewHome = () => {
  return (
    <div
      className="h-screen text-black flex flex-col bg-amber-200"
    >
      <div className="basis-[50%] flex flex-col px-6 md:px-40 lg:px-40 xl:px-40 xxl:px-40">
        <Nav />
        <div className="flex items-center h-full justify-between">
          <NewIntro />
          <Animation />
        </div>
      </div>
      <div id="carousel-section" className="basis-[50%] px-6 md:px-40 lg:px-40 xl:px-40 xxl:px-40 bg-neutral text-white flex flex-col justify-center items-center gap-4">
        <div className="w-full flex justify-between">
          <p className="font-bold text-2xl">Projects</p>
          <button className="border border-1 border-primary-content px-4 py-2 rounded-full flex items-center gap-2">See More <HiArrowNarrowRight className="w-5 h-5" /></button>
        </div>
        <Carousel />
      </div>
    </div>
  )
}

export default NewHome;