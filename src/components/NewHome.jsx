import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Carousel from './Carousel';
import NewIntro from './NewIntro.jsx';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Animation from './Animation.jsx';
import { getAllProjects } from '../api';
import Footer from './Footer';

const NewHome = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        getAllProjects
          .then((res) => {
            setProjects(res);
            setLoading(false);
            setError(null);
          })
          .catch((err) => {
            console.log('err', err);
            setLoading(false);
            setError(err);
          })
      }, 3000)
    }


  }, [])

  return (
    <div
      className="h-screen text-black flex flex-col bg-teal-300"
      style={{
        "backgroundImage": "url(https://merch.deno.com/raindrops-animate.svg)",
        "backgroundSize": "cover",
      }}
    >
      <div className="basis-[50%] flex flex-col px-6 md:px-40 lg:px-40 xl:px-40 xxl:px-40">
        <Nav />
        <div className="flex items-center h-full justify-between">
          <NewIntro />
          <Animation />
        </div>
      </div>
      <div id="carousel-section" className="wrapper basis-[50%] px-6 md:px-40 lg:px-40 xl:px-40 xxl:px-40 bg-white flex flex-col justify-center items-center gap-4">
        <div className="w-full flex justify-between text-black">
          <p className="font-bold text-2xl">Projects</p>
          <a href="https://github.com/josemourinho333" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">See more <HiArrowNarrowRight className="w-5 h-5" /></a>
        </div>
        <Carousel projects={projects} error={error} loading={loading} />
      </div>
      <Footer />
    </div>
  )
}

export default NewHome;

