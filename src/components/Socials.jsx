import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';

const Socials = () => {
  return (
    <section className="socials-container">
      <a href="https://github.com/josemourinho333" target="_blank" rel='noreferrer'><SiGithub /></a>
      <a href="https://www.linkedin.com/in/philyoo333/" target="_blank" rel='noreferrer'><SiLinkedin /></a>
    </section>
  )
}

export default Socials;