import React, {useState} from 'react';

const Featured = () => {
  // set this to true if latest is still in progress
  // const [inProgress, setInProgress] = useState(false);

  // const inProgressBadge = inProgress
  //   ? <span className='featured-status'> - In progress </span>
  //   : <span className='featured-status'> - Finished </span>

  return (
    <section className="featured-container">
      <h5 className="featured-header">
        Latest
        {/* {inProgressBadge} */}
      </h5>
      <article className="featured-item">
        <img src="https://github.com/josemourinho333/josemourinho333.github.io/blob/section-featured/docs/shesa10-card.png?raw=true" alt="featured-card" className="featured-img" />
      </article>
    </section>
  )
}

export default Featured;