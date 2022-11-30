import React from 'react';
import Latest from './Latest';
import ProjectHero from './ProjectHero';
import ProjectList from './ProjectList';
import HomeProjectList from './HomeProjectList';

const Projects = () => {
  return (
    <div className="bg-base-200">
      <ProjectHero />
      <ProjectList />
      <Latest projectPage={true}/>
      <HomeProjectList projectsPage={true}/>  
    </div>
  )
}

export default Projects;