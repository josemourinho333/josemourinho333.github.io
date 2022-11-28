import React from 'react';
import { Link } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';

const Latest = () => {
  // current tarot card reader

  return (
    <div className="min-h-screen bg-neutral-content text-neutral flex flex-col justify-center items-center">
      <div className="badge badge-error rounded-full">
        new
      </div>
      <h1 className="bg-neutral-content text-center text-3xl md:text-4xl font-extrabold">
        Tarot Card Reader & Learning
      </h1>
      <p className="bg-neutral-content text-lg mt-2 text-center">See what the message is for you today.</p>
      <div className="flex flex-col justify-center items-center text-lg bg-neutral-content md:flex-row">
        <a href="https://scintillating-scone-d0792d.netlify.app/" className="bg-neutral-content text-[#06c] flex items-center m-2">Demo<HiChevronRight className="bg-neutral-content pt-0.5 w-5 h-5"/></a>
        <a href="https://github.com/josemourinho333/tarot-me" className="bg-neutral-content text-[#06c] flex items-center m-2">Code<HiChevronRight className="bg-neutral-content pt-0.5 w-5 h-5"/></a>
      </div>
      <div className="bg-neutral-content overflow-clip h-[300px] md:h-[500px] flex mt-10 w-full">
        <img src="https://cdn.shopify.com/s/files/1/0561/8477/files/Divine-Feminine-Tarot-NOCTURNAL-22.png?v=1606221524" alt="card" className="h-[90%] rounded-box m-auto z-10 rotate-12 shadow-md"/>
      </div>
    </div>
  )
}

export default Latest;