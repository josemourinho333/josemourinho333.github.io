import React from 'react';

const Work = () => {
  return (
    <section className="work-container">
      <h5 className="work-header">Work Experience</h5>
      <article className="work-content">
        <div className="timeline">
          <div className="year">2022</div>
          <div className="month">May - Current</div>
        </div>
        <div className="info">
          <div className="info-title">Volunteer Web Administrator</div>
          <div className="info-content">The Happy Herd Animal Sanctuary</div>
        </div>
        <div className="timeline">
          <div className="year">2019 - 2022</div>
        </div>
        <div className="info">
          <div className="info-title">Marketing Coordinator</div>
          <div className="info-content">Mike's Computer Shop</div>
        </div>
        <div className="timeline">
          <div className="year">2017 - 2019</div>
        </div>
        <div className="info">
          <div className="info-title">Purchaser</div>
          <div className="info-content">Mike's Computer Shop</div>
        </div>
        <div className="timeline">
          <div className="year">2016 - 2017</div>
        </div>
        <div className="info">
          <div className="info-title">Customer Service Rep</div>
          <div className="info-content">Mike's Computer Shop</div>
        </div>
      </article>
    </section>
  )
}

export default Work;