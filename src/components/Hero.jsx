import React from 'react';
import { Link } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-neutral text-neutral-content">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl md:text-6xl font-extrabold">Hello there</h1>
          <p className="p-6 text-lg text-gray-500 leading-relaxed tracking-wide">I'm a full stack developer passionate about bringing ideas to life and learning new concepts. I would love to hear from you if you're looking for a developer to add to your team!</p>
          <div className="flex flex-col justify-center items-center text-lg md:flex-row ">
            <Link to="/projects" className="text-[#2997ff] flex items-center m-2">Projects<HiChevronRight className="pt-0.5 w-5 h-5"/></Link>
            <Link to="/contact" className="text-[#2997ff] flex items-center m-2">Contact<HiChevronRight className="pt-0.5 w-5 h-5"/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;