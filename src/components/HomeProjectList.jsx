import React from 'react';
import HomeProject from './HomeProject';
import { useProjectData } from '../ProjectContext';
import { groupByN } from '../helpers/groupByN';

const HomeProjectList = ({projectsPage}) => {
  const data = useProjectData();

  const projectsArr = data.map((project, index) => {
    const evens = index % 2 === 0;
    if (!evens) {
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
    } else {
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
    };
  });

  const groupedJsx = groupByN(2, projectsArr);

  const renderList = groupedJsx?.map((jsx, index) => {
      return (
        <div key={index + 696969} className="h-[90vh] md:h-[60vh] lg:h-[70vh] bg-inherit flex flex-col md:flex-row gap-3">
          {
            index % 2 === 0
              ? jsx.reverse()
              : jsx
          }
        </div>
      )
  });
  
  return (
    <div className="bg-zinc-100 flex flex-col text-neutral gap-y-3 p-3">
      {
        !projectsPage
          ? renderList.slice(0, 2)
          : renderList
      }
    </div>
  )
}

export default HomeProjectList;