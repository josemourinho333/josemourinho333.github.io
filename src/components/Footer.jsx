import React from 'react';
import Socials from './Socials';

const Footer = () => {
  return (
    <footer className="footer py-2 px-6 md:px-40 lg:px-40 xl:px-40 xxl:px-40 border-t bg-white text-base-content items-center border-base-300 max-md:justify-items-center gap-y-2 md:gap-y-[2.5rem]">
      <div className="flex flex-col !items-start">
        <p className="text-gray-500 text-xs">Created with <i>React, Tailwind, DaisyUI, FaunaDB</i></p>
      </div>
      <div className="md:place-self-center md:justify-self-end">
        <div className="grid grid-flow-col gap-2">
          <Socials />
        </div>
      </div>
    </footer>
  )
}

export default Footer;