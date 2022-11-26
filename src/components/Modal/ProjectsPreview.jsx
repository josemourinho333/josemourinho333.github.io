import React from 'react';
import ImgContainer from './ImgContainer';

const ProjectsPreview = () => {
  return (
    <div id="projects-mobile" className="flex flex-col w-full mb-5 bg-white rounded-box shadow-sm">
      <div className="flex flex-row h-10 card text-[#147efb] justify-between items-center px-3">
        <h2 className="text-black font-semibold">Projects</h2>
        <button className="text-sm animate-pulse">Swipe</button>
      </div>
      <div className="carousel carousel-center max-w-screen p-4 space-x-4 bg-white rounded-box">
        <ImgContainer img="https://github.com/josemourinho333/josemourinho333.github.io/blob/master/docs/tarot-me.png?raw=true" url="https://637d2361d1c07a00088c3ef1--scintillating-scone-d0792d.netlify.app/" name="Tarot Card Reader & Learn"/>
        <ImgContainer img="https://github.com/josemourinho333/josemourinho333.github.io/blob/master/docs/scraper-card.png?raw=true" url="https://github.com/josemourinho333/scraps" name="Web Scraper"/>
        <ImgContainer img="https://github.com/josemourinho333/josemourinho333.github.io/blob/section-featured/docs/shesa10-card.png?raw=true" url="https://github.com/josemourinho333/refactored-garbanzo" name="She's a 10 but ... generator"/>
        <ImgContainer img="https://github.com/josemourinho333/josemourinho333.github.io/blob/master/docs/keen-card.png?raw=true" url="https://github.com/josemourinho333/Keen-Dating-App" name="Keen Dating App"/>
        <ImgContainer img="https://github.com/josemourinho333/josemourinho333.github.io/blob/master/docs/streaming-site-clone-card.png?raw=true" url="https://github.com/josemourinho333/streaming-site-clone" name="Netflix Clone"/>
        <ImgContainer img="https://github.com/josemourinho333/josemourinho333.github.io/blob/master/docs/fakestore-card.png?raw=true" url="https://github.com/josemourinho333/fakestore-rails" name="eCommerce Store"/>
        <ImgContainer img="https://github.com/josemourinho333/josemourinho333.github.io/blob/master/docs/jungle-card.png?raw=true" url="https://github.com/josemourinho333/jungle-ruby-app" name="The Jungle"/>
        <ImgContainer img="https://github.com/josemourinho333/josemourinho333.github.io/blob/master/docs/scheduler-card.png?raw=true" url="https://beautiful-beignet-2c88ff.netlify.app/" name="Interview Scheduler"/>
        <ImgContainer img="https://github.com/josemourinho333/josemourinho333.github.io/blob/master/docs/diary-notes-card.png?raw=true" url="https://github.com/josemourinho333/diary-notes" name="Diary/Notes App"/>
      </div>
    </div>
  )
}

export default ProjectsPreview;