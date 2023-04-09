import React from "react";
import CarouselCard from "./components/CarouselCard.jsx";
import LoadingCarouselCard from "./components/LoadingCarouselCard.jsx";
import Error from "./components/Error.jsx";

const Carousel = ({ projects, loading, error }) => {

  const listProjects = projects?.map((project, index) => {
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

  if (loading) {
    return (
      <div className="w-full flex flex-col md:flex-row gap-4 justify-between">
        {/* definitely a lazy way to go about this */}
        <LoadingCarouselCard />
        <LoadingCarouselCard />
        <LoadingCarouselCard />
        <LoadingCarouselCard />
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full flex flex-col md:flex-row gap-4 justify-center items-center">
        <Error />
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col md:flex-row gap-4 justify-between">
      {listProjects}
    </div>
  )
};

export default Carousel;
