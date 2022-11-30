import React from 'react';
import { useProjectData } from '../ProjectContext';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
  const projects = useProjectData();

  const renderProjectItems = projects.map((project, index) => {

    if (index === 0) {
      return (
        <ProjectItem
          key={index + 999999}
          name={project.name}
          oneLiner={project.oneLiner}
          desc={project.description}
          repo={project.repo}
          demo={project.demo ? project.demo : null}
          img={project.images[0] ? project.images[0] : null}
          bg="bg-gradient-to-br from-gray-700 to-black"
        />
      ) 
    }

    if (index === 2) {
      return (
        <ProjectItem
          key={index + 999999}
          name={project.name}
          oneLiner={project.oneLiner}
          desc={project.description}
          repo={project.repo}
          demo={project.demo ? project.demo : null}
          img={project.images[0] ? project.images[0] : null}
          bg="bg-gradient-to-t from-purple-500 to-info"
        />
      )
    }

    if (index === 1) {
      return (
        <ProjectItem
          key={index + 999999}
          name={project.name}
          oneLiner={project.oneLiner}
          desc={project.description}
          repo={project.repo}
          demo={project.demo ? project.demo : null}
          img={project.images[0] ? project.images[0] : null}
          bg="bg-base-100"
        />
      )
    }

    if (index === 8) {
      return (
        <ProjectItem
          key={index + 999999}
          name={project.name}
          oneLiner={project.oneLiner}
          desc={project.description}
          repo={project.repo}
          demo={project.demo ? project.demo : null}
          img={project.images[0] ? project.images[0] : null}
          bg="bg-gradient-to-b from-blue-900 to-sky-500"
        />
      )
    }

    if (index % 2 === 0) {
      return (
        <ProjectItem
          key={index + 999999}
          name={project.name}
          oneLiner={project.oneLiner}
          desc={project.description}
          repo={project.repo}
          demo={project.demo ? project.demo : null}
          img={project.images[0] ? project.images[0] : null}
          bg="bg-base-100"
        />
      )
    };

    if (index % 2 !== 0) {
      return (
        <ProjectItem
          key={index + 999999}
          name={project.name}
          oneLiner={project.oneLiner}
          desc={project.description}
          repo={project.repo}
          demo={project.demo ? project.demo : null}
          img={project.images[0] ? project.images[0] : null}
          bg="bg-neutral"
        />
      )
    }

  })

  return (
    <div className="carousel max-w-screen space-x-4 rounded-box bg-inherit p-10">
      <ProjectItem base={true}/>
      {renderProjectItems}
    </div>
  )
}

export default ProjectList;