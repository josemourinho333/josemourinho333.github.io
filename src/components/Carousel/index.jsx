import React from "react";
import CarouselCard from "./components/CarouselCard.jsx";

const Carousel = () => {

  return (
    <div className="h-1/2 w-full flex gap-4 justify-between">
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
    </div>
  )
};

export default Carousel;
