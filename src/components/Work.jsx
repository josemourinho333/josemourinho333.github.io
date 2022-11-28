import React from 'react';
import WorkItem from './WorkItem';

const Work = ({activeTab}) => {

  if (activeTab === "Education" ) {
    return (
      <section className="flex-col">
        <WorkItem year="2022" months="" position="Full Stack Web Development" company="Lighthouse Labs"/>
        <WorkItem year="2014 - 2016" months="" position="Business Adminitration" company="University of the Fraser Valley"/>
      </section>
    )
  }

  if (activeTab === "Experience") {
    return (
      <section className="flex-col">
        <WorkItem year="2022" months="May - Current" position="Web Developer/Admin (contract)" company="The Happy Herd Animal Sanctuary"/>
        <WorkItem year="2019 - 2022" months="" position="Marketing Coordinator" company="Mike's Computer Shop"/>
        <WorkItem year="2017 - 2019" months="" position="Purhcaser" company="Mike's Computer Shop"/>
        <WorkItem year="2016 - 2017" months="" position="CSR" company="Mike's Computer Shop"/>
      </section>
    )
  }
  
}

export default Work;