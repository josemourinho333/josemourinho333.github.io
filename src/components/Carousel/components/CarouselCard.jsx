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
        <AiOutlineGithub className="w-8 h-8 text-primary rounded-lg p-1 flex-grow-0"
          style={{
            "backgroundSize": "100% 100%",
            "backgroundPosition": "0px 0px,0px 0px,0px 0px,0px 0px,0px 0px",
            "backgroundImage": "radial-gradient(49% 81% at 45% 47%, #dcfce7 0%, #9EFFF0FF 100%),radial-gradient(113% 91% at 17% -2%, #cffafe 1%, #FF000000 99%),radial-gradient(142% 91% at 83% 7%, #FF000000 1%, #5eead4 99%),radial-gradient(142% 91% at -6% 74%, #cffafe 1%, #FF000000 99%),radial-gradient(142% 91% at 111% 84%, #cffafe 1%, #5eead4 100%)"
          }} />
        <p className="text-gray-200 flex-grow-0 text-xl font-semibold group-hover:text-primary">
          Title
        </p>
        <p className="overflow-clip text-sm text-white h-[45px] group-hover:text-primary">
          tashdlyh asdlih lasihfilashd halsdfh laisdhfli ahsldi hlaihflahsdf asdhfilhasdhfaihsdfiahsd adslifhalsidhflashd  sahdflahsdlifhl ihl dhslf ifhl ihl dhslfifhl ihl dhslf
        </p>
      </div>
      <button className="btn bg-secondary flex items-center gap-2 rounded-lg border-none group-hover:bg-primary-content/50 group-hover:text-primary group-hover:border-none">
        Peep Repo <HiOutlineExternalLink className="w-5 h-5" />
      </button>
    </div>
  )
}

export default CarouselCard;