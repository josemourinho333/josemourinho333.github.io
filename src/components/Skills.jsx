import React from 'react';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiRuby, SiJquery, SiSass, SiBootstrap, SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiRubyonrails, SiCypress, SiMocha, SiChai, SiJest, SiStorybook, SiEslint, SiGit, SiGithub, SiNpm, SiNetlify, SiHeroku, SiAdobeillustrator, SiAdobeaftereffects, SiAdobephotoshop, SiAdobexd, SiFigma, SiGimp, SiCanva, SiGoogleanalytics, SiGoogleads, SiTypescript, SiGo, SiMongodb, SiDocker  } from 'react-icons/si';
import { TbBrandMeta } from 'react-icons/tb';

const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <h5 className="skills-header">Skills</h5>
      <article className="skills-content">
        <div className="skill-header">Frontend</div>
        <div className="skill-list">
          <SiReact />
          <SiRuby />
          <SiJavascript />
          <SiTypescript />
          <SiJquery />
          <SiSass />
          <SiTailwindcss />
          <SiBootstrap />
          <SiCss3 />
          <SiHtml5 />
        </div>
        <div className="skill-header">Backend</div>
        <div className="skill-list">
          <SiNodedotjs />
          <SiExpress />
          <SiRubyonrails />
          <SiPostgresql />
          <SiMysql />
          <SiMongodb />
          {/* <SiGo /> */}
        </div>

        <div className="skill-header">Testing</div>
        <div className="skill-list">
          <SiCypress />
          <SiJest />
          <SiMocha />
          <SiChai />
          <SiStorybook />
          <SiEslint />
        </div>

        <div className="skill-header">Workflow</div>
        <div className="skill-list">
          <SiGithub />
          <SiGit />
          <SiNpm />
          <SiNetlify />
          <SiHeroku />
          <SiDocker />
        </div>

        <div className="skill-header">Design | Marketing</div>
        <div className="skill-list">
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