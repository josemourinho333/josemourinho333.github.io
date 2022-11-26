import React from 'react';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { MdEmail, MdCall } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';

const MainCategory = ({cat}) => {
  return (
    <>
    <button className="basis-1/4 my-5 flex-shrink rounded-md normal-case btn bg-white text-[#147efb] border-gray-50 p-1 shadow-sm hover:bg-white hover:border-none hover:border-opacity-0">
      {
        cat === 'mail'
          ? <a href="mailto:yoo.phil92@gmail.com">
              <div className="flex flex-col items-center">
                <MdEmail className="w-5 h-5"/>
                <p className="font-light text-sm mt-0.25">{cat}</p>
              </div>
            </a>
            
          : cat === 'call'
          ? <a href="tel:+16049964504">
              <div className="flex flex-col items-center">
                <MdCall className="w-5 h-5"/>
                <p className="font-light text-sm mt-0.25">{cat}</p>
              </div>
            </a>
          : cat === 'github'
          ? <a href="https://github.com/josemourinho333" target="_blank" rel="noreferrer">
              <div className="flex flex-col items-center">
                <SiGithub className="w-5 h-5"/>
                <p className="font-light text-sm mt-0.25">{cat}</p>
              </div>
            </a>
          : cat === 'resume'
          ? <a href="https://resume.creddle.io/resume/6k8iwdwj8sr" target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col items-center">
                <BsFillFileEarmarkTextFill className="w-5 h-5"/>
                <p className="font-light text-sm mt-0.25">{cat}</p>
              </div>
            </a>
          : ''
      }
    </button>
    </>
  )
}

export default MainCategory;