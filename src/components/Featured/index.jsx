import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';


const Featured = (props) => {
  return (
    <section className="featured-container" id="projects">
      {/* <h5 className="featured-header">
        {props.header ? 'Projects' 
          : props.current
          ? 'Currently working on'
          : ''
        }
      </h5> */}
      <article className="featured-item">
        <div className="featured-content">
          <p className="content-stack">{props.stack}</p>
          <h5 className="content-title">{props.name}</h5>
          <p className="content-desc">
            {props.desc}
          </p>
          <div className="content-links">
            <button className="content-github"><a href={props.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a></button>
            {
              !props.website
                ? <></>
                : <button className="content-site"><a href={props.website} target="_blank" rel="noopener noreferrer"><FaLink /></a></button>
            }
          </div>
        </div>
        <img src={props.img} alt="featured-card" className="featured-img" />
      </article>
    </section>
  )
}

export default Featured;