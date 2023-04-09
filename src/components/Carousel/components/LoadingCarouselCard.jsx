import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';

const LoadingCarouselCard = ({ name, desc, repo, demo }) => {
  return (
    <div
      className="bg-black basis-[20%] rounded-lg ease-in-out duration-300 flex flex-col"
    >
      <div className="flex-grow flex flex-col pt-4 gap-2 h-full justify-between animate-pulse">
        <div className="px-4 flex flex-col gap-2 h-full justify-evenly">
          <AiOutlineGithub className="w-8 h-8 text-secondary rounded-lg p-1 flex-grow-0 bg-secondary"
          />
          <div className="text-gray-200 flex-grow-0 text-lg font-semibold">
            <div className="h-4 bg-secondary rounded"></div>
          </div>
          <div className="overflow-clip text-xs text-white h-[35px]">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-secondary rounded col-span-2"></div>
              <div className="h-2 bg-secondary rounded col-span-1"></div>
              <div className="h-2 bg-secondary rounded col-span-1"></div>
              <div className="h-2 bg-secondary rounded col-span-2"></div>
            </div>
          </div>
        </div>
        <button className="btn bg-secondary flex items-center gap-2 rounded-lg border-none">
          <a disabled href={demo ? demo : repo} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
            <div className="h-4 bg-secondary rounded"></div>
          </a>
        </button>
      </div>
    </div>
  )
}

export default LoadingCarouselCard;