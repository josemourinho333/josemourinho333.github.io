import React from 'react';
import Work from './Work';

const About = () => {

  return (
    <section className="flex flex-col bg-neutral-content w-full">
      <div className="hero min-h-[40vh] bg-base-200">
        <div className="hero-content text-left">
          <div className="max-w-md">
            <h1 className="text-6xl font-black">Phil <span className="font-light">Yoo</span></h1>
            <p className="py-6 text-3xl">Full stack web developer</p>
          </div>
        </div>
      </div>
      <Work />
    </section>
  )
}

export default About;