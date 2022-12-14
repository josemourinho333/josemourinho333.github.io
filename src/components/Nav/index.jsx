import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <div className="navbar bg-neutral/80 backdrop-blur-lg text-neutral-content p-0 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-1 py-2 px-7 shadow bg-neutral text-neutral-content w-screen h-[60vh] inset-x-0">
            <li className="border-b my-2"><Link to="/about" className="text-lg">About</Link></li>
            <li className="border-b my-2"><Link to="/projects" className="text-lg">Projects</Link></li>
            <li className="border-b my-2"><Link to="/skills" className="text-lg">Skills</Link></li>
            <li className="border-b my-2"><Link to="/contact" className="text-lg">Contact</Link></li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-lg hidden lg:flex">Phil Yoo</a>
      </div>
      <div className="navbar-center flex lg:hidden">
        <a href="/" className="btn btn-ghost normal-case text-lg">Phil Yoo</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-sm">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end p-[1rem]">
        <a href="https://www.canva.com/design/DAFUq-O-Lxo/UzgynRCCTycCK7sVBvB87g/view?utm_content=DAFUq-O-Lxo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noreferrer" className="btn btn-xs border-neutral-content md:btn-sm">Resume</a>
      </div>
    </div>
  )
}

export default Nav;