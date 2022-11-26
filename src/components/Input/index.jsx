import React from 'react';
import { HiArrowCircleUp } from 'react-icons/hi';

const UserInput = ({homepage}) => {
  return (
    <div className={`sticky bottom-0 flex flex-row ${homepage ? "" : "lg:hidden"} h-[5vh] z-50 border border-gray-300 items-center rounded-3xl`}>
      <input type="text" placeholder="Send me a msg, be sure to include your email" className="input input-bordered input-sm w-full max-w-full rounded-2xl pl-5 pr-3 border-none focus:outline-none" />
      <HiArrowCircleUp className="w-10 h-10 text-[#147efb]"/>
    </div>
  )
}

export default UserInput;