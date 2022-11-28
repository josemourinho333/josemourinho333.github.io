import React from 'react';
import HomeProject from './HomeProject';
import { useProjectData } from '../ProjectContext';

const HomeProjectList = () => {
  const data = useProjectData();
  const projectList = data.slice(1, 5);
 
  const projects = projectList.map((project, index) => {
    const evens = index % 2 === 0;
    if (!evens) {
      return (
        <HomeProject
          key={index}
          bg="bg-neutral"
          img={project.images[0] ? project.images[0] : ''}
          name={project.name}
          oneLiner={project.oneLiner}
          repo={project.repo}
          demo={project.demo ? project.demo : ''}
        />
      )
    } else {
      return (
        <HomeProject
          key={index}
          bg="bg-white"
          img={project.images[0] ? project.images[0] : ''}
          name={project.name}
          oneLiner={project.oneLiner}
          repo={project.repo}
          demo={project.demo ? project.demo : ''}
        />
      )
    }  
  });
  
  return (
    <div className="bg-[#fbfbfd] flex flex-col text-neutral gap-y-2 p-2">
      <div className="h-[90vh] md:h-[60vh] lg:h-[70vh] bg-inherit flex flex-col md:flex-row gap-2">
        {projects.slice(0, 2)}
      </div>
      <div className="h-[90vh] md:h-[60vh] lg:h-[70vh] bg-inherit flex flex-col md:flex-row gap-2">
        {projects.slice(2, 4).reverse()}
      </div>
    </div>
  )
}

export default HomeProjectList;