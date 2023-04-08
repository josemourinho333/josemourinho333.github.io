import React from "react";
import CarouselCard from "./components/CarouselCard.jsx";

const Carousel = ({ projects }) => {

  const listProjects = projects.map((project, index) => {
    return (
      <CarouselCard
        key={index}
        name={project.data.name}
        desc={project.data.description}
        repo={project.data.repo}
        demo={project.data.demo}
      />
    )
  });

  return (
    <div className="h-1/2 w-full flex gap-4 justify-between">
      {listProjects}
    </div>
  )
};

export default Carousel;
