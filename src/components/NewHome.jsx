import React from 'react';
import Nav from '../components/Nav';
import Carousel from './Carousel';
import NewIntro from './NewIntro.jsx';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Animation from './Animation.jsx';
import DroppingFromSvg from './DroppingFromSvg';

const NewHome = () => {
  return (
    <div
      className="h-screen text-black flex flex-col bg-teal-300"
    >
      <div className="basis-[50%] flex flex-col px-6 md:px-40 lg:px-40 xl:px-40 xxl:px-40">
        <Nav />
        <div className="flex items-center h-full justify-between">
          <NewIntro />
          <Animation />
        </div>
      </div>
      <div id="carousel-section" className="basis-[50%] px-6 md:px-40 lg:px-40 xl:px-40 xxl:px-40 bg-white flex flex-col justify-center items-center gap-4">
        <div className="w-full flex justify-between text-black">
          <p className="font-bold text-2xl">Projects</p>
          <a href="https://github.com/josemourinho333" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">See more <HiArrowNarrowRight className="w-5 h-5" /></a>
        </div>
        <Carousel />
      </div>
    </div>
  )
}

export default NewHome;