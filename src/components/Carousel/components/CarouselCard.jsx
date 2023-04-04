import React from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { AiOutlineGithub } from 'react-icons/ai';

const CarouselCard = () => {

  return (
    <div
      id="carousel-card"
      className="group rounded-lg ease-in-out duration-300 flex flex-col"
    >
      <div className="flex-grow flex flex-col p-4 gap-2 h-full">
        <AiOutlineGithub className="w-8 h-8 text-primary rounded-lg p-1 flex-grow-0" style={{
          "backgroundSize": "100% 100%",
          "backgroundPosition": "0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px",
          "backgroundImage": "radial-gradient(18% 28% at 24% 50%, #edf4f6 7%, #073AFF00 100%),radial-gradient(18% 28% at 18% 71%, #edf4f6 6%, #073AFF00 100%),radial-gradient(70% 53% at 36% 76%, #f6cef8 0%, #073AFF00 100%),radial-gradient(42% 53% at 15% 94%, #edf4f6 7%, #073AFF00 100%),radial-gradient(42% 53% at 34% 72%, #edf4f6 7%, #073AFF00 100%),radial-gradient(18% 28% at 35% 87%, #edf4f6 7%, #073AFF00 100%),radial-gradient(31% 43% at 7% 98%, #edf4f6 24%, #073AFF00 100%),radial-gradient(21% 37% at 72% 23%, #edf4f6 24%, #073AFF00 100%),radial-gradient(35% 56% at 91% 74%, #AAB0FFFF 0%, #073AFF00 100%),radial-gradient(74% 86% at 67% 38%, #edf4f6 24%, #073AFF00 100%),linear-gradient(188deg, #f0f2f7 1%, #4C00FCFF 100%)"
        }} />
        <p className="text-gray-200 flex-grow-0 text-xl font-semibold group-hover:text-primary">
          Title
        </p>
        <p className="overflow-clip text-sm h-[60px] group-hover:text-primary">
          tashdlyh asdlih lasihfilashd halsdfh laisdhfli ahsldi hlaihflahsdf asdhfilhasdhfaihsdfiahsd adslifhalsidhflashd  sahdflahsdlifhl ihl dhslf ifhl ihl dhslfifhl ihl dhslf
        </p>
      </div>
      <button className="btn btn-primary flex items-center gap-2 rounded-lg flex-grow-0 group-hover:bg-primary-content/50 group-hover:text-primary group-hover:border-none">
        Peep Repo <HiOutlineExternalLink className="w-5 h-5" />
      </button>
    </div>
  )
}

export default CarouselCard;