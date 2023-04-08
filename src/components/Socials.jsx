import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';

const Socials = () => {
  return (
    <>
      <a href="https://github.com/josemourinho333" target="_blank" rel='noreferrer'><SiGithub className="w-4 h-4" /></a>
      <a href="https://www.linkedin.com/in/philyoo333/" target="_blank" rel='noreferrer'><SiLinkedin className="w-4 h-4" /></a>
    </>
  )
}

export default Socials;