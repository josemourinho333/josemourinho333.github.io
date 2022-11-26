import React from 'react';

const WorkModal = () => {
  return (
    <div className="flex flex-col w-full mb-5 bg-white rounded-box shadow-sm">
      <div className="flex flex-col card items-start px-3">
        <h3 className="font-semibold text-black py-2">Experience</h3>
        <div className="flex w-full items-center py-3">
          <h3 className="text-base font-semibold text-gray-500 basis-1/5">2022 <br/><span className="italic text-xs">May - Current</span></h3>
          <div className="flex flex-col basis-4/5">
            <p className="font-bold text-sm">Web Developer/Administrator</p>
            <p className="font-semibold text-sm text-gray-500">The Happy Herd Animal Sanctuary</p>
          </div>
        </div>
        <div className="flex w-full items-center py-3">
          <h3 className="text-base font-semibold text-gray-500 basis-1/5">2019-2022</h3>
          <div className="flex flex-col basis-4/5">
            <p className="font-bold text-sm">Marketing Coordinator</p>
            <p className="font-semibold text-sm text-gray-500">Mike's Computer Shop</p>
          </div>
        </div>
        <div className="flex w-full items-center py-3">
          <h3 className="text-base font-semibold text-gray-500 basis-1/5">2017-2019</h3>
          <div className="flex flex-col basis-4/5">
            <p className="font-bold text-sm">Purchaser</p>
            <p className="font-semibold text-sm text-gray-500">Mike's Computer Shop</p>
          </div>
        </div>
        <div className="flex w-full items-center py-3">
          <h3 className="text-base font-semibold text-gray-500 basis-1/5">2016-2017</h3>
          <div className="flex flex-col basis-4/5">
            <p className="font-bold text-sm">CSR</p>
            <p className="font-semibold text-sm text-gray-500">Mike's Computer Shop</p>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default WorkModal;