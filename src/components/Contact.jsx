import React from 'react';
import Message from "./Message";
import { MdEmail, MdPhoneIphone } from 'react-icons/md';

const Contact = () => { 
  return (
  <div className="bg-neutral-content flex flex-col justify-center p-2 gap-5 md:py-20 md:px-5 lg:flex-row">
    <div className="basis-1/3 flex flex-col text-neutral font-black text-6xl justify-center my-10 lg:my-0 items-center lg:items-end">
      <h2>Chat</h2>
      <h3 className="text-gray-500 inline-block">with me</h3>
      <p className="font-semibold text-3xl mt-3">Send me a message.</p>
    </div>
    <Message />
    <div className="basis-1/3 flex flex-col text-neutral font-bold text-xl md:text-2xl justify-center my-10 lg:my-0 px-10 lg:px-0 items-center lg:items-start">
    <div className="avatar items-center my-1">
      <div className="w-5 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
          <MdEmail className="w-5 h-5"/>
        </div>
        <a href="mailto:yoo.phil92@gmail.com" className="pl-2">yoo.phil92@gmail.com</a>
      </div>
      <div className="avatar items-center my-1">
        <div className="w-5 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
          <MdPhoneIphone className="w-5 h-5"/>
        </div>
        <a href="tel:+16049964504" className="pl-2">604-996-4504</a>
      </div>
    </div>
  </div>
  )
};

export default Contact;