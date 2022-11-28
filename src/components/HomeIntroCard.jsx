import React from 'react';

const HomeIntroCard = ({children}) => {
  return (
    <div className="carousel-item bg-neutral-content text-neutral rounded-3xl">
      <div className="card w-80 bg-inherit rounded-3xl">
        <div className="card-body bg-inherit rounded-2xl">
          {children}
        </div>
      </div>
    </div>
  )
}

export default HomeIntroCard;