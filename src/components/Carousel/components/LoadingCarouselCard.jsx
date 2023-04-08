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
          <p className="text-gray-200 flex-grow-0 text-lg font-semibold">
            <div class="h-4 bg-secondary rounded"></div>
          </p>
          <p className="overflow-clip text-xs text-white h-[35px]">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-secondary rounded col-span-2"></div>
              <div class="h-2 bg-secondary rounded col-span-1"></div>
              <div class="h-2 bg-secondary rounded col-span-1"></div>
              <div class="h-2 bg-secondary rounded col-span-2"></div>
            </div>
          </p>
        </div>
        <button className="btn bg-secondary flex items-center gap-2 rounded-lg border-none">
          <a disabled href={demo ? demo : repo} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
            <div class="h-4 bg-secondary rounded"></div>
          </a>
        </button>
      </div>
    </div>
  )
}

export default LoadingCarouselCard;