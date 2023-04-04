import React from 'react';
import Nav from '../components/Nav';
import Carousel from './Carousel';
import NewIntro from './NewIntro.jsx';
import { HiArrowNarrowRight } from 'react-icons/hi';

const NewHome = () => {
  return (
    <div
      className="h-screen text-black flex flex-col"
      style={{
        "backgroundSize": "100% 100%",
        "backgroundPosition": "0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px",
        "backgroundImage": "radial-gradient(18% 28% at 24% 50%, #edf4f6 7%, #073AFF00 100%),radial-gradient(18% 28% at 18% 71%, #edf4f6 6%, #073AFF00 100%),radial-gradient(70% 53% at 36% 76%, #f6cef8 0%, #073AFF00 100%),radial-gradient(42% 53% at 15% 94%, #edf4f6 7%, #073AFF00 100%),radial-gradient(42% 53% at 34% 72%, #edf4f6 7%, #073AFF00 100%),radial-gradient(18% 28% at 35% 87%, #edf4f6 7%, #073AFF00 100%),radial-gradient(31% 43% at 7% 98%, #edf4f6 24%, #073AFF00 100%),radial-gradient(21% 37% at 72% 23%, #edf4f6 24%, #073AFF00 100%),radial-gradient(35% 56% at 91% 74%, #AAB0FFFF 0%, #073AFF00 100%),radial-gradient(74% 86% at 67% 38%, #edf4f6 24%, #073AFF00 100%),linear-gradient(188deg, #f0f2f7 1%, #4C00FCFF 100%)"
      }}
    >
      <div className="basis-[50%] flex flex-col px-6 md:px-40 lg:px-40 xl:px-40 xxl:px-40">

        <Nav />
        <NewIntro />
      </div>
      <div id="carousel-section" className="basis-[50%] px-6 md:px-40 lg:px-40 xl:px-40 xxl:px-40 bg-neutral text-white flex flex-col justify-center items-center gap-4">
        <div className="w-full flex justify-between">
          <p className="font-bold text-2xl">Projects</p>
          <button className="border border-1 border-primary-content px-4 py-2 rounded-full flex items-center gap-2">See More <HiArrowNarrowRight className="w-5 h-5" /></button>
        </div>
        <Carousel />
      </div>
    </div>
  )
}

export default NewHome;