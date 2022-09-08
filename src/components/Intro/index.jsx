import React from 'react';
import ProfileImg from './ProfileImg';

const Intro = () => {
  return (
    <section className="intro-container">
      <ProfileImg />
      <h3 className="name">Phil Yoo</h3>
      <p className="position">Full Stack Developer</p>
    </section>
  )
}

export default Intro;