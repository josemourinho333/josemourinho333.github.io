import React from 'react';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiRuby, SiJquery, SiSass, SiBootstrap, SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiRubyonrails, SiCypress, SiMocha, SiChai, SiJest, SiStorybook, SiEslint, SiGit, SiGithub, SiNpm, SiNetlify, SiHeroku, SiAdobeillustrator, SiAdobeaftereffects, SiAdobephotoshop, SiAdobexd, SiFigma, SiGimp, SiCanva, SiGoogleanalytics, SiGoogleads, SiDocker  } from 'react-icons/si';
import { TbBrandMeta } from 'react-icons/tb';

const Skills = () => {
  return (
    <section className="!hidden lg:!flex lg:!flex-col skills-container" id="skills">
      <h5 className="skills-header">Skills</h5>
      <article className="skills-content">
        <div className="skill-header">Frontend</div>
        <div className="skill-list flex">
          <SiReact />
          <SiRuby />
          <SiJavascript />
          {/* <SiTypescript /> */}
          <SiJquery />
          <SiSass />
          <SiTailwindcss />
          <SiBootstrap />
          <SiCss3 />
          <SiHtml5 />
        </div>
        <div className="skill-header">Backend</div>
        <div className="skill-list flex">
          <SiNodedotjs />
          <SiExpress />
          <SiRubyonrails />
          <SiPostgresql />
          <SiMysql />
        </div>

        <div className="skill-header">Testing</div>
        <div className="skill-list flex">
          <SiCypress />
          <SiJest />
          <SiMocha />
          <SiChai />
          <SiStorybook />
          <SiEslint />
        </div>

        <div className="skill-header">Workflow</div>
        <div className="skill-list flex">
          <SiGithub />
          <SiGit />
          <SiNpm />
          <SiNetlify />
          <SiHeroku />
          <SiDocker />
        </div>

        <div className="skill-header">Design | Marketing</div>
        <div className="skill-list flex">
          <SiAdobexd />
          <SiFigma />
          <SiAdobephotoshop />
          <SiAdobeillustrator />
          <SiGimp />
          <SiCanva />
          <SiAdobeaftereffects />
          <SiGoogleanalytics />
          <SiGoogleads />
          <TbBrandMeta />
        </div>

      </article>
    </section>
  )
}

export default Skills;