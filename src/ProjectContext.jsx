import React, { useContext, useState } from 'react';
import data from './data';

const ProjectContext = React.createContext();

const useProjectData = () => {
  return useContext(ProjectContext);
};

export { useProjectData };

const ProjectProvider = ({children}) => {
  const [projectData, setProjectData] = useState([...data]);

  return (
    <ProjectContext.Provider value={projectData}>
      {children}
    </ProjectContext.Provider>
  )
}

export { ProjectProvider };