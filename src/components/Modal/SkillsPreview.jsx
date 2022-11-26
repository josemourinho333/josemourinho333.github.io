import React from 'react';
import ImgContainer from './ImgContainer';

const SkillsPreview = () => {
  return (
    <div id="stack" className="flex flex-col w-full mb-5 bg-white rounded-box shadow-sm">
      <div className="flex flex-row h-10 card text-[#147efb] justify-between items-center px-3">
        <h2 className="text-black font-semibold">Skills</h2>
        <button className="text-sm animate-pulse">Swipe</button>
      </div>
      <div className="flex flex-col px-3 my-3">
        <h3 className="font-normal text-sm">Frontend</h3>
        <div className="carousel carousel-center max-w-screen p-2 space-x-4 bg-white rounded-box">
          <ImgContainer name="ReactJS"/>
          <ImgContainer name="Ruby"/>
          <ImgContainer name="Javascript"/>
          <ImgContainer name="jQuery"/>
          <ImgContainer name="SASS"/>
          <ImgContainer name="Tailwind"/>
          <ImgContainer name="Bootstrap"/>
          <ImgContainer name="CSS3"/>
          <ImgContainer name="HTML5"/>
        </div>
      </div>
      <div className="flex flex-col px-3 my-3">
        <h3 className="font-normal text-sm">Backend</h3>
        <div className="carousel carousel-center max-w-screen p-2 space-x-4 bg-white rounded-box">
          <ImgContainer name="NodeJS"/>
          <ImgContainer name="Express"/>
          <ImgContainer name="Rails"/>
          <ImgContainer name="PostgreSQL"/>
          <ImgContainer name="MySQL"/>
        </div>
      </div>

      <div className="flex flex-col px-3 my-3">
        <h3 className="font-normal text-sm">Testing</h3>
        <div className="carousel carousel-center max-w-screen p-2 space-x-4 bg-white rounded-box">
          <ImgContainer name="Cypress"/>
          <ImgContainer name="Jest"/>
          <ImgContainer name="Mocha"/>
          <ImgContainer name="Chai"/>
          <ImgContainer name="Storybook"/>
          <ImgContainer name="Eslint"/>
        </div>
      </div>

      <div className="flex flex-col px-3 my-3">
        <h3 className="font-normal text-sm">Testing</h3>
        <div className="carousel carousel-center max-w-screen p-2 space-x-4 bg-white rounded-box">
          <ImgContainer name="Github"/>
          <ImgContainer name="Git"/>
          <ImgContainer name="NPM"/>
          <ImgContainer name="Netlify"/>
          <ImgContainer name="Heroku"/>
          <ImgContainer name="Docker"/>
        </div>
      </div>

      <div className="flex flex-col px-3 my-3">
        <h3 className="font-normal text-sm">Design | Marketing</h3>
        <div className="carousel carousel-center max-w-screen p-2 space-x-4 bg-white rounded-box">
          <ImgContainer name="XD"/>
          <ImgContainer name="Figma"/>
          <ImgContainer name="Photoshop"/>
          <ImgContainer name="Illustrator"/>
          <ImgContainer name="Gimp"/>
          <ImgContainer name="Canva"/>
          <ImgContainer name="After Effects"/>
          <ImgContainer name="Analytics"/>
          <ImgContainer name="Ads"/>
          <ImgContainer name="Meta"/>
        </div>
      </div>
     
    </div>
  )
}

export default SkillsPreview;