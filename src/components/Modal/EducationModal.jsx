import React from 'react';

const EducationModal = () => {
  return (
    <div className="flex flex-col w-full mb-5 bg-white rounded-box shadow-sm">
      <div className="flex flex-col card items-start px-3">
        <h3 className="font-semibold text-black py-2">Education</h3>
        <div className="flex w-full items-center py-3">
          <h3 className="text-base font-semibold text-gray-500 basis-1/5">2022</h3>
          <div className="flex flex-col basis-4/5">
            <p className="font-bold text-sm">Full Stack Web Development</p>
            <p className="font-semibold text-sm text-gray-500">Lighthouse Labs</p>
          </div>
        </div>
        <div className="flex w-full items-center py-3">
          <h3 className="text-base font-semibold text-gray-500 basis-1/5">2014-2016</h3>
          <div className="flex flex-col basis-4/5">
            <p className="font-bold text-sm">Business Administration</p>
            <p className="font-semibold text-sm text-gray-500">University of Fraser Valley</p>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default EducationModal;