import React from 'react';

const Education = () => {
  return (
    <section className="!hidden lg:!flex lg:!flex-col education-container" id="education">
      <h5 className="education-header">
        Education
      </h5>
      <article className="education-content">
        <div className="timeline">2022</div>
        <div className="info">
          <div className="info-title">Full Stack Web Development</div>
          <div className="info-content">Lighthouse Labs</div>
        </div>
        <div className="timeline">2014 - 2016</div>
        <div className="info">
          <div className="info-title">Business Administration</div>
          <div className="info-content">University of the Fraser Valley</div>
        </div>
      </article>
    </section>
  )
}

export default Education;