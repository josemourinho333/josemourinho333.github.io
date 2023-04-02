import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';

const Nav = () => {

  return (
    <div className="navbar text-neutral py-4 md:py-6 lg:py-6 xl:py-6 xxl:py-6 px-6 md:px-40 lg:px-40 xl:px-40 xxl:px-40">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl p-0  border-0">Phil Yoo</Link>
      </div>
      <div className="flex-none gap-2">
        <a href="mailto: yoo.phil92@gmail.com" target="_blank" rel="noreferrer" className="btn btn-xs rounded-full md:btn-sm flex items-center gap-2 shadow-md">Get in touch <HiOutlineMail className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}

export default Nav;