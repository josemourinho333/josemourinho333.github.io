import React from 'react';
import Socials from "./Socials.jsx";

const Current = () => {
  return (
    <section className="current-container">
      <h5 className="current-position">Currently learning <b>TypeScript, Go </b> and <b>MongoDB</b> </h5>
      <h5 className="current-position">Volunteer web admin <a href="https://happyherd.org/">@thehappyherd</a></h5>
      <h5 className="current-location">Located in <span>Fraser Valley, BC</span> 🇨🇦</h5>
      <Socials />
    </section>
  )
}

export default Current;