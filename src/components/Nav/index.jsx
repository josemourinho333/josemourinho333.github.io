import React from 'react';
import { TbMusic } from 'react-icons/tb';

const Nav = () => {
  return (
    <section className="nav-container">
      <div className="nav-fun-fact"><TbMusic /></div>
      <div className="nav-menu">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#education">CV</a>
      </div>
    </section>
  )
}

export default Nav;