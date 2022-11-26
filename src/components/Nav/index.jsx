import React from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import NavModal from '../Modal';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <div className="navbar bg-base-100/30 shadow-sm sticky top-0 z-50 backdrop-blur-lg justify-center h-[13vh] lg:h-[5vh]">
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            {/* <li><Link to="/skills">Skills</Link></li> */}
          </ul>
        </div>

        <div className="navbar-center flex flex-col">
          <div className="avatar placeholder lg:hidden">
            <div className="bg-gradient-to-t from-gray-500 to-gray-300 text-neutral-content rounded-full w-10">
              <span className="text-xl font-bold">P</span>
            </div>
          </div> 
          <a href="/" className="normal-case text-sm lg:text-xl font-semibold mt-0.5">Phil Yoo</a>
          <label htmlFor="nav-modal" className="flex flex-row items-center justify-center normal-case text-xs cursor-pointer font-normal lg:hidden lg:text-sm">
            Full Stack Developer <HiOutlineChevronRight className="text-gray-700 pt-0.5"/>
          </label>
        </div>
        
        <div className="navbar-end hidden lg:flex">
          <a href="https://resume.creddle.io/resume/6k8iwdwj8sr" target="_blank" rel="noopener noreferrer" className="btn">Resume</a>
        </div>
      </div>
      <NavModal />
    </>
  )
}

export default Nav;