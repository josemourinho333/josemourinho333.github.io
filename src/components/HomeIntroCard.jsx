import React from 'react';

const HomeIntroCard = ({children, icons}) => {
  return (
    <div className={`carousel-item bg-neutral-content text-neutral ${!icons ?  "rounded-3xl" : ""}`}>
      {children}
    </div>
  )
}

export default HomeIntroCard;