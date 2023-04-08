import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';

const Nav = () => {

  return (
    <div className="navbar text-neutral p-0 justify-between">
      <Link to="/" className="btn btn-ghost normal-case text-xl md:text-3xl p-0 border-0 flex gap-2 font-normal"><span className="font-black">Phil</span> Yoo</Link>
      <a href="mailto: yoo.phil92@gmail.com" target="_blank" rel="noreferrer" className="btn btn-xs rounded-full md:btn-sm flex items-center gap-2 shadow-md">Get in touch <HiOutlineMail className="w-5 h-5" />
      </a>
    </div>
  )
}

export default Nav;