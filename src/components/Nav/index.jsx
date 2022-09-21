import React from 'react';
import { TbMusic } from 'react-icons/tb';

const Nav = () => {
  return (
    <section className="nav-container">
      {/* <div className="nav-fun-fact"><TbMusic /></div> */}
      <div className="nav-menu">
        <a href="#app">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="https://resume.creddle.io/resume/6k8iwdwj8sr" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </section>
  )
}

export default Nav;