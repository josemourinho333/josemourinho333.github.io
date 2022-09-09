import React from 'react';

const Featured = () => {
  return (
    <section className="featured-container">
      <h5 className="featured-header">
        Latest
      </h5>
      <article className="featured-item">
        <div className="featured-content">
          <h5 className="content-title">'She's a 10 but ...' Generator</h5>
          <p className="content-stack">Ruby on Rails, ReactJS, REST</p>
          <p className="content-desc">Full stack "she's a 10 but ..." random generator. <br/>Is it trendy? Yes. Is it useless? Completely. <br/>Is it hilarious though? Maybe.</p>
          <div className="content-links">
            <button className="content-site"><a href="#" target="_blank" rel="noopener noreferrer">Website</a></button>
            <button className="content-github"><a href="#" target="_blank" rel="noopener noreferrer">Github</a></button>
          </div>
        </div>
        <img src="https://github.com/josemourinho333/josemourinho333.github.io/blob/section-featured/docs/shesa10-card.png?raw=true" alt="featured-card" className="featured-img" />
      </article>
    </section>
  )
}

export default Featured;