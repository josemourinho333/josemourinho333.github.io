import React from 'react';
import Socials from './Socials';

const Footer = () => {
  return (
    <>
    {/* <footer className="footer pt-3 px-3 gap-y-0 bg-white md:p-10 md:gap-y-[2.5rem] text-base-content justify-items-center">
      <div className="w-full">
        <div className="collapse md:justify-items-end max-md:collapse-plus md:collapse-open border-b border-base-300 bg-base-100 rounded-box w-full md:border-none">
          <input type="checkbox" /> 
          <div className="collapse-title text-xl font-medium md:text-right md:pr-4">
            Cool
          </div>
          <div className="collapse-content flex flex-col md:text-right"> 
            <a className="link link-hover">Using it</a> 
            <a className="link link-hover">For</a> 
            <a className="link link-hover">Other</a> 
            <a className="link link-hover">Projects</a>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="collapse max-md:collapse-plus md:collapse-open border-b border-base-300 bg-base-100 rounded-box w-full md:border-none">
          <input type="checkbox" /> 
          <div className="collapse-title text-xl font-medium">
            Footer
          </div>
          <div className="collapse-content flex flex-col"> 
            <a className="link link-hover">Open</a> 
            <a className="link link-hover">On Larger Viewpots</a> 
            <a className="link link-hover">Collapsible</a> 
            <a className="link link-hover">On Mobile</a>
          </div>
        </div>
      </div>
    </footer> */}
    <footer className="footer px-10 py-4 border-t bg-white text-base-content border-base-300 max-md:justify-items-center gap-y-2 md:gap-y-[2.5rem]">
      <div className="avatar placeholder flex flex-row items-center">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-12 ring ring-[#2997ff] ring-offset-2">
          <span className="text-3xl">P</span>
        </div>
        <div className="flex flex-col !items-start pl-3">
          <p className="text-gray-500 text-xs">Created By</p>
          <p className="font-black text-neutral text-xl">Phil Yoo</p>
        </div>
      </div>
      <div className="md:place-self-center md:justify-self-end">
        <div className="grid grid-flow-col gap-4">
          <Socials />
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;