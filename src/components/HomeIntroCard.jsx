import React from 'react';
import { ImStack } from 'react-icons/im';

const HomeIntroCard = ({skill}) => {
  const iconClass = "bg-[#181818] w-8 h-8";

  return (
    <div className="carousel-item">
    {/* <div className="card w-80 bg-[#181818] rounded-2xl">
      <div className="card-body bg-[#181818] rounded-2xl">
        <ImStack className={`${iconClass} text-success`}/>
        <h2 className="card-title bg-[#181818]">
          {skill} developer waiting to join a team
        </h2>
      </div>
    </div> */}
      <div className="mockup-code bg-[#181818] rounded-xl">
        <pre data-prefix="$" className="bg-inherit"><code className="bg-inherit">npm i daisyui</code></pre> 
        <pre data-prefix=">" className="text-warning bg-inherit"><code className="bg-inherit">installing...</code></pre> 
        <pre data-prefix=">" className="text-success bg-inherit"><code className="bg-inherit">Done!</code></pre>
    </div>
    </div>
  )
}

export default HomeIntroCard;