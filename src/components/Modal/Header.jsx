import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <div className="avatar placeholder">
        <div className="bg-gradient-to-t from-gray-500 to-gray-300 text-neutral-content rounded-full w-24">
          <span className="text-3xl font-bold">P</span>
        </div>
      </div> 
      <h1 className="font-extrabold text-2xl my-2">Phil Yoo</h1>
    </div>
  )
}

export default Header;