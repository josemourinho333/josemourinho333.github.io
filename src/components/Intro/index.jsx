import React from 'react';
import moment from 'moment';
import { AiOutlineCompass } from 'react-icons/ai';

const Intro = ({homepage}) => {
  return (
    <section className={`intro-container h-[80vh] ${homepage ? "h-[85vh]" : "lg:hidden"} flex flex-col justify-end !my-0 overflow-y-auto`}>
      <div className="overflow-auto">
        <div className="text-gray-500 self-center text-xs text-center"><span className="font-semibold">Today </span>{moment().format('LT')}</div>
        <div className="chat chat-start w-4/5">
          <div className="chat-bubble bg-gray-200 text-black my-1 max-w-fit">I transitioned from digital marketing because I love web development!</div>
          <div className="chat-bubble bg-gray-200 text-black my-1 max-w-fit">I love bringing ideas to life, passionate about learning new concepts and work well in a highly collaborative environment 🥳 </div>
          <div className="chat-bubble bg-gray-200 text-black my-1 max-w-fit">Here's my linkedin and github</div>
          <div className="chat-bubble bg-gray-200 my-1 max-w-fit text-blue-600"><a href="https://www.linkedin.com/in/philyoo333/" target="_blank" rel='noreferrer' className="flex items-center">linkedin.com <AiOutlineCompass className="w-5 h-5 ml-2"/></a></div>
          <div className="chat-bubble bg-gray-200 my-1 max-w-fit text-blue-600"><a href="https://github.com/josemourinho333" target="_blank" rel='noreferrer' className="flex items-center">github.com/josemour... <AiOutlineCompass className="w-5 h-5 ml-2"/></a></div>
          <div className="chat-bubble bg-gray-200 text-black my-1 max-w-fit">
            You can take a look at my resume here: <a href="https://resume.creddle.io/resume/6k8iwdwj8sr" target="_blank" rel='noreferrer' className="text-blue-600 flex items-center">https://resume.creddle.io/re...<AiOutlineCompass className="w-5 h-5 ml-2"/></a>
          </div>
          <div className="chat-bubble bg-gray-200 text-black my-1 max-w-fit">Let me know if you want to sit down for a chat!</div>
        </div>
      </div>

    </section>
  )
}

export default Intro;